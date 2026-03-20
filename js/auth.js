const APP_PAYMENT_LINK = "https://www.sberbank.com/sms/pbpn?requisiteNumber=79530282920";
window.APP_PAYMENT_LINK = APP_PAYMENT_LINK;

const AUTH_USERS_KEY = "arkady_users";
const AUTH_CURRENT_KEY = "arkady_current_user";
const AUTH_ORDERS_KEY = "arkady_orders";

function safeParse(value, fallback){
  try{
    const parsed = JSON.parse(value);
    return parsed ?? fallback;
  }catch(error){
    return fallback;
  }
}

function normalizeEmail(email){
  return String(email || "").trim().toLowerCase();
}

function currentPagePath(){
  const fileName = window.location.pathname.split("/").pop() || "index.html";
  return `${fileName}${window.location.search}${window.location.hash}`;
}

function formatDateTime(date = new Date()){
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function generateId(prefix = "ID"){
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

function getUsers(){
  const users = safeParse(localStorage.getItem(AUTH_USERS_KEY), []);
  return Array.isArray(users) ? users : [];
}

function saveUsers(users){
  localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(Array.isArray(users) ? users : []));
}

function getCurrentUser(){
  const current = safeParse(localStorage.getItem(AUTH_CURRENT_KEY), null);
  if(current){
    return current;
  }

  const legacy = safeParse(localStorage.getItem("currentUser"), null);
  if(legacy && legacy.email){
    const normalizedLegacy = {
      id: legacy.id || generateId("USR"),
      name: legacy.name || "Покупатель",
      email: normalizeEmail(legacy.email),
      phone: legacy.phone || "",
      telegram: legacy.telegram || "",
      city: legacy.city || "",
      password: legacy.password || "",
      createdAt: legacy.createdAt || formatDateTime()
    };

    setCurrentUser(normalizedLegacy);
    localStorage.removeItem("currentUser");
    return normalizedLegacy;
  }

  return null;
}

function setCurrentUser(user){
  if(!user){
    localStorage.removeItem(AUTH_CURRENT_KEY);
    return;
  }

  localStorage.setItem(AUTH_CURRENT_KEY, JSON.stringify(user));
}

function getUserById(userId){
  return getUsers().find(user => String(user.id) === String(userId)) || null;
}

function getUserByEmail(email){
  const normalizedEmail = normalizeEmail(email);
  return getUsers().find(user => normalizeEmail(user.email) === normalizedEmail) || null;
}

function refreshCurrentUser(){
  const current = getCurrentUser();
  if(!current || !current.id){
    return current;
  }

  const storedUser = getUserById(current.id);
  if(storedUser){
    setCurrentUser(storedUser);
    return storedUser;
  }

  return current;
}

function loginUser(email, password){
  const normalizedEmail = normalizeEmail(email);
  const cleanPassword = String(password || "");

  if(!normalizedEmail || !cleanPassword){
    return {
      ok: false,
      message: "Введите email и пароль."
    };
  }

  const user = getUsers().find(item => (
    normalizeEmail(item.email) === normalizedEmail && String(item.password || "") === cleanPassword
  ));

  if(!user){
    return {
      ok: false,
      message: "Неверный email или пароль."
    };
  }

  setCurrentUser(user);

  return {
    ok: true,
    user,
    message: "Вход выполнен."
  };
}

function registerUser(payload = {}){
  const user = {
    id: generateId("USR"),
    name: String(payload.name || "").trim(),
    email: normalizeEmail(payload.email),
    phone: String(payload.phone || "").trim(),
    telegram: String(payload.telegram || "").trim(),
    city: String(payload.city || "").trim() || "Саранск",
    password: String(payload.password || "").trim(),
    createdAt: formatDateTime()
  };

  if(!user.name){
    return { ok: false, message: "Введите имя и фамилию." };
  }

  if(!user.email || !/^\S+@\S+\.\S+$/.test(user.email)){
    return { ok: false, message: "Укажите корректный email." };
  }

  if(user.password.length < 6){
    return { ok: false, message: "Пароль должен содержать минимум 6 символов." };
  }

  const users = getUsers();

  if(users.some(item => normalizeEmail(item.email) == user.email)){
    return { ok: false, message: "Пользователь с таким email уже существует." };
  }

  users.unshift(user);
  saveUsers(users);
  setCurrentUser(user);

  return {
    ok: true,
    user,
    message: "Аккаунт создан."
  };
}

function upsertUser(payload = {}){
  const currentUser = getCurrentUser();
  const users = getUsers();

  const userId = payload.id || currentUser?.id || generateId("USR");
  const normalizedEmail = normalizeEmail(payload.email || currentUser?.email);

  if(!String(payload.name || currentUser?.name || "").trim()){
    return { ok: false, message: "Введите имя и фамилию." };
  }

  if(!normalizedEmail || !/^\S+@\S+\.\S+$/.test(normalizedEmail)){
    return { ok: false, message: "Укажите корректный email." };
  }

  const duplicateUser = users.find(user => (
    normalizeEmail(user.email) === normalizedEmail && String(user.id) !== String(userId)
  ));

  if(duplicateUser){
    return { ok: false, message: "Этот email уже используется другим пользователем." };
  }

  const previousUser = users.find(user => String(user.id) === String(userId)) || currentUser || {};
  const updatedUser = {
    ...previousUser,
    ...payload,
    id: userId,
    email: normalizedEmail,
    name: String(payload.name || previousUser.name || "").trim(),
    phone: String(payload.phone || previousUser.phone || "").trim(),
    telegram: String(payload.telegram || previousUser.telegram || "").trim(),
    city: String(payload.city || previousUser.city || "").trim() || "Саранск",
    password: String(payload.password || previousUser.password || "").trim(),
    createdAt: previousUser.createdAt || formatDateTime()
  };

  const existingIndex = users.findIndex(user => String(user.id) === String(userId));

  if(existingIndex >= 0){
    users[existingIndex] = updatedUser;
  }else{
    users.unshift(updatedUser);
  }

  saveUsers(users);
  setCurrentUser(updatedUser);

  return {
    ok: true,
    user: updatedUser,
    message: "Профиль обновлен."
  };
}

function getOrders(){
  const orders = safeParse(localStorage.getItem(AUTH_ORDERS_KEY), []);
  return Array.isArray(orders) ? orders : [];
}

function saveOrders(orders){
  localStorage.setItem(AUTH_ORDERS_KEY, JSON.stringify(Array.isArray(orders) ? orders : []));
}

function createOrder(payload = {}){
  const items = Array.isArray(payload.items) ? payload.items : [];
  const order = {
    id: generateId("ORD"),
    createdAt: formatDateTime(),
    userId: payload.userId || getCurrentUser()?.id || "",
    customerName: payload.customerName || "",
    customerEmail: normalizeEmail(payload.customerEmail || ""),
    customerPhone: payload.customerPhone || "",
    customerCity: payload.customerCity || "",
    comment: payload.comment || "",
    items: items.map(item => ({
      id: item.id || generateId("ITEM"),
      name: item.name || "Товар",
      price: Number(item.price) || 0,
      quantity: Math.max(1, Number(item.quantity || item.qty || 1)),
      image: item.image || ""
    })),
    total: Number(payload.total) || 0,
    paymentMethod: payload.paymentMethod || "QR / Sber",
    paymentLink: payload.paymentLink || APP_PAYMENT_LINK,
    status: payload.status || "Создан"
  };

  const orders = getOrders();
  orders.unshift(order);
  saveOrders(orders);

  return order;
}

function getMyOrders(userId){
  if(!userId){
    return [];
  }

  return getOrders().filter(order => String(order.userId) === String(userId));
}

function logoutUser(target = "login.html"){
  localStorage.removeItem(AUTH_CURRENT_KEY);
  window.location.href = target;
}

function getRedirectFromQuery(defaultTarget = "profile.html"){
  const params = new URLSearchParams(window.location.search);
  return params.get("redirect") || defaultTarget;
}

function getAuthModeFromQuery(){
  const params = new URLSearchParams(window.location.search);
  return params.get("mode") || "login";
}

function requireAuth(redirectTarget = currentPagePath()){
  const user = refreshCurrentUser() || getCurrentUser();

  if(!user){
    window.location.href = `login.html?redirect=${encodeURIComponent(redirectTarget)}`;
    return null;
  }

  return user;
}

function syncNavigationState(){
  const user = refreshCurrentUser() || getCurrentUser();

  document.querySelectorAll(".js-shop-link, #shopLink").forEach(link => {
    link.href = user ? "shop.html" : "login.html?redirect=shop.html";
  });

  document.querySelectorAll(".js-profile-link, #profileLink").forEach(link => {
    link.href = user ? "profile.html" : "login.html?redirect=profile.html";
    link.textContent = user ? "Профиль" : "Вход";
  });

  document.querySelectorAll(".js-cart-link").forEach(link => {
    link.href = user ? "cart.html" : "login.html?redirect=cart.html";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  syncNavigationState();
});
