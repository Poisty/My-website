// components/Card.jsx
import React from 'react';
import '../../App.css'; // Go up two levels to access App.css


const Card_2 = ({ children, className, padding="p-4"}) => {
  return (
    <div className={`card_2 ${className} ${padding}`}>
      {children}
    </div>
  );
};

export default Card_2;
