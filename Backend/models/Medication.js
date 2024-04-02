// Medication.js
// Model for defining medication schema

const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  // Add more fields as needed
});

const Medication = mongoose.model('Medication', medicationSchema);

module.exports = Medication;
