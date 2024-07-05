import React from 'react';
import './MyProfile.css';
import avatar from '../assets/avatar2.jpg';

function MyProfile() {
  return (
    <div className="my-profile-page">
      <div className="profile-header">
        <img src={avatar} alt="Profile" className="profile-photo" />
        <div className="profile-name">
          <h2>Sruthika A B</h2>
          <p className="profile-title">Computer Science Student</p>
        </div>
      </div>
      <div className="profile-details">
        <p><strong>Bio:</strong> Enthusiastic student with a passion for coding and web development.</p>
        <p><strong>Major:</strong> Computer Science</p>
        <p><strong>Year:</strong> Final Year</p>
        <p><strong>Batch:</strong> 2021 - 2025 Batch</p>
        <p><strong>Email:</strong> <a href="mailto:sruthika.cs21@bitsathy.ac.in">sruthika.cs21@bitsathy.ac.in</a></p>
      </div>
    </div>
  );
}

export default MyProfile;
