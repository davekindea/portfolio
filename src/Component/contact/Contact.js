import React from 'react';
import './contact.css'; // Ensure this file includes the updated CSS

const Contact = () => {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    
    // Construct the URL for Google Form submission
    const googleFormURL = 'https://forms.gle/8xaX1K8LSjvWL4Yu8'
    
    // Create a URLSearchParams object from the form data
    const searchParams = new URLSearchParams();
    formData.forEach((value, key) => {
      searchParams.append(key, value);
    });
    
    // Submit the form data to Google Forms
    fetch(googleFormURL, {
      method: 'POST',
      body: searchParams,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        e.target.reset(); // Reset form fields
      } else {
        alert('Error sending message.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error sending message.');
    });
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <h3>
        LET'S BUILD SOMETHING GREAT
        <hr />
        TOGETHER
      </h3>
      <div className="contact-us">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" name="entry.123456789" type="text" placeholder="Enter your name" required />
            <label htmlFor="email">Email</label>
            <input id="email" name="entry.987654321" type="email" placeholder="Enter your email" required />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="entry.456789123" placeholder="Enter your message" required></textarea>
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
            <i className="fa fa-telegram" aria-hidden="true"></i>
            <div>
              <h2><a href="https://t.me/davido1221">Telegram</a></h2>
            </div>
          </div>
          <div>
            <i className="fa fa-github" aria-hidden="true"></i>
            <div>
              <h2><a href="https://github.com/davekindea">GitHub</a></h2>
            </div>
          </div>
          <div>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
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
