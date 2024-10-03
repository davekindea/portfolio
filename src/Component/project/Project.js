import React from 'react';
import './project.css';  // Ensure to import your CSS file
import img from '../asset/pexels-jibarofoto-2148216.jpg';

const Project = () => {
  const projects = [
    { title: 'Mernstack Project', description: 'A website includes a learning dashboard, real chat, and a portfolio for a club', link: '#' },
    { title: 'Mernstack Project', description: 'A website includes a learning dashboard, real chat, and a portfolio for a club', link: '#' },
    { title: 'Mernstack Project', description: 'A website includes a learning dashboard, real chat, and a portfolio for a club', link: '#' },
    { title: 'Mernstack Project', description: 'A website includes a learning dashboard, real chat, and a portfolio for a club', link: '#' },
    { title: 'Mernstack Project', description: 'A website includes a learning dashboard, real chat, and a portfolio for a club', link: '#' }
  ];

  return (
    <div className="project-container">
      <h1 className="project-title">My Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={img} alt={`project-${index}`} className="project-image" />
            <h2 className="project-heading">{project.title}</h2>
            <h3 className="project-description">{project.description}</h3>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">GitHub Link</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
