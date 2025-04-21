import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section footer-logo">
        <h2>Cough&click</h2>
        <p>Providing trusted doctors for reliable healthcare appointments.</p>
      </div>
      <div className="footer-section footer-links">
        <h3>Company</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="footer-section footer-contact">
        <h3>Get in Touch</h3>
        <p>📞 +254708962221</p>
        <p>📧 kevinlagart@gmail.com</p>
      </div>
      <div className="footer-copyright">
        <p>© 2025 Cough & Click All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
