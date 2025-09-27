import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Login'; 
import SignupWizard from './SignupWizard';
import HomePage from './HomePage';
import AppLayout from './AppLayout';
import AboutPage from './ABoutPage';
function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/login" element={<LoginPage/>} /> 
          <Route path="/signup" element={<SignupWizard />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;