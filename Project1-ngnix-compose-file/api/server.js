const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.end("API is healthy");
    return;
  }

  res.end("Hello from Node.js API");
});

server.listen(3000, () => {
  console.log("API running on port 3000");
});