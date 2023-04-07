import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Code to submit login form
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    // Code to submit signup form
  };

  return (
    <div>
      <h1 className='login-name'>Login / Sign-up</h1>

      <form className='form1' onSubmit={handleLoginSubmit}>
        <label className='mail1' htmlFor="email">Email:</label>
        <input className='mail1-input'
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        /><br/>
        <br/>

        <label className='pass1' htmlFor="password">Password:</label>
        <input className='pass1-input'
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        /><br/>
        <br/>
        <Link to="/home">
        <input className='login-button' type="submit" value="Login"/>
        </Link>
      </form>

      <h2 className='alternate-path'>Don't have an account?</h2>

      <form className='form2' onSubmit={handleSignupSubmit}>
        <label className='mail2' htmlFor="signup-email">Email:</label>
        <input className='mail2-input'
          type="email"
          id="signup-email"
          name="signup-email"
          value={signupEmail}
          onChange={(event) => setSignupEmail(event.target.value)}
          required
        /><br/>
        <br/>

        <label className='pass2' htmlFor="signup-password">Password:</label>
        <input className='pass2-input'
          type="password"
          id="signup-password"
          name="signup-password"
          value={signupPassword}
          onChange={(event) => setSignupPassword(event.target.value)}
          required
        /><br/>
        <br/>

        <label className='confirm-pass' htmlFor="confirm-password">Confirm Password:</label>
        <input className='confirm-pass-input'
          type="password"
          id="confirm-password"
          name="confirm-password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        /><br/>
        <br/>
        <Link to="/home">
        <input className='submit-button' type="submit" value="Sign Up" />
        </Link>
      </form>
    </div>
  );
}

export default LoginPage;
