const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Handling route parameters
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

// Handling query strings
app.get('/search', (req, res) => {
    const { q, page } = req.query;
    res.send(`Search query: ${q}, Page: ${page}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
