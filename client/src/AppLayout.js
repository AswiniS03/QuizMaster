import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; 
import './AppLayout.css'; 

const AppLayout = ({ children }) => {
  return (
    <div className="app-container"> 
      
      <Navbar /> 
      
      <main className="content-area">
        {children}
      </main>
      
      <Footer />
      
    </div>
  );
};

export default AppLayout;