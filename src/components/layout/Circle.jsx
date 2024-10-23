// components/Card.jsx
import React from 'react';
import '../../App.css'; // Go up two levels to access App.css


const Circle = ({ children, className, padding="p-4"}) => {
  return (
    <div className={`Circle ${className} ${padding}`}>
      {children}
    </div>
  );
};

export default Circle;
