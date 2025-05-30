import React from 'react';
import '../AboutUs/aboutus.css';

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
            <div className="aboutus-note-card">
                <h2>Who We Are?</h2>
                <hr/>   
                <p>
                    NS Legal Help is a online compliance services platform
                    dedicated to help people with series of services which
                    helps an entrepreneur to start, establish and develop
                    his/her own business with the utmost ease leaving the
                    best experience to our clients.
                    <br/>
                    From incorporating a business structure like a Sole
                    Proprietorship, Partnership Firm, Limited Liability
                    Partnership, Private Limited Company, One Person
                    Company, Nidhi Limited Company and its Post
                    Registration Compliances and Service like Accounting
                    Services, Annual Filing Services, ITR Filings & GST Return
                    Filings etc., that helps businesses to run their operations
                    smoothly and efficiently, we are here to provide all of
                    these services.
                </p>
            </div>

            <div className="team-section">
                <h2>Our Team</h2>
                <hr/>
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
            </div>
        </div>
    );
};

export default AboutUs;
