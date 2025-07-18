const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'your_secret_key'; // Replace with env variable in real apps

// Middleware to parse incoming JSON and form-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// === Temporary in-memory storage ===
let users = [];

/* 
// === Sample MongoDB Setup (Commented) ===
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});
const User = mongoose.model('User', userSchema);
*/

// === Register API ===
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body, "<<< received body");

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Check if user already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { email, password: hashedPassword };

  // In-memory push
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully' });
});

// === Login API ===
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body, "<<< login body");

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const user = users.find(user => user.email === email);

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: '1h' });

  res.json({ message: 'Login successful', token });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
