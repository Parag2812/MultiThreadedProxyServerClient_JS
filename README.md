# MultiThreaded Proxy Server Client (JavaScript)

## 🌟 Project Introduction

The **MultiThreaded Proxy Server** is a JavaScript-powered implementation of a proxy server that bridges the gap between clients (like browsers or applications) and target servers. Designed with multi-threaded capabilities, it efficiently handles multiple requests concurrently, ensuring high performance. This proxy server comes with advanced features like caching for faster response times, logging for detailed monitoring, and support for privacy.

Whether you're optimizing network performance, debugging web applications, or learning about proxy servers, this project offers a hands-on experience.

---

## 🚀 Project Overview

### Core Functionalities

- **Proxy Requests**: Forwards HTTP requests from clients to destination servers and relays the responses back.
- **Caching**: Implements an **LRU (Least Recently Used)** cache to store and serve frequently requested data efficiently.
- **Logging**: Tracks all server activities, including requests, responses, cache hits/misses, and errors, with detailed logs.

### Key Features

1. **Multi-Threaded Design**: Handles multiple requests concurrently using asynchronous JavaScript, ensuring responsiveness even under heavy loads.
2. **Efficient Cache**: Reduces latency and bandwidth usage by serving cached data for popular requests.
3. **Detailed Logs**: Provides actionable insights into server performance and errors through a comprehensive logging system.
4. **Blocked URLs**: Includes functionality to restrict access to specific websites for added control.

---

## 🌐 Use Cases

### 1. **Network Optimization**
- Cache frequently accessed content (e.g., popular websites or APIs) to minimize redundant requests.
- Ideal for improving network performance in corporate, educational, or personal environments.

### 2. **Web Development**
- Serves as a middleware for debugging HTTP requests and responses in web applications.

### 3. **Privacy and Security**
- Provides basic anonymity by masking client IP addresses when interacting with servers.

### 4. **Learning Resource**
- A practical example of building a proxy server with caching and logging using JavaScript.

---

## 🛠️ How It Works

1. A user (client) sends an HTTP request to the proxy server.
2. The proxy server processes the request and checks its cache:
   - **Cache Hit**: If the requested data is in the cache, it serves the cached response immediately.
   - **Cache Miss**: If not, the request is forwarded to the destination server, and the response is cached for future use.
3. The final response is sent back to the client.
4. All events—such as requests, responses, cache usage, and errors—are logged in the `server.log` file for monitoring and debugging.

---

## 🖥️ Getting Started

### Run the Server
```bash
node server.js
```

### Test the Proxy Server
#### Using `curl`:
```bash
curl -X GET http://localhost:8080/http://google.com
```
#### In Your Browser:
Navigate to:
```
http://localhost:8080/http://google.com
```

### Blocked Websites Example
Accessing blocked websites will result in a restriction message:
- URL: `http://localhost:8080/http://sunbeaminfo.com`

Example Log:
```
[2024-12-13T12:56:56.862Z] Incoming request: Method=GET, URL=/http://sunbeaminfo.com
[2024-12-13T12:56:56.863Z] Blocked access to: sunbeaminfo.com
```

---

## 📁 File Structure
- **server.js**: Main server logic including request handling, caching, and logging.
- **server.log**: Log file for tracking server activities.
- **cache.js**: LRU cache implementation (if modularized).

---

## 🔗 Future Enhancements

1. **HTTPS Support**: Add SSL/TLS for secure communications.
2. **Custom Cache Policies**: Enable user-defined caching strategies.
3. **Admin Panel**: Build a web-based dashboard to monitor logs and manage blocked URLs.
4. **Rate Limiting**: Prevent abuse by implementing request rate limits.

---

## 📚 Learning Outcomes
By working on this project, you will:
- Gain insights into building proxy servers and their real-world applications.
- Learn about multi-threaded programming using asynchronous JavaScript.
- Understand LRU caching and its impact on performance.
- Develop skills in logging and monitoring for robust server applications.

---


## 🎉 Final Thoughts

This project serves as an excellent foundation for understanding proxy servers, caching mechanisms, and logging systems. It’s perfect for developers looking to enhance their JavaScript skills while exploring real-world applications. Dive in, experiment, and enjoy building with the **MultiThreaded Proxy Server Client**! 🚀

