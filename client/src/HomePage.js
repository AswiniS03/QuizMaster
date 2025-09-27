import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 
import './LoginPage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      
      <main className="hero-section">
        <div className="hero-content">
          <h2 className="headline">
            Test Your Knowledge. Master Your Subject.
          </h2>
          <p className="tagline">
            The professional platform for students, teachers, and parents to create, share, and conquer educational quizzes.
          </p>
          
          <div className="cta-group">
            <Link to="/signup" className="main-cta-button login-button">
              Get Started Now (It's Free!)
            </Link>
            <Link to="/about" className="learn-more-link">
              Learn More About Our Platform &rarr;
            </Link>
          </div>
        </div>
        
        <div className="hero-graphic">
           <p className="graphic-text">Quiz Dashboard Preview</p>
        </div>
      </main>

    </div>
  );
};

export default HomePage;