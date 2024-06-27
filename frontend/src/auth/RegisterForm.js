//RegisterForm.js
import React, { useState } from 'react';
import './RegisterForm.css'; 

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Registration submitted:', username, password, email, role);
  };

  return (
    <form onSubmit={handleSubmit} className="form-register">
      <h2>Register</h2>
      <div className="input-group">
        <i className="fas fa-user icon"></i>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      </div>
      <div className="input-group">
        <i className="fas fa-envelope icon"></i>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      </div>
      <div className="input-group">
        <i className="fas fa-lock icon"></i>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      </div>
      <div className="input-group">
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="" disabled hidden>Role</option>
          <option value="student">Student</option>
          <option value="staff">Staff</option>
        </select>
      </div>
      <button type="submit" className="submit-button">Register</button>
    </form>
  );
}

export default RegisterForm;
