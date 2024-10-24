// components/Card.jsx
import React from 'react';
import '../../App.css';


const Content_background = ({ children, className, padding="p-4"}) => {
  return (
    <div className={`Content_background ${className} ${padding}`}>
      {children}
    </div>
  );
};

export default Content_background;
