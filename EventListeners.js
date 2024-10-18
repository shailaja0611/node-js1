const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

const listener1 = () => {
  console.log('Listener 1');
};

const listener2 = () => {
  console.log('Listener 2');
};

// Add listeners
myEmitter.on('testEvent', listener1);
myEmitter.on('testEvent', listener2);

// Count listeners for 'testEvent'
console.log(`Number of listeners for 'testEvent': ${myEmitter.listenerCount('testEvent')}`); // Output: 2

// Emit the event
myEmitter.emit('testEvent');
// Output:
// Listener 1
// Listener 2
