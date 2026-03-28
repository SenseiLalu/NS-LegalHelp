import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
  <div className="footer-container">
    <div className="footer-column">
      <h4>Legal Services</h4>
      <ul>
        <li>Company Registration</li>
        <li>Trademark Filing</li>
        <li>GST Return Filing</li>
        <li>Income Tax Filing</li>
      </ul>
    </div>
    <div className="footer-column">
      <h4>Company</h4>
      <ul>
        <li>About Us</li>
        <li>Contact</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ul>
    </div>
    <div className="footer-column">
      <h4>Contact Us</h4>
      <p>Email: support@yourdomain.com</p>
      <p>Phone: +91 9876543210</p>
      <p>Mon - Sat: 10 AM to 7 PM</p>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} The NS Legal Help. All rights reserved.</p>
  </div>
</footer>

    </div>
  )
}

export default Footer
