//AuthForm.js
import React, { useState } from 'react';
import './AuthForm.css';

const AuthForm = ({ type }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (type === 'login') {
      console.log('Login submitted:', username, password);
    } else {
      console.log('Registration submitted:', username, password, email, role);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>{type === 'login' ? 'Login' : 'Register'}</h2>
      <div className="input-group">
        <i className="fas fa-user icon"></i>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
      </div>
      {type === 'register' && (
        <div className="input-group">
          <i className="fas fa-envelope icon"></i>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
      )}
      <div className="input-group">
        <i className="fas fa-lock icon"></i>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </div>
      {type === 'register' && (
        <div className="input-group">
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="" disabled hidden>Role</option>
            <option value="student">Student</option>
            <option value="staff">Staff</option>
          </select>
        </div>
      )}
      <button type="submit" className="submit-button">
        {type === 'login' ? 'Login' : 'Register'}
      </button>
    </form>
  );
};

export default AuthForm;
