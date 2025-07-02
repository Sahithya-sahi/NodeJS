const express = require('express');
const limiter = require('./rateLimiter');

const app = express();
const PORT = 3000;

// Apply the rate limiter to all routes
app.use(limiter);

// Sample route
app.get('/test', (req, res) => {
  res.json({ message: 'You are allowed to access this route!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

