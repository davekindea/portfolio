import React from 'react';
import './about.css';
import mypic from '../asset/photo_2022-10-07_20-47-41.jpg';

const About = () => {
  return (
    <div>
        
    <div className="about-container">
      <div className="about-image">
        <img src={mypic} alt="Dawit" />
      </div>
      <div className="about-text">
        <h1>About Me</h1>
        <p>
          I'm Dawit, a passionate Full Stack Web Developer and student of Electrical and Computer Engineering at Addis Ababa University (AAU), currently based in Addis Ababa, Ethiopia. With a solid foundation in both hardware and software, I’m dedicated to building modern, high-quality websites that meet the latest web standards.
          <br />
          In addition to my studies, I have gained professional experience as a Full Stack Developer, developing visually appealing, user-friendly, and technically robust websites. I’m detail-oriented and excel at interpreting project blueprints, collaborating with teams, and meeting deadlines. My adaptability to new technologies and processes keeps me at the forefront of web development trends.
          <br />
          I’m constantly striving to improve, eager to learn new skills, and always looking for opportunities to apply my knowledge to innovative projects in both web development and engineering.
        </p>
        <div className="skills-section">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>ReactJS, Redux / Redux Toolkit, Tailwind CSS</li>
            <li>Styled Components, Emotion, Next.js</li>
            <li>Node.js, Express.js, RESTful APIs</li>
            <li>GraphQL, MongoDB, Mongoose</li>
            <li>JavaScript, Python, C++</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="resume-container">
    <h1 class="resume-title">
        View My Resume
    </h1>
    <h3 class="resume-subtitle">
        Detailed resume can be downloaded right below.
    </h3>
    <a href="https://drive.google.com/file/d/18TGKI59RU5laSnOY4adZ9qW3nJMVPc-g/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <button class="resume-btn">DOWNLOAD RESUME</button>
    </a>
</div>
   
    </div>
  );
};

export default About;
