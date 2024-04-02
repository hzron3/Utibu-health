// statementRoutes.js
// Routes for user statements

const express = require('express');
const router = express.Router();
const StatementController = require('../controllers/StatementController');

// Get user statement route
router.get('/user/:userId/statement', StatementController.getUserStatement);

module.exports = router;
