const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
    });
    
    const responseBody = {
        message: 'Home page!',
        timestamp: new Date(),
    };
    
    res.end(JSON.stringify(responseBody));
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
