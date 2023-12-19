import React, { useState } from 'react';
import '../components/signinup/SignInUp.css';

const SignINUPPage = () => {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log(`Sign in with ${signInEmail} and ${signInPassword}`);
  };

  return (
    <div className="form">
      <div className="form-container">
        <form className='form-section' onSubmit={handleSignInSubmit}>
          <input type="email" placeholder='E-Mail' value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} />
          <input type="password" placeholder='Password' value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)} />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignINUPPage;
