import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-about">
          <h2 className="footer-logo">TOA<span>.</span></h2>
          <p>
            Taste the goodness of nature. Discover quality food products
            made with care, freshness, and love.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/category">Categories</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: presvin10@gmail.com</p>
          <p>Phone: +971 52 847 1068</p>
          <p>Location: UAE</p>
        </div>


        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a  href="https://www.instagram.com/toa.foods/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TOA. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;