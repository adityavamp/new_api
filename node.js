// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add cors module

// Create an Express application
const app = express();

// Use cors middleware to enable Cross-Origin Resource Sharing
app.use(cors());

// Use body-parser middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route for GET method
app.get('/api/getExample', (req, res) => {
    res.send('This is a GET request example');
});

// Define a route for POST method
app.post('/api/postExample', (req, res) => {
    const dataFromClient = req.body;
    res.send(`Received data from client: ${JSON.stringify(dataFromClient)}`);
});

// Set up the server to listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
