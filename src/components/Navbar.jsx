import React from 'react';
import Container from '../assets/wrappers/Navbar';
import { IoIosArrowForward, IoIosArrowBack, IoIosMenu } from 'react-icons/io';
import { dashboardNavLinks } from '../assets/utils/data';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
s;
import { useDashboardContext } from '../pages/DashboardLayout';

function Navbar() {
  //toggle sidebar coming from DashboardLayout.jsx as context
  const { showSidebar, toggleSidebar } = useDashboardContext();
  s;
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
          {dashboardNavLinks.map((link) => {
            const { text, path } = link;
            return (
              <NavLink to={path} key={text} className="">
                {text}
              </NavLink>
            );
          })}
        </div>
        <div className="btn-container">toggle/logout</div>
      </div>
    </Container>
  );
}

export default Navbar;
