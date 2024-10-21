const fs = require('fs');

// Create a readable stream
const readStream = fs.createReadStream('example.txt', { encoding: 'utf-8' });

// Handle the 'data' event to read chunks
readStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
});

// Handle the 'end' event when the file is completely read
readStream.on('end', () => {
    console.log('No more data to read.');
});

// Handle errors
readStream.on('error', (err) => {
    console.error('Error reading the file:', err);
});

