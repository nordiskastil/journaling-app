// client/src/services/gratitude.js
// This service handles gratitude entries with the backend API.
import API_BASE from '../utils/api';

export const getGratitudeEntries = async (userId) => {
  const res = await fetch(`${API_BASE}/gratitude/${userId}`);
  return await res.json();
};

export const createGratitudeEntry = async (entry) => {
  const res = await fetch(`${API_BASE}/gratitude`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
  });

  return await res.json();
};
