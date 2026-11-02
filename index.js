#!/usr/bin/env node

const http = require('node:http');
const fs = require('node:fs');
const path = require('path');
let serverCode = 200;

const server = http.createServer((req, res) => {
    let filename = req.url.slice(1) + ".html";

    if (filename == ".html") {
        filename = "index.html";
    }
    
    fs.access(filename, (err) => {
        if (err) {
            filename = '404.html'
            serverCode = 404;
        };

        const filePath = path.join(__dirname, filename);

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(serverCode, { 'Content-Type': 'text/plain' });
                res.end("Internal Server Error");
            } else {
                res.writeHead(serverCode, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    });    
});
    
server.listen(8080);