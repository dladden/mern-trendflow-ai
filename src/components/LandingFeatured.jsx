import React from 'react';
import Container from '../assets/wrappers/LandingServices';
import { project1, project2, project3 } from '../data'; // Import your project data

const ProjectBox = ({ project }) => (
  <Container>
    <div className="project-box">
      <a href={`/${project.id}`} target="_blank" rel="noopener noreferrer">
        {project.title}
      </a>
    </div>
  </Container>
);

const LandingFeatured = () => (
  <Container>
    <div className="title-box special-sponsors">Special Sponsors</div>
    {project1.map((project) => (
      <ProjectBox key={project.id} project={project} />
    ))}
    <div className="title-box platinum-sponsors">Platinum Sponsors</div>
    <ProjectBox project={project2[0]} />
    <div className="title-box gold-sponsors">Gold Sponsors</div>
    {project3.map((project) => (
      <ProjectBox key={project.id} project={project} />
    ))}
  </Container>
);

export default LandingFeatured;
