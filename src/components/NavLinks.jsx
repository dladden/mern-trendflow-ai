import React from 'react';
import { useDashboardContext } from '../pages/DashboardLayout';
import { dashboardAllLinks } from '../assets/utils/data';
import { NavLink } from 'react-router-dom';

function NavLinks() {
  const { toggleSidebar } = useDashboardContext();
  return (
    <div>
      <div className="nav-links">
        {dashboardAllLinks.map((link) => {
          const { text, path } = link;
          return (
            <NavLink
              to={path}
              key={text}
              className="nav-link"
              onClick={toggleSidebar}
              end
            >
              {text}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default NavLinks;
