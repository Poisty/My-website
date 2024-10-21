// components/Card.jsx
import React from 'react';
import '../../App.css'; // Go up two levels to access App.css


const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

export default Card;
