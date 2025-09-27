import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setError('');

    if (!email || !password) {
      setError('Please enter both your email and password.');
      return;
    }
    
    console.log('Login attempt with:', { email, password });
    
    alert('Login successful! Redirecting to Quiz Dashboard...');
  };

  return (
     <div className="login-container login-page-container"> 
      <div className="login-card" style={{ maxWidth: '400px' }}> 
        
        
        <h2 style={{ marginTop: '0' }}>Welcome Back! </h2>
        <p className="subtitle">Sign in to resume your quiz journey.</p>
        
        <form className="login-form" onSubmit={handleSubmit}>
          
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
            />
          </div>

          <div style={{ textAlign: 'right', marginBottom: '15px', marginTop: '-10px' }}>
            <Link to="/forgot-password" style={{ color: '#6a6a8e', fontSize: '0.9rem', textDecoration: 'none' }}>
              Forgot Password?
            </Link>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-button">
            Log In
          </button>
        </form>

        <div className="login-footer" style={{ marginTop: '25px' }}>
          Don't have an account? 
          <Link to="/signup"> Create one here</Link>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;