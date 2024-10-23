const content = 'Hello, World!';

fs.writeFile('output.txt', content, 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File written successfully.');
});
