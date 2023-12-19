import React, { useState } from 'react';
import '../components/signinup/SignInUp.css';

const SignINUPPage = () => {
  const [userType, setUserType] = useState('user'); // Default to 'user' login
  const [aadharCard, setAadharCard] = useState('');
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [useFingerprint, setUseFingerprint] = useState(false);

  const handleSignInSubmit = (e) => {
    e.preventDefault();

    // Handle sign-in logic here
    if (userType === 'user') {
      if (useFingerprint) {
        // Perform fingerprint authentication logic
        console.log('Performing Fingerprint Authentication');
      } else {
        console.log(`Aadhar Card: ${aadharCard} and OTP: ${otp}`);
        localStorage.setItem('userAadharCard', aadharCard);
        localStorage.setItem('userOTP', otp);
      }
    } else if (userType === 'aashaWorker') {
      // Handle Aasha Worker login logic with email and password
      console.log(`Aasha Worker Login: Email: ${email}, Password: ${password}`);
      // You can add authentication logic for Aasha Worker login here
    }

    // Reload the page after signing in
    window.location.reload();
  };

  const handleFingerprintOption = () => {
    // Set useFingerprint to true and show the fingerprint pop-up
    setUseFingerprint(true);
    // You can implement the logic to show the fingerprint pop-up here
    console.log('Show Fingerprint Pop-up');
  };

  return (
    <div className="form">
      <div className="form-container">
        <form className='form-section' onSubmit={handleSignInSubmit}>
          {userType === 'user' && (
            <>
              <input type="text" placeholder='Aadhar Card' value={aadharCard} onChange={(e) => setAadharCard(e.target.value)} />
              <input type="text" placeholder='OTP Verification' value={otp} onChange={(e) => setOtp(e.target.value)} />
            </>
          )}
          {userType === 'aashaWorker' && (
            <>
              <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </>
          )}
          <div>
            <label style={{ color: 'white' }}>
              Use Fingerprint
              <input type="checkbox" checked={useFingerprint} onChange={() => setUseFingerprint(!useFingerprint)} />
            </label>
            {useFingerprint && (
              <button type="button" onClick={handleFingerprintOption} style={{ color: 'white' }}>Authenticate with Fingerprint</button>
            )}
          </div>
          <button type="submit" style={{ color: 'white' }}>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignINUPPage;
