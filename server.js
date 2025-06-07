const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 5500;

// Parse JSON bodies
app.use(bodyParser.json());

// Serve static frontend files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Hardcoded valid user
const validUser = {
  username: 'user',
  password: 'pass123',
};

app.post('/login', (req, res) => {
  console.log('Login attempt:', req.body);
  const { username, password } = req.body;
  if (username === validUser.username && password === validUser.password) {
    console.log('Login successful');
    return res.status(200).json({ success: true, message: 'Login successful!' });
  } else {
    console.log('Login failed');
    return res.status(401).json({ success: false, message: 'Invalid username or password' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
// Serve the index.html file for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Handle 404 errors for any other routes
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});
// Handle 500 errors for server issues
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('500 Internal Server Error');
});
// Export the app for testing purposes
module.exports = app;
// Export the app for testing purposes
// This allows the app to be imported in test files
// and used with testing frameworks like Mocha or Jest.
// This is useful for unit testing the server functionality
// without starting the server.   