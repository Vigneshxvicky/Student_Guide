import axios from "axios";

// Define your local backend base URL
const LOCAL_API_URL = "http://localhost:5000"; // Or your specific local backend URL

export async function login(authForm) {
  const response = await axios.post(`${LOCAL_API_URL}/api/login`, authForm);
  return response.data;
}

export async function register(authForm) {
  const response = await axios.post(`${LOCAL_API_URL}/api/register`, authForm);
  return response.data;
}