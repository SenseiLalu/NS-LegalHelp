import React, { useRef, useState } from "react";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react";

import slider1 from "../Assets/homeSlider.png";
import slider2 from "../Assets/homeSlider2.png";
import home3final1 from "../Assets/homefinal1.png";
import aboutUsImg from "../Assets/aboutUsimg.png";
import sliderDemo from "../Assets/logohomedemo.png";

import briefcase from "../Assets/Svg/3.png";
import document from "../Assets/Svg/4.webp";
import judicial from "../Assets/Svg/5.jpeg";
import legal from "../Assets/Svg/24.jpg";
import letter from "../Assets/Svg/27.avif";
import location from "../Assets/Svg/6.png";
import scales from "../Assets/Svg/7.png";
import shield from "../Assets/Svg/8.png";

import l9 from "../Assets/Svg/9.png";
import l10 from "../Assets/Svg/10.png";
import l11 from "../Assets/Svg/11.png";
import l12 from "../Assets/Svg/12.png";
import l13 from "../Assets/Svg/13.png";
import l14 from "../Assets/Svg/14.png";
import l15 from "../Assets/Svg/15.png";
import l16 from "../Assets/Svg/16.png";

import l17 from "../Assets/Svg/17.png";
import l18 from "../Assets/Svg/18.png";
import l19 from "../Assets/Svg/19.png";
import l20 from "../Assets/Svg/20.png";
import l21 from "../Assets/Svg/21.png";
import l22 from "../Assets/Svg/22.webp";
import l23 from "../Assets/Svg/23.png";
import l24 from "../Assets/Svg/24.jpg";

import l25 from "../Assets/Svg/25.png";
import l26 from "../Assets/Svg/26.png";
import l27 from "../Assets/Svg/27.avif";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";

import CustomSelect from "./CustomSelect";

import {
  MessageCircle,
  Cloud,
  Globe,
  Database,
  Headphones,
  Layers,
} from "lucide-react";

// const services = [
//   {
//     title: "Start Your Own Business",
//     icon: <FaBuilding />,
//     links: [
//       { text: "Private Limited Company", to: "/private-limited-company" },
//       { text: "Limited Liability Partnership", to: "/limited-liabilty-partnership" },
//       { text: "Sole Proprietorship", to: "/solePropritorship" },
//       { text: "Hindu Undivided Family, HUF Deed", to: "/HufDeed" },
//     ],
//   },
//   {
//     title: "Returns & Compliance",
//     icon: <FaBuilding />,
//     links: [
//       { text: "GST Return", to: "/gst-return" },
//       { text: "Income Tax Return", to: "/itr-return" },
//       { text: "Private Limited Company Annual Filing", to: "/plc-annualFilling" },
//       { text: "LLP Annual Filing", to: "/llp-annualFilling" },
//     ],
//   },
//   {
//     title: "Website & Marketing",
//     icon: <FaBuilding />,
//     links: [
//       { text: "E-Commerce Website", to: "/website" },
//       { text: "Business Website", to: "/website" },
//       { text: "Portfolio Website", to: "/website" },
//     ],
//   },
// ];

const Home = () => {
  const navigate = useNavigate();
  const testimonialRef = useRef(null);

  const [service, setService] = useState("");
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  // const images = [slider1, slider2];
  const images = [sliderDemo, sliderDemo];

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

  const logos = [
    location, scales, shield, l9, l10, l11, l12, l13, l14, l15, l16, l17, l18, l19, l20, l21, l22, l23, l24, l25, l26, l27
  ];


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

    setLoading(true);

    emailjs
      .sendForm(
        "service_pttzz1f",
        "template_5lyufwh",
        e.target,
        "1bIgXVe5hH5o9wLga"
      )
      .then(
        () => {
          showToast("Email sent successfully!", "success");
          e.target.reset();
          setService("");
        },
        () => {
          showToast("Failed to send email.", "error");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // premium easing
      },
    },
  };

  // ✅ Services Data (Fix for undefined error)
  const services = [
    {
      title: "Business Registration (India)",
      desc: "Start your business with Private Limited or LLP registration, complete documentation, and MCA filing support.",
      image: "",
      link: "/services/digital-transformation"
    },
    {
      title: "ROC Compliance",
      desc: "Stay compliant with annual filings, event-based ROC forms, and corporate requirements.",
      image: "",
      link: "/services/business-consulting"
    },
    {
      title: "Form Your Business in the U.S.",
      desc: "Launch your US company from anywhere with support for LLC formation, documentation, and compliance guidance.",
      image: "",
      link: "/services/operational-efficiency"
    },
    {
      title: "GST Services",
      desc: "Complete support for GST registration, return filing, and compliance management.",
      image: "",
      link: "/services/operational-efficiency"
    },
    {
      title: "Start Your Business in Dubai",
      desc: "Set up your business in Dubai with assistance for company formation, documentation, and regulatory processes.",
      image: "",
      link: "/services/operational-efficiency"
    },
    {
      title: "Income Tax Filing",
      desc: "Accurate ITR filing for individuals, startups, and businesses.",
      image: "",
      link: "/services/operational-efficiency"
    },
    {
      title: "Trademark Registration",
      desc: "Protect your brand with trademark search, filing, and registration assistance.",
      image: "",
      link: "/services/operational-efficiency"
    },
  ];

  const [active, setActive] = useState(1);

  const prev = () => {
    setActive((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

  const next = () => {
    setActive((prev) =>
      prev === services.length - 1 ? 0 : prev + 1
    );
  };


  const reviewers = [
    {
      name: "Muzamal Hussain",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      tag1: "High conversion",
      tag2: "2x sales",
    },
    {
      name: "Sarah Khan",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      tag1: "Retention boost",
      tag2: "3x growth",
    },
    {
      name: "David Lee",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      tag1: "Better insights",
      tag2: "Faster scaling",
    },
    {
      name: "Ayesha Malik",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      tag1: "Improved UX",
      tag2: "Higher ROI",
    },

  ];

  const features = [
    {
      icon: <MessageCircle size={20} />,
      title: "Unlimited consultations",
      desc: "Schedule as many strategy sessions as needed to your business",
    },
    {
      icon: <Cloud size={20} />,
      title: "Tailored solutions",
      desc: "Get customized strategies designed to with your unique goals",
    },
    {
      icon: <Globe size={20} />,
      title: "Expert insights",
      desc: "Leverage industry-leading expertise to drive informed decisions",
    },
    {
      icon: <Database size={20} />,
      title: "Data strategies",
      desc: "Make confident moves with insights backed by research & analytics.",
    },
    {
      icon: <Headphones size={20} />,
      title: "Ongoing support",
      desc: "Stay ahead with continuous guidance and recommendation",
    },
    {
      icon: <Layers size={20} />,
      title: "Seamless execution",
      desc: "From planning to implementation, we ensure a smooth & process",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Simple Booking",
      desc: "Effortlessly schedule a consultation to discuss your business needs and challenges. We streamline the process to get started quickly.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    },
    {
      number: "02",
      title: "Tailored Strategy",
      desc: "We analyze your goals and create a customized strategy designed to drive measurable success for your business needs and exploring more ideas.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800",
    },
    {
      number: "03",
      title: "Continuous Support",
      desc: "From implementation to optimization, we provide ongoing guidance and adjustments to ensure long-term growth for you and your business.",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800",
    },
  ];

  const leftStats = [
    { value: "$7M+", label: "Revenue" },
    { value: "72%", label: "Growth" },
    { value: "65%", label: "Skills" },
  ];

  const rightStats = [
    { value: "78%", label: "Impact" },
    { value: "1%", label: "Designers" },
    { value: "10+", label: "Consultants" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How does your consulting process work?",
      answer:
        "We begin with a discovery session to understand your business needs, then craft a customized strategy and provide ongoing support to ensure measurable growth.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We work across technology, finance, healthcare, and growing startups, tailoring strategies for each industry.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Most clients begin seeing measurable impact within 4–8 weeks depending on the project scope.",
    },
    {
      question: "Do you offer one-time consultations?",
      answer:
        "Yes, we provide both one-time strategic consultations and long-term partnerships.",
    },
    {
      question: "Can small businesses afford your services?",
      answer:
        "We offer flexible pricing models designed to support startups and small businesses.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply click the contact button and schedule a discovery call with our team.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [loading, setLoading] = useState(false);

  const handleContactClick = () => {
    navigate("contactUs");
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-white py-[1rem]">
        <div className="max-w-6xl mx-auto px-6">
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

      {/* PARTNER ANNOUNCEMENT BAR */}
      <section className="bg-white-100 py-14">
        <div className="max-w-xl mx-auto text-center px-6">

          <h3 className="text-xl md:text-2xl font-serif font-medium text-gray-800 mb-10">
            Supporting many businesses across India and counting...
          </h3>

          <div className="relative overflow-hidden w-full">

            <div className="flex w-max gap-16 animate-marquee">
              {[...logos, ...logos].map((img, idx) => (
                <div className="h-40 w-[120px] flex items-center justify-center flex-shrink-0">
                  <img
                    src={img}
                    alt="partner"
                    className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition"
                  />
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Why Bar        */}
      <section className="bg-white py-[0rem]">
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-[#177B74] mb-3">• Why choose us</p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              Expert consulting tailored to
              <br />
              your business success
            </h2>
          </div>

          {/* Card Container */}
          <div className="relative rounded-3xl p-6 md:p-10 bg-gradient-to-r from-[#edf3ee] via-[#eef4ef] to-[#f3f7f4]">

            <div className="grid md:grid-cols-2 gap-6">

              {/* LEFT CARD */}
              <motion.div className="p-8 rounded-3xl bg-transparent"
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h3 className="text-2xl font-semibold mb-8">Other Firms</h3>

                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className="space-y-6 text-gray-700"
                >
                  <motion.li variants={itemVariants} className="flex gap-4">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#6B7280] mt-1 flex-shrink-0">
                      <Check className="text-white" size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Generic Approach</h4>
                      <p className="text-sm text-gray-500">
                        Standardized services that don’t align with your specific business needs.
                      </p>
                    </div>
                  </motion.li>

                  <motion.li variants={itemVariants} className="flex gap-4">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#6B7280] mt-1 flex-shrink-0">
                      <Check className="text-white" size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Limited Support</h4>
                      <p className="text-sm text-gray-500">
                        Little to no guidance after setup, leaving you to handle compliances alone.
                      </p>
                    </div>
                  </motion.li>

                  <motion.li variants={itemVariants} className="flex gap-4">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#6B7280] mt-1 flex-shrink-0">
                      <Check className="text-white" size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Hidden Charges</h4>
                      <p className="text-sm text-gray-500">
                        Unclear pricing with additional costs that increase your overall expense.
                      </p>
                    </div>
                  </motion.li>

                   <motion.li variants={itemVariants} className="flex gap-4">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#6B7280] mt-1 flex-shrink-0">
                      <Check className="text-white" size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Filing Delays & Errors</h4>
                      <p className="text-sm text-gray-500">
                        Inaccurate or late filings that can lead to penalties and compliance risks.
                      </p>
                    </div>
                  </motion.li>
                </motion.ul>
              </motion.div>

              {/* RIGHT CARD */}
              <motion.div className="bg-white rounded-3xl p-8 border border-[#cfe5d5] shadow-[0_8px_30px_rgba(31,81,76,0.08)]"
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <h3 className="text-2xl font-semibold mb-8">With NS Legal Help</h3>

                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className="space-y-6 text-gray-700"
                >
                  <motion.li variants={itemVariants} className="flex gap-4">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#167B74] mt-1 flex-shrink-0">
                      <Check className="text-white" size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Tailored Solutions</h4>
                      <p className="text-sm text-gray-500">
                        Customized legal and compliance services aligned with your business needs and goals.
                      </p>
                    </div>
                  </motion.li>

                  <motion.li variants={itemVariants} className="flex gap-4">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#167B74] mt-1 flex-shrink-0">
                      <Check className="text-white" size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Ongoing Expert Support</h4>
                      <p className="text-sm text-gray-500">
                        Dedicated assistance for setup as well as all your ongoing compliance and filings.
                      </p>
                    </div>
                  </motion.li>

                  <motion.li variants={itemVariants} className="flex gap-4">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#167B74] mt-1 flex-shrink-0">
                      <Check className="text-white" size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Transparent Pricing</h4>
                      <p className="text-sm text-gray-500">
                        Clear, upfront pricing with no hidden costs—so you stay fully in control.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li variants={itemVariants} className="flex gap-4">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#167B74] mt-1 flex-shrink-0">
                      <Check className="text-white" size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Timely & Accurate Filings</h4>
                      <p className="text-sm text-gray-500">
                        All filings completed correctly and on time to keep your business compliant and secure.
                      </p>
                    </div>
                  </motion.li>
                </motion.ul>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white-100 py-[1rem] md:py-[3rem] overflow-hidden">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 px-4">
          <p className="text-[#177B74] mb-3">• Popular Services</p>
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-serif mt-4 leading-tight">
           All-in-One Legal & Compliance Support for <br className="hidden md:block" />
            Businesses Like Yours
          </h2>
        </div>

        <div className="relative flex items-center justify-center">

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-2 md:left-20 z-20 bg-green-900 text-white p-3 rounded-full hover:scale-110 transition"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Cards Wrapper */}
          <div className="relative w-full max-w-6xl h-[241px] md:h-[296px] flex items-center justify-center">

            {services.map((item, index) => {
              const isActive = index === active;

              return (
                <div
                  key={index}
                  className={`
                  absolute transition-all duration-500 ease-in-out
                  ${isActive
                      ? "z-10 scale-100 opacity-100"
                      : "scale-90 opacity-40 blur-sm hidden md:block"}
                `}
                  style={{
                    transform:
                      index === active
                        ? "translateX(0)"
                        : index < active
                          ? "translateX(-60%)"
                          : "translateX(60%)",
                  }}
                >
                  <Link to={item.link}>
                    <div className="relative 
                                    w-[80vw] sm:w-[460px] md:w-[540px] 
                                     h-[280px] sm:h-[320px] md:h-[360px] 
                                     rounded-3xl overflow-hidden shadow-xl">

                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                      <div className="absolute bottom-6 left-6 text-white px-2">
                        <h3 className="text-xl md:text-3xl font-semibold">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm md:text-base max-w-md">
                          {item.desc}
                        </p>
                      </div>

                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-2 md:right-20 z-20 bg-green-900 text-white p-3 rounded-full hover:scale-110 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#177B74" stroke="#177B74" />
              ))}
            </div>
            <span className="text-sm font-medium ml-2 text-[#177B74]">
              Rated 4.9/5
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="mt-8 text-3xl md:text-4xl font-serif text-gray-900"
          >
            Trusted by Businesses for Reliable Legal & Compliance Support
          </motion.h2>

          {/* Reviewers */}
          <div className="flex gap-6 overflow-x-auto scroll-smooth pb-4 mt-10">

            {reviewers?.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="min-w-[220px] bg-white rounded-2xl p-5 shadow-md flex flex-col items-center text-center"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-14 h-14 rounded-xl object-cover"
                />

                <p className="mt-4 font-medium text-gray-900">
                  {person.name}
                </p>

                <div className="mt-2 flex items-center gap-2 bg-[#E6F4F3] text-[#177B74] text-xs px-3 py-1 rounded-full">
                  <span>{person.tag1}</span>
                  <span className="w-1 h-1 bg-[#177B74] rounded-full"></span>
                  <span>{person.tag2}</span>
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* Features */}
      <section className="bg-white-100 py-[1rem] px-6">
        <div className="max-w-3xl mx-auto text-center">

          {/* Small Label */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="text-sm text-[#177B74] font-medium"
          >
            • Features
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
            className="mt-4 text-3xl md:text-5xl font-serif text-gray-900 leading-tight"
          >
            Key benefits that set us apart <br className="hidden md:block" />
            from other firms
          </motion.h2>

          {/* Grid */}
          <div className="mt-16 grid gap-14 sm:grid-cols-2 lg:grid-cols-3">

            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ amount: 0.2 }}
                whileHover={{ y: -6 }}
                className="flex flex-col items-center text-center"
              >

                {/* Icon Box */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#177B74] text-white shadow-lg">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 text-sm leading-relaxed max-w-xs">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-[1rem] px-6">
        <div className="max-w-4xl mx-auto text-center">

          {/* Small Label */}
          <p className="text-sm text-[#177B74] font-medium">
            • How it works
          </p>

          {/* Heading */}
          <h2 className="mt-4 text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
            A proven process to achieve <br className="hidden md:block" />
            your biggest goals
          </h2>

          {/* CTA */}
          <div className="mt-6">
            <button onClick={() =>
              window.document
                .getElementById("contactUs")
                ?.scrollIntoView({ behavior: "smooth" })
            }
              className="inline-flex items-center gap-2 bg-[#177B74] text-white px-6 py-3 rounded-full hover:opacity-90 transition">
              Get in touch
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Timeline */}
          <div className="relative mt-20">

            {/* Vertical Line (Desktop only) */}
            <div className="absolute left-6 md:left-1/2 top-0 h-full w-px bg-gray-300 md:-translate-x-1/2 z-0"></div>

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative mb-20 md:mb-32 flex flex-col md:flex-row items-start pl-14 md:pl-0"
              >

                {/* LEFT SIDE (Even index) */}
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-1/2 md:pr-16 text-left order-2 md:order-1">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="rounded-2xl w-full shadow-lg"
                      />
                    </div>

                    <div className="md:w-1/2 md:pl-16 text-left mt-8 md:mt-0 order-3 md:order-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-gray-600 leading-relaxed">
                        {step.desc}
                      </p>
                      <button className="mt-4 text-[#177B74] font-medium inline-flex items-center gap-1">
                        Discover More <ArrowRight size={16} />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 md:pr-16 text-left mt-8 md:mt-0 order-3 md:order-1">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-gray-600 leading-relaxed">
                        {step.desc}
                      </p>
                      <button className="mt-4 text-[#177B74] font-medium inline-flex items-center gap-1">
                        Discover More <ArrowRight size={16} />
                      </button>
                    </div>

                    <div className="md:w-1/2 md:pl-16 order-2 md:order-2">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="rounded-2xl w-full shadow-lg"
                      />
                    </div>
                  </>
                )}

                {/* Center Number Badge */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-[#177B74] text-white w-10 h-10 rounded-full items-center justify-center font-semibold text-sm shadow-md">
                  {step.number}
                </div>

                {/* Mobile Number */}
                <div className="
                  absolute
                  left-6 md:left-1/2
                  -translate-x-1/2 md:-translate-x-1/2
                  bg-[#177B74]
                  text-white
                  w-8 h-8 md:w-10 md:h-10
                  rounded-full
                  flex items-center justify-center
                  text-xs md:text-sm
                  font-semibold
                  z-10
                ">
                  {step.number}
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-white py-1[rem] px-6">
        <div className="max-w-5xl mx-auto text-center">

          {/* Small Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-sm text-[#177B74] font-medium"
          >
            • Impact
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-3xl md:text-5xl font-serif text-gray-900 leading-tight"
          >
            Real results that drive lasting <br className="hidden md:block" />
            impact for everyone
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
          >
            We deliver tailored strategies, innovative solutions,
            and dedicated support to drive lasting growth
          </motion.p>

          {/* Main Layout */}
          <div className="relative mt-20 flex flex-col lg:flex-row items-center justify-center gap-16">

            {/* Left Stats */}
            <div className="hidden lg:flex flex-col gap-16 items-end">
              {leftStats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-center gap-4"
                >
                  <div className="bg-[#177B74] text-white text-sm px-4 py-1 rounded-full">
                    {item.value}
                  </div>
                  <span className="text-gray-700">{item.label}</span>
                  <div className="w-20 h-px bg-gray-300"></div>
                </motion.div>
              ))}
            </div>

            {/* Center Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600"
                alt="Impact"
                className="rounded-3xl w-[280px] md:w-[360px] lg:w-[400px] shadow-xl"
              />
            </motion.div>

            {/* Right Stats */}
            <div className="hidden lg:flex flex-col gap-16 items-start">
              {rightStats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-20 h-px bg-gray-300"></div>
                  <div className="bg-[#177B74] text-white text-sm px-4 py-1 rounded-full">
                    {item.value}
                  </div>
                  <span className="text-gray-700">{item.label}</span>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Mobile Stats */}
          <div className="lg:hidden mt-12 grid grid-cols-2 gap-6">
            {[...leftStats, ...rightStats].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="bg-[#177B74] text-white text-sm px-4 py-1 rounded-full">
                  {item.value}
                </div>
                <span className="mt-2 text-gray-700 text-sm">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-[3rem] px-6">
        <div className="max-w-2xl mx-auto text-center">

          {/* Small Label */}
          <p className="text-sm text-[#177B74] font-medium">
            • FAQ
          </p>

          {/* Heading */}
          <h2 className="mt-4 text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
            Answers to your most <br className="hidden md:block" />
            common questions
          </h2>

          {/* FAQ List */}
          <div className="mt-14 text-left">

            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 py-5">

                {/* Question Row */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-gray-900 font-medium">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#177B74] text-white w-8 h-8 rounded-full flex items-center justify-center"
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONSULTATION FORM */}
      <section id="contactUs" className="bg-[#1F5B53] py-[1rem] px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="text-white">

            {/* Small Label */}
            <p className="text-sm text-white/70 mb-4">
              • Contact us
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-serif leading-tight">
              Get in touch with our
              <br />
              experts team
            </h2>

            {/* Form Container */}
            <div className="mt-5 bg-[#245E56] p-8 rounded-3xl">

              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full bg-[#2E6A62] border border-white/10 text-white placeholder-white/60 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="w-full bg-[#2E6A62] border border-white/10 text-white placeholder-white/60 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full bg-[#2E6A62] border border-white/10 text-white placeholder-white/60 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30"
                />

                {/* Custom Select */}
                <div className="bg-[#2E6A62] border border-white/10 rounded-xl px-2 py-1">
                  <CustomSelect value={service} onChange={setService} />
                </div>

                <input type="hidden" name="submenu" value={service} />

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 rounded-full font-medium transition flex items-center justify-center gap-2
    ${loading
                      ? "bg-white/50 text-[#1F5B53] cursor-not-allowed"
                      : "bg-white text-[#1F5B53] hover:opacity-90"
                    }
  `}
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#1F5B53] border-t-transparent rounded-full animate-spin"></span>
                      Sending...
                    </>
                  ) : (
                    "Submit your Form →"
                  )}
                </button>
              </form>

              {toast.show && (
                <div className="mt-4 text-center text-red-400">
                  {toast.message}
                </div>
              )}

            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1590650213165-c1fef80648c4?q=80&w=1200&auto=format&fit=crop"
              alt="Contact"
              className="rounded-3xl w-full h-full object-cover shadow-2xl"
            />
          </div>

        </div>
      </section>


      {/* <section className="bg-gray-100 py-24">
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
      </section> */}

    </>
  );
};

export default Home;