const CART_KEY = "arkady_cart";
const PENDING_CART_ITEM_KEY = "arkady_pending_cart_item";

function cartSafeParse(value, fallback){
  try{
    const parsed = JSON.parse(value);
    return parsed ?? fallback;
  }catch(error){
    return fallback;
  }
}

function slugFromName(name){
  return String(name || "item")
    .toLowerCase()
    .replace(/[^a-z0-9а-яё]+/gi, "-")
    .replace(/^-+|-+$/g, "") || `item-${Date.now()}`;
}

function normalizeCartItem(item = {}){
  if(!item || typeof item !== "object"){
    return null;
  }

  const normalized = {
    id: item.id || slugFromName(item.name),
    name: String(item.name || "Товар").trim(),
    price: Number(item.price) || 0,
    image: item.image || (Array.isArray(item.images) && item.images.length ? item.images[0] : ""),
    quantity: Math.max(1, Number(item.quantity || item.qty || 1))
  };

  return normalized.name ? normalized : null;
}

function getCart(){
  const stored = cartSafeParse(localStorage.getItem(CART_KEY), null);
  const legacy = cartSafeParse(localStorage.getItem("cart"), []);
  const items = Array.isArray(stored) ? stored : (Array.isArray(legacy) ? legacy : []);

  return items
    .map(normalizeCartItem)
    .filter(Boolean);
}

function setCart(items){
  const normalizedItems = (Array.isArray(items) ? items : [])
    .map(normalizeCartItem)
    .filter(Boolean);

  localStorage.setItem(CART_KEY, JSON.stringify(normalizedItems));
  localStorage.setItem("cart", JSON.stringify(normalizedItems));

  return normalizedItems;
}

function formatPrice(value){
  const amount = Number(value) || 0;
  return `${amount.toLocaleString("ru-RU")} ₽`;
}

function getCartCount(){
  return getCart().reduce((sum, item) => sum + Math.max(1, Number(item.quantity || 1)), 0);
}

function updateCartCount(){
  const count = getCartCount();
  document.querySelectorAll("#cart-count").forEach(node => {
    node.textContent = String(count);
  });
}

function queuePendingCartItem(item){
  const normalized = normalizeCartItem(item);
  if(!normalized){
    return;
  }

  localStorage.setItem(PENDING_CART_ITEM_KEY, JSON.stringify(normalized));
}

function consumePendingCartItem(){
  const item = normalizeCartItem(cartSafeParse(localStorage.getItem(PENDING_CART_ITEM_KEY), null));
  localStorage.removeItem(PENDING_CART_ITEM_KEY);
  return item;
}

function mergeCartItem(items, item){
  const normalizedItem = normalizeCartItem(item);
  if(!normalizedItem){
    return items;
  }

  const nextItems = [...items];
  const existingItem = nextItems.find(cartItem => String(cartItem.id) === String(normalizedItem.id));

  if(existingItem){
    existingItem.quantity += normalizedItem.quantity;
    if(!existingItem.image && normalizedItem.image){
      existingItem.image = normalizedItem.image;
    }
  }else{
    nextItems.push(normalizedItem);
  }

  return nextItems;
}

function createCartItem(productOrName, price, image = ""){
  if(productOrName && typeof productOrName === "object" && !Array.isArray(productOrName)){
    return normalizeCartItem(productOrName);
  }

  return normalizeCartItem({
    id: slugFromName(productOrName),
    name: productOrName,
    price,
    image,
    quantity: 1
  });
}

function addToCart(productOrName, price, image = ""){
  const item = createCartItem(productOrName, price, image);

  if(!item){
    return { ok: false, message: "Не удалось добавить товар в корзину." };
  }

  if(typeof getCurrentUser === "function" && !getCurrentUser()){
    queuePendingCartItem(item);
    window.location.href = `login.html?mode=register&redirect=${encodeURIComponent("shop.html?openCart=1")}`;
    return { ok: false, redirected: true };
  }

  const nextItems = mergeCartItem(getCart(), item);
  setCart(nextItems);
  updateCartCount();
  displayCart();

  const shouldRedirectToShop = document.body?.dataset?.redirectToShopOnAdd === "true";

  if(shouldRedirectToShop && !document.getElementById("cart-panel")){
    window.location.href = "shop.html?openCart=1";
    return { ok: true, redirected: true, item };
  }

  openCart();

  return { ok: true, item };
}

function changeCartQty(id, delta){
  const nextItems = getCart()
    .map(item => {
      if(String(item.id) !== String(id)){
        return item;
      }

      return {
        ...item,
        quantity: Math.max(1, Number(item.quantity || 1) + Number(delta || 0))
      };
    })
    .filter(Boolean);

  setCart(nextItems);
  displayCart();
  updateCartCount();
}

function removeFromCartById(id){
  const nextItems = getCart().filter(item => String(item.id) !== String(id));
  setCart(nextItems);
  displayCart();
  updateCartCount();
}

function clearCart(){
  setCart([]);
  displayCart();
  updateCartCount();
}

function openCart(){
  const panel = document.getElementById("cart-panel");
  if(panel){
    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
  }
}

function closeCart(){
  const panel = document.getElementById("cart-panel");
  if(panel){
    panel.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
  }
}

function renderCartPanelItem(item){
  return `
    <li>
      <div class="cart-panel-item">
        <div class="cart-panel-item-main">
          <div class="cart-panel-thumb">
            ${item.image ? `<img src="${item.image}" alt="${item.name}">` : `<span>${String(item.name || "Т").charAt(0).toUpperCase()}</span>`}
          </div>

          <div class="cart-panel-text">
            <strong>${item.name}</strong>
            <span>${formatPrice(item.price)} за штуку</span>
          </div>
        </div>

        <div class="cart-panel-controls">
          <div class="cart-panel-qty">
            <button type="button" onclick="changeCartQty('${item.id}', -1)">−</button>
            <span>${item.quantity}</span>
            <button type="button" onclick="changeCartQty('${item.id}', 1)">+</button>
          </div>

          <div class="cart-panel-price">${formatPrice(item.price * item.quantity)}</div>
          <button type="button" class="cart-panel-remove" onclick="removeFromCartById('${item.id}')">Удалить</button>
        </div>
      </div>
    </li>
  `;
}

function displayCart(){
  const cartList = document.getElementById("cart");
  const totalElement = document.getElementById("total");

  if(!cartList || !totalElement){
    updateCartCount();
    return;
  }

  const items = getCart();
  const total = items.reduce((sum, item) => sum + (Number(item.price) * Number(item.quantity)), 0);

  if(!items.length){
    cartList.innerHTML = `
      <li class="cart-panel-empty">
        Корзина пока пуста. Добавьте товары и перейдите к оформлению.
      </li>
    `;
  }else{
    cartList.innerHTML = items.map(renderCartPanelItem).join("");
  }

  totalElement.textContent = formatPrice(total);
}

function handlePendingCartItem(){
  const pendingItem = consumePendingCartItem();
  if(!pendingItem){
    return false;
  }

  const nextItems = mergeCartItem(getCart(), pendingItem);
  setCart(nextItems);
  return true;
}

function initializeShopCartPanel(){
  const addedPendingItem = handlePendingCartItem();
  displayCart();
  updateCartCount();

  const params = new URLSearchParams(window.location.search);
  if(addedPendingItem || params.get("openCart") === "1"){
    openCart();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();

  if(document.getElementById("cart-panel")){
    initializeShopCartPanel();
  }
});
