const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;


const requestHandler = (req, res) => {
    let filePath = './public' + req.url; 

    
    if (req.url === '/') {
        filePath = './index.html';
    }

    
    const extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.gif':
            contentType = 'image/gif';
            break;
        default:
            contentType = 'text/html';
            break;
    }

    
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>');
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
};


const server = http.createServer(requestHandler);


server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
