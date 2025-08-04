// server/models/Routine.js
// This model defines the structure for daily routines in the database.
const mongoose = require('mongoose');

const RoutineSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: String },
  day: { type: String },
  start: { type: String },
  end: { type: String }
});

module.exports = mongoose.model('Routine', RoutineSchema);