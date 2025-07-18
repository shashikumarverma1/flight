const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
// const connectDB = require("./config/db")
dotenv.config();
// connectDB();
const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB error:', err));

module.exports = app;
