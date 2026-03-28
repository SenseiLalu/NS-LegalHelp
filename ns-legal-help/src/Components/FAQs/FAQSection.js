import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import '../FAQs/FAQsSection.css';
import faqImg from  '../Assets/faq.png';

const FAQSection = ({ submenuClicked }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const [mainHeading, setMainHeading] = useState(null);

  const faqData = {
    "GST Return": [
      {
        question: "Q. What happens if I miss my GST return?",
        answer: "Late filing leads to penalties of ₹50/day (₹20 for NIL returns) and blocks ITC.",
      },
      {
        question: "Q. Do I have to file NIL returns if I had no sales?",
        answer: "Yes. NIL GSTR-1 and GSTR-3B must be filed to avoid penalties.",
      },
      {
        question: "Q. Can I get ITC without filing returns?",
        answer: "No. You must file GSTR-3B and GSTR-1 on time to claim ITC.",
      },
    ],
    "Private Limited Company": [
      {
        question: "Q. How many people are needed to register a Private Limited Company?",
        answer:
          "A minimum of 2 directors and 2 shareholders are required.",
      },
      {
        question: "Q. Can a foreign national be a director/shareholder?",
        answer: "Yes, a foreign national can be a shareholder or director, provided at least one director is an Indian resident.",
      },
       {
        question: "Q. Is there any minimum capital requirement?",
        answer: "No, there is no minimum paid-up capital requirement.",
      },
       {
        question: "Q. Do I need a physical office to register?",
        answer: "Yes, you must provide an address for the company’s registered office (can be residential or commercial).",
      },
    ],
    "Limited Liabilty Partnership": [
      {
        question: "Q. How many partners are required to register an LLP?",
        answer:
          "A minimum of 2 partners are required. There’s no maximum limit.",
      },
      {
        question: "Q. Is an LLP required to maintain books of accounts?",
        answer: "Yes, every LLP must maintain proper books of accounts and file annual returns.",
      },
       {
        question: "Q. Is audit mandatory for LLP?",
        answer: "Audit is mandatory only if turnover exceeds ₹40 lakhs or contribution exceeds ₹25 lakhs.",
      },
       {
        question: "Q. Can an LLP be converted into a Private Limited Company?",
        answer: "Yes, an LLP can be converted into a Private Limited Company subject to MCA approval.",
      },
      {
        question: "Q. What is the cost involved in LLP registration??",
        answer: "Government fees are based on capital contribution. For most small businesses, MCA charges are low, and professional service costs vary by provider.",
      },
    ],
    "Sole Proprietorship": [
      {
        question: "Q. Can I start a business without registration?",
        answer:
          "Yes, but registering gives a legal identity, allows bank account opening, and ensures compliance with tax authorities.",
      },
      {
        question: "Q. Is GST registration mandatory?",
        answer: "Only if your turnover exceeds the GST threshold or you sell inter-state.",
      },
       {
        question: "Q. How long does it take to register a Sole Proprietorship?",
        answer: "Typically 7–10 business days, depending on documents and approvals.",
      },
       {
        question: "Q. Can a Sole Proprietorship be converted into a Private Limited Company?",
        answer: "Yes, you can convert your business into a company or LLP later if needed.",
      },
    ],
    "One Person Company (OPC)": [
      {
        question: "Q. Who can register as a One Person Company?",
        answer:
          "Only one individual shareholder/director is allowed.",
      },
      {
        question: "Q. Can the shareholder be a foreign national?",
        answer: "Yes, provided the shareholder appoints a nominee who is an Indian resident.",
      },
       {
        question: "Q. Is there any minimum capital requirement?",
        answer: "No, there is no minimum paid-up capital requirement.",
      },
       {
        question: "Q. Do I need a registered office for OPC?",
        answer: "Yes, a physical address (residential or commercial) must be provided as the registered office.",
      },
    ],
    "Hindu Undivided Family,HUF Deed": [
      {
        question: "Q. Who can create a Hindu Undivided Family (HUF)?",
        answer:
          "Any Hindu, Jain, Sikh, or Buddhist family can form an HUF with at least two family members.",
      },
      {
        question: "Q. Is it necessary to register an HUF with the government?",
        answer: "No separate registration is needed — creating a HUF Deed and obtaining a PAN is sufficient.",
      },
       {
        question: "Q. Can an HUF have a bank account?",
        answer: "Yes, once the PAN is allotted, a bank account in the name of the HUF can be opened.",
      },
       {
        question: "Q. Who is the Karta of an HUF?",
        answer: "The eldest male member is typically the Karta, though a female Karta is also allowed as per law.",
      },
       {
        question: "Q. Can an HUF be dissolved?",
        answer: "Yes, an HUF can be dissolved by mutual agreement of all coparceners or when all property is divided among the members.",
      },
       {
        question: "Q. Advantages of Creating an HUF?",
        answer: "Helps in tax savings through a separate PAN and ITR. ,Enables joint family ownership of property and assets. ,Smooth inheritance and succession planning. ,Easy to form and operate under Hindu Law. ,Builds a separate financial identity for the family.",
      },
    ],
    "Partnership": [
      {
        question: "Q. Is registration of a partnership firm mandatory?",
        answer:
          "No, but it’s highly recommended as a registered firm can file suits in court and access more legal protections.",
      },
      {
        question: "Q. How many partners are required to start a partnership firm?",
        answer: "At least 2 partners are required; the maximum is 20 partners.",
      },
       {
        question: "Q. How long does it take to register a partnership firm?",
        answer: "It typically takes 7–10 working days, depending on document submission and approval by the Registrar of Firms.",
      },
       {
        question: "Q. Can a partnership firm later be converted into an LLP or Private Limited Company?",
        answer: "Yes, a registered partnership can be converted into an LLP or Private Limited Company for greater legal and financial flexibility.",
      },
    ],
    "E-Commerce Business": [
      {
        question: "Q. Is GST registration mandatory for all online sellers?",
        answer:
          "if you sell goods or services online in India or on a marketplace, GST registration is mandatory.",
      },
      {
        question: "Q. Can I start as a Proprietorship and later convert to a Private Limited Company?",
        answer: "Yes. Many sellers start small and convert later into a Private Limited Company for scalability and credibility.",
      },
       {
        question: "Q. How long does it take to register my e-commerce business?",
        answer: "Usually around 7-10 working days if documents are in order and the process is streamlined.",
      },
       {
        question: "Q. Do I need a trademark from day one?",
        answer: "Not mandatory—but it adds significant value and protects your brand from copycats in a competitive online space.",
      },
    ],
    "Non Profit Organization": [
      {
        question: "Q. Is Section 8 Company better than a Trust or Society?",
        answer:
          "Yes — it offers higher credibility, strict governance, and better acceptance by corporates, donors, and authorities.",
      },
      {
        question: "Q. How long does it take to register a Section 8 Company?",
        answer: "Typically 15–25 days, depending on licence approval from MCA.",
      },
       {
        question: "Q. Can a Section 8 Company make profits?",
        answer: "It can earn income, but profits must be used solely for charitable purposes, not distributed to members.",
      },
       {
        question: "Q. Can foreigners be directors in a Section 8 Company??",
        answer: "Yes — with valid documents, foreign nationals can become directors.",
      },
    ],
    "Income Tex Return": [
      {
        question: "Q. What happens if I miss the ITR filing deadline?",
        answer: "You may face penalties up to ₹5,000 and lose your refund eligibility.",
      },
      {
        question: "Q. Can I file an ITR if my income is below the taxable limit?",
        answer: "Yes! It helps in visa processing, loan applications, and claiming TDS refunds.",
      },
       {
        question: "Q. How do I track my refund?",
        answer: "After filing, we help you track your refund status through the income tax portal.",
      },
    ],
     "Private Limited Comapny Annual Filling": [
      {
        question: "Q. Is ROC filing mandatory even if there is no business activity?",
        answer: "Yes, every company must file annual returns and financials even if there's no revenue or operations.",
      },
      {
        question: "Q. What is the penalty for late filing of ROC forms?",
        answer: "The penalty starts at ₹100 per day per form, with no upper limit.",
      },
       {
        question: "Q. Can NS Legalhelp help with previous year non-compliance?",
        answer: "Yes, we can help you file overdue returns and regularize your company status..",
      },
    ],
     "OPC Annual Filling": [
      {
        question: "Q. Is ROC Filing required even if there is no business activity?",
        answer: "Yes. OPCs must file AOC-4 and MGT-7A regardless of revenue.",
      },
      {
        question: "Q. Do OPCs need to hold AGM?",
        answer: "No, OPCs are exempt from holding AGMs, but annual filings are still mandatory.",
      },
       {
        question: "Q. What are the consequences of non-compliance?",
        answer: "Late fees of ₹100/day per form and risk of being marked as non-active.",
      },
       {
        question: "Q. Which form is used to file the annual return for OPCs?",
        answer: "Form MGT-7A is used for filing annual return for OPCs and small companies.",
      },
    ],
    "LLP Annual Filling": [
      {
        question: "Q. Is LLP ROC filing mandatory even if there's no income?",
        answer: "Yes, both Form 11 and Form 8 must be filed every year, even for NIL activity.",
      },
      {
        question: "Q. What is the penalty for late filing of Form 8 or 11?",
        answer: "₹100 per day per form with no upper limit.",
      },
       {
        question: "Q. Can I file previous year LLP returns with NS Legalhelp?",
        answer: "Absolutely. We assist with delayed filings and regularizing LLP compliance status.",
      },
    ],
    "Nidhi Company Annual Filling": [
      {
        question: "Q. Is annual filing mandatory even for a Nidhi Company with NIL activity?",
        answer: "Yes. Even if there is no business transaction, all Nidhi Companies must file annual returns to remain compliant.",
      },
      {
        question: "Q. What happens if a Nidhi Company fails to file its annual forms?",
        answer: "Late fees of ₹100/day per form apply, and prolonged non-compliance can lead to loss of Nidhi status or penalties.",
      },
       {
        question: "Q. Can NS LegalHelp help with pending or overdue filings?",
        answer: "Absolutely. We assist in clearing past non-compliance and restoring your company’s good standing.",
      },
    ],
    "NPO/Section-8 Comapny Annual Filling": [
      {
        question: "Q. Is annual filing mandatory for NGOs with NIL activity?",
        answer: "Yes. Even NIL NGOs must file AOC-4 & MGT-7 to remain compliant.",
      },
      {
        question: "Q. Is Form 10B applicable to every Section 8 Company?",
        answer: "Applicable only for NGOs registered under Section 12A with receipts above ₹2.5 Lakhs.",
      },
       {
        question: "Q. Can NS LegalHelp assist with overdue filings?",
        answer: "Yes. We help clear past non-compliances and restore company status.",
      },
    ],"IEC Registration": [
      {
        question: "Q. Is IEC mandatory for all exporters and importers?",
        answer: "Any person or entity involved in import or export must obtain IEC unless specifically exempted.",
      },
      {
        question: "Q. Is IEC required for service exports?",
        answer: "IEC is required even for exporting services and receiving foreign payments.",
      },
       {
        question: "Q. How long does IEC registration take?",
        answer: "IEC is usually issued within 2–5 working days, subject to document verification.",
      },{
        question: "Q. Does IEC need renewal every year?",
        answer: "IEC has lifetime validity, but details must be updated if there are changes.",
      },  
    ],
    "GST Registation": [
      {
        question: "Q. IIs GST registration mandatory for all businesses?",
        answer: "No, it is mandatory only if your business meets the prescribed conditions or thresholds.",
      },
      {
        question: "Q. Can I apply for GST voluntarily?",
        answer: "Yes, voluntary GST registration is allowed and often beneficial.",
      },
       {
        question: "Q. How long does GST registration take?",
        answer: "Typically 3–7 working days, subject to document verification.",
      },{
        question: "Q. Can I cancel my GST registration later?",
        answer: "Yes, GST registration can be cancelled if business operations are discontinued or eligibility change.",
      },  
    ],
  };

  const faqs = faqData[submenuClicked] || [];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!faqs.length) return null;

  return (
    <section className="faq-section">
      <div className="faq-layout-wrapper">
        <div className="faq-image">
          <img src={faqImg} alt="FAQ Characters" />
        </div>
        <div className="faq-content">
          <p className="text-[#177B74] mb-3">• Get Answers to all your Queries</p>
          <h2 className="text-2xl md:text-4xl font-serif text-gray-900 leading-tight">FAQs On Return filings under {submenuClicked}</h2>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card">
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <span>{faq.question}</span>
                  {activeIndex === index ? (
                    <ChevronUp className="faq-icon rotate" size={20} color="#0c7359" />
                  ) : (
                    <ChevronDown className="faq-icon" size={20} color="#0c7359" />
                  )}
                </div>
                {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;