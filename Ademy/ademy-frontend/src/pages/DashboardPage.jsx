import React from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import VideoPlayer from '../components/VideoPlayer';
import NotesSection from '../components/NotesSection';

const DashboardPage = ({
  level,
  levels, // New prop
  handleLevelSelect,
  completedVideos,
  selectedTopicIdx,
  sidebarOpen,
  quote,
  bookmarkedVideos,
  videoNotes,
  currentNoteText,
  setCurrentNoteText,
  currentNoteTimestamp,
  setCurrentNoteTimestamp,
  toggleCompleted,
  toggleBookmark,
  handleAddNote,
  handleDeleteNote,
  handleTopicSelect,
  topics,
  selectedVideo,
  progress,
}) => {
  return (
    <>
      {/* Main Content Area (Video, Notes) */}
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <VideoPlayer
            selectedVideo={selectedVideo}
            toggleCompleted={toggleCompleted}
            completedVideos={completedVideos}
            toggleBookmark={toggleBookmark}
            bookmarkedVideos={bookmarkedVideos}
          />
          <NotesSection
            selectedVideo={selectedVideo}
            videoNotes={videoNotes}
            currentNoteTimestamp={currentNoteTimestamp}
            setCurrentNoteTimestamp={setCurrentNoteTimestamp}
            currentNoteText={currentNoteText}
            setCurrentNoteText={setCurrentNoteText}
            handleAddNote={handleAddNote}
            handleDeleteNote={handleDeleteNote}
          />
          <div className="mb-2 text-center text-purple-600 dark:text-purple-300 font-semibold italic">
            {quote}
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <DashboardSidebar
        level={level}
        levels={levels} // Pass it down
        handleLevelSelect={handleLevelSelect}
        progress={progress}
        topics={topics}
        selectedTopicIdx={selectedTopicIdx}
        handleTopicSelect={handleTopicSelect}
        sidebarOpen={sidebarOpen}
      />
    </>
  );
};

export default DashboardPage;
