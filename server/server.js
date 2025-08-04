// server.js
// This file sets up the Express server, connects to MongoDB, and defines API routes.
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectToMongo = require('./db');

dotenv.config(); // Load environment variables from .env

// Check if MONGO_URI is defined
if (!process.env.MONGO_URI) {
  console.error('❌ MONGO_URI is not defined in .env file.');
  process.exit(1); // Exit the server if missing
}

dotenv.config(); // Load environment variables from .env
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectToMongo();

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/journal', require('./routes/journal'));
app.use('/api/gratitude', require('./routes/gratitude'));
app.use('/api/routine', require('./routes/routine'));

// Fallback route
app.get('/', (req, res) => {
  res.send('Welcome to the JournalApp API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


