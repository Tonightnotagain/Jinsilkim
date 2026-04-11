import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>상상하고 창조합니다.</p>
        <p className="version">2026 © Edition</p>
      </div>
      <div className="footer-socials">
        <a href="#instagram">Instagram</a>
        <a href="#linkedin">LinkedIn</a>
        <a href="#github">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
