import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home/home.css';
// import logo from '../Assets/Logo.PNG';
import { FaBuilding } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../Assets/mainSlider1.png';
import slider2 from '../Assets/mainSlinder2.png';
import slider3 from '../Assets/mainSlinder3.png';
// import slider4 from '../Assets/slider4.png';
const subcards = [
    { title: 'Private Ltd', route: '/private-limited-company' },
    { title: 'LLP', route: '/limited-liabilty-partnership' },
    { title: 'OPC', route: '/one-person-company' },
    { title: 'Partnership', route: '/partnership' },
    { title: 'Sole Proprietor', route: '/sole-proprietor' },
];

const Home = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    const submitAboutUs = () => {
        navigate('/about-us');
    };


    const images = [
        slider1,
        slider2,
        slider3,
        // slider4,
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
            <div className="home-container">
                {/* <div className="home-image">
                    <img src={logo} alt="Welcome" />
                </div>
                <div className="home-message">
                    <h1>
                        AN ONLINE PLATFORM DEDICATED TO ASSISTING & HELPING PEOPLE IN STARTING THEIR OWN BUSINESS.
                    </h1>
                    <p>As a Compliances Service Provider, We are here to Assist you.</p>
                </div>
                <div className='about-us'>
                    <button className='about-button' onClick={submitAboutUs}>AboutUs</button>
                </div> */}

            </div>
            <div className="home-carousel-container">
                <Slider {...settings}>
                    {images.map((img, idx) => (
                        <div key={idx}>
                            <img src={img} alt={`Slide ${idx + 1}`} className="carousel-image" />
                        </div>
                    ))}
                </Slider>
            </div>
            <hr />
            <div className='services'>
                <h2>Frequently Used Services</h2>
            </div>
            <div className="subcard-container">
                {subcards.map((card, index) => (
                    <div key={index} className="subcard" onClick={() => handleNavigate(card.route)}>
                        <FaBuilding className="subcard-icon" />
                        <p className="subcard-title">{card.title}</p>
                    </div>
                ))}
            </div>

            {/* ------Why Choose Us--------- */}

            <div className="why-us-section">
                <h2 className="why-heading">Why Choose Us</h2>
                <div className="why-grid">
                    <div className="why-card">
                        <h3>✅ Expert Guidance</h3>
                        <p>Get assistance from seasoned professionals with over a decade of experience in business compliance and registration.</p>
                    </div>
                    <div className="why-card">
                        <h3>💰 Transparent Pricing</h3>
                        <p>No hidden charges – pay only for what you need with upfront and clear pricing packages.</p>
                    </div>
                    <div className="why-card">
                        <h3>⚡ On-Time Delivery</h3>
                        <p>We value your time. All services are delivered within committed timelines.</p>
                    </div>
                    <div className="why-card">
                        <h3>📞 Dedicated Support</h3>
                        <p>Reach us via WhatsApp, phone, or email – we’re always here to help you.</p>
                    </div>
                    <div className="why-card">
                        <h3>📄 Easy Documentation</h3>
                        <p>Simplified document collection and submission process to save your time and energy.</p>
                    </div>
                    <div className="why-card">
                        <h3>🔒 Data Security</h3>
                        <p>Your business data is 100% secure with us. We follow industry best practices for confidentiality and protection.</p>
                    </div>
                </div>
            </div>

            {/* -----------Call to Action----------- */}
            <div className="stats-section">
                <div className="stats-grid">
                    <div className="stat-box">
                        <h2>1000+</h2>
                        <p>Happy Clients</p>
                    </div>
                    <div className="stat-box">
                        <h2>500+</h2>
                        <p>Companies Registered</p>
                    </div>
                    <div className="stat-box">
                        <h2>300+</h2>
                        <p>Trademarks Filed</p>
                    </div>
                    <div className="stat-box">
                        <h2>24/7</h2>
                        <p>Customer Support</p>
                    </div>
                </div>
            </div>

            {/* ----------Client Testimonials---------- */}
            <div className="testimonials-section">
                <h2 className="testimonial-heading">What Our Clients Say</h2>
                <div className="testimonial-grid">
                    <div className="testimonial-card">
                        <p className="testimonial-text">"Excellent service and expert guidance! My business registration was done quickly without any hassle. Highly recommend."</p>
                        <div className="testimonial-client">
                            <img src="https://i.pravatar.cc/60?img=11" alt="client" />
                            <div>
                                <strong>Rahul Mehta</strong>
                                <p>Startup Founder, Delhi</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p className="testimonial-text">"Their team is responsive and professional. Filing my GST returns was easy and error-free. Great support!"</p>
                        <div className="testimonial-client">
                            <img src="https://i.pravatar.cc/60?img=5" alt="client" />
                            <div>
                                <strong>Nisha Arora</strong>
                                <p>Freelancer, Mumbai</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p className="testimonial-text">"Transparent pricing and fast delivery! Got my trademark registered in record time. Thank you so much."</p>
                        <div className="testimonial-client">
                            <img src="https://i.pravatar.cc/60?img=9" alt="client" />
                            <div>
                                <strong>Aditya Verma</strong>
                                <p>Entrepreneur, Bangalore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* -----------Call to Action----------- */}

            <div className="cta-section">
                <div className="cta-content">
                    <h2>Ready to Start Your Business Journey?</h2>
                    <p>Let our experts guide you through the registration and compliance process. Get your free consultation now!</p>
                    <button className="cta-button" onClick={() => navigate("/contact")}>
                        Contact Us
                    </button>
                </div>
            </div>

        
        </>
    );
};

export default Home;
