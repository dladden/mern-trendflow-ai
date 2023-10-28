import React from 'react';
import { Outlet } from 'react-router-dom';
/**
 * Layout page which will have multiple components done with the use of the router <Outlet>
 * Which acts as a placeholder where nested route components will render.
 */

const HomeLayout = () => {
  return (
    <div>
      <div>
        <nav>Navbar</nav>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
