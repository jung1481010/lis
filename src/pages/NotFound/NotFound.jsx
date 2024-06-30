import React from 'react';
import { FaGrinBeamSweat } from 'react-icons/fa';
import './NotFound.css';
const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Page Not Found</h2>
      <FaGrinBeamSweat style={{ fontSize: '5.625rem' }} />
    </div>
  );
};

export default NotFound;
