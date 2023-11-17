import React from 'react';
import { Link } from 'react-router-dom';
import './style/navbar.css'; // Create a corresponding CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        
        CareJar
      </Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        {/* Add more navigation links as needed */}
      </div>
    </nav>
  );
};

export default Navbar;
