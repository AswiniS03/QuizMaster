import React from 'react';

const Step1_Basics = ({ data, updateData, goToNext, error }) => {
  return (
    <form className="login-form" onSubmit={goToNext}>
      <p className="subtitle">Let's start with your contact details.</p>

      <div className="input-group">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder="John Doe" required
          value={data.name} onChange={(e) => updateData({ name: e.target.value })}
        />
      </div>

      <div className="input-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="you@example.com" required
          value={data.email} onChange={(e) => updateData({ email: e.target.value })}
        />
      </div>

      <div className="input-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" placeholder="(123) 456-7890" required
          value={data.phone} onChange={(e) => updateData({ phone: e.target.value })}
        />
      </div>

      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="******** (Min. 8 characters)" required
          value={data.password} onChange={(e) => updateData({ password: e.target.value })}
        />
      </div>

      {error && <p className="error-message">{error}</p>}
      
      <button type="submit" className="login-button">
        Next: Your Role Details
      </button>
    </form>
  );
};

export default Step1_Basics;