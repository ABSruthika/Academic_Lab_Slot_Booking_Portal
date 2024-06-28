// Main.js
import React, { useState } from 'react';
import LoginForm from '../auth/LoginForm';
import RegisterForm from '../auth/RegisterForm';
import './Main.css';
import img1 from '../assets/img1.jpg';

function Main() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="main-page">
      <div className="container">
        <div className="section">
          <div className="left-section">
            <img src={img1} alt="Welcome" />
          </div>
          <div className="right-section">
            <h1 className="header">BookMyLab</h1>
            {isLogin ? <LoginForm /> : <RegisterForm />}
            <div className="toggle-buttons">
              <p>
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button onClick={toggleMode}>{isLogin ? "Register" : "Login"}</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
