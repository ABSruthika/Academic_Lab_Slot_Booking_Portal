// Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <h2>Welcome to BookMyLab</h2>
      <p>This is your dashboard where you can manage your lab bookings.</p>
      <div className="notifications">
        <h3>Notifications</h3>
        <ul>
          <li>Your next lab booking is on 1st July 2024 at 10:00 AM.</li>
          <li>Lab slot for Chemistry is now open.</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
