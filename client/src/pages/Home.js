// client/src/pages/Home.js
// This is the start/ home page of the MoodFlow Journal app.
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import headerImage from '../assets/Daily-journal-illustration-bg.png';

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <main className="home-content">
      <div className="home-page">
        <header className="page-header-image">
          <img src={headerImage} alt="Header" className="full-width-image" />
        </header>

        <h1>MoodFlow Journal</h1>
        <p className="app-description">
          🌿 <strong>MoodFlow Journal</strong> is your daily space for reflection, creativity, and emotional clarity.
          Track your thoughts, explore your feelings, and nurture mental wellness—one mindful entry at a time.
        </p>

        {user ? (
          <p className="welcome-message">Welcome back!</p>
        ) : (
          <div className="login-section">
            <p><strong>Please log in to continue.</strong></p>
            <button onClick={() => navigate('/login')}>Login</button>
          </div>
        )}
      </div >
    </main>
  );
};

export default Home;
