# MultiThreadedProxyServerClient_JS

Project Introduction: MultiThreaded Proxy Server (JavaScript)
This project implements a multi-threaded proxy server rewritten in JavaScript. It acts as an intermediary between clients (like browsers or other applications) and target servers. When a client sends a request, the proxy server forwards it to the destination server, caches the response for efficiency, and sends it back to the client. The project includes logging functionality to monitor all activities.






Project Overview
Core Functionalities:

Proxy Requests: Handles HTTP requests, forwards them to target servers, and returns the response.
Caching: Implements an LRU (Least Recently Used) cache to store and serve frequently requested data.
Logging: Logs all server activities, including requests, responses, cache hits, and errors, to a file.
Features:

Multi-threaded Design: Handles multiple requests concurrently using asynchronous JavaScript.
Efficient Cache: Reduces latency and bandwidth usage by caching responses for popular URLs.
Detailed Logs: Provides insights into server performance and errors through a logging system.
Use Cases
Network Optimization:

Caches frequently accessed content (e.g., popular websites or APIs), reducing redundant server requests.
Useful for improving network performance in corporate or educational environments.
Web Development:

Acts as a middleware for debugging requests and responses in web applications.
Privacy and Security:

Masks client IP addresses when interacting with servers (basic anonymity).
Learning Resource:

Demonstrates how to build a foundational proxy server using JavaScript, caching, and logging.
How It Works
A user (client) sends a request to the proxy server.
The proxy server checks its cache:
If the response is available, it serves the cached response (cache hit).
Otherwise, it forwards the request to the destination server (cache miss).
The response from the destination server is cached for future use and sent back to the client.
All events (requests, cache usage, errors) are logged in a file (server.log).


node server.js
curl -X GET http://localhost:8080/http://google.com OR http://localhost:8080/http://google.com (In browser)

- Blocked Websites -
    http://localhost:8080/http://sunbeaminfo.com -  Access to this website is blocked
    [2024-12-13T12:56:56.862Z] Incoming request: Method=GET, URL=/http://sunbeaminfo.com
    [2024-12-13T12:56:56.863Z] Blocked access to: sunbeaminfo.com

