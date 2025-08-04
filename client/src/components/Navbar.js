// components/Navbar.js
// This component renders the navigation bar with links to different sections of the app.
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo as a link to Home */}
        <h1 className="logo">
          <Link to="/" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
            🌿MoodFlow Journal
          </Link>
        </h1>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/journal" onClick={() => setMenuOpen(false)}>Journal</Link></li>
          <li><Link to="/gratitude" onClick={() => setMenuOpen(false)}>Gratitude</Link></li>
          <li><Link to="/routines" onClick={() => setMenuOpen(false)}>Routines</Link></li>
          {!user ? (
            <>
              <li><Link to="/login" onClick={() => setMenuOpen(false)}>Log In</Link></li>
              <li><Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link></li>
            </>
          ) : (
            <li><button onClick={handleLogout} className="logout-btn">Log Out</button></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
