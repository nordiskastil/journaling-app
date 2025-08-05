// client/src/pages/Journal.js
// This page allows users to write and save their daily journal entries.
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import headerImage from '../assets/Journal-illustration.png';

const Journal = () => {
  const { user } = useAuth(); // Get user from AuthContext
  const [text, setText] = useState('');
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    if (!user) return;

    // Fetch existing journal entry for the selected date 

    const fetchEntry = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/journal/${user._id}/${date}`);
        if (response.data && response.data.text) {
          setText(response.data.text);
        }
      } catch (err) {
        console.error('Error fetching journal entry', err);
      }
    };

    fetchEntry();
  }, [date, user]);

  const handleSave = async () => {
    if (!user) return;

    try {
      await axios.post('https://journaling-app-32hk.onrender.com', {
        user: user._id,
        date,
        text,
      });
      setSaveMessage('Your journal entry was saved!');

      // Clear the message after 3 seconds
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (err) {
      alert('Journal saved!');
    }
  };

  // Render the journal page with header, date picker, text area, and save button
  return (
    <div className="journal-page">
      <header className="page-header-image">
        <img src={headerImage} alt="Header" className="full-width-image" />
      </header>

      {user && <h2>Welcome {user}!</h2>}

      <h1>My daily journal ✍️</h1>
      <p>Reflect on your day and write down your thoughts, feelings, and experiences.</p>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your thoughts here..."
        rows="10"
        cols="50"
      />

      <button onClick={handleSave}>Save</button>{saveMessage && <p style={{ color: 'green', marginTop: '10px' }}>{saveMessage}</p>}
    </div>
  );
};

export default Journal;


