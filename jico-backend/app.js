// Importing required modules
const express = require('express');
const mongoose = require('mongoose');

// Initialize the app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection string (update username and password accordingly)
const mongoURI = 'mongodb+srv://anjiianjali2004:xgg0m1QJXaMk4yFl@cluster0.mongodb.net/jico?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Basic route to test if the server is running
app.get('/', (req, res) => {
  res.send('Hello, MongoDB connected successfully!');
});

// Set up the server to listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
