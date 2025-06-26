import React from 'react';

const NotesSection = ({
  selectedVideo,
  videoNotes,
  currentNoteTimestamp,
  setCurrentNoteTimestamp,
  currentNoteText,
  setCurrentNoteText,
  handleAddNote,
  handleDeleteNote,
}) => {
  if (!selectedVideo || !selectedVideo.videoId) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 my-4 animate-fadein">
      <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
        My Notes for this Video
      </h3>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Timestamp (e.g., 02:15)"
          value={currentNoteTimestamp}
          onChange={(e) => setCurrentNoteTimestamp(e.target.value)}
          className="w-full p-2 mb-2 border rounded-md dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
        />
        <textarea
          placeholder="Write your note here..."
          value={currentNoteText}
          onChange={(e) => setCurrentNoteText(e.target.value)}
          rows="3"
          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
        />
        <button
          onClick={() => handleAddNote(selectedVideo.videoId)}
          className="mt-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold shadow transition-colors"
        >
          Add Note
        </button>
      </div>
      <div className="space-y-2">
        {(videoNotes[selectedVideo.videoId] || []).length === 0 && (
          <p className="text-sm text-gray-500 dark:text-gray-400">No notes for this video yet.</p>
        )}
        {(videoNotes[selectedVideo.videoId] || []).map((note) => (
          <div key={note.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm flex justify-between items-start">
            <div>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400 mr-2">[{note.timestamp}]</span>
              <span className="text-gray-700 dark:text-gray-300">{note.text}</span>
            </div>
            <button
              onClick={() => handleDeleteNote(selectedVideo.videoId, note.id)}
              className="text-red-500 hover:text-red-700 dark:hover:text-red-400 text-xs"
            >🗑️</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesSection;