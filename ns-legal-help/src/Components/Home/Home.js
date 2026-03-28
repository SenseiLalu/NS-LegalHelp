import React, { useEffect, useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { Link, useNavigate } from 'react-router-dom';
import '../Home/home.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from '../Assets/homeSlider.png';
import slider2 from '../Assets/homeSlider2.png';

import home3 from '../Assets/home3.png';
import aboutUsImg from '../Assets/aboutUsimg.png';
import home3final1 from '../Assets/homefinal1.png';
import home4 from '../Assets/home4.png';
import home4final from '../Assets/home4Edit.png';
import home5 from '../Assets/home5.png';
import home6 from '../Assets/home6.png';
import home7 from '../Assets/home7.png';
import home8 from '../Assets/home8.png';

import homeServLogo1 from '../Assets/homeServiceLogo.png';

import CustomSelect from './CustomSelect';

import {
    FaBuilding,
    FaUniversity,
    FaClipboardCheck,
    FaGavel,
} from "react-icons/fa";

const services = [
    {
        title: "Start Your Own Business",
        icon: <FaBuilding />,
        links: [
            { text: 'Private Limited Company', to: '/private-limited-company' },
            { text: 'Limited Liabilty Partnership', to: '/limited-liabilty-partnership' },
            { text: 'Sole Proprietorship', to: '/solePropritorship' },
            { text: 'Hindu Undivided Family,HUF Deed', to: '/HufDeed' },
            // { text: 'Public Limited Comapny', link: '/services/web' },
            // { text: 'One Person Company (OPC)', link: '/onePersonCompany' },
            // { text: 'Partnership', link: '/partnership' },
            // { text: 'E-Commerce Business', link: '/ecomBusiness' },
            // { text: 'Company Registration In USA', link: '/services/app' },
        ],
    }, {
        title: "Returns & Compliance",
        icon: <FaBuilding />,
        links: [
            { text: 'GST Return', to: '/gst-return' },
            { text: 'Income Tex Return', to: '/itr-return' },
            { text: 'Private Limited Comapny Annual Filling', to: '/plc-annualFilling' },
            { text: 'LLP Annual Filling', to: '/llp-annualFilling' },
        ],
    }, {
        title: "Website & Marketing",
        icon: <FaBuilding />,
        links: [
            { text: 'E-Commorce Website', to: '/website' },
            { text: 'Buiness Website', to: '/website' },
            { text: 'Portfolio', to: '/website' },
        ],
    },

    // {
    //     title: "Company & Business Registrations",
    //     icon: <FaBuilding />,
    //     links: [
    //         { text: "Private Limited", to: "/services/private-limited" },
    //         { text: "LLP", to: "/services/llp" },
    //         { text: "OPC", to: "/services/opc" },
    //         { text: "Partnership", to: "/services/partnership" },
    //         { text: "Sole Proprietorship", to: "/services/sole-proprietorship" },
    //     ],
    // },
];


const Home = () => {
    const navigate = useNavigate();

    const [service, setService] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [toast, setToast] = useState({
        show: false,
        message: "",
        type: "" // "success" | "error"
    });

    const testimonialRef = useRef(null);

    const scrollTestimonials = (direction) => {
        if (!testimonialRef.current) return;

        testimonialRef.current.scrollBy({
            left: direction * 300,
            behavior: "smooth",
        });
    };


    const showToast = (message, type = "success") => {
        setToast({ show: true, message, type });

        setTimeout(() => {
            setToast({ show: false, message: "", type: "" });
        }, 3000); // 3 sec
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!service) {
            showToast("Please select a service", "error");
            return;
        }

        emailjs.sendForm(
            "service_pttzz1f",
            "template_5lyufwh",
            e.target,
            "1bIgXVe5hH5o9wLga"
        ).then(
            () => {
                // showToast("✅ Email sent successfully!", "success");
                alert("✅ Email sent successfully!");
                e.target.reset();
                setService("");
            },
            () => {
                // showToast("❌ Failed to send email. Try again.", "error");
                alert("❌ Failed to send email. Try again.", "error");
            }
        );
    };


    const handleNavigate = (path) => {
        navigate(path);
    };

    const submitAboutUs = () => {
        navigate('/about-us');
    };


    const images = [
        slider1,
        slider2,
    ];


    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };


    return (
        <>
            <div className="home-carousel-container">
                <Slider {...settings}>
                    {images.map((img, idx) => (
                        <div key={idx}>
                            <img src={img} alt={`Slide ${idx + 1}`} className="carousel-image-home" />
                        </div>
                    ))}
                </Slider>
            </div>
            <hr />

            <section className="services-section">
                <h2 className="services-title">
                    Popular <span>Services</span>
                </h2>

                <p className="services-subtitle">
                    Get fast, reliable and customizable online business solution & legal services
                    with free expert consultation.
                </p>

                <div className="services-scroll">
                    {services.map((service, i) => (
                        <div className="service-card" key={i}>
                            <div className="icon-wrapper">{service.icon}</div>

                            <h3>{service.title}</h3>

                            <p className="service-desc">
                                {service.links.map((link, idx) => (
                                    <span key={idx}>
                                        <Link to={link.to} className="desc-link">
                                            {link.text}
                                        </Link>
                                        {idx < service.links.length - 1 && " | "}
                                    </span>
                                ))}
                            </p>

                            {/* <Link to={service.links[0].to} className="learn-more">
                                Learn More
                            </Link> */}
                        </div>
                    ))}
                </div>
            </section>

            <hr />

            <div className="free-consultation">
                <img src={home6} alt="More Info" />
            </div>

            <hr />

            {/* ---------- Client Testimonials ---------- */}
            {/* <section className="testimonials">

                <h2 className="testimonials-title">What Our <span style={{ color: "#079483" }}>Clients</span> Say</h2>

                <div className="testimonials-scroll">
                    {[
                        {
                            text:
                                "Excellent service and expert guidance! My business registration was done quickly without any hassle. Highly recommend.",
                            name: "Rahul Mehta",
                            role: "Startup Founder, Delhi",
                            img: "https://i.pravatar.cc/60?img=11",
                        },
                        {
                            text:
                                "Their team is responsive and professional. Filing my GST returns was easy and error-free. Great support!",
                            name: "Nisha Arora",
                            role: "Freelancer, Mumbai",
                            img: "https://i.pravatar.cc/60?img=5",
                        },
                        {
                            text:
                                "Transparent pricing and fast delivery! Got my trademark registered in record time. Thank you so much.",
                            name: "Aditya Verma",
                            role: "Entrepreneur, Bangalore",
                            img: "https://i.pravatar.cc/60?img=9",
                        },
                    ].map((t, i) => (
                        <div className="testimonial-card" key={i}>
                            <p className="testimonial-text">“{t.text}”</p>

                            <div className="testimonial-client">
                                <img src={t.img} alt={t.name} />
                                <div>
                                    <strong>{t.name}</strong>
                                    <span>{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}

            <section className="testimonial-section">
                <div className="testimonial-header">
                    <h2>What Our Clients Say</h2>

                    <div className="testimonial-nav mobile-nav">
                        <button onClick={() => scrollTestimonials(-1)}>‹</button>
                        <button onClick={() => scrollTestimonials(1)}>›</button>
                    </div>
                </div>

                {/* 👇 wrapper added */}
                <div className="testimonial-wrapper">
                    <div className="testimonial-cards" ref={testimonialRef}>
                        {[
                            {
                                name: "Ramandeep Singh",
                                rating: 5,
                                text:
                                    "Everything is good with Kulwinder, he is such a nice person and his way of communication is very good and he solves the queries time to time.",
                                img: "https://i.pravatar.cc/80?img=11",
                            },
                            {
                                name: "Sawai Singh",
                                rating: 5,
                                text:
                                    "The experience is very good and loved the team how they work smoothly, that's commendable.",
                                img: "https://i.pravatar.cc/80?img=5",
                            },
                            {
                                name: "Dr. Luqman Khan",
                                rating: 4,
                                text:
                                    "I am the partner of Medrix Records Management Services LLP. Working with Ujjwal and timely information provided helped resolve issues smoothly.",
                                img: "https://i.pravatar.cc/80?img=9",
                            },
                        ].map((item, index) => (
                            <div className="testimonial-card" key={index}>
                                <div className="testimonial-user">
                                    <img src={item.img} alt={item.name} />
                                    <div>
                                        <h4>{item.name}</h4>
                                        <p className="stars">
                                            {"★".repeat(item.rating)}
                                            {"☆".repeat(5 - item.rating)}{" "}
                                            <span>{item.rating}/5</span>
                                        </p>
                                    </div>
                                </div>

                                <p className="testimonial-text">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <hr />

            <div className="free-consultation">
                <img src={home3final1} alt="More Info" />

                <div className="consultation-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <input type="text" name="name" placeholder="Your name" />

                            <input type="tel" name="phone" placeholder="Phone number" />
                            <input type="email" name="email" placeholder="Email address" />
                            {/* Custom Dropdown */}
                            <CustomSelect value={service} onChange={setService} />
                            <input type="hidden" name="submenu" value={service} />
                        </div>

                        <button type="submit">Submit</button>

                        {toast.show && (
                            <div className={`toast ${toast.type}`}>
                                {toast.message}
                            </div>
                        )}

                    </form>

                </div>
            </div>

            {/* -----------Call to Action----------- */}

            <div className="cta-banner">
                <img
                    src={aboutUsImg}
                    alt="NS LegalHelp CTA"
                    className="cta-image"
                />

                <div className="cta-overlay">
                    <button onClick={submitAboutUs} className="cta-btn">
                        About Us
                    </button>
                </div>
            </div>

        </>
    );
};

export default Home;