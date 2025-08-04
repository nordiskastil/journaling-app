// client/src/pages/Gratitude.js
// This page allows users to reflect on their day by writing down three things they are grateful for
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import headerImage from '../assets/Gratitude-illustration.png';

const Gratitude = () => {
  const [entries, setEntries] = useState(['', '', '']);
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const userId = '123'; // Replace with actual user ID

  const handleChange = (index, value) => {
    if (value.length <= 300) {
      const newEntries = [...entries];
      newEntries[index] = value;
      setEntries(newEntries);
    }
  };

  // Function to save gratitude entries
  // It sends a POST request to the server with the user's gratitude entries and date.  
  const handleSave = async () => {
    try {
      await axios.post('http://localhost:5000/api/gratitude', {
        user: userId,
        date,
        entries,
      });

    } catch (err) {
      alert('Gratitude saved!');
    }
  };

  return (
    <div className="gratitude-page">
      <header className="page-header-image">
        <img src={headerImage} alt="Header" className="full-width-image" />
      </header>
      <h1>Three things that made me smile today 😊</h1>
      <p className="gratitude-description">
        Reflect on your day and write down three things that brought you joy or gratitude.
      </p>

      {/* Date Picker */}
      <div className="date-picker">
        <label htmlFor="gratitude-date">Select Date:</label>
        <input
          type="date"
          id="gratitude-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          max={new Date().toISOString().substring(0, 10)}
        />
      </div>

      {entries.map((entry, index) => (
        <div key={index} className="gratitude-entry">
          <textarea
            value={entry}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder={`${index + 1}`}
            maxLength={300}
            rows={3}
            cols={50}
          />
        </div>
      ))}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Gratitude;
