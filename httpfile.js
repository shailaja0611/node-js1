const http = require('http');

const server = http.createServer((req, res) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString(); // Convert Buffer to string
    });

    req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Received: ${body}`);
    });
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});
