// server/routes/routine.js
// This file handles routes for daily routines, allowing users to create and retrieve their routines.
const express = require('express');
const Routine = require('../models/Routine');

const router = express.Router();

// Create a new routine
router.post('/', async (req, res) => {
  try {
    const routine = await Routine.create(req.body);
    res.status(201).json(routine);
  } catch (err) {
    res.status(500).json({ message: 'Error saving routine' });
  }
});

// Get all routines for a user
router.get('/:userId', async (req, res) => {
  try {
    const routines = await Routine.find({ user: req.params.userId });
    res.json(routines);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching routines' });
  }
});

module.exports = router;
