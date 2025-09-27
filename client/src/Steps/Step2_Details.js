import React from 'react';

const Step2_Details = ({ data, updateData, goToNext, goToPrev, error }) => {
  const { role, institution, studentYear, studentCourse, teacherDepartment, teacherOtherDetails } = data;

  const handleNext = (e) => {
    e.preventDefault();
    
    // Role-specific validation
    if (!role || !institution) {
      alert("Please select a role and enter institution name.");
      return;
    }
    if (role === 'student' && (!studentYear || !studentCourse)) {
      alert("Please enter your academic year and course.");
      return;
    }
    if (role === 'teacher' && !teacherDepartment) {
      alert("Please enter your department.");
      return;
    }

    goToNext(e);
  };

  const renderConditionalFields = () => {
    switch (role) {
      case 'student':
        return (
          <>
            <div className="input-group">
              <label htmlFor="studentYear">Academic Standard/Year</label>
              <input type="text" id="studentYear" placeholder="e.g., 10th std, 1st year" required
                value={studentYear} onChange={(e) => updateData({ studentYear: e.target.value })}
              />
            </div>
            <div className="input-group">
              <label htmlFor="studentCourse">Course/Program</label>
              <input type="text" id="studentCourse" placeholder="e.g., School, MBA" required
                value={studentCourse} onChange={(e) => updateData({ studentCourse: e.target.value })}
              />
            </div>
          </>
        );
      case 'teacher':
        return (
          <>
            <div className="input-group">
              <label htmlFor="teacherDepartment">Department</label>
              <input type="text" id="teacherDepartment" placeholder="e.g., Computer Science" required
                value={teacherDepartment} onChange={(e) => updateData({ teacherDepartment: e.target.value })}
              />
            </div>
            <div className="input-group">
              <label htmlFor="teacherOtherDetails">Other Relevant Details (Optional)</label>
              <input type="text" id="teacherOtherDetails" placeholder="e.g., Certified Examiner"
                value={teacherOtherDetails} onChange={(e) => updateData({ teacherOtherDetails: e.target.value })}
              />
            </div>
          </>
        );
      // Parent role can have optional fields if needed, or none at all
      default:
        return null;
    }
  };

  return (
    <form className="login-form" onSubmit={handleNext}>
      <p className="subtitle">Select your role and institution.</p>
      
      <div className="input-group">
        <label htmlFor="institution">Institution Name</label>
        <input type="text" id="institution" placeholder="Your School, College, or Company" required
          value={institution} onChange={(e) => updateData({ institution: e.target.value })}
        />
      </div>

      <div className="input-group">
        <label htmlFor="role">Select Role</label>
        <select id="role" required className="role-select"
          value={role} onChange={(e) => updateData({ role: e.target.value })}
        >
          <option value="">-- Choose Role --</option>
          <option value="student">Student </option>
          <option value="teacher">Teacher </option>
          <option value="parent">Parent </option>
        </select>
      </div>

      {renderConditionalFields()}
      
      {error && <p className="error-message">{error}</p>}
      
      <div className="form-buttons-group">
        <button type="button" onClick={goToPrev} className="secondary-button">
          &larr; Back
        </button>
        <button type="submit" className="login-button">
          Next: Verification
        </button>
      </div>
    </form>
  );
};

export default Step2_Details;