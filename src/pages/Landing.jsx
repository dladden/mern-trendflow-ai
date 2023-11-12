import React from 'react';
import img from '../assets/images/test-img.jpg';
import Container from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';
import {
  LandingNavbar,
  LandingHero,
  LandingAbout,
  LandingServices,
} from '../components';
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
      <LandingHero />
      <LandingServices />
      <LandingAbout />
    </Container>
  );
};

export default Landing;
