// authRoutes.js
// Routes for authentication

const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

// Register user route
router.post('/register', AuthController.registerUser);

// Login user route
router.post('/login', AuthController.loginUser);

module.exports = router;
