import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../assets/wrappers/Dashboard';
import { SidebarSmall, Sidebar, Navbar } from '../components';

const DashboardLayout = () => {
  return (
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
  );
};

export default DashboardLayout;
