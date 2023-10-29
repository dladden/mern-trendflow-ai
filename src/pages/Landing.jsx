import React from 'react';
import logo from '../assets/images/test-logo.svg';
import Container from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';
/**
 *
 * @returns
 */
const Landing = () => {
  return (
    <Container>
      <nav>
        <img src={logo} alt="Tech Trend Flow Logo" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Find <span>Tech Trends</span>
          </h1>
          <p>
            "Vite" and "Create React App" (CRA) are both build
            tools/environments for creating modern web applications, with each
            having its own advantages. Saying one is "better" than the other is
            subjective, as it often depends on specific use cases, preferences,
            and project requirements. However, let's discuss some advantages of
          </p>
          <Link to="/register" className="btn register-link">
            Create Account
          </Link>
          <Link to="/login" className="btn register-link">
            Start Using
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Landing;
