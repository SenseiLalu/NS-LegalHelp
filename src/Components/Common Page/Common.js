import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../Common Page/common.css';
import menuExtraInfo from '../Common Page/ExtraInfo.js';
import planInclusions from '../Common Page/PlanInclusion.js'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

const Common = () => {
    const location = useLocation();
    const form = useRef();

    const [selectedState, setSelectedState] = useState('Delhi');
    const [showMoreInfo, setShowMoreInfo] = useState(false);
    const [infoData, setInfoData] = useState({ plan: '', price: 0, state: '', menu: '' });

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const prices = {
        'Private Limited Company': {
            Delhi: { essential: 7000, enhanced: 9999 },
            Maharashtra: { essential: 5999, enhanced: 9999 },
            Gujarat: { essential: 5499, enhanced: 9499 },
        },
        'Limited Liability Partnership': {
            Delhi: { essential: 3999, enhanced: 7999 },
            Maharashtra: { essential: 4999, enhanced: 8999 },
            Gujarat: { essential: 4499, enhanced: 8499 },
        },
        'GST Return': {
            Delhi: { essential: 3999, enhanced: 7999 },
            Maharashtra: { essential: 4999, enhanced: 8999 },
            Gujarat: { essential: 4499, enhanced: 8499 },
        },
        'TDS Return': {
            Delhi: { essential: 3999, enhanced: 7999 },
            Maharashtra: { essential: 4999, enhanced: 8999 },
            Gujarat: { essential: 4499, enhanced: 8499 },
        },
        'PF Return': {
            Delhi: { essential: 3999, enhanced: 7999 },
            Maharashtra: { essential: 4999, enhanced: 8999 },
            Gujarat: { essential: 4499, enhanced: 8499 },
        }
    };

    let heading = '';
    let description = '';
    let submenuClicked = '';

    if (location.pathname === '/private-limited-company') {
        heading = 'Private Limited Company';
        description = description = (
            <>
                <p>Private Limited Company lies somewhere in between a partnership firm and a widely owned public company, as it have all the advantages namely flexibility, borrowing capacity, greater capital combination of different and diversified abilities, etc.</p>
                <hr />
                <strong style={{ color: 'red' }}><u>Notes:</u></strong><br /><br />
                <strong style={{ textAlign: 'left', display: 'block',fontSize:'14px' }}>
                    1. Stamp duty is additional in case of registered office addresses in Punjab, Madhya Pradesh, Kerala, Rajasthan, and Karnataka.<br />
                    2. In the case of Company Name approval application under RUN services, two names can be proposed and applied at a time. The names applied for will either be approved or sent for resubmission once without any additional cost.<br />
                    3. ESIC Registration, PF Registration and bank account opening is a feature provided by the MCA in SPICe + Form. Please share your preferred choice of the bank in the checklist that we sent post confirmation of service, we shall select the same in the form and the concerned bank shall contact you for further processing post company incorporation. You will directly receive the emails with respect to the registration from the concerned authority.<br />
                    4. For all the Self attested Documents you shall scan your original Documents on a blank paper with your signature stating 'Self-attested'.<br />
                </strong>
            </>
        );
        submenuClicked = 'Private Limited Company';
    } else if (location.pathname === '/limited-liabilty-partnership') {
        heading = 'Limited Liability Partnership';
        description = 'Register now to become a member!';
        submenuClicked = 'Limited Liability Partnership';
    } else if(location.pathname ==='/gst-return'){
        heading = 'GST Returns';
        description = 'Fill Your GST Returns Now';
        submenuClicked = 'GST Return';
    }else if(location.pathname ==='/tds-return'){
        heading = 'TDS Returns';
        description = 'Fill Your TDS Returns Now';
        submenuClicked = 'TDS Return';
    }else if(location.pathname ==='/pf-return'){
        heading = 'PF Returns';
        description = 'Fill Your PF Returns Now';
        submenuClicked = 'PF Return';
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_3a1xpy4', 'template_5lyufwh', e.target, '1bIgXVe5hH5o9wLga')
            .then(() => {
                setShowSuccessMessage(true);
                setShowErrorMessage(false);
                e.target.reset();
            }, () => {
                setErrorMessage('Failed to send email, please try again.');
                setShowErrorMessage(true);
                setShowSuccessMessage(false);
            });
    };

    const handleMoreInfoClick = (planType) => {
        const price = prices[submenuClicked][selectedState][planType.toLowerCase()];
        setInfoData({
            plan: planType,
            price,
            state: selectedState,
            menu: submenuClicked,
        });
        setShowMoreInfo(true);
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); // Scroll down to info box
    };

    return (
        <div className="common-container">
            <div className="common-left">
                <h1 className="common-heading">{heading}</h1>
                <hr />
                <p className="common-description">{description}</p>

                <p className="common-info">Our team will get back to you shortly after registration.</p>
            </div>
            <div className="common-right">
                <h1 className="common-heading">Enquery Form</h1>
                <hr />
                <form className="common-form" onSubmit={handleSubmit} ref={form}>
                    <br />
                    <input type="text" name="name" placeholder="Your name" className="common-input" required />
                    <input type="tel" name="phone" placeholder="Phone number" className="common-input" required />
                    <input type="email" name="email" placeholder="Email address" className="common-input" required />
                    <input type="hidden" name="submenu" value={submenuClicked} />
                    <button type="submit" className="common-button">Submit</button>
                </form>
            </div>

            {/* Price Plan Section */}
            <div className="price-plan-section">
                <h2>Select Your State to View Pricing</h2>
                <hr />
                <select
                    className="state-select"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                >
                    {Object.keys(prices[submenuClicked]).map((state) => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>

                <div className="price-plans">
                    <div className="price-card">
                        <h3><u style={{ color: '#079483' }}>Essential Plan</u></h3>
                        <p className="price">₹{prices[submenuClicked][selectedState].essential}</p>
                        <ul>
                            {planInclusions[submenuClicked]?.essential?.map((item, index) => (
                                <li key={index} style={{fontSize:'13px'}}><strong>•</strong> {item}</li>
                            ))}
                        </ul>
                        <div className="more-info-container">
                            <button
                                className="more-info-button"
                                onClick={() => handleMoreInfoClick('Essential')}
                            >
                                More Info
                            </button>
                        </div>
                    </div>
                    <div className="price-card">
                        <h3><u style={{ color: '#079483' }}>Enhanced Plan</u></h3>
                        <p className="price">₹{prices[submenuClicked][selectedState].enhanced}</p>
                        <ul>
                            {planInclusions[submenuClicked]?.enhanced?.map((item, index) => (
                                <li key={index} style={{fontSize:'13px'}}><strong>•</strong>{item}</li>
                            ))}
                        </ul>
                        <div className="more-info-container">
                            <button
                                className="more-info-button"
                                onClick={() => handleMoreInfoClick('Enhanced')}
                            >
                                More Info
                            </button>
                        </div>
                    </div>
                </div>

                {/* Info Box */}
                {showMoreInfo && (
                    <div className="info-box">
                        <h3><u style={{ color: '#079483' }}>Plan Details~</u></h3>
                        <p><strong>Menu:</strong> {infoData.menu}</p>
                        <p><strong>State:</strong> {infoData.state}</p>
                        <p><strong>Plan Type:</strong> {infoData.plan}</p>
                        <p><strong>Price:</strong> ₹{infoData.price}</p>

                        {/* Dynamic content based on plan */}
                        {menuExtraInfo[infoData.menu] && menuExtraInfo[infoData.menu][infoData.plan] && (
                            <>
                                <hr />
                                <p><strong style={{ color: '#079483' }}>Information and Documents Required:</strong></p>
                                <ul>
                                    {menuExtraInfo[infoData.menu][infoData.plan].map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        <button className="close-button" onClick={() => setShowMoreInfo(false)}>Close</button>
                    </div>
                )}
            </div>

            {showSuccessMessage && (
                <div className="custom-success-overlay">
                    <div className="custom-success-card">
                        <div className="success-icon"><AiOutlineCheckCircle size={48} color="#28a745" /></div>
                        <p><strong style={{ color: 'green' }}>Your Query sent successfully!</strong> <br /> <br />
                            <strong>We will review your request and our team will contact you very soon !</strong>
                            <br />
                            <br />
                            <strong>Regards,</strong>
                            <br />
                            <strong>Ns legalHelp Team '</strong>
                        </p>
                        <button onClick={() => setShowSuccessMessage(false)} className="close-success-btn">
                            Close
                        </button>
                    </div>
                </div>
            )}

            {showErrorMessage && (
                <div className="custom-error-overlay">
                    <div className="custom-error-card">
                        <div className="error-icon">
                            <AiOutlineCloseCircle size={48} color="#dc3545" />
                        </div>
                        <p>
                            <strong style={{ color: 'red' }}>Oops! Something went wrong.</strong> <br /><br />
                            <strong>{errorMessage || 'Please try again later.'}</strong>
                            <br /><br />
                            <strong>Regards,</strong>
                            <br />
                            <strong>Ns legalHelp Team</strong>
                        </p>
                        <button onClick={() => setShowErrorMessage(false)} className="close-error-btn">
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* <ToastContainer/> */}

        </div>
    );
};

export default Common;
