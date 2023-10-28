import React from 'react';
import { Link } from 'react-router-dom';
/**
 * Landing page is the first page the user will see
 * @returns
 */
const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
