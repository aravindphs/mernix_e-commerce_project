import React from "react";
import "./CSS/LoginSignup.css"

const LoginSignup = () => {
  return (
    <div className="login-signup">
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginFields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginSignup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
