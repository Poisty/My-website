// components/Card.jsx
import React from 'react';
import '../../App.css'; // Go up two levels to access App.css


const Card = ({ children, className, padding="p-4"}) => {
  return (
    <div className={`card ${className} ${padding}`}>
      {children}
    </div>
  );
};

export default Card;
