import React from 'react';
import Container from '../assets/wrappers/Navbar';
import { IoIosArrowForward } from 'react-icons/io';
import Logo from './Logo';

function Navbar() {
  return (
    <Container>
      <div className="nav-center">
        <button type="button" className="toggle-btn">
          <IoIosArrowForward />
        </button>
        <div>
          <Logo />
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
