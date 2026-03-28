import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from "../Assets/homeSlider.png";
import slider2 from "../Assets/homeSlider2.png";
import home3final1 from "../Assets/homefinal1.png";
import aboutUsImg from "../Assets/aboutUsimg.png";

import CustomSelect from "./CustomSelect";

import { FaBuilding } from "react-icons/fa";

const services = [
  {
    title: "Start Your Own Business",
    icon: <FaBuilding />,
    links: [
      { text: "Private Limited Company", to: "/private-limited-company" },
      { text: "Limited Liability Partnership", to: "/limited-liabilty-partnership" },
      { text: "Sole Proprietorship", to: "/solePropritorship" },
      { text: "Hindu Undivided Family, HUF Deed", to: "/HufDeed" },
    ],
  },
  {
    title: "Returns & Compliance",
    icon: <FaBuilding />,
    links: [
      { text: "GST Return", to: "/gst-return" },
      { text: "Income Tax Return", to: "/itr-return" },
      { text: "Private Limited Company Annual Filing", to: "/plc-annualFilling" },
      { text: "LLP Annual Filing", to: "/llp-annualFilling" },
    ],
  },
  {
    title: "Website & Marketing",
    icon: <FaBuilding />,
    links: [
      { text: "E-Commerce Website", to: "/website" },
      { text: "Business Website", to: "/website" },
      { text: "Portfolio Website", to: "/website" },
    ],
  },
];

const Home = () => {
  const navigate = useNavigate();
  const testimonialRef = useRef(null);

  const [service, setService] = useState("");
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const images = [slider1, slider2];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!service) {
      showToast("Please select a service", "error");
      return;
    }

    emailjs
      .sendForm(
        "service_pttzz1f",
        "template_5lyufwh",
        e.target,
        "1bIgXVe5hH5o9wLga"
      )
      .then(
        () => {
          alert("✅ Email sent successfully!");
          e.target.reset();
          setService("");
        },
        () => {
          alert("❌ Failed to send email.");
        }
      );
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div key={idx}>
                <img
                  src={img}
                  alt={`Slide ${idx}`}
                  className="w-full rounded-3xl shadow-xl"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Popular <span className="text-teal-600">Services</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Get fast, reliable and customizable online business solution &
            legal services with free expert consultation.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
              >
                <div className="text-4xl text-teal-600 mb-4">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <div className="mt-4 space-y-2 text-gray-600">
                  {service.links.map((link, idx) => (
                    <div key={idx}>
                      <Link
                        to={link.to}
                        className="hover:text-teal-600 transition"
                      >
                        {link.text}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            What Our <span className="text-teal-600">Clients Say</span>
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ramandeep Singh",
                rating: 5,
                text:
                  "Everything is good with Kulwinder, he is such a nice person and his communication is very good.",
                img: "https://i.pravatar.cc/80?img=11",
              },
              {
                name: "Sawai Singh",
                rating: 5,
                text:
                  "The experience is very good and loved the team how they work smoothly.",
                img: "https://i.pravatar.cc/80?img=5",
              },
              {
                name: "Dr. Luqman Khan",
                rating: 4,
                text:
                  "Working with the team helped resolve issues smoothly and efficiently.",
                img: "https://i.pravatar.cc/80?img=9",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl shadow-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-14 h-14 rounded-full"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-yellow-500">
                      {"★".repeat(item.rating)}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION FORM */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <h3 className="text-3xl font-bold text-center mb-10">
              Get Free Consultation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full border rounded-xl px-4 py-3"
              />

              <CustomSelect value={service} onChange={setService} />
              <input type="hidden" name="submenu" value={service} />

              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 rounded-xl hover:bg-teal-700 transition"
              >
                Submit
              </button>
            </form>

            {toast.show && (
              <div className="mt-4 text-center text-red-500">
                {toast.message}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <img
            src={aboutUsImg}
            alt="About"
            className="rounded-3xl shadow-xl w-full"
          />

          <button
            onClick={() => navigate("/about-us")}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="bg-teal-600 text-white px-8 py-3 rounded-xl hover:bg-teal-700 transition">
              About Us
            </span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;