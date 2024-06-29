// StudentDashboard.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from './Home';
import BookSlot from './BookSlot';
import ViewSlot from './ViewSlot';
import MyProfile from './MyProfile';
import './StudentDashboard.css';

function StudentDashboard() {
  return (
    <div className="student-dashboard">
      <Navbar />
      <div className="dashboard-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="book-slot" element={<BookSlot />} />
          <Route path="view-slot" element={<ViewSlot />} />
          <Route path="my-profile" element={<MyProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default StudentDashboard;
