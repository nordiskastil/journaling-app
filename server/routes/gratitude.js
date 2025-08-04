// server/routes/gratitude.js
// This file handles routes for gratitude entries, allowing users to create and retrieve their gratitude logs.
const express = require('express');
const Gratitude = require('../models/Gratitude');

const router = express.Router();

// Create entry
router.post('/', async (req, res) => {
  try {
    const entry = await Gratitude.create(req.body);
    res.status(201).json(entry);
  } catch (err) {
    res.status(500).json({ message: 'Error saving gratitude entry' });
  }
});

// Get all entries by user
router.get('/:userId', async (req, res) => {
  try {
    const entries = await Gratitude.find({ user: req.params.userId }).sort({ date: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching entries' });
  }
});

module.exports = router;
