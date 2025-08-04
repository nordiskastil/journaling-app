// client/src/pages/Routines.js
// This page allows users to manage their daily routines in the MoodFlow Journal app.
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import headerImage from '../assets/Routines-illustration.png';
import './Routines.css';

// Routines component handles daily routines management
const Routines = () => {
  const { user } = useAuth();
  const [text, setText] = useState('');
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [tasks, setTasks] = useState(() =>
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      text: '',
      checked: false,
    }))
  );

  // Fetch existing routine data for the selected date  
  // This effect runs when the component mounts or when the date changes.
  // It retrieves the user's routine data from the server and populates the state.
  useEffect(() => {
    if (!user) return;

    axios
      .get(`/api/routines/${user._id}/${date}`)
      .then((res) => {
        const data = res.data || {};
        setText(data.text || '');
        setTasks(data.tasks || tasks);
      })
      .catch((err) => console.error(err));
    // eslint-disable-next-line
  }, [date, user]);

  const handleTaskTextChange = (id, newText) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, text: newText.slice(0, 100) } : task
      )
    );
  };

  const handleTaskCheck = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const handleSave = () => {
    if (!user) return;

    axios
      .post('/api/routines', {
        user: user._id,
        date,
        text,
        tasks,
      })
      .catch((err) => console.error(err));

    alert('Routine saved!');
  };


  return (
    <div className="routines-page">
      <header className="page-header-image">
        <img src={headerImage} alt="Header" className="full-width-image" />
      </header>

      <h1>Daily Routine 📆</h1>
      <p className="routine-description">
        Plan your day and set your intentions. What do you want to achieve today?
      </p>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <h2>Notes</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What’s your plan today?"
        rows={10}
        className="notes-textarea"
      />

      <h2>To-do List</h2>
      <ul className="routine-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-input-wrapper">
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => handleTaskCheck(task.id)}
              className="task-checkbox"
            />
            <input
              type="text"
              maxLength={100}
              value={task.text}
              onChange={(e) => handleTaskTextChange(task.id, e.target.value)}
              placeholder={`Task ${task.id}`}
              className="task-text-input"
            />
          </li>
        ))}
      </ul>

      <button className="routine-button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default Routines;


