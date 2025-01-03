// server.js - Main Proxy Server Entry Point

const http = require('http');
const https = require('https');
const Cache = require('./cache');
const { handleRequest } = require('./requestHandler');
const { log } = require('./logger');

// Configuration
const PORT = 8080; // Proxy server port
const cache = new Cache(5); // Cache with a limit of 5 items (for LRU caching)

// Create an HTTP server
const server = http.createServer(async (req, res) => {
    try {
        log(`Received request: Method=${req.method}, URL=${req.url}`);
        await handleRequest(req, res, cache);
    } catch (error) {
        log(`Error handling request: ${error.message}`);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
});

server.listen(PORT, () => {
    log(`Proxy server is running on http://localhost:${PORT}`);
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});
