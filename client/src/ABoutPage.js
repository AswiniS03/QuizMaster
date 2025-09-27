import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css'; // Dedicated CSS for the About Page

const AboutPage = () => {
  return (
    <div className="about-page-container">
      
      {/* The Navbar and Footer are rendered by AppLayout */}

      <section className="about-hero">
        <h2 className="about-headline">
          Empowering Education Through Smart Quizzing
        </h2>
        <p className="about-tagline">
          QuizMaster is built on the belief that testing should be a tool for learning, not just assessment.
        </p>
      </section>

      {/* Mission Section */}
      <section className="about-section mission-section">
        <div className="section-content">
          <h3 className="section-title">Our Mission</h3>
          <p>
            To provide the most intuitive and comprehensive platform for educational assessment, allowing **teachers** to effortlessly create, **students** to master, and **parents** to track learning progress effectively. We turn every quiz into a focused learning opportunity.
          </p>
        </div>
        <div className="section-graphic">
            

[Image of students collaborating]

        </div>
      </section>
      
      {/* Target Audience / Features Section */}
      <section className="about-section audience-section">
        <h3 className="section-title">Who We Serve</h3>
        <div className="card-grid">
          
          <div className="audience-card">
            <h4>Students 🎓</h4>
            <p>Interactive quizzes, immediate feedback, and personalized study paths help you achieve deeper understanding and better grades.</p>
          </div>
          
          <div className="audience-card">
            <h4>Teachers 👨‍🏫</h4>
            <p>Access smart analytics, auto-grading, and a massive question bank to save time and gain deep insights into class performance.</p>
          </div>
          
          <div className="audience-card">
            <h4>Parents 🏡</h4>
            <p>Stay informed with easy-to-read progress reports and monitor your child's mastery across all subjects right from your phone.</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="about-cta">
        <p>Ready to transform the way you learn and teach?</p>
        <Link to="/signup" className="main-cta-button login-button">
          Join QuizMaster Today
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;