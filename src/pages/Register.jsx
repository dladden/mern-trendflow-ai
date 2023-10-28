import React from 'react';
import { Link } from 'react-router-dom';
/**
 * Register page will have a registration portion for the user should they choose to have an account
 * @returns
 */
const Register = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Register;
