const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;


const { format } = require('date-fns');
const EventEmitter = require('events');
const logEvents = require('./logEvents'); // Adjust path if needed

// Define the MyEmitter class
class Emitter extends EventEmitter {}

// Create an instance of MyEmitter
const myEmitter = new Emitter();


const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
});

server.listen(PORT, () => console.log(`server is up and running on port ${PORT} Rasta!`))



// // Set up event listener
// myEmitter.on('log', (msg) => logEvents(msg));

// // Emit event after 2 seconds
// setTimeout(() => {
//     myEmitter.emit('log', 'Log event emitted!');
// }, 2000);