// StudentDashboard.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; 
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import BookSlot from '../pages/BookSlot';
import ViewSlot from '../pages/ViewSlot';
import MyProfile from '../pages/MyProfile';
import './StudentDashboard.css'; 
import Footer from '../components/Footer';
function StudentDashboard() {
  return (
    <div className="student-dashboard">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="bookslot" element={<BookSlot />} />
          <Route path="viewslot" element={<ViewSlot />} />
          <Route path="myprofile" element={<MyProfile />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default StudentDashboard;