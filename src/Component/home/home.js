import React, { useState, useEffect } from 'react';
import pic1 from "../asset/pexels-hasanalbari-1229861.jpg";
import pic2 from "../asset/pexels-jibarofoto-2148216.jpg";
import './home.css'; 

const Home = () => {
  const [currentPic, setCurrentPic] = useState(pic1); 
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPic(prevPic => (prevPic === pic1 ? pic2 : pic1));
    }, 4000); 

    // Check screen size on component mount
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the size threshold as needed
    };

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize(); // Initial check on mount

    return () => {
      clearInterval(interval); // Clean up interval on component unmount
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <div id='home' className="home-container">
      <img src={currentPic} alt="background" className="background-image" />
      <div className="text-overlay">
        <h1>
          Hi, I'm <hr /> Dawit Kindea <hr /> Full Stack Web Developer
        </h1>
        {/* Only show the paragraph for larger screens */}
        {!isSmallScreen && (
          <p>
            As a Full Stack Developer, I am a versatile and skilled professional with expertise in both front-end and back-end development. I excel in designing, developing, and maintaining web applications from start to finish. Proficient in a range of programming languages, frameworks, and tools, I handle all aspects of web development, ensuring seamless functionality and a robust user experience.
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
