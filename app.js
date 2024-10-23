// const amount = 12;
// if (amount < 10) {
//   console.log('small number');
// } else {
//   console.log('large number');
// }

// console.log('hey its my first node app');

// function addnumber(a, b) {
//   console.log(a, b);
// }
// addnumber(150, 250);

// const os = require('os');
// const path = require('path');

// console.log(os.type());
// console.log(os.version());
// console.log(os.freemem());
// console.log(os.cpus());

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));

// const john= 'johan'
// const peter= 'peter'

// const sayHi = (name) =>{
//     console.log('Hello there ${name}')
// }
// sayHi('susan')
// sayHi(john)
// sayHi(peter)


// const express = require('express');
// const app = express();
// const port = 3000;

// // Define a route to handle GET requests
// app.get('/search', (req, res) => {
//     // Access query parameters
//     const { q, page = 1, limit = 10 } = req.query; // Default values for page and limit

//     // Simulate a search operation (for demonstration purposes)
//     const results = {
//         query: q,
//         page: page,
//         limit: limit,
//         items: [], 
//     };

//     // Send response
//     res.json(results);
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });


const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const quote = "The only way to do great work is to love what you do. - Steve Jobs";
    res.send(`Hello, World!<br>${quote}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
