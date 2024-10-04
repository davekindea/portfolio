import React from 'react';
import './certificates.css';  // Import the CSS file
import img from '../asset/Screenshot (250).png';  // Import the image
import img2 from '../asset/Screenshot (249).png'; 
import img3 from  '../asset/Screenshot (248).png'; 


const Certificates = () => {
  const certificates = [
    { title: 'Soft skill training', issuer: ' Rejoice Africa', imgSrc: img3 },
    { title: 'Python programming', issuer: '4K Lab', imgSrc: img2 },
    { title: 'Supervised Machine Learning: Regression and Classification', issuer: 'Coursera', imgSrc: img }
  ];

  return (
    <div id='certificates' className="certificates-container">
      <h1 className="certificates-title">My Certificates</h1>
      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={index}>
            <img src={certificate.imgSrc} alt={`certificate-${index}`} className="certificate-image" />
            <h2 className="certificate-title">{certificate.title}</h2>
            <h3 className="certificate-issuer">Issued by: {certificate.issuer}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
