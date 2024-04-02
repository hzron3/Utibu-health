// OrderController.js
// Controller for handling medication order requests

const OrderService = require('../services/OrderService');

const OrderController = {
  // Controller method for placing a medication order
  placeOrder: async (req, res) => {
    try {
      const result = await OrderService.placeOrder(req.body);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = OrderController;
