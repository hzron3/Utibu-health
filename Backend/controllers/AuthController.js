// AuthController.js
// Controller for handling authentication requests

const AuthService = require('../services/AuthService');

const AuthController = {
  // Controller method for user registration
  registerUser: async (req, res) => {
    try {
      const result = await AuthService.registerUser(req.body);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // Controller method for user login
  loginUser: async (req, res) => {
    try {
      const result = await AuthService.loginUser(req.body);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = AuthController;
