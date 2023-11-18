/**
 * Express Middleware Example
 *
 * This code demonstrates the use of middleware in an Express.js application.
 * Two middleware functions are defined and used to log messages and send a response.
 *
 * Middleware is a way to execute code in the request/response processing pipeline.
 * It can be used for various purposes such as logging, authentication, validation, etc.
 */

// Import required dependencies
const express = require('express');
const app = express();

// Middleware 1: Logging Middleware
app.use((req, res, next) => {
    // This middleware logs a message to the console.
    console.log('This is the logging middleware');
    
    // Call the next() function to pass control to the next middleware or route.

});

// Middleware 2: Response Middleware
app.use((req, res, next) => {
    // This middleware logs a message to the console and sends a response to the client.
    console.log('This is another middleware');

    // Send a response to the client with a message.
    res.send("Chebrolu Vishal Mitra - MERN stack and Python developer");

    // Note: Since this middleware sends a response, it does not call next(), and the request/response cycle ends here.
});

// Start the Express server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

