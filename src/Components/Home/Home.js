import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home/home.css';
// import logo from '../Assets/Logo.PNG';
import { FaBuilding } from 'react-icons/fa';
import Slider from 'react-slick';
import slider1 from '../Assets/slider1.jpg';
import slider2 from '../Assets/slider2.jpg';
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
        </>
    );
};

export default Home;
