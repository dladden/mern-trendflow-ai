import React, { useState } from 'react';
import Container from '../assets/wrappers/Navbar';
import { IoIosArrowForward, IoIosArrowBack, IoIosMenu } from 'react-icons/io';
import Logo from './Logo';
import { useDashboardContext } from '../pages/DashboardLayout';

function Navbar() {
  //toggle sidebar coming from DashboardLayout.jsx as context
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Container>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn arrow-btn"
          onClick={toggleSidebar}
        >
          {showSidebar ? <IoIosArrowBack /> : <IoIosArrowForward />}
        </button>
        <button
          type="button"
          className="toggle-btn menu-btn"
          onClick={toggleSidebar}
        >
          <IoIosMenu />
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
