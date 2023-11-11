import React from 'react';
import { services } from './data'; // Import services from data.js
import { Container } from '../assets/wrappers/LandingServices'; // Import styled components

const LandingServices = () => {
  return (
    <Container>
      {services.map((service) => (
        <div className="feature-card" key={service.id}>
          <span className="icon">{service.icon}</span>{' '}
          {/* TODO: set up icon component or element */}
          <h3 className="title">{service.title}</h3>
          <p className="text">{service.text}</p>
        </div>
      ))}
    </Container>
  );
};

export default LandingServices;
