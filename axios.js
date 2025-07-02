const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON body

let savedUsers = []; // Temporarily store POSTed users

// GET: Fetch users and add a custom property
app.get('/fetch-users', async (req, res) => {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=5');

    const modifiedUsers = response.data.results.map(user => ({
      ...user,
      status: 'active', // Add new property
    }));

    res.json(modifiedUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Save modified user data
app.post('/save-users', (req, res) => {
  const users = req.body;

  if (!Array.isArray(users)) {
    return res.status(400).json({ error: 'Invalid data format. Expected an array.' });
  }

  savedUsers = [...savedUsers, ...users]; // Save to local array (simulate DB)
  res.json({ message: 'Users saved successfully', count: users.length });
});

// GET: Retrieve saved users
app.get('/saved-users', (req, res) => {
  res.json(savedUsers);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
