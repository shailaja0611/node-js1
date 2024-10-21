const fs = require('fs');
const readline = require('readline');

// Create a readable stream from the file
const readStream = fs.createReadStream('large_file.txt');

// Create an interface for reading lines
const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity, // Recognize all instances of CR LF
});

// Process each line
rl.on('line', (line) => {
    console.log(`Line from file: ${line}`);
});

// Handle when the stream is finished
rl.on('close', () => {
    console.log('Finished reading the file.');
});

// Handle errors
readStream.on('error', (err) => {
    console.error('Error reading the file:', err);
});
