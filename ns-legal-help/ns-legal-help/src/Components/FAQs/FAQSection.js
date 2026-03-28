import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

import '../FAQs/FAQsSection.css';


const FAQSection = ({ submenuClicked }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = {
        "GST Return": [
            {
                question: "Is GST Return filing mandatory every month?",
                answer: "Yes, regular taxpayers must file monthly or quarterly GST returns even if there's no transaction."
            },
            {
                question: "What documents are required?",
                answer: "You’ll need your GST login credentials, purchase/sale invoices, and bank statements."
            }
        ],
        "Private Limited Company": [
            {
                question: "How many directors are needed?",
                answer: "A minimum of 2 directors are required to register a Private Limited Company in India."
            },
            {
                question: "Do I need a commercial office address?",
                answer: "No, you can register your company using your residential address as well."
            }
        ],
        "Income Tex Return": [
            {
                question: "When is the due date for filing ITR?",
                answer: "Typically, it is July 31st for individuals not requiring audit."
            },
            {
                question: "Can I file ITR without Form 16?",
                answer: "Yes, as long as you have income proof like salary slips or bank statements."
            }
        ],
        // Add more submenu categories here
    };

    const faqs = faqData[submenuClicked] || [];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    if (!faqs.length) return null; // Hide section if no FAQs

    return (
        <section className="faq-section">
            <h2 className="faq-heading">Frequently Asked Questions</h2>
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-card">
                        <div
                            className="faq-question"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span>{faq.question}</span>
                            {activeIndex === index ? (
                                <ChevronUp className="faq-icon rotate" size={20} color="#079483" />
                            ) : (
                                <ChevronDown className="faq-icon" size={20} color="#6b7280" />
                            )}
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>

    );
};

export default FAQSection;
