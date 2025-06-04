import React, { useState, useEffect } from 'react';

function TutorialList({ tutorials }) {
  // Load completed IDs from localStorage or start with empty array
  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem('completedTutorials');
    return saved ? JSON.parse(saved) : [];
  });

  // Toggle completion
  const toggleComplete = (id) => {
    let updated;
    if (completed.includes(id)) {
      updated = completed.filter(c => c !== id);
    } else {
      updated = [...completed, id];
    }
    setCompleted(updated);
    localStorage.setItem('completedTutorials', JSON.stringify(updated));
  };

  return (
    <div>
      {tutorials.map(tutorial => (
        <div key={tutorial.id} style={{ marginBottom: '12px' }}>
          <h3 style={{ textDecoration: completed.includes(tutorial.id) ? 'line-through' : 'none' }}>
  {tutorial.title}
</h3>
          <button onClick={() => toggleComplete(tutorial.id)}>
            {completed.includes(tutorial.id) ? 'Mark as Incomplete' : 'Mark as Completed'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default TutorialList;
