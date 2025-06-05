export function updateStreak(user, lastActive, setStreak, setLastActive) {
  const today = new Date().toDateString();
  if (user) {
    if (lastActive !== today) {
      if (lastActive && new Date(today) - new Date(lastActive) === 86400000) {
        setStreak((s) => {
          localStorage.setItem("streak", s + 1);
          return s + 1;
        });
      } else {
        setStreak(1);
        localStorage.setItem("streak", 1);
      }
      setLastActive(today);
      localStorage.setItem("lastActive", today);
    }
  }
}