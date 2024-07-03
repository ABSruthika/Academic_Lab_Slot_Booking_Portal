import React from 'react';
import './ViewSlot.css';

function ViewSlot() {
  const bookedSlots = [
    { id: 1, date: '2024-07-01', time: '10:00 AM', subject: 'Chemistry', lab: 'Lab 1' },
    { id: 2, date: '2024-07-02', time: '11:00 AM', subject: 'Physics', lab: 'Lab 2' },
    // Add more booked slots here
  ];

  return (
    <div className="view-slot-page">
      <h2>View Booked Slots</h2>
      <table className="slots-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Time</th>
            <th>Subject</th>
            <th>Lab</th>
          </tr>
        </thead>
        <tbody>
          {bookedSlots.map(slot => (
            <tr key={slot.id}>
              <td>{slot.id}</td>
              <td>{slot.date}</td>
              <td>{slot.time}</td>
              <td>{slot.subject}</td>
              <td>{slot.lab}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewSlot;
