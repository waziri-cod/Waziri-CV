const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const DB_FILE = path.join(__dirname, 'messages.json');

// Initialize messages file if it doesn't exist
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify([]));
}

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newMessage = {
    id: Date.now(),
    name,
    email,
    subject,
    message,
    date: new Date().toISOString(),
  };

  try {
    const data = JSON.parse(fs.readFileSync(DB_FILE));
    data.push(newMessage);
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
    
    console.log('New message received:', newMessage);
    res.status(201).json({ message: 'Message saved successfully' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/messages', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(DB_FILE));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});