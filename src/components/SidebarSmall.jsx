import React from 'react';
import Container from '../assets/wrappers/SidebarSmall';
import { useDashboardContext } from '../pages/DashboardLayout';

function SidebarSmall() {
  const data = useDashboardContext();
  console.log(data);

  return <Container>Sidebar Small</Container>;
}

export default SidebarSmall;
