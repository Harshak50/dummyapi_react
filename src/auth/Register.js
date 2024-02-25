import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="container">
      <h2>Register</h2>
      {/* Your registration form here */}
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Register;
