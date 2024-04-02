import axios from 'axios';

const backendUrl = ''; // Replace with your backend URL

const AuthService = {
  login: async (credentials) => {
    try {
      const response = await axios.post(`${backendUrl}/login`, credentials);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Login failed');
    }
  },
  // Other authentication methods
};

export default AuthService;
