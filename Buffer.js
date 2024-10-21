const fs = require('fs');

// Step 1: Read the file into a buffer
fs.readFile('example.txt', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Step 2: Convert the buffer to a string
    let text = data.toString('utf-8');
    console.log('Original Text:\n', text);

    // Step 3: Modify the text
    text = text.replace('World', 'Node.js');

    // Step 4: Create a new buffer from the modified string
    const newBuffer = Buffer.from(text, 'utf-8');

    // Step 5: Write the modified buffer to a new file
    fs.writeFile('modified_example.txt', newBuffer, (err) => {
        if (err) {
            console.error('Error writing the file:', err);
            return;
        }
        console.log('Modified text has been written to modified_example.txt');
    });
});
