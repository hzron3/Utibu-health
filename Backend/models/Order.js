// Order.js
// Model for defining order schema

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  medicationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Medication',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  // Add more fields as needed
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
