// client/src/context/AuthContext.js
// This context provides authentication state and methods for login/logout.
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

// AuthProvider component to wrap the application and provide auth state
// It initializes user state from localStorage and provides login/logout methods. 
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('user');
      if (!saved || saved === 'undefined') {
        return null;
      }
      return JSON.parse(saved);
    } catch (error) {
      console.error('Error parsing user from localStorage', error);
      return null;
    }
  });

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
