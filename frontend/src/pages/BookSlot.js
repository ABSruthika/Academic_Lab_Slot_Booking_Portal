import React, { useState } from 'react';
import './BookSlot.css';

function BookSlot() {
  const [regulation, setRegulation] = useState('');
  const [semester, setSemester] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Slot booking submitted:', { regulation, semester });
    // Add your form submission logic here
  };

  return (
    <div className="book-slot-page">
      <h2>Book a Slot</h2>
      <form onSubmit={handleSubmit} className="book-slot-form">
        <div className="input-group">
          <label htmlFor="regulation">Regulation:</label>
          <select id="regulation" value={regulation} onChange={(e) => setRegulation(e.target.value)} required>
            <option value="" disabled>Select a regulation</option>
            <option value="R18">R21</option>
            <option value="R21">R18</option>
            <option value="R22">R13</option>
            <option value="R24">R10</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="semester">Semester:</label>
          <select id="semester" value={semester} onChange={(e) => setSemester(e.target.value)} required>
            <option value="" disabled>Select a semester</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Next</button>
      </form>
      
    </div>
  );
}

export default BookSlot;
