import React from 'react';
import img from '../assets/images/test-img.jpg';
import Container from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';
import { Logo, LandingNavbar } from '../components';
/**
 *
 * @returns
 */
const Landing = () => {
  return (
    <Container>
      <div>
        <LandingNavbar />
      </div>

      <div className="container page">
        <div className="info">
          <h1>
            Find <span>Tech Trends</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident
          </p>
          <Link to="/register" className="btn register-link">
            Create Account
          </Link>
          <Link to="/login" className="btn btn-color register-link">
            Start Using
          </Link>
        </div>
        <img src={img} alt="" className="img main-img" />
      </div>
    </Container>
  );
};

export default Landing;
