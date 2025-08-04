// client/src/App.js
// This is the main application component that sets up routing and renders pages.
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Journal from './pages/Journal';
import Gratitude from './pages/Gratitude';
import Routines from './pages/Routines';
import Login from './pages/Login';
import Register from './pages/Register';

import './App.css';

// App component renders the main structure of the application
// It includes the Navbar and sets up routes for different pages.
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/gratitude" element={<Gratitude />} />
          <Route path="/routines" element={<Routines />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;

