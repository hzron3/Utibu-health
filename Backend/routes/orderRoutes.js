// orderRoutes.js
// Routes for medication orders

const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');

// Place order route
router.post('/place-order', OrderController.placeOrder);

module.exports = router;
