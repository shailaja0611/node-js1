const http = require('http');

function handleResponse(res) {
    let data = '';
    res.on('data', chunk => {
        data += chunk;
    });

    
    res.on('end', () => {
        console.log('Response:', data);
    });
}


http.get('http://jsonplaceholder.typicode.com/posts/1', handleResponse);
