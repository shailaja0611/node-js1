// const fs = require('fs');


// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading the file:', err);
//         return;
//     }
//     console.log('File content:', data);
// });


// try {
//     const data = fs.readFileSync('example.txt', 'utf8');
//     console.log('File content (sync):', data);
// } catch (err) {
//     console.error('Error reading the file:', err);
// }


// const fs = require('fs');
// const content = 'Hello, this is a new content!';

// // Asynchronous write
// fs.writeFile('example.txt', content, (err) => {
//     if (err) {
//         console.error('Error writing to the file:', err);
//         return;
//     }
//     console.log('File written successfully!');
// });

// // Synchronous write
// try {
//     fs.writeFileSync('example.txt', content);
//     console.log('File written successfully (sync)!');
// } catch (err) {
//     console.error('Error writing to the file:', err);
// }


// const fs = require('fs');


// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error:', err);
//         return;
//     }
//     console.log(data); 
// });


// fs.promises.readFile('example.txt', 'utf8')
//     .then(data => console.log(data))
//     .catch(err => console.error('Error:', err));


// async function readFile() {
//     try {
//         const data = await fs.promises.readFile('example.txt', 'utf8');
//         console.log(data);
//     } catch (err) {
//         console.error('Error:', err);
//     }
// }
// readFile();

// const http =require("http");

// const myServer = http.createServer((req,res)=>{
//     console.log ("New Req Rec.");
//     res.end("hello from server");
// });
// myServer.listen(8000,()=>console.log("server started"));

// Import required modules
const os = require('os');
const path = require('path');

// Variable declarations
const amount = 12;
const john = 'Johan';
const peter = 'Peter';

// Conditional statement
if (amount < 10) {
  console.log('Small number');
} else {
  console.log('Large number');
}

console.log('Hey, it\'s my first Node app!');

// Function declaration
function addNumbers(a, b) {
  return a + b;
}

// Function call
const sum = addNumbers(150, 250);
console.log('Sum:', sum);

// OS module usage
console.log('OS Type:', os.type());
console.log('OS Version:', os.version());
console.log('Free Memory:', os.freemem());
console.log('CPUs:', os.cpus());

// Path module usage
console.log('Directory Name:', path.dirname(__filename));
console.log('Base Name:', path.basename(__filename));
console.log('Extension Name:', path.extname(__filename));
console.log('Parsed Path:', path.parse(__filename));

// Arrow function
const sayHi = (name) => {
  console.log(`Hello there, ${name}!`);
}

// Function calls
sayHi('Susan');
sayHi(john);
sayHi(peter);

// Calculate area of a rectangle
const rectangleWidth = 10;
const rectangleHeight = 20;
const calculateArea = (width, height) => width * height;
console.log('Rectangle Area:', calculateArea(rectangleWidth, rectangleHeight));

// Calculate circumference of a circle
const circleRadius = 5;
const calculateCircumference = (radius) => 2 * Math.PI * radius;
console.log('Circle Circumference:', calculateCircumference(circleRadius));

// Generate random number
const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log('Random Number:', generateRandomNumber(1, 100));


