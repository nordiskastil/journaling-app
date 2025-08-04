// components/InputField.js
import React from 'react';

// InputField component
// This component renders a labeled input field with error handling.
const InputField = ({ label, type = "text", value, onChange, placeholder, error }) => (
  <div className="input-field">
    <label>{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
    {error && <p className="error">{error}</p>}
  </div>
);

export default InputField;