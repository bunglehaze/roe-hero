const http = require('http');
const express = require('express');
const path = require('path');
const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.use(express.static('public'));

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Welcome to the new Node installation');
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
