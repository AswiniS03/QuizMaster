import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'; // Reuse the shared styling

// Import the Step Components (assuming they are in './Steps/')
import Step1_Basics from './Steps/Step1_Basics';
import Step2_Details from './Steps/Step2_Details';
import Step3_Verification from './Steps/Step3_Verification';

// --- NEW Timeline Component ---
const TimelineStepper = ({ currentStep }) => {
  const steps = [
    { id: 1, name: "Basics" },
    { id: 2, name: "Details" },
    { id: 3, name: "Verify" },
  ];

  return (
    <div className="stepper-container">
      {steps.map(step => (
        <div 
          key={step.id} 
          className={`stepper-step ${currentStep === step.id ? 'active' : ''} ${currentStep > step.id ? 'completed' : ''}`}
        >
          <div className="stepper-icon">
            {/* Show a tick if the step is completed, otherwise show the number */}
            {currentStep > step.id ? (
              <span className="tick-mark">✓</span> 
            ) : (
              step.id
            )}
          </div>
          <div className="stepper-label">{step.name}</div>
        </div>
      ))}
    </div>
  );
};
// -----------------------------

const SignupWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Initial data structure remains the same
    name: '', email: '', phone: '', password: '',
    role: '', institution: '',
    studentYear: '', studentCourse: '',
    teacherDepartment: '', teacherOtherDetails: '',
  });
  const [error, setError] = useState('');

  const updateFormData = (newData) => {
    setFormData(prevData => ({ ...prevData, ...newData }));
  };

  const goToNextStep = (e) => {
    e.preventDefault();
    setError('');

    // *** Validation Check ***
    if (currentStep === 1) {
      if (!formData.name || !formData.email || !formData.phone || !formData.password) {
        setError("Please fill in all basic fields.");
        return;
      }
    }
    // (Other validation from Step 2 should be inside the Step2_Details component's handleNext function)

    setCurrentStep(currentStep + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Final validation and API call logic here...
    console.log("Final Registration Data:", formData);
    alert("Registration Complete! Your account has been verified.");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1_Basics data={formData} updateData={updateFormData} goToNext={goToNextStep} error={error} />;
      case 2:
        return <Step2_Details data={formData} updateData={updateFormData} goToNext={goToNextStep} goToPrev={() => setCurrentStep(1)} error={error} />;
      case 3:
        return <Step3_Verification data={formData} handleSubmit={handleSubmit} goToPrev={() => setCurrentStep(2)} error={error} setError={setError} />;
      default:
        return <Step1_Basics data={formData} updateData={updateFormData} goToNext={goToNextStep} error={error} />;
    }
  };

  return (
    <div className="login-container">
      <div className="login-card" style={{ maxWidth: '500px' }}> {/* Slightly wider card for the timeline */}
        
        {/* RENDER THE NEW TIMELINE */}
        <TimelineStepper currentStep={currentStep} />
        
        <h2 style={{ marginTop: '0' }}>Sign Up Wizard</h2>
        
        {renderStep()}

        <div className="login-footer">
          Already have an account? <Link to="/login">Log In Here</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupWizard;