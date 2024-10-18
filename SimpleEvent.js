const EventEmitter = require('events');

class EventBus extends EventEmitter {}

const eventBus = new EventBus();

// Subscribe to an event
eventBus.on('userLoggedIn', (user) => {
  console.log(`User logged in: ${user.name}`);
});

// Publish the event
const user = { name: 'Alice', age: 30 };
eventBus.emit('userLoggedIn', user);

// Output: User logged in: Alice
