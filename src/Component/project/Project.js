import React from 'react';
import './project.css';  // Ensure to import your CSS file
import img from '../asset/Screenshot (245).png';  // Import the image
import img2 from '../asset/Screenshot (246).png'; 
import img3 from  '../asset/Screenshot (247).png'; 
import img4 from '../asset/Screenshot (35).png'; 
import img5 from  '../asset/Screenshot (122).png'; 

const Project = () => {
  const projects = [
    { title: 'Mernstack Social media Project',imgsrc: img3, description: 'is a web application built using MongoDB, Express.js, React.js, and Node.js, where users can create accounts, post content, follow others, and engage with posts through likes and comments. The backend handles API requests and user data, while the frontend provides an interactive interface for users to interact with the platform.', link: 'https://github.com/davekindea/social-media.git' },
    { title: 'prodigy info tech Project', imgsrc: img, description: 'platform designed to connect students  with valuable internship opportunities while providing learning resources to enhance their skills. Users can browse available internships, apply directly, and  improve their qualifications. ', link: 'https://github.com/davekindea/prodigy.git' },
    { title: 'Age calculeter Project',imgsrc: img2, description: 'An Age Calculator project is a simple web  designed to calculate a person age based on their date of birth. Users input their birth date, and the app instantly calculates their current age in years, months, and days. The project typically involves a user-friendly interface and might also include additional features like calculating age differences, finding the day of the week for a given birth date, or displaying upcoming birthdays.', link: 'https://github.com/davekindea/age.git' },
    { title: 'Hospital mangement  Project', imgsrc: img4, description: 'A Hospital Management System project streamlines hospital operations by managing patient records, appointments, billing, and doctor schedules. It enables efficient handling of patient data, treatment histories, and appointments, improving workflow and overall patient care', link: 'https://github.com/davekindea/HMS.git' },
    { title: 'nava computer Project',imgsrc: img5, description: 'A Nava Computer project could be a simple frontend website showcasing a computer store. The website would feature a clean, user-friendly layout displaying product categories such as laptops, desktops, and accessories. Users can browse through products, view descriptions, prices, and images, with responsive design ensuring a seamless experience across devices. ', link: 'https://github.com/davekindea/nevacomp.git' }
  ];

  return (
    <div id='project' className="project-container">
      <h1 className="project-title">My Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imgsrc} alt={`project-${index}`} className="project-image" />
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
