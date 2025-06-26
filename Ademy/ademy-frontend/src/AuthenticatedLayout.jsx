import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './Footer';
import TopicChoicePage from './pages/TopicChoicePage';
import DashboardPage from './pages/DashboardPage';
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import BlogPage from "./pages/BlogPage";
import HelpPage from "./pages/HelpPage";
import AffiliatesPage from "./pages/AffiliatesPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import CookiesPage from "./pages/CookiesPage";
import AdminPage from "./pages/AdminPage";
import ProtectedRouteAdmin from "./components/ProtectedRouteAdmin";
import AdminLoginRequiredPage from "./pages/AdminLoginRequiredPage";

function AuthenticatedLayout({
  user, setUser, streak, xp, darkMode, setDarkMode, sidebarOpen, setSidebarOpen,
  profileMenuOpen, setProfileMenuOpen, editingUsername, setEditingUsername,
  newUsername, setNewUsername, handleUsernameSave, handleLogout, profileMenuRef,
  showTopicChoice, handleGoBackToCourses, handleMainTopicSelect, selectedMainTopic,
  level, levelsForCurrentTopic, handleLevelSelect, completedVideos, selectedTopicIdx,
  quote, bookmarkedVideos, videoNotes, currentNoteText, setCurrentNoteText,
  currentNoteTimestamp, setCurrentNoteTimestamp, toggleCompleted, toggleBookmark,
  handleAddNote, handleDeleteNote, handleTopicSelect, topics, selectedVideo, progress
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <Header
        user={user}
        setUser={setUser}
        streak={streak}
        xp={xp}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        profileMenuOpen={profileMenuOpen}
        setProfileMenuOpen={setProfileMenuOpen}
        editingUsername={editingUsername}
        setEditingUsername={setEditingUsername}
        newUsername={newUsername}
        setNewUsername={setNewUsername}
        handleUsernameSave={handleUsernameSave}
        handleLogout={handleLogout}
        profileMenuRef={profileMenuRef}
        showBackButton={!showTopicChoice}
        onBackClick={handleGoBackToCourses}
      />

      {showTopicChoice ? (
        <TopicChoicePage handleMainTopicSelect={handleMainTopicSelect} />
      ) : (
        /* Main Content Area controlled by Routes */
        <div className="flex-1 flex mt-16">
          {" "}
          {/* Added mt-16 to offset fixed header */}
          <Routes>
            {/* Route for the main dashboard content */}
            <Route
              path="/"
              element={
                selectedMainTopic && (
                  <DashboardPage
                    level={level}
                    levels={levelsForCurrentTopic}
                    handleLevelSelect={handleLevelSelect}
                    completedVideos={completedVideos}
                    selectedTopicIdx={selectedTopicIdx}
                    sidebarOpen={sidebarOpen}
                    quote={quote}
                    bookmarkedVideos={bookmarkedVideos}
                    videoNotes={videoNotes}
                    currentNoteText={currentNoteText}
                    setCurrentNoteText={setCurrentNoteText}
                    currentNoteTimestamp={currentNoteTimestamp}
                    setCurrentNoteTimestamp={setCurrentNoteTimestamp}
                    toggleCompleted={toggleCompleted}
                    toggleBookmark={toggleBookmark}
                    handleAddNote={handleAddNote}
                    handleDeleteNote={handleDeleteNote}
                    handleTopicSelect={handleTopicSelect}
                    topics={topics}
                    selectedVideo={selectedVideo}
                    progress={progress}
                  />
                )
              }
            />

            {/* Routes for footer pages and admin */}
            <Route path="/about" element={<main className="flex-1 p-4 md:p-8"><AboutPage /></main>} />
            <Route path="/contact" element={<main className="flex-1 p-4 md:p-8"><ContactPage /></main>} />
            <Route path="/careers" element={<main className="flex-1 p-4 md:p-8"><CareersPage /></main>} />
            <Route path="/blog" element={<main className="flex-1 p-4 md:p-8"><BlogPage /></main>} />
            <Route path="/help" element={<main className="flex-1 p-4 md:p-8"><HelpPage /></main>} />
            <Route path="/affiliates" element={<main className="flex-1 p-4 md:p-8"><AffiliatesPage /></main>} />
            <Route path="/terms" element={<main className="flex-1 p-4 md:p-8"><TermsPage /></main>} />
            <Route path="/privacy" element={<main className="flex-1 p-4 md:p-8"><PrivacyPage /></main>} />
            <Route path="/cookies" element={<main className="flex-1 p-4 md:p-8"><CookiesPage /></main>} />
            <Route path="/admin/login" element={<main className="flex-1 p-4 md:p-8"><AdminLoginRequiredPage /></main>} />
            <Route
              path="/admin"
              element={
                <ProtectedRouteAdmin user={user}>
                  <main className="flex-1 p-4 md:p-8">
                    <AdminPage />
                  </main>
                </ProtectedRouteAdmin>
              }
            />
            {/* Redirect any unknown paths to home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      )}

      {/* Footer - Render Footer here to be global across all logged-in routes */}
      <Footer />
    </div>
  );
}

export default AuthenticatedLayout;