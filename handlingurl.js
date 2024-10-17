const http = require('http');

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Path: ${parsedUrl.pathname}, Query: ${parsedUrl.searchParams.toString()}`);
});

server.listen(3002, () => {
    console.log('Server is running on http://localhost:3002');
});
const validator = require('validator');

const urlToValidate = 'https://example.com';

if (validator.isURL(urlToValidate)) {
    console.log('Valid URL');
} else {
    console.log('Invalid URL');
}
