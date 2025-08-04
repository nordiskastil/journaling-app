// client/src/pages/Login.js
// This page allows users to log in to the MoodFlow Journal app.
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import headerImage from '../assets/Daily-journal-illustration-bg.png';

// Login component handles user authentication  
const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(name, password);
      navigate('/journal');
    } catch (err) {
      setError('Invalid login credentials');
    }
  };

  // Render the login form with name and password fields
  return (
    <div className="login-page">
      <header className="page-header-image">
        <img src={headerImage} alt="Header" className="full-width-image" />
      </header>

      <form onSubmit={handleSubmit} className="login-form">
        <h1>Login</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
