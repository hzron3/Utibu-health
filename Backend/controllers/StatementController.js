// StatementController.js
// Controller for handling statement requests

const StatementService = require('../services/StatementService');

const StatementController = {
  // Controller method for fetching user statement
  getUserStatement: async (req, res) => {
    try {
      const result = await StatementService.getUserStatement(req.params.userId);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = StatementController;
