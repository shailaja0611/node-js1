const express = require('express');
const app = express();
const port = 3000;


const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); 
};


const checkHeader = (req, res, next) => {
    if (!req.headers['x-custom-header']) {
        return res.status(400).send('Missing X-Custom-Header ');
    }
    next(); 
};


app.use(logger);
app.use(checkHeader);


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
