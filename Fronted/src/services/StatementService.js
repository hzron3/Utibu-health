import axios from 'axios';

const backendUrl = ''; // Replace with your backend URL

const StatementService = {
  getStatement: async (customerId) => {
    try {
      const response = await axios.get(`${backendUrl}/get-statement?customerId=${customerId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Failed to get statement');
    }
  },
  // Other statement-related methods
};

export default StatementService;
