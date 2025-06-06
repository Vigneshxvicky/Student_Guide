import axios from "axios";

export async function updateUsername(newUsername) {
  if (!newUsername.trim()) return false;
  const token = localStorage.getItem("ademyToken");
  await axios.put(
    "https://student-guide-backend.onrender.com/api/user/username",
    { username: newUsername },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return true;
}