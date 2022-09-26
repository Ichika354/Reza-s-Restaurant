const http = require("http");
const host = "127.0.0.1";
const port = 5500;

const server = http.createServer(function (request, response) {
  response.statusCode = 203;
  response.end("Haloo backend");
});

server.listen(port, host, "", function () {
  console.log(`Server menyala di ${host} dan di port ${port}`);
});
