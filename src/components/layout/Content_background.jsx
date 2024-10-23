// components/Card.jsx
import React from 'react';
import '../../App.css'; // Go up two levels to access App.css


const Content_background = ({ children, className, padding="p-4"}) => {
  return (
    <div className={`Content_background ${className} ${padding}`}>
      {children}
    </div>
  );
};

export default Content_background;
