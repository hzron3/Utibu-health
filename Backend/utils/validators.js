const { ERROR_MESSAGES } = require('./constants');

module.exports = {
  validateOrderRequest: function(order) {
    // Example validation function for order request
    if (!order || !order.customerId || !order.medicineId || !order.quantity) {
      throw new Error(ERROR_MESSAGES.MISSING_PARAMETERS);
    }
    if (isNaN(order.quantity) || order.quantity <= 0) {
      throw new Error(ERROR_MESSAGES.INVALID_PARAMETERS);
    }
    // Additional validation logic here
  }
};
