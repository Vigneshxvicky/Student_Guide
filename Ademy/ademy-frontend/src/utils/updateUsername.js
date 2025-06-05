import axios from "axios";

export async function updateUsername(newUsername) {
  if (!newUsername.trim()) return false;
  const token = localStorage.getItem("ademyToken");
  await axios.put(
    "http://localhost:5000/api/user/username",
    { username: newUsername },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return true;
}