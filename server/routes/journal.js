// server/routes/journal.js
// This file handles routes for journal entries, allowing users to create and retrieve their journal logs.
const express = require('express');
const Journal = require('../models/Journal');
const router = express.Router();

// Create or update entry
router.post('/', async (req, res) => {
  const { user, date, text } = req.body;
  console.log('📥 Journal POST received:', { user, date, text });

  try {
    const existing = await Journal.findOne({ user, date });
    if (existing) {
      existing.text = text;
      await existing.save();
      return res.json(existing);
    }

    const entry = await Journal.create({ user, date, text });
    res.status(201).json(entry);
  } catch (err) {
    console.error('❌ Error in journal POST:', err);
    res.status(500).json({ message: 'Error saving journal entry', error: err.message });
  }
});

// Get entry by user and date
router.get('/:userId/:date', async (req, res) => {
  const { userId, date } = req.params;

  try {
    const entry = await Journal.findOne({ user: userId, date });
    if (!entry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    res.json(entry);
  } catch (err) {
    console.error('❌ Error fetching journal entry:', err);
    res.status(500).json({ message: 'Error fetching journal entry', error: err.message });
  }
});

module.exports = router;





