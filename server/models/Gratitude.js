// server/models/Gratitude.js
// This model defines the structure for gratitude entries in the database.
const mongoose = require('mongoose');

const GratitudeSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  date: { type: String, required: true },
  entries: [{ type: String, maxlength: 300 }]
});

module.exports = mongoose.model('Gratitude', GratitudeSchema);