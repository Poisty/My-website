// components/Card.jsx
import React from 'react';
import '../../App.css'; // Go up two levels to access App.css


const Glass = ({ children, className, padding="p-4"}) => {
  return (
    <div className={`glass ${className} ${padding}`}>
      {children}
    </div>
  );
};

export default Glass;
