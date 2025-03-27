import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Navigation</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Learn</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Take Action</a></li>
        </ul>
      </div>

      <div className="footer-center">
        <img src="/images/logo.png" alt="Bambi's Vision Logo" className="footer-logo" />
        <p>© Copyright 2025</p>
      </div>

      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>+213069800346</p>
        <div className="social-icons">
          <a href="#"><img src="/icons/instagram.png" alt="Instagram" /></a>
          <a href="#"><img src="/icons/facebook.png" alt="Facebook" /></a>
          <a href="#"><img src="/icons/linkedin.png" alt="LinkedIn" /></a>
          <a href="#"><img src="/icons/email.png" alt="Email" /></a>
        </div>
        <p>Bambi_s_vision@com</p>
      </div>
    </footer>
  );
};

export default Footer;

//logo needed + link pages needed