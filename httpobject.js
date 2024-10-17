const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    // Parse the URL
    const parsedUrl = url.parse(req.url, true); // true to parse the query string
    const query = parsedUrl.query;

    // Log request details
    console.log(`Method: ${req.method}`);
    console.log(`URL: ${req.url}`);
    console.log(`Headers:`, req.headers);
    console.log(`Query Parameters:`, query);

    // Set response headers
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Send a JSON response
    const responseBody = {
        message: 'web devolpment page!',
        query: query,
    };

    res.end(JSON.stringify(responseBody));
});

server.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});
