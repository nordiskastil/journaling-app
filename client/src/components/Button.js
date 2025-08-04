// components/Button.js
import React from 'react';

const Button = ({ text, onClick, type = "button", style = {} }) => (
  <button type={type} onClick={onClick} style={style}>
    {text}
  </button>
);

export default Button;
