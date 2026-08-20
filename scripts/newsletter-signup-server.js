// scripts/newsletter-signup-server.js
// Minimal Node.js server for local newsletter signups
// Usage: node scripts/newsletter-signup-server.js

const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;
const SIGNUPS_FILE = path.join(__dirname, '../newsletter-signups.txt');

app.use(bodyParser.json());

// Allow CORS for local frontend
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/api/newsletter-signup', (req, res) => {
  const { email } = req.body;
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }
  // Append email to file
  fs.appendFile(SIGNUPS_FILE, email + '\n', (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to record email.' });
    }
    res.json({ success: true });
  });
});

app.listen(PORT, () => {
  console.log(`Newsletter signup server running at http://localhost:${PORT}`);
});
