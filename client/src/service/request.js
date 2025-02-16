import axios from 'axios';

// Create an axios instance with base URL
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000', // Use an env variable for flexibility
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to make API requests
const request = async (url, method = 'GET', body = null, headers = {}) => {
  try {
    const options = {
      method,
      url,
      headers: { ...headers }, // Merge provided headers
      data: body, // The body to be sent in case of POST, PUT, or PATCH
    };

    const response = await api(options);

    return response.data;
  } catch (error) {
    // Enhanced error handling: log a detailed message and throw a more informative error
    console.error('API call failed:', error.response ? error.response.data : error.message);
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};

export default request;
