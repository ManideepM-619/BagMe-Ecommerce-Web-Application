import React from "react";
import "./Footer.css";
import blackoption from "../images/footer_logo.png";
 
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="bagme-info">
          <div className="footer-text">
            <div>
              <img className="imgs" src={blackoption} alt="Black Option Logo" />
              <p>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                Hyderabad, Telangana 500073
              </p>
            </div>
            <div>
              <p>
                <i className="fa fa-phone" aria-hidden="true"></i>
                9876543210
              </p>
            </div>
            <div>
              <p>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                hey@BagMe.in
              </p>
            </div>
          </div>
          <div className="footer-text">
            <div>
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3>Newsletter</h3>
              <p>Subscribe to our newsletter for updates</p>
              <form>
                <input type="email" placeholder="Your Email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 BagMe. All rights reserved.</p>
      </div>
    </footer>
  );
};
 
export default Footer;

