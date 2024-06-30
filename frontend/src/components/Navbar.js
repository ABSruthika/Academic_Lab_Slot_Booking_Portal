//Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/student-dashboard/home" className="navbar-option">Home</Link>
        <Link to="/student-dashboard/bookslot" className="navbar-option">Book Slot</Link>
        <Link to="/student-dashboard/viewslot" className="navbar-option">View Slots</Link>
        <Link to="/student-dashboard/myprofile" className="navbar-option">My Profile</Link>
        <Link to="/" className="navbar-option">Log Out</Link>
      </div>
    </nav>
  );
}

export default Navbar;
