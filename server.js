const http = require("http");
const fs = require("fs");

const view = fs.readFileSync(`${__dirname}/index.html`);

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // respond to request
    res.write(view);
    res.end();
  }
});

// set port
const PORT = process.env.PORT || 3000;

// listen to server
server.listen(PORT, console.log(`Server now listening on port: ${PORT}`));
