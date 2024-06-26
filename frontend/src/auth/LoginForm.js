//LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login submitted:', username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="form-login">
      <h2>Login</h2>
      <div className="input-group">
        <i className="fas fa-user icon"></i>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      <div className="input-group">
        <i className="fas fa-lock icon"></i>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <button type="submit" className="submit-button">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
