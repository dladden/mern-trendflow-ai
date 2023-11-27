import React, { useState } from 'react';
import Container from '../assets/wrappers/Navbar';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import Logo from './Logo';
import { useDashboardContext } from '../pages/DashboardLayout';

function Navbar() {
  //toggle sidebar coming from DashboardLayout.jsx as context
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Container>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          {showSidebar ? <IoIosArrowBack /> : <IoIosArrowForward />}
        </button>
        <div>
          <Logo />
        </div>
        <div className="btn-container">toggle/logout</div>
      </div>
    </Container>
  );
}

export default Navbar;
