import axios from "axios";

export async function login(authForm) {
  const response = await axios.post("https://student-guide-backend.onrender.com/api/login", authForm);
  return response.data;
}

export async function register(authForm) {
  const response = await axios.post("https://student-guide-backend.onrender.com/api/register", authForm);
  return response.data;
}