import React from 'react';
import { Link } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';

const Header = ({
  user,
  setUser,
  streak,
  xp,
  darkMode,
  setDarkMode,
  sidebarOpen,
  setSidebarOpen,
  profileMenuOpen,
  setProfileMenuOpen,
  editingUsername,
  setEditingUsername,
  newUsername,
  setNewUsername,
  handleUsernameSave,
  handleLogout,
  profileMenuRef,
  showBackButton,
  onBackClick,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Back button and Logo */}
          <div className="flex items-center gap-x-4">
            {showBackButton && (
              <button
                onClick={onBackClick}
                className="flex items-center gap-1 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/20 text-gray-600 dark:text-gray-300 transition-colors font-semibold"
                aria-label="Go back to course selection"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Courses</span>
              </button>
            )}
            <Link
              to="/"
              className={`flex items-center gap-3 ${
                showBackButton ? "hidden md:flex" : "flex"
              }`}
            >
              <div> {/* Added div to ensure Link styles apply correctly if needed, or style Link directly */}
                <span className="text-2xl md:text-3xl">🎓</span> {/* Emoji can stay as is */}
                <span className="text-2xl md:text-3xl font-extrabold text-indigo-600 dark:text-white drop-shadow-lg tracking-wide">
                  StudyHub
                </span>
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-start md:items-center gap-1">
            <span className="text-xs md:text-sm text-gray-700 dark:text-white font-semibold">
              🔥 Streak: {streak} day{streak !== 1 ? "s" : ""}
            </span>
            <span className="text-xs md:text-sm text-orange-500 dark:text-yellow-300 font-semibold">
              ⭐ XP: {xp}
            </span>
            {streak > 2 && (
              <span className="text-xs text-green-500 dark:text-green-300 italic">
                Keep it up! 🚀
              </span>
            )}
          </div>
          {/* Header Controls */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            {/* Home link for desktop */}
            <Link to="/" className="hidden md:block text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-white transition-colors font-semibold">
              Home
            </Link>
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/20 transition-colors text-gray-500 dark:text-gray-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>
            {/* Profile Icon */}
            <ProfileMenu
              user={user}
              setUser={setUser}
              profileMenuOpen={profileMenuOpen}
              setProfileMenuOpen={setProfileMenuOpen}
              editingUsername={editingUsername}
              setEditingUsername={setEditingUsername}
              newUsername={newUsername}
              setNewUsername={setNewUsername}
              handleUsernameSave={handleUsernameSave}
              handleLogout={handleLogout}
              streak={streak}
              xp={xp}
              profileMenuRef={profileMenuRef} // Pass the ref
            />
            {/* Mobile Sidebar Toggle */}
            <button
              onClick={() => setSidebarOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/20 text-gray-500 dark:text-gray-300"
            >
              {sidebarOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;