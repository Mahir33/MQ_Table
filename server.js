const express = require('express');

const server = express();

server.use(express.static("/", {
    "index": "index.html"
}));

const port = 6660;
server.listen(port, function () {
    console.log(`Server is listening to port:${port}`);
});