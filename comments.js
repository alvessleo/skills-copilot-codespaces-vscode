// Create web server
// Create an API endpoint for comments
// Create a POST request to add a comment
// Create a GET request to get all comments
// Create a GET request to get a single comment
// Create a PUT request to update a comment
// Create a DELETE request to delete a comment

// Import express module
const express = require('express');
const app = express();
const port = 3000;

// Import body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create an array of comments
const comments = [
    { id: 1, author: 'John Doe', text: 'Hello, world!' },
    { id: 2, author: 'Jane Doe', text: 'Hello, everyone!' },
    { id: 3, author: 'John Smith', text: 'Hello, world!' }
];

// Create an API endpoint for comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create a POST request to add a comment
app.post('/comments', (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    res.json(newComment);
});
