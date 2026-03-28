import React from 'react';
import '../AboutUs/aboutus.css';
import aboutUs from '../Assets/aboutus.png'

const teamMembers = [
    {
        name: 'Nivedita Sharma',
        role: 'Founder & CEO',
        description: 'Nivedita brings over 15 years of experience in business compliance and corporate strategy. His vision is to simplify entrepreneurship for everyone.',
        image: '/images/john.jpg'
    },
    {
        name: 'Jane Smith',
        role: 'COO',
        description: 'Jane oversees the company’s operations, ensuring excellence in client delivery and team performance.',
        image: '/images/jane.jpg'
    },
    {
        name: 'Michael Ray',
        role: 'CTO',
        description: 'Michael drives our technology innovations, ensuring we’re always ahead in delivering seamless digital experiences.',
        image: '/images/michael.jpg'
    }
];

const AboutUs = () => {
    return (
        <div className="aboutus-container">
            {/* <div className="home-carousel-container">
                <img src={aboutUs} alt="More Info" className="carousel-image" />
            </div> */}
            <hr />
            <div className="aboutus-note-card">
                <div className="home-carousel-container">
                <img src={aboutUs} alt="More Info" className="carousel-image" />
            </div>
                <h2>Who We Are?</h2>
                <hr />
                <p>
                    At NS LegalHelp, we simplify compliance and legal services for individuals, startups, and businesses across India. Whether it's GST Filing, ITR Filing, IEC Registration, or LLP Incorporation, we ensure every service is fast, transparent, and hassle-free.

                    <br />
                    We’re not just a service provider—we’re your compliance partner. Backed by experienced professionals, we bring together legal expertise and digital convenience to help you stay focused on growth while we take care of the legal work.
                </p>
            </div>

            {/* <div className="team-section">
                <h2>Our Team</h2>
                <hr />
                {teamMembers.map((member, index) => (
                    <div className={`team-member ${index % 2 !== 0 ? 'reverse' : ''}`} key={index}>
                        <img src={member.image} alt={member.name} className="team-image" />
                        <div className="team-details">
                            <h3>{member.name}</h3>
                            <p className="role">{member.role}</p>
                            <p>{member.description}</p>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default AboutUs;
