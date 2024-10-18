const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

const greetListener = (name) => {
  console.log(`Hello, ${name}!`);
};

// Add the greet listener
myEmitter.on('greet', greetListener);

// Emit the 'greet' event
myEmitter.emit('greet', 'Bob'); // Output: Hello, Bob!

// Remove the greet listener
myEmitter.removeListener('greet', greetListener);

// Emit the 'greet' event again
myEmitter.emit('greet', 'Bob'); // No output
