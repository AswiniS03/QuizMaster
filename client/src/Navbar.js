import React from 'react';
import { Link } from 'react-router-dom';
// Import the component's dedicated CSS
import './Navbar.css'; 
// Note: You might still need shared classes like 'login-button' 
// from LoginPage.css if you're using them, but we'll prioritize Navbar.css

const Navbar = ({ currentPage }) => {
  return (
    <header className="app-navbar">
      <div className="navbar-content">
        <Link to="/" className="logo-link">
          <h1 className="logo">QuizMaster </h1>
        </Link>
        <nav className="nav-links">
          
          {currentPage !== 'login' && (
            // Using a generic 'login-nav-button' style for consistency
            <Link to="/login" className="login-nav-button secondary-nav-button">Log In</Link>
          )}
          
          {currentPage !== 'signup' && (
            // Reusing the primary button style from the main CSS file
            <Link to="/signup" className="login-nav-button">Sign Up</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;