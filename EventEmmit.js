const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Adding multiple listeners for the 'data' event
myEmitter.on('data', (data) => {
  console.log(`Listener 1: Received data - ${data}`);
});

myEmitter.on('data', (data) => {
  console.log(`Listener 2: Processing data - ${data}`);
});

// Emit the 'data' event
myEmitter.emit('data', 'Sample Data');

// Output:
// Listener 1: Received data - Sample Data
// Listener 2: Processing data - Sample Data
