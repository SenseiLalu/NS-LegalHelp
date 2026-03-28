import React, { useState } from "react";
import "./Website.css";
import {
  FaShoppingCart,
  FaMobileAlt,
  FaCreditCard,
  FaImages,
  FaUserTie,
  FaChartLine,
  FaGlobe,
  FaStar,
  FaCheckCircle,
  FaClipboardList,
  FaTags,
  FaUserShield,
  FaSearch,
  FaTachometerAlt,
  FaTools,
  FaTruck,
  FaServer,
  FaBoxOpen,
  FaFileAlt,
  FaShareAlt,
  FaEnvelopeOpenText,
  FaDownload,
  FaPalette,
  FaPenFancy,
  FaMagic,
  FaCrown,
  FaWpforms,
  FaLayerGroup,
  FaEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
  FaBullseye,
  FaRocket,
  FaBrush,
  FaUserCog,
  FaRandom,
  FaHeadset,
  FaVoicemail,
} from "react-icons/fa";

const packagesData = {
  "Landing Page Website": [
  {
    title: "Basic",
    price: "₹9,999",
    features: [
      { text: "Single Page Design", icon: <FaFileAlt /> },
      { text: "Up to 4 Sections", icon: <FaLayerGroup /> },
      { text: "Responsive Design", icon: <FaMobileAlt /> },
      { text: "Contact Form", icon: <FaEnvelope /> },
      { text: "Basic SEO Setup", icon: <FaSearch /> },
      { text: "Fast Loading", icon: <FaTachometerAlt /> }
    ],
  },
  {
    title: "Professional",
    price: "₹12,999",
    features: [
      { text: "High-Converting Landing Page", icon: <FaBullseye /> },
      { text: "Up to 8 Sections", icon: <FaLayerGroup /> },
      { text: "Custom UI/UX Design", icon: <FaPalette /> },
      { text: "Advanced Animations", icon: <FaMagic /> },
      { text: "Lead Capture Forms", icon: <FaClipboardList /> },
      { text: "Email Integration", icon: <FaVoicemail /> },
      { text: "SEO Optimized", icon: <FaSearch /> },
      { text: "Speed & Performance Optimization", icon: <FaTachometerAlt /> }
    ],
    tag: "Best for Marketing",
  },
  {
    title: "Premium",
    price: "₹14,999",
    features: [
      { text: "Conversion-Focused Premium Design", icon: <FaRocket /> },
      { text: "Up to 12 Sections", icon: <FaLayerGroup /> },
      { text: "Custom Branding (Fonts & Colors)", icon: <FaBrush /> },
      { text: "Advanced Animations & Micro-Interactions", icon: <FaMagic /> },
      { text: "CRM & Lead Management Integration", icon: <FaUserCog /> },
      { text: "A/B Testing Setup", icon: <FaRandom /> },
      { text: "SEO + Performance Optimization", icon: <FaSearch /> },
      { text: "Google Analytics & Meta Pixel", icon: <FaChartLine /> },
      { text: "Priority Support", icon: <FaHeadset /> }
    ],
    tag: "Best for Ads & Scaling",
  },
],
  "Portfolio Website": [
    {
      title: "Basic",
      price: "₹9,999",
      features: [
        { text: "3 Page Website", icon: <FaFileAlt /> },
        { text: "Responsive Design", icon: <FaMobileAlt /> },
        { text: "Contact Form", icon: <FaEnvelopeOpenText /> },
        { text: "Social Media Links", icon: <FaShareAlt /> }
      ]
    },
    {
      title: "Professional",
      price: "₹16,999",
      tag: "Most Popular",
      features: [
        { text: "4–6 Pages Website", icon: <FaFileAlt /> },
        { text: "Custom Design", icon: <FaPalette /> },
        { text: "Resume Download", icon: <FaDownload /> },
        { text: "SEO Ready", icon: <FaSearch /> },
        { text: "Responsive Design", icon: <FaMobileAlt /> },
        { text: "Contact Form", icon: <FaEnvelopeOpenText /> },
        { text: "Social Media Links", icon: <FaShareAlt /> }
      ]
    },
    {
      title: "Personal Brand",
      price: "₹29,999",
      features: [
        { text: "Premium UI", icon: <FaCrown /> },
        { text: "Smooth Animations", icon: <FaMagic /> },
        { text: "Blog / Case Studies", icon: <FaPenFancy /> },
        { text: "Performance Optimization", icon: <FaTachometerAlt /> },
        { text: "5–8 Pages Website", icon: <FaFileAlt /> },
        { text: "Custom Design", icon: <FaPalette /> },
        { text: "Resume Download", icon: <FaDownload /> },
        { text: "SEO Ready", icon: <FaSearch /> },
        { text: "Responsive Design", icon: <FaMobileAlt /> },
        { text: "Contact Form", icon: <FaEnvelopeOpenText /> },
        { text: "Social Media Links", icon: <FaShareAlt /> }
      ],
    },
  ],
  "Business Website": [
    {
      title: "Basic",
      price: "₹9,999",
      features: [
        { text: "3 Pages Website", icon: <FaFileAlt /> },
        { text: "Contact Form", icon: <FaEnvelopeOpenText /> },
        { text: "Basic SEO", icon: <FaSearch /> },
        { text: "Responsive Design", icon: <FaMobileAlt /> },
        { text: "Social Media Links", icon: <FaShareAlt /> }
      ]
    },
    {
      title: "Standard",
      price: "₹14,999",
      tag: "Most Popular",
      features: [
        { text: "5–7 Pages Website", icon: <FaFileAlt /> },
        { text: "Custom UI / UX", icon: <FaPalette /> },
        { text: "Lead Generation Form", icon: <FaWpforms /> },
        { text: "Speed Optimization", icon: <FaTachometerAlt /> },
        { text: "SEO Ready", icon: <FaSearch /> },
        { text: "Responsive Design", icon: <FaMobileAlt /> },
        { text: "Social Media Links", icon: <FaShareAlt /> },
      ],
      tag: "Best Value",
    },
    {
      title: "Premium",
      price: "₹25,999",
      features: [
        { text: "8–12 Pages Website", icon: <FaFileAlt /> },
        { text: "Premium Design", icon: <FaCrown /> },
        { text: "Smooth Animations", icon: <FaMagic /> },
        { text: "Blog Setup", icon: <FaPenFancy /> },
        { text: "Advanced SEO", icon: <FaChartLine /> },
        { text: "Responsive Design", icon: <FaMobileAlt /> },
        { text: "Social Media Links", icon: <FaShareAlt /> },
        { text: "Custom UI / UX", icon: <FaPalette /> },
        { text: "Lead Generation Form", icon: <FaWpforms /> },
      ],
    },
  ],
   "E-Commerce Website": [
    {
      title: "Starter",
      price: "₹29,999",
      features: [
        { text: "Up to 20 Products", icon: <FaBoxOpen /> },
        { text: "2 Custom Pages", icon: <FaGlobe /> },
        { text: "Cart & Checkout", icon: <FaShoppingCart /> },
        { text: "Payment Gateway", icon: <FaCreditCard /> },
        { text: "Admin Panel", icon: <FaUserShield /> }
      ],
    },
    {
      title: "Growth",
      price: "₹49,999",
      features: [
        { text: "Unlimited Products", icon: <FaBoxOpen /> },
        { text: "One Year Free Domain", icon: <FaServer /> },
        { text: "Order Management", icon: <FaClipboardList /> },
        { text: "Coupon System", icon: <FaTags /> },
        { text: "SEO Friendly", icon: <FaSearch /> },
        { text: "3 Custom Pages", icon: <FaGlobe /> },
        { text: "Cart & Checkout", icon: <FaShoppingCart /> },
        { text: "Payment Gateway", icon: <FaCreditCard /> },
        { text: "Admin Panel", icon: <FaUserShield /> }
      ],
      tag: "Most Popular",
    },
    {
      title: "Pro",
      price: "₹69,999",
      features: [
        { text: "5 Custom Pages", icon: <FaGlobe /> },
        { text: "One Year Free Domain & Hosting", icon: <FaServer /> },
        { text: "Custom Features", icon: <FaTools /> },
        { text: "High-Performance Optimization", icon: <FaTachometerAlt /> },
        { text: "Advanced Sales & Customer Analytics", icon: <FaChartLine /> },
        { text: "Delivery Partner Integration", icon: <FaTruck /> },
        { text: "Unlimited Products", icon: <FaBoxOpen /> },
        { text: "Order Management", icon: <FaClipboardList /> },
        { text: "Coupon System", icon: <FaTags /> },
        { text: "SEO Friendly", icon: <FaCreditCard /> },
        { text: "Cart & Checkout", icon: <FaShoppingCart /> },
        { text: "Payment Gateway", icon: <FaCreditCard /> },
        { text: "Admin Panel", icon: <FaUserShield /> }
      ],
    },
  ],
};

const Website = () => {
  const [currentMenu, setCurrentMenu] = useState("E-Commerce Website");

  return (
    <div className="website-container">
      <h1 className="website-title">Our Website Packages</h1>
      <p className="website-subtitle">
        Find the perfect plan to boost your online presence
      </p>

      {/* Menu */}
      <div className="website-menu">
        {Object.keys(packagesData).map((category) => (
          <button
            key={category}
            className={`menu-btn ${currentMenu === category ? "active" : ""}`}
            onClick={() => setCurrentMenu(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Package Cards */}
      <div className="cards-container">
        {packagesData[currentMenu].map((pkg, index) => (
          <div
            className={`package-card ${pkg.tag ? "highlight-card" : ""
              }`}
            key={index}
          >
            {pkg.tag && <div className="tag-label">{pkg.tag}</div>}
            <h2 className="package-title">{pkg.title}</h2>
            <p className="package-price">{pkg.price}</p>
            <ul className="features-list">
              {pkg.features.map((f, i) => (
                <li key={i} className="feature-item">
                  <span className="feature-icon">{f.icon}</span> {f.text}
                </li>
              ))}
            </ul>
            {/* <button className="buy-btn">
              <FaCheckCircle style={{ marginRight: "6px" }} /> Buy Now
            </button> */}
          </div>
        ))}
      </div>

      <div className="custom-quote">
        <p>Need something truly unique? We offer custom solutions…</p>
        <a href="/websiteDesc" className="custom-link">
          Get a Custom Quote
        </a>
      </div>
    </div>
  );
};

export default Website;
