// CustomButton.jsx
import React from 'react';
import './CustomButton.css';

const CustomButton = ({ buttonText }) => {
  return (
    <button className="glitch-button">
      {buttonText}
    </button>
  );
};

export default CustomButton;
