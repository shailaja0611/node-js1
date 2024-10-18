// Import the events module
const EventEmitter = require('events');

// Create a class that extends EventEmitter
class MyEmitter extends EventEmitter {}

// Instantiate the event emitter
const myEmitter = new MyEmitter();

// Define an event listener for the 'greet' event
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Define another listener for the 'farewell' event
myEmitter.on('farewell', (name) => {
  console.log(`Goodbye, ${name}!`);
});

// Emit the 'greet' event
myEmitter.emit('greet', 'Alice'); // Output: Hello, Alice!

// Emit the 'farewell' event
myEmitter.emit('farewell', 'Alice'); // Output: Goodbye, Alice!

// Define a one-time listener for the 'oneTimeEvent'
myEmitter.once('oneTimeEvent', () => {
  console.log('This will only happen once!');
});

// Emit the 'oneTimeEvent' multiple times
myEmitter.emit('oneTimeEvent'); // Output: This will only happen once!
myEmitter.emit('oneTimeEvent'); // No output

