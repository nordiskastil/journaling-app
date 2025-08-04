/// client/src/services/journal.js
// This service handles journal entries with the backend API.
import API_BASE from '../utils/api';

export const getJournalEntry = async (userId, date) => {
  const res = await fetch(`${API_BASE}/journal/${userId}/${date}`);
  return await res.json();
};

export const saveJournalEntry = async (entry) => {
  const res = await fetch(`${API_BASE}/journal`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
  });

  return await res.json();
};
