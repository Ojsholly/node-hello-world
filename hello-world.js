const http = require('node:http');
var dateTime = require('./Modules/DateTimeModule');
var url = require('url');

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // res.write(req.url + "\n");

    var q = url.parse(req.url, true).query;
    var text = q.year + " " + q.month;

    res.write(text + "\n");
    res.write(`The date and time are currently: ${dateTime.myDateTime()}\n`);
    res.end("Hello World!\n");
});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});