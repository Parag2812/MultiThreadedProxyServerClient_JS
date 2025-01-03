const http = require('http');
const https = require('https');
const { log } = require('./logger');
const { URL } = require('url');
const blockedSites = require('./blockedSites');

async function handleRequest(req, res, cache) {
    const { method, url } = req;

    log(`Incoming request: Method=${method}, URL=${url}`);

    if (method !== 'GET') {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
        log(`Response: 405 Method Not Allowed for URL=${url}`);
        return;
    }

    // Extract and validate target URL
    const targetUrl = url.startsWith('/') ? url.slice(1) : url;
    let parsedUrl;

    try {
        parsedUrl = new URL(targetUrl);
    } catch (err) {
        log(`Invalid URL: ${targetUrl}`);
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Bad Request: Invalid URL');
        return;
    }

    // Check if the site is blocked
    if (blockedSites.includes(parsedUrl.hostname)) {
        log(`Blocked access to: ${parsedUrl.hostname}`);
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('Access to this website is blocked');
        return;
    }

    // Check cache for response
    const cachedResponse = cache.get(targetUrl);
    if (cachedResponse) {
        log(`Cache hit for URL: ${targetUrl}`);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(cachedResponse);
        return;
    }

    log(`Cache miss for URL (Added): ${targetUrl}`);
    const protocol = parsedUrl.protocol === 'https:' ? https : http;

    // Forward the request to the target server
    const proxyRequest = protocol.get(targetUrl, (proxyRes) => {
        let body = '';

        proxyRes.on('data', (chunk) => {
            body += chunk;
        });

        proxyRes.on('end', () => {
            if (proxyRes.statusCode === 200) {
                cache.set(targetUrl, body);
                log(`Caching response for URL: ${targetUrl}`);
            }

            res.writeHead(proxyRes.statusCode, proxyRes.headers);
            res.end(body);
            log(`Response: ${proxyRes.statusCode} for URL=${targetUrl}`);
        });
    });

    proxyRequest.on('error', (err) => {
        log(`Error fetching URL=${targetUrl}: ${err.message}`);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error fetching the requested URL');
    });
}

module.exports = { handleRequest };
