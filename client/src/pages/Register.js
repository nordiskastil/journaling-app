// client/src/pages/Register.js
// This page allows users to register for the MoodFlow Journal app.
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import headerImage from '../assets/Login-illustration.png';

// Register component handles user registration
const Register = () => {
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
      setError('Registration failed');
    }
  };

  // Render the registration form with name and password fields
  return (
    <div className="register-page">
      <header className="page-header-image">
        <img src={headerImage} alt="Header" className="full-width-image" />
      </header>

      <form onSubmit={handleSubmit} className="register-form">
        <h1>Register</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Create a password"
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
