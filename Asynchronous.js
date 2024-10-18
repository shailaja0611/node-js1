const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Simulating an asynchronous operation
const fetchData = () => {
  setTimeout(() => {
    myEmitter.emit('dataFetched', { id: 1, message: 'Data fetched successfully!' });
  }, 2000);
};

// Listener for the 'dataFetched' event
myEmitter.on('dataFetched', (data) => {
  console.log(data.message);
});

// Start fetching data
console.log('Fetching data...');
fetchData(); // Output after 2 seconds: Data fetched successfully!
