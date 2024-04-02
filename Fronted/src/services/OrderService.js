import axios from 'axios';

const backendUrl = ''; // Replace with your backend URL

const OrderService = {
  placeOrder: async (orderData) => {
    try {
      const response = await axios.post(`${backendUrl}/place-order`, orderData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Failed to place order');
    }
  },
  // Other order-related methods
};

export default OrderService;
