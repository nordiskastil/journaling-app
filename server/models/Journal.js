// server/models/Journal.js
// This model defines the structure for journal entries in the database.
const mongoose = require('mongoose');
const { Schema } = mongoose;

const JournalSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: String, required: true },
  text: { type: String, required: true }
});

module.exports = mongoose.model('Journal', JournalSchema);
