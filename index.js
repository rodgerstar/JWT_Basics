const { format } = require('date-fns');
const EventEmitter = require('events');
const logEvents = require('./logEvents'); // Adjust path if needed

// Define the MyEmitter class
class MyEmitter extends EventEmitter {}

// Create an instance of MyEmitter
const myEmitter = new MyEmitter();

// Set up event listener
myEmitter.on('log', (msg) => logEvents(msg));

// Emit event after 2 seconds
setTimeout(() => {
    myEmitter.emit('log', 'Log event emitted!');
}, 2000);