import React from "react";
import {
  FaShoppingCart,
  FaBriefcase,
  FaPalette,
  FaBullseye
} from "react-icons/fa";

import "../Website/WebsiteDesc.css";

const services = [
  {
    title: "E-Commerce Website",
    icon: <FaShoppingCart />,
    tagline: "Sell online. Scale faster.",
    description:
      "A complete online store solution with product management, secure payments, and smooth checkout experience designed to boost sales.",
    features: [
      "Product Catalog & Inventory",
      "Cart & Secure Checkout",
      "Payment Gateway Integration",
      "Order & Customer Management",
      "SEO & Mobile Optimized"
    ],
  },
  {
    title: "Business Website",
    icon: <FaBriefcase />,
    tagline: "Build trust. Grow credibility.",
    description:
      "A professional business website that represents your brand, explains your services, and converts visitors into customers.",
    features: [
      "Professional UI/UX Design",
      "Service Pages & Lead Forms",
      "SEO Friendly Structure",
      "Fast & Responsive Design",
      "Contact & Inquiry Integration"
    ],
  },
  {
    title: "Portfolio Website",
    icon: <FaPalette />,
    tagline: "Show your work. Get hired.",
    description:
      "A visually stunning portfolio website to showcase your skills, projects, and creativity with a strong personal brand.",
    features: [
      "Project Showcases",
      "Personal Branding",
      "Minimal & Creative Layout",
      "Social & Contact Integration",
      "Mobile Optimized"
    ],
  },
  {
    title: "Landing Page Website",
    icon: <FaBullseye />,
    tagline: "Convert visitors into leads.",
    description:
      "High-converting landing pages designed for ads, campaigns, and product launches with clear CTAs and analytics.",
    features: [
      "Conversion-Focused Design",
      "Lead Capture Forms",
      "WhatsApp & Call Integration",
      "Speed Optimization",
      "Analytics & Tracking Setup"
    ],
  },
];

const WebsiteDesc = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Our Website Solutions</h2>
        <p className="section-subtitle">
          Modern, scalable, and result-driven websites tailored to your goals.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <span className="tagline">{service.tagline}</span>
              <p className="description">{service.description}</p>

              <ul>
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <button className="btn-primary">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteDesc;
