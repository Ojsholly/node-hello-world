const http = require('node:http');
var dateTime = require('./Modules/DateTimeModule');

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(`The date and time are currently: ${dateTime.myDateTime()}\n`);
    res.end("Hello World!\n");
});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});