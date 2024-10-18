const express = require('express');
const app = express();
const port = 3000;

// Middleware 1
const middleware1 = (request, response, next) => {
    if (10 < 20) {
        next(); // Proceed to the next middleware or route handler
    } else {
        response.status(403).send("Access denied");
    }
};

// Middleware 2
const middleware2 = (request, response, next) => {  
    if (10 < 20) {
        next(); // This condition will never be true
    } else {
        console.log("Sorry, you are not allowed on this page");
        response.status(403).send("Access denied");
    }
};

// Middleware 3
const middleware3 = (request, response, next) => {
    if (10 == 10) {
        next(); // Always proceeds since this condition is true
    } else {
        response.status(403).send("Access denied");
    }
};

// Routes
app.get('/home', middleware1, (request, response) => {
    response.send("Hello, I am the Home page");
});

app.get('/about', middleware2, (request, response) => {
    response.send("Hello, I am the About page");
});

app.get('/user/:id', middleware3, (request, response) => {
    const userId = request.params.id;
    response.send(`You searched for user ID: ${userId}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server started and running successfully on port ${port}!`);
}); 
