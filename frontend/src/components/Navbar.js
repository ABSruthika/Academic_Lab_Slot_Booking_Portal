// Navbar.js
import React from 'react';
import './Navbar.css'; 
import bitlogo from '../assets/bitlogo.jpg';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src={bitlogo} alt="Logo" className="logo-image" />
        </div>
        <h1 className="navbar-heading">BookMyLab</h1>
      </div>
      <div className="navbar-right">
        <a href="#home" className="navbar-option">Home</a>        
        <a href="#viewslot" className="navbar-option" >View Slots</a>
        <a href="#profile" className="navbar-option" >My Profile</a>
        <a href="#" className="navbar-option">Log Out</a>
      </div>
    </nav>
  );
}

export default Navbar;
