const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Привет сервер 🚀");
});

server.listen(port, () => {
  console.log("Server running on port " + port);
});
