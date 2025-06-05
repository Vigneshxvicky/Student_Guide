import React from "react";

function ProfileMenu({
  user,
  editingUsername,
  newUsername,
  setNewUsername,
  handleUsernameSave,
  setEditingUsername,
  handleLogout,
  profileMenuOpen,
  setProfileMenuOpen,
  profileMenuRef,
}) {
  return (
    <div className="relative" ref={profileMenuRef}>
      <button
        className="w-9 h-9 rounded-full bg-white/30 flex items-center justify-center text-lg font-bold text-white border-2 border-white shadow"
        onClick={() => setProfileMenuOpen((open) => !open)}
        aria-label="Profile"
      >
        {user?.username?.[0]?.toUpperCase() || "👤"}
      </button>
      {profileMenuOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
          <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 border-b dark:border-gray-700 flex items-center gap-2">
            {editingUsername ? (
              <>
                <input
                  className="flex-1 p-1 rounded border dark:bg-gray-700 dark:text-white"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                />
                <button
                  className="text-green-600 dark:text-green-400 text-xs font-bold"
                  onClick={handleUsernameSave}
                >
                  Save
                </button>
                <button
                  className="text-red-500 text-xs font-bold"
                  onClick={() => {
                    setEditingUsername(false);
                    setNewUsername(user?.username || "");
                  }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span className="flex-1 truncate">{user?.username}</span>
                <button
                  className="text-xs text-indigo-600 dark:text-indigo-300 underline"
                  onClick={() => setEditingUsername(true)}
                >
                  Edit
                </button>
              </>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Logout
          </button>
          <div className="text-xs text-indigo-400 mt-2">
            🏆 Best Streak: {localStorage.getItem("bestStreak") || 0} | Best XP: {localStorage.getItem("bestXp") || 0}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;