const fs = require('fs');
const path = require('path');

function log(message) {
    if (message.includes('favicon.ico')) {
        // Skip logging for favicon requests
        return;
    }

    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);

    // Append to a log file
    const logFile = path.join(__dirname, 'server.log');
    fs.appendFileSync(logFile, `${logMessage}\n`);
}

module.exports = { log };
