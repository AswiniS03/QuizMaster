import React, { useState } from 'react';

const Step3_Verification = ({ data, handleSubmit, goToPrev, error, setError }) => {
    const [verificationMethod, setVerificationMethod] = useState('email');
    const [codeSent, setCodeSent] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');

    const sendCode = () => {
        setError('');
        console.log(`Sending code via ${verificationMethod} to ${data[verificationMethod]}`);
        alert(`A 6-digit verification code has been sent to your ${verificationMethod}. (Simulated)`);
        setCodeSent(true);
    };

    const verifyCode = (e) => {
        e.preventDefault();
        if (verificationCode === '123456') { // Use a real API check here
            handleSubmit(e);
        } else {
            setError('Invalid verification code. Please try again.');
        }
    };

    return (
        <div className="login-form">
            <p className="subtitle">Verify your identity to complete registration.</p>


            <div className="input-group">
                <label>Choose Verification Method</label>

                {/* Use a new class: .verification-options */}
                <div className="verification-options">

                    {/* Email Option */}
                    <label className={`verification-card ${verificationMethod === 'email' ? 'active-method' : ''}`}>
                        <input
                            type="radio"
                            name="method"
                            value="email"
                            checked={verificationMethod === 'email'}
                            onChange={() => setVerificationMethod('email')}
                            className="hidden-radio" // Class to hide the default radio button
                        />
                        📧 Email
                    </label>

                    {/* Phone Option */}
                    <label className={`verification-card ${verificationMethod === 'phone' ? 'active-method' : ''}`}>
                        <input
                            type="radio"
                            name="method"
                            value="phone"
                            checked={verificationMethod === 'phone'}
                            onChange={() => setVerificationMethod('phone')}
                            className="hidden-radio"
                        />
                        📱 Phone
                    </label>

                </div>
            </div>

            {!codeSent ? (
                <div className="input-group">
                    <p style={{ fontSize: '0.9rem', color: '#6a6a8e' }}>
                        We will send a code to: {data[verificationMethod]}
                    </p>
                    <button type="button" onClick={sendCode} className="login-button" style={{ backgroundColor: '#007bff' }}>
                        Send Verification Code
                    </button>
                </div>
            ) : (
                <form onSubmit={verifyCode}>
                    <div className="input-group">
                        <label htmlFor="code">Enter 6-Digit Code</label>
                        <input type="text" id="code" placeholder="------" required maxLength="6"
                            value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)}
                        />
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    <div className="form-buttons-group">
                        <button type="button" onClick={goToPrev} className="secondary-button">
                            &larr; Back
                        </button>
                        <button type="submit" className="login-button">
                            Complete Registration!
                        </button>
                    </div>
                </form>
            )}

        </div>
    );
};

export default Step3_Verification;