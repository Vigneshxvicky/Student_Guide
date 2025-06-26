import axios from "axios";

// Define your local backend base URL
const LOCAL_API_URL = "http://localhost:5000"; // Or your specific local backend URL

export async function login(authForm) {
  try {
    const response = await axios.post(`${LOCAL_API_URL}/api/login`, authForm);
    return response.data;
  } catch (error) {
    // Re-throw the error to be caught in the component
    throw error;
  }
}

export async function register(authForm) {
  try {
    const response = await axios.post(`${LOCAL_API_URL}/api/register`, authForm);
    return response.data;
  } catch (error) {
    // Re-throw the error to be caught in the component
    throw error;
  }
}