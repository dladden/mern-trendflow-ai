import React, { createContext, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../assets/wrappers/Dashboard';
import { SidebarSmall, Sidebar, Navbar } from '../components';

/**
 * Dashboard Layout takes on components and sets up the layout
 * @returns
 * React Router: user, sidebar (theme). User should be coming from a server
 */

const user = { name: 'Steve' };

//Setting up context for SidebarSmall and Sidebar
const DashboardContext = createContext();

const DashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  //function responsible for setting the dark theme
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
  };
  //setting the sidebar equal to opposite of showSidebar
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  //async function which will connect to the server
  const logoutUser = async () => {
    console.log('user logging out');
  };

  //RETURN -------------------------- RETURN
  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleSidebar,
        toggleDarkTheme,
        logoutUser,
      }}
    >
      <Container>
        <main className="dashboard">
          <SidebarSmall />
          <Sidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Container>
    </DashboardContext.Provider>
  );
};

//exporting as a custom hook which passes the main context
export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
