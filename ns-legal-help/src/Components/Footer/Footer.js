import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f3] text-gray-700 py-[2rem] px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Brand Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            NS Legal Help
          </h3>
          <p className="mt-4 text-sm leading-relaxed">
            Optimize your business strategy with expert consulting solutions.
          </p>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/gst-reg" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#177B74] transition">GST Registration</Link></li>
            <li><Link to="/gst-return" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#177B74] transition">GST Return</Link></li>
            <li><Link to="/website" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#177B74] transition">Website Info</Link></li>
            <li><Link to="/private-limited-company" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#177B74] transition">Private Limited Company</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/privacy-policy.docx" download="NS_LegalHelp_Privacy_Policy.docx" className="hover:text-[#177B74] transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/Disclaimer.docx" download="Disclaimer.docx" className="hover:text-[#177B74] transition">
                Disclaimer
              </a>
            </li>
            <li>
              <a href="/Terms-and-conditions.docx" download="Terms_And_conditions.docx" className="hover:text-[#177B74] transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/cancellation-and-refund.docx" download="CANCELLATION_&_REFUND-and-refund.docx" className="hover:text-[#177B74] transition">
                Cancellation & Refund
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">
            Contact
          </h4>
          <p className="text-sm">Email: info@nslegalhelp.com</p>
          <p className="text-sm mt-2">Phone: +91-9193006617</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about-us" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#177B74] transition">About Us</Link></li>
            <li><Link to="/contact-us" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#177B74] transition">Contact Us</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-10 pt-03 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} The NS Legal Help. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;