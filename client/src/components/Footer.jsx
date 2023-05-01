import React from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

function Footer() {
  return (
    <div>
        <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h3 className="footer-heading">About Us</h3>
        <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices lacus at ex hendrerit, in maximus dolor hendrerit. Sed id euismod odio.</p>
      </div>
      <div className="col-md-4">
        <h3 className="footer-heading">Contact Us</h3>
        <p className="footer-text">1234 Main Street, Suite 567<br />Anytown, Kerala 12345<br />Phone: (555) 555-5555<br />Email: info@example.com</p>
      </div>
      <div className="col-md-4">
        <h3 className="footer-heading">Connect With Us</h3>
        
        <ul className="footer-social">
        <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
      </ul>

      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer




