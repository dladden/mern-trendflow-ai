import React from 'react';
import Container from '../assets/wrappers/SidebarSmall';
import { useDashboardContext } from '../pages/DashboardLayout';
import { IoIosClose } from 'react-icons/io';
import Logo from './Logo';
import { dashboardAllLinks } from '../assets/utils/data';
import { NavLink } from 'react-router-dom';
/**
 * Will use conditional rendering to engage certain css classNames
 * @returns
 */
function SidebarSmall() {
  const data = useDashboardContext();
  console.log(data);

  return (
    <Container>
      <div className="sidebar-container show-sidebar">
        <div className="content">
          <button type="button" className="close-btn">
            <IoIosClose />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {dashboardAllLinks.map((link) => {
              const { text, path } = link;
              return (
                <NavLink to={path} key={text} className="nav-link">
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SidebarSmall;
