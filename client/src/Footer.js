import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} QuizMaster. All Rights Reserved. | 
          <a href="/privacy" className="footer-link"> Privacy Policy </a> | 
          <a href="/terms" className="footer-link"> Terms of Use</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;