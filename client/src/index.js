// client/src/index.js
// This is the entry point of the React application.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { useAuth } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
