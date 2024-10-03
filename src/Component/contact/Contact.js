
import './contact.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [alertMessage, setAlertMessage] = useState('');  // For the alert message
  const [alertType, setAlertType] = useState('');        // To define success or error type
  const [showAlert, setShowAlert] = useState(false);     // For showing/hiding alert

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission
    
  
    

    emailjs.sendForm('service_7qxnbju', 'template_rg0couy', form.current, 'H9RvjXV_J9FA3dg1Q')
      .then(
        () => {
          setAlertMessage('Message sent successfully!');
          setAlertType('success');
          setShowAlert(true);
          form.current.reset();  // Clear the form after success

          // Hide the alert after 3 seconds
          setTimeout(() => {
            setShowAlert(false);
          }, 6000);
        },
        (error) => {
          setAlertMessage('Failed to send the message, please try again.');
          setAlertType('error');
          setShowAlert(true);

          // Hide the alert after 6 seconds
          setTimeout(() => {
            setShowAlert(false);
          }, 6000);
        }
      );
  };

  return (
    <div id='contacts' className="contact-container">
      <h1>Contact Me</h1>
      <h3>
        LET'S BUILD SOMETHING GREAT
        <hr />
        TOGETHER
      </h3>

      {showAlert && (  // Display alert based on showAlert state
        <div className={`alert ${alertType}`}>
          {alertMessage}
        </div>
      )}

      <div className="contact-us">
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <input id="name" name="to_name" type="text" placeholder="Enter your name" required />
            <input id="email" name="to_email" type="email" placeholder="Enter your email" required />
            <textarea id="message" name="message" placeholder="Enter your message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact-info">
          <div>
            <i className="fa fa-phone" aria-hidden="true"></i>
            <div>
              <h2>Phone</h2>
              <h3>+251 989 192 105</h3>
            </div>
          </div>
          <div>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <div>
              <h3><span>Address: </span>Addis Ababa, Ethiopia</h3>
            </div>
          </div>
          <div>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <div>
              <h3><a href="mailto:davekindea1993@gmail.com">Email</a></h3>
            </div>
          </div>
          <div>
            <i className="fa-brands fa-telegram"></i>
            <div>
              <h2><a href="https://t.me/davido1221">Telegram</a></h2>
            </div>
          </div>
          <div>
            <i className="fa-brands fa-github"></i>
            <div>
              <h2><a href="https://github.com/davekindea">GitHub</a></h2>
            </div>
          </div>
          <div>
            <i className="fa-brands fa-linkedin"></i>
            <div>
              <h2><a href="https://www.linkedin.com/in/dawit-kindea-98b11424">LinkedIn</a></h2>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <h2>© 2024 Dawit. All rights reserved</h2>
      </div>
    </div>
  );
}

export default Contact;
