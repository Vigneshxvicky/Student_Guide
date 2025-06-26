// Assuming this file already exists with login and register functions
// If not, create it with the following content:

import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust if your backend URL is different

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const googleLogin = async (idToken) => {
  try {
    const response = await axios.post(`${API_URL}/auth/google`, { id_token: idToken });
    return response.data;
  } catch (error) {
    throw error;
  }
};
