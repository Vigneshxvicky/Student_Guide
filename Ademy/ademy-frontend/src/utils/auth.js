import axios from "axios";

export async function login(authForm) {
  const response = await axios.post("http://localhost:5000/api/login", authForm);
  return response.data;
}

export async function register(authForm) {
  const response = await axios.post("http://localhost:5000/api/register", authForm);
  return response.data;
}