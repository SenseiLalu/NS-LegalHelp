// ContactUs.jsx
import React from 'react';
import '../ContactUs/ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      {/* Left: Enquiry Form */}
      <div className="contact-form-section">
        <h2>Enquiry Form</h2>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Vertical Separator */}
      <div className="vertical-line"></div>

      {/* Right: Company Info */}
      <div className="contact-info-section">
        <h2>Contact Information</h2>
        <p><strong>Company:</strong> NS LegalHelp Pvt. Ltd.</p>
        <p><strong>Phone:</strong> +91-9193006617</p>
        <p><strong>Email:</strong> info@nslegalhelp.com</p>
        <p><strong>Address:</strong> 123 Corporate Park, Delhi, India</p>
        <p><strong>Hours:</strong> Mon - Sat: 10:00 AM - 6:00 PM</p>
      </div>
    </div>
  );
};

export default ContactUs;
