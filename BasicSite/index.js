const http = require("http");
const fs = require("fs");
const url = require("url");
var about = '/about';
var contact = '/contact'
var index = '/'

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = q.pathname;
    if (filename === about) {
        fs.readFile('about.html', function (err, data) {
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
            res.write(data);
            res.end();
        });
    } else if (filename === contact) {
        fs.readFile('contact-me.html', function (err, data) {
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
            res.write(data);
            res.end();
        });
    } else if (filename === index) {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
            res.write(data);
            res.end();
        });
    } else {
        fs.readFile('404.html', function (err, data) {
            res.writeHead(404, {
                'Content-type': 'text/html'
            });
            res.write(data);
            res.end();
        });
    }
}).listen(8080);