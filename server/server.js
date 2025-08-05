// server.js

import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToMongo from './db.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config(); // Load environment variables

// Ensure MONGO_URI exists
if (!process.env.MONGO_URI) {
  console.error('❌ MONGO_URI is not defined.');
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectToMongo();

// Middleware
app.use(express.json());

// CORS for Netlify frontend
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || '*', // In production, set exact Netlify URL
    credentials: true,
  })
);

// API routes
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/journal', require('./routes/journal.js'));
app.use('/api/gratitude', require('./routes/gratitude.js'));
app.use('/api/routine', require('./routes/routine.js'));

// Optional: Serve frontend in production
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('Welcome to the JournalApp API');
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


