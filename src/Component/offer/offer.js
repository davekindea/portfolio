import React from 'react';
import './offer.css';

const Offer = () => {
  return (
    <div className="offer-container">
      <h1 className="offer-title">What I Offer</h1>
      <div className="offer-items">
        <div className="offer-item">
          <i className="fa fa-laptop offer-icon" aria-hidden="true"></i>
          <h2 className="offer-heading">Web Development</h2>
          <p className="offer-description">
            I do some research before starting my development to choose the right way for the job.
          </p>
        </div>
        <div className="offer-item">
          <i className="fa fa-smile-o offer-icon" aria-hidden="true"></i>
          <h2 className="offer-heading">Fully Responsive</h2>
          <p className="offer-description">
            I design my websites for every screen size available and I make sure it looks great on every device.
          </p>
        </div>
        <div className="offer-item">
          <i className="fas fa-less-than offer-icon"></i>
          <span className="dots">...</span>
          <i className="fas fa-greater-than offer-icon"></i>
          <h2 className="offer-heading">Beautiful Code</h2>
          <p className="offer-description">
            Working on projects, I write beautiful and clean codes to make them better readable for any partner or client.
          </p>
        </div>
        <div className="offer-item">
          <i class="fa fa-calendar" aria-hidden="true"></i>
          <h2 className="offer-heading">On Time</h2>
          <p className="offer-description">
            Always responsible to complete any given project on time.
          </p>
        </div>
        <div className="offer-item">
          <i className="fa fa-thumbs-up offer-icon" aria-hidden="true"></i>
          <h2 className="offer-heading">Quick Learner</h2>
          <p className="offer-description">
            I like to learn new things and I have the ability to learn it quickly.
          </p>
        </div>
        <div className="offer-item">
          <i className="fa fa-wifi offer-icon" aria-hidden="true"></i>
          <h2 className="offer-heading">Online</h2>
          <p className="offer-description">
            Easy to reach and happy to help.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Offer;
