import React from 'react';
import './MyProfile.css';
import avatar from '../assets/avatar2.jpg';
function MyProfile() {
  return (
    <div className="my-profile-page">
      <div className="profile-header">
        <img src={avatar} alt="Profile" className="profile-photo" />
        <h2>Sruthika A B</h2>
      </div>
      <div className="profile-details">
        <p><strong>Bio:</strong> Enthusiastic student with a passion for coding and web development.</p>
        <p><strong>Major:</strong> Computer Science</p>
        <p><strong>Year:</strong> Final Year</p>
        <p><strong>Batch:</strong> 2021 - 2025 Batch</p>
        <p><strong>Email:</strong> sruthika.cs21@bitsathy.ac.in</p>
      </div>
    </div>
  );
}

export default MyProfile;
