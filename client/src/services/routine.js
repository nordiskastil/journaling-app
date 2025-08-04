/// client/src/services/routine.js
// This service handles daily routines with the backend API.
import API_BASE from '../utils/api';

export const getRoutines = async (userId) => {
  const res = await fetch(`${API_BASE}/routine/${userId}`);
  return await res.json();
};

export const createRoutine = async (routine) => {
  const res = await fetch(`${API_BASE}/routine`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(routine),
  });

  return await res.json();
};
