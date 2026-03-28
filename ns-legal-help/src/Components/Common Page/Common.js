import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../Common Page/common.css';
import "../Website/Website.css";
import menuExtraInfo from '../Common Page/ExtraInfo.js';
import planInclusions from '../Common Page/PlanInclusion.js'
import { AiOutlineCheck, AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineFileDone } from 'react-icons/ai';
import gstImg1 from '../Assets/gstImg2.png'
import gstR2 from '../Assets/gstR2.png'
import gstWelcomeImg from '../Assets/GstImg1.jpg'
import gstWhyImg from '../Assets/whygstIMG.png'
import gstStepsImg from '../Assets/gststeps.png'

import itrImg1 from '../Assets/itr11.jpg';
import itrImg2 from '../Assets/itr2.png';
import itrImg3 from '../Assets/itr3.png';
import itrImg4 from '../Assets/itr4.png';
import itrImg5 from '../Assets/itr5.png';
import itrR from '../Assets/itrR.png';


import plcAImg1 from '../Assets/PLCA16.png';
import plcAImg2 from '../Assets/PLCA17.png';
import plcAImg3 from '../Assets/PLCA18.png';
import plcAImg4 from '../Assets/PLCA19.png';
import plcAImg5 from '../Assets/PLCA20.png';
import plcR from '../Assets/plcF.png';


import opcImg1 from '../Assets/OPC21.png';
import opcImg2 from '../Assets/OPC22.png';
import opcImg3 from '../Assets/OPC23.png';
import opcImg4 from '../Assets/OPC24.png';
import opcImg5 from '../Assets/OPC25.png';
import opcR from '../Assets/opcR.png';

import llpImg1 from '../Assets/llp1.jpg';
import llpImg2 from '../Assets/llp2.jpg';
import llpImg3 from '../Assets/llp3.jpg';
import llpImg4 from '../Assets/llp4.jpg';
import llpImg5 from '../Assets/llp5.jpg';
import llpImg12 from '../Assets/llp12.png';
import llpR from '../Assets/llpR.png';

import nidImg1 from '../Assets/nid1.jpg';
import nidImg2 from '../Assets/nid2.jpg';
import nidImg3 from '../Assets/nid3.jpg';
import nidImg4 from '../Assets/nid4.jpg';
import nidImg5 from '../Assets/nid5.jpg';
import ndcR from '../Assets/ndcR.png';
import ndaF from '../Assets/ndaF.png';


import secImg1 from '../Assets/sec1.jpg';
import secImg2 from '../Assets/sec2.jpg';
import secImg3 from '../Assets/sec3.jpg';
import secImg4 from '../Assets/sec4.jpg';
import secImg5 from '../Assets/sec5.jpg';

import plrImg1 from '../Assets/plr1.png';
import plrImg2 from '../Assets/plr2.png';
import plrImg3 from '../Assets/plr3.png';
import plrImg4 from '../Assets/plr4.png';
import plrImg5 from '../Assets/plr5.png';
import plrImg12 from '../Assets/plr12.png';


import llprImg1 from '../Assets/llpr1.png';
import llprImg2 from '../Assets/llpr2.png';
import llprImg3 from '../Assets/llpr3.png';
import llprImg4 from '../Assets/llpr4.png';
import llprImg5 from '../Assets/llpr5.png';

import sprImg1 from '../Assets/spr1.png';
import sprImg2 from '../Assets/spr2.png';
import sprImg3 from '../Assets/spr3.png';
import sprImg4 from '../Assets/spr4.png';
import sprImg5 from '../Assets/spr5.png';

import opcrImg1 from '../Assets/opcr1.png';
import opcrImg2 from '../Assets/opcr2.png';
import opcrImg3 from '../Assets/opcr3.png';
import opcrImg4 from '../Assets/opcr4.png';
import opcrImg5 from '../Assets/opcr5.png';
import opcrImg6 from '../Assets/opcr6.png';

import hufImg1 from '../Assets/huf1.png';
import hufImg2 from '../Assets/huf2.png';
import hufImg3 from '../Assets/huf3.png';
import hufImg4 from '../Assets/huf4.png';
import hufImg5 from '../Assets/huf5.png';


import ptImg1 from '../Assets/pt1.png';
import ptImg2 from '../Assets/pt2.png';
import ptImg3 from '../Assets/pt3.png';
import ptImg4 from '../Assets/pt4.png';
import ptImg5 from '../Assets/pt5.png';

import ecomImg1 from '../Assets/ecom1.png';
import ecomImg2 from '../Assets/ecom2.png';
import ecomImg3 from '../Assets/ecom3.png';
import ecomImg4 from '../Assets/ecom4.png';
import ecomImg5 from '../Assets/ecom5.png';

import npoImg1 from '../Assets/npo1.png';
import npoImg2 from '../Assets/npo2.png';
import npoImg3 from '../Assets/npo3.png';
import npoImg4 from '../Assets/npo4.png';
import npoImg5 from '../Assets/npo5.png';
import npoImg6 from '../Assets/npo6.png';


import iecImg1 from '../Assets/iec1.png';
import iecImg2 from '../Assets/iec2.png';
import iecImg3 from '../Assets/iec3.png';
import iecImg4 from '../Assets/iec4.png';
import iecImg5 from '../Assets/ice5.png';
import iecImg6 from '../Assets/ice6.png';


import gstRegImg1 from '../Assets/gstReg1.png';
import gstRegImg2 from '../Assets/gstReg2.png';
import gstRegImg3 from '../Assets/gstReg3.png';
import gstRegImg4 from '../Assets/gstReg4.png';
import gstRegImg5 from '../Assets/gstReg5.png';

import spImg12 from '../Assets/sp12.png';
import opcImg12 from '../Assets/opc12.png';
import hufImg12 from '../Assets/huf12.png';
import pfImg12 from '../Assets/pf12.png';
import ecmImg12 from '../Assets/ecm12.png';
import ngoImg12 from '../Assets/ngo12.png';

import gstR from '../Assets/gstR.png';
import iecR from '../Assets/iecR.png';
import ndiR from '../Assets/ndIR.png';



import FAQSection from '../FAQs/FAQSection.js';
import { AiOutlineRight } from 'react-icons/ai';
import { HiOutlineDocumentText } from 'react-icons/hi';


const cityBasedMenus = [
    "Private Limited Company",
    "E-Commerce Business",
    "One Person Company (OPC)",
];


const Common = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const form = useRef();

    const [selectedState, setSelectedState] = useState('Delhi');
    const [showMoreInfo, setShowMoreInfo] = useState(false);
    const [infoData, setInfoData] = useState({ plan: '', price: 0, state: '', menu: '' });

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedSubMenu, setSelectedSubMenu] = useState("");


    const [prices, setPrices] = useState({});
    useEffect(() => {
        console.log("🔄 Fetching prices.json...");

        fetch("https://raw.githubusercontent.com/SenseiLalu/NS-LegalHelp/main/prices.json?ts=" + Date.now())
            .then((res) => {
                console.log("📡 Response received:", res.status);
                console.log("📡 Response json:", res.json);
                return res.json();
            })
            .then((data) => {
                console.log("✅ prices.json loaded successfully:", data);
                setPrices(data);
            })
            .catch((err) => {
                console.error("❌ Error loading prices.json:", err);
            });
    }, [])


    let heading = '';
    let description = '';
    let desCloser = '';
    let submenuClicked = '';
    let moreInfo = '';
    let welcomeImage = '';
    let mainDescription = '';
    let mainDesTitle = '';

    if (location.pathname === '/private-limited-company') {
        welcomeImage = welcomeImage = (
            <>
                {/* <div className="home-carousel-container">
                    <img src={gstWelcomeImg} alt="More Info" className="carousel-image" />
                </div> */}
            </>
        );
        heading = 'Private Limited Company';
        description = description = (
            <>
                <div className="home-carousel-container">
                    <picture>
                        {/* Mobile Image */}
                        <source
                            media="(max-width: 768px)"
                            srcSet={plrImg12}
                        />

                        {/* Desktop Image */}
                        <source
                            media="(min-width: 769px)"
                            srcSet={plrImg1}
                        />

                        <img
                            src={plrImg1}
                            alt="More Info"
                            className="common-image"
                        />
                    </picture>
                </div>
                {/* plrImg1 */}
            </>
        );
        desCloser = desCloser = (
            <>
                <p className="font-serif mt-[0.5rem] text-gray-600 text-base md:text-lg max-w-6xl mx-auto leading-relaxed">
                    ⚖ with this "Register your Private Limited Company with ease and full compliance. Start your business journey confidently — packages begin at ₹7,199/- (all inclusive)".
                </p>
                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>
            </>
        )
        mainDescription = mainDescription = (
            <>
                <section className="relative py-[0rem] md:py-[0rem] px-4 md:px-12 overflow-hidden">
                    {/* Heading */}
                    <div className="text-center mb-16 relative z-10">
                        <p className="text-[#177B74] mb-3">
                            • Private Limited Company
                        </p>

                        <p className="font-serif mt-[0.5rem] text-gray-900 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                            A Private Limited Company (Pvt. Ltd.) is one of the most popular
                            business structures in India with limited liability, separate legal identity,
                            and strong funding potential.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5 items-center relative z-10">

                        {/* LEFT: Benefits */}
                        <div className="space-y">

                            {[
                                "Limited liability protection for shareholders",
                                "Separate legal entity status",
                                "Easy transfer of ownership",
                                "Better credibility in market",
                                "Easy funding via equity & VC",
                                "Perpetual succession"
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#1F514C]/5 transition group"
                                >
                                    <div className="text-[#1F514C] mt-1 group-hover:translate-x-1 transition">
                                        <AiOutlineRight size={18} />
                                    </div>

                                    <p className="text-gray-700 text-sm md:text-base">
                                        {item}
                                    </p>
                                </div>

                            ))}

                        </div>

                        {/* RIGHT: Glass Info Card */}
                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-[#1F514C]/20 blur-3xl opacity-30 rounded-3xl"></div>

                            <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 md:p-10">

                                <h3 className="text-xl md:text-2xl font-semibold text-[#1F514C] mb-4">
                                    Why Choose Pvt. Ltd?
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    It’s the most trusted structure for startups in India. You get
                                    investor trust, scalability, and legal protection — all in one.
                                </p>

                                {/* Replacement for Button */}
                                <div className="border-t pt-5 mt-5">

                                    <p className="text-sm text-gray-500 mb-2">
                                        Trusted by startups & growing businesses
                                    </p>

                                    <div className="flex items-center gap-6 text-[#1F514C] font-medium text-sm">
                                        <span>✔ Easy Setup</span>
                                        <span>✔ Govt. Approved</span>
                                        <span>✔ 100% Online</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </>
        );
        mainDesTitle = mainDesTitle = (
            <>
            </>
        )
        moreInfo = moreInfo = (
            <>

                {/* whyimg */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute left-[-100px] top-[50px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading */}
                    <div className="text-center mb-16 relative z-10">
                        <p className="text-[#177B74] mb-3">
                            • Documentation
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Required Documents for <br className="hidden md:block" />
                            Private Limited Company Registration
                        </h2>

                        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                            Ensure a smooth registration process by keeping these essential
                            documents ready before starting your company incorporation.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">

                        {/* LEFT SIDE (Highlight Card) */}
                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-[#1F514C]/20 blur-3xl opacity-30 rounded-3xl"></div>

                            <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 md:p-10">

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                    Quick Checklist
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    These documents are mandatory for directors and the registered
                                    office. Keeping them ready ensures faster approval and avoids delays.
                                </p>

                                {/* Mini Points */}
                                <div className="mt-6 space-y-3 text-sm text-[#1F514C] font-medium">
                                    <p>✔ Govt. Approved Documents</p>
                                    <p>✔ Digital Submission Supported</p>
                                    <p>✔ Required for All Directors</p>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT SIDE (Docs List) */}
                        <div className="space-y-0">

                            {[
                                "PAN card of directors and shareholders",
                                "Identity proof (Aadhar / Passport / Voter ID)",
                                "Address proof (Utility bill / Bank statement)",
                                "Passport-size photographs of directors",
                                "Proof of registered office (Electricity bill / Property tax receipt)",
                                "No-objection certificate from property owner (if rented)",
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#1F514C]/5 transition group"
                                >
                                    <div className="text-[#1F514C] mt-1 bg-[#1F514C]/10 p-2 rounded-lg">
                                        <AiOutlineCheck size={16} />
                                    </div>

                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                        {item}
                                    </p>
                                </div>

                            ))}

                        </div>

                    </div>
                </section>

                {/* <div className="flex items-center my-12"> */}
                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>
                {/* </div> */}

                {/* <img src={plrImg3} alt="More Info" className="carousel-image" /> */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Glow */}
                    <div className="absolute right-[-100px] top-[100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading (MATCHING YOUR DOC SECTION) */}
                    <div className="text-center mb-20">
                        <p className="text-[#177B74] mb-3">
                            • Registation Steps
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            5 Easy Steps for Company Registration
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div className="relative max-w-4xl mx-auto">

                        {/* Center Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 md:-translate-x-1/2 w-[3px] h-full bg-[#1F514C]/20"></div>

                        {/* Steps */}
                        <div className="space-y-12 md:space-y-20">

                            {[
                                {
                                    title: "Obtain DSC",
                                    desc: "To initiate the company registration process, you must first obtain a Digital Signature Certificate (DSC)."
                                },
                                {
                                    title: "Name Approval",
                                    desc: "Proposed company name must be approved by the Ministry of Corporate Affairs (MCA)."
                                },
                                {
                                    title: "Filing SPICe+ Form",
                                    desc: "SPICe+ is a web-based application introduced to simplify company incorporation."
                                },
                                {
                                    title: "Draft MOA & AOA",
                                    desc: "Documents must be prepared electronically and filed with SPICe+."
                                },
                                {
                                    title: "Completion",
                                    desc: "Submit final forms with documents and receive incorporation certificate."
                                }
                            ].map((step, index) => {

                                const isLeft = index % 2 === 0;

                                return (
                                    <div key={index} className="relative flex md:items-center">

                                        {/* MOBILE + LEFT SPACING */}
                                        <div className="pl-12 md:pl-0 w-full md:flex md:justify-between">

                                            {/* LEFT SIDE (DESKTOP) */}
                                            <div
                                                className={`hidden md:block w-[45%] ${isLeft ? "text-right pr-10" : ""
                                                    }`}
                                            >
                                                {isLeft && (
                                                    <>
                                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                                            {step.title}
                                                        </h3>
                                                        <p className="mt-2 text-gray-600">
                                                            {step.desc}
                                                        </p>
                                                    </>
                                                )}
                                            </div>

                                            {/* MOBILE CONTENT (always visible) */}
                                            <div className="md:hidden">
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    {step.title}
                                                </h3>
                                                <p className="mt-1 text-gray-600 text-sm">
                                                    {step.desc}
                                                </p>
                                            </div>

                                            {/* RIGHT SIDE (DESKTOP) */}
                                            <div
                                                className={`hidden md:block w-[45%] ${!isLeft ? "text-left pl-10" : ""
                                                    }`}
                                            >
                                                {!isLeft && (
                                                    <>
                                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                                            {step.title}
                                                        </h3>
                                                        <p className="mt-2 text-gray-600">
                                                            {step.desc}
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {/* CIRCLE */}
                                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#1F514C] flex items-center justify-center shadow-lg">
                                                <span className="text-white text-sm md:text-base font-semibold">
                                                    {index + 1}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                {/* whyimg */}
                {/* <img src={plrImg4} alt="More Info" className="gst-image" /> */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute left-[-100px] bottom-[-100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <p className="text-[#177B74] mb-3">
                            • Process
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Simple Steps to Get Started
                        </h2>
                    </div>

                    {/* Cards Wrapper */}
                    <div className="relative max-w-6xl mx-auto">

                        {/* Connector Line (Desktop only) */}
                        <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-[#1F514C]/20"></div>

                        {/* Cards */}
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative">

                            {/* STEP 1 */}
                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    1
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <HiOutlineDocumentText />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Fill Checklist
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    Your dedicated compliance manager will collect the required documents
                                    and checklist. Once verified, the registration process begins with
                                    regular updates.
                                </p>
                            </div>

                            {/* STEP 2 */}
                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    2
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <AiOutlineFileDone />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Submit & Verify
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    We apply for your Digital Signature Certificate (DSC) and proceed
                                    with name approval for your Private Limited Company.
                                </p>
                            </div>

                            {/* STEP 3 */}
                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    3
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <AiOutlineCheckCircle />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Get Incorporated
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    We file incorporation documents with MCA. Once approved, you receive
                                    your Certificate of Incorporation along with CIN, PAN, and TAN.
                                </p>
                            </div>

                        </div>
                    </div>

                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                {/* whyimg */}
                {/* <img src={plrImg5} alt="More Info" className="gst-image" /> */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading */}
                    <div className="text-center mb-16">

                        <p className="text-[#177B74] mb-3">
                            • All you need to know about essential compliances
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Post-Incorporation Compliance for Private Limited Companies
                        </h2>
                    </div>

                    {/* Cards Grid */}
                    <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                        {[
                            {
                                title: "GST Registration",
                                desc: "Obtain GST registration within 30 days if your turnover exceeds ₹20–₹40 lakhs or if you engage in inter-state or online supply.",
                            },
                            {
                                title: "GST Return Filing",
                                desc: "Once registered under GST, file returns accurately and consistently — monthly, quarterly, or annually as applicable to your business.",
                            },
                            {
                                title: "Accounting",
                                desc: "Maintain proper and updated books of accounts throughout the financial year. This is essential for statutory audits and tax filing compliance.",
                            },
                            {
                                title: "Statutory Audit",
                                desc: "Appoint a Chartered Accountant within 30 days of incorporation to conduct the annual audit of your company’s financial statements.",
                            },
                            {
                                title: "Income Tax Audit",
                                desc: "Mandatory under Section 44AB if your total turnover or receipts exceed ₹1 crore (₹10 crore for digital transactions).",
                            },
                            {
                                title: "ROC Annual Filing",
                                desc: "Submit your company’s financial statements (AOC-4) and annual return (MGT-7) to the Registrar of Companies (ROC) after the AGM each year.",
                            },
                            {
                                title: "IEC Registration",
                                desc: "Obtain the Import Export Code (IEC) if your company deals with import or export of goods or services.",
                            },
                            {
                                title: "Trademark Registration",
                                desc: "Optional but recommended — protect your brand name, logo, and identity from unauthorized use and build long-term brand value.",
                            },
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-[#1F514C]/20 to-transparent hover:from-[#1F514C]/40 transition"
                            >
                                <div className="h-full bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-7 shadow-sm hover:shadow-xl transition duration-300">

                                    {/* Top Accent Line */}
                                    <div className="h-[3px] w-10 bg-[#1F514C] rounded-full mb-5 group-hover:w-16 transition-all"></div>

                                    {/* Title */}
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        {item.desc}
                                    </p>

                                </div>
                            </div>

                        ))}
                    </div>

                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute left-[-120px] top-[-80px] w-[320px] h-[320px] bg-[#1F514C]/20 blur-[140px] rounded-full opacity-40"></div>
                    <div className="absolute right-[-120px] bottom-[-80px] w-[320px] h-[320px] bg-[#1F514C]/10 blur-[140px] rounded-full opacity-40"></div>

                    {/* Heading */}
                    <div className="text-center mb-20">
                        <p className="text-[#177B74] mb-3">
                            • Why Choose Us
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Why Choose NS LegalHelp?
                        </h2>
                    </div>

                    {/* Layout */}
                    <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">

                        {/* 🔥 HERO CARD */}
                        <div className="md:col-span-2 group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#079483]/30 to-transparent">

                            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition duration-300">

                                <div className="mb-6 text-[#1F514C] text-4xl">★</div>

                                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                                    End-to-end assistance
                                </h3>

                                <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
                                    From DSC to Certificate of Incorporation, we handle everything for you
                                    with complete transparency and expert guidance.
                                </p>

                                {/* subtle glow */}
                                <div className="absolute inset-0 rounded-3xl border border-[#1F514C]/20"></div>
                            </div>
                        </div>

                        {/* SIDE CARDS */}
                        <div className="grid gap-6">

                            {[
                                "Dedicated compliance expert.",
                                "Affordable & transparent pricing.",
                                "Quick processing with timely updates.",
                                "Post-incorporation compliance guidance.",
                            ].map((point, index) => (

                                <div
                                    key={index}
                                    className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-200 to-transparent hover:from-[#1F514C]/30 transition"
                                >
                                    <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">

                                        <div className="flex items-start gap-3">

                                            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#1F514C]/10 text-[#1F514C] text-sm font-bold">
                                                ✓
                                            </div>

                                            <p className="text-gray-700 text-sm leading-relaxed font-medium">
                                                {point}
                                            </p>

                                        </div>

                                    </div>
                                </div>

                            ))}

                        </div>

                    </div>
                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

            </>
        );
        submenuClicked = 'Private Limited Company';
    } else if (location.pathname === '/limited-liabilty-partnership') {
        welcomeImage = welcomeImage = (
            <>
            </>
        );
        heading = 'Limited Liabilty Partnership';
        description = description = (
            <>
                <div className="home-carousel-container">
                    <picture>
                        {/* Mobile Image */}
                        <source
                            media="(max-width: 768px)"
                            srcSet={llprImg1}
                        />

                        {/* Desktop Image */}
                        <source
                            media="(min-width: 769px)"
                            srcSet={llpImg12}
                        />

                        <img
                            src={llpImg12}
                            alt="More Info"
                            className="common-image"
                        />
                    </picture>
                </div>
                <hr />
            </>
        );
        desCloser = desCloser = (
            <>
                <p className="font-serif mt-[0.5rem] text-gray-600 text-base md:text-lg max-w-6xl mx-auto leading-relaxed">
                    ⚖️ Start your business with flexibility and limited liability — packages begin at ₹6,199/- (all inclusive).
                </p>
                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>
            </>
        )
        mainDescription = mainDescription = (
            <>
                <section className="relative py-[0rem] md:py-[0rem] px-4 md:px-12 overflow-hidden">
                    {/* Heading */}
                    <div className="text-center mb-16 relative z-10">
                        <p className="text-[#177B74] mb-3">
                            • Limited Liabilty Partnership
                        </p>

                        <p className="font-serif mt-[0.5rem] text-gray-900 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                            An LLP is registered under the Limited Liability Partnership Act, 2008, governed by the Ministry of Corporate Affairs (MCA). It provides the advantages of a separate legal entity and limited liability protection while allowing partners to manage the business directly.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-5 items-center relative z-10">

                        {/* LEFT: Benefits */}
                        {/* <div className="space-y">

                            {[
                                "Limited liability protection for shareholders",
                                "Separate legal entity status",
                                "Easy transfer of ownership",
                                "Better credibility in market",
                                "Easy funding via equity & VC",
                                "Perpetual succession"
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#1F514C]/5 transition group"
                                >
                                    <div className="text-[#1F514C] mt-1 group-hover:translate-x-1 transition">
                                        <AiOutlineRight size={18} />
                                    </div>

                                    <p className="text-gray-700 text-sm md:text-base">
                                        {item}
                                    </p>
                                </div>

                            ))}

                        </div> */}

                        {/* RIGHT: Glass Info Card */}
                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-[#1F514C]/20 blur-3xl opacity-30 rounded-3xl"></div>

                            <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 md:p-10">

                                <h3 className="text-xl md:text-2xl font-semibold text-[#1F514C] mb-4">
                                    Why Choose LLP Registration?
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Unlike traditional partnerships, the liability of each partner is limited to their contribution. It offers limited liability to partners while maintaining operational flexibility — making it ideal for professionals, startups, and small businesses.
                                </p>

                                {/* Replacement for Button */}
                                <div className="border-t pt-5 mt-5">

                                    <p className="text-sm text-gray-500 mb-2">
                                        Trusted by startups & growing businesses
                                    </p>

                                    <div className="flex items-center gap-6 text-[#1F514C] font-medium text-sm">
                                        <span>✔ Easy Setup</span>
                                        <span>✔ Govt. Approved</span>
                                        <span>✔ 100% Online</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </>
        );
        mainDesTitle = mainDesTitle = (
            <>
            </>
        )
        moreInfo = moreInfo = (
            <>

                {/* whyimg */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute left-[-100px] top-[50px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading */}
                    <div className="text-center mb-16 relative z-10">
                        <p className="text-[#177B74] mb-3">
                            • Documentation
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Required Documents for <br className="hidden md:block" />
                            Limited Liabilty Partnership
                        </h2>

                        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                            Ensure a smooth registration process by keeping these essential
                            documents ready..
                        </p>
                    </div>

                    {/* Content */}
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">

                        {/* LEFT SIDE (Highlight Card) */}
                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-[#1F514C]/20 blur-3xl opacity-30 rounded-3xl"></div>

                            <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 md:p-10">

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                    Quick Checklist
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    These documents are mandatory for directors and the registered
                                    office. Keeping them ready ensures faster approval and avoids delays.
                                </p>

                                {/* Mini Points */}
                                <div className="mt-6 space-y-3 text-sm text-[#1F514C] font-medium">
                                    <p>✔ Govt. Approved Documents</p>
                                    <p>✔ Digital Submission Supported</p>
                                    <p>✔ Required for All Directors</p>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT SIDE (Docs List) */}
                        <div className="space-y-0">

                            {[
                                "PAN card of directors and shareholders",
                                "Identity proof (Aadhar / Passport / Voter ID)",
                                "Address proof (Utility bill / Bank statement)",
                                "Passport-size photographs of directors",
                                "Proof of registered office (Electricity bill / Property tax receipt)",
                                "DIN & DSC registrations",
                                "LLP Agreement (on stamp paper)",
                                "No-objection certificate from property owner (if rented)",
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#1F514C]/5 transition group"
                                >
                                    <div className="text-[#1F514C] mt-1 bg-[#1F514C]/10 p-2 rounded-lg">
                                        <AiOutlineCheck size={16} />
                                    </div>

                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                        {item}
                                    </p>
                                </div>

                            ))}

                        </div>

                    </div>
                </section>

                {/* <div className="flex items-center my-12"> */}
                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>
                {/* </div> */}

                {/* <img src={plrImg3} alt="More Info" className="carousel-image" /> */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Glow */}
                    <div className="absolute right-[-100px] top-[100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading (MATCHING YOUR DOC SECTION) */}
                    <div className="text-center mb-20">
                        <p className="text-[#177B74] mb-3">
                            • Registation Steps
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Complete your LLP
                            registration in 5 simple steps!
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div className="relative max-w-4xl mx-auto">

                        {/* Center Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 md:-translate-x-1/2 w-[3px] h-full bg-[#1F514C]/20"></div>

                        {/* Steps */}
                        <div className="space-y-12 md:space-y-20">

                            {[
                                {
                                    title: "Obtain DSC",
                                    desc: "To begin the LLP registration process,each designated partner must get a Digital Signature Certificates to sign MCA e- forms"
                                },
                                {
                                    title: "Name Reservation(RUN-LLP Form)",
                                    desc: "Choose and reserve your LLP’s name through the RUN-LLP form. You can propose up to two unique names relevant to your business."
                                },
                                {
                                    title: "Filing FiLLiP from",
                                    desc: "Once the name is approved, the FiLLiP form is filed with MCA, containing details of partners, office address, and capital contribution."
                                },
                                {
                                    title: "Draft LLP Agreement",
                                    desc: " Once the Certificate of Incorporation is received, the LLP Agreement is prepared, defining partner rights, duties, and profit-sharing ratios."
                                },
                                {
                                    title: "Completion (File Form 3)",
                                    desc: "Submit the signed LLP Agreement to the MCA in Form 3 within 30 days of incorporation to complete the LLP registration process"
                                }
                            ].map((step, index) => {

                                const isLeft = index % 2 === 0;

                                return (
                                    <div key={index} className="relative flex md:items-center">

                                        {/* MOBILE + LEFT SPACING */}
                                        <div className="pl-12 md:pl-0 w-full md:flex md:justify-between">

                                            {/* LEFT SIDE (DESKTOP) */}
                                            <div
                                                className={`hidden md:block w-[45%] ${isLeft ? "text-right pr-10" : ""
                                                    }`}
                                            >
                                                {isLeft && (
                                                    <>
                                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                                            {step.title}
                                                        </h3>
                                                        <p className="mt-2 text-gray-600">
                                                            {step.desc}
                                                        </p>
                                                    </>
                                                )}
                                            </div>

                                            {/* MOBILE CONTENT (always visible) */}
                                            <div className="md:hidden">
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    {step.title}
                                                </h3>
                                                <p className="mt-1 text-gray-600 text-sm">
                                                    {step.desc}
                                                </p>
                                            </div>

                                            {/* RIGHT SIDE (DESKTOP) */}
                                            <div
                                                className={`hidden md:block w-[45%] ${!isLeft ? "text-left pl-10" : ""
                                                    }`}
                                            >
                                                {!isLeft && (
                                                    <>
                                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                                            {step.title}
                                                        </h3>
                                                        <p className="mt-2 text-gray-600">
                                                            {step.desc}
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {/* CIRCLE */}
                                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#1F514C] flex items-center justify-center shadow-lg">
                                                <span className="text-white text-sm md:text-base font-semibold">
                                                    {index + 1}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                {/* whyimg */}
                {/* <img src={plrImg4} alt="More Info" className="gst-image" /> */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute left-[-100px] bottom-[-100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <p className="text-[#177B74] mb-3">
                            • Process
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Simple Steps to Get Started
                        </h2>
                    </div>

                    {/* Cards Wrapper */}
                    <div className="relative max-w-6xl mx-auto">

                        {/* Connector Line (Desktop only) */}
                        <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-[#1F514C]/20"></div>

                        {/* Cards */}
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative">

                            {/* STEP 1 */}
                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    1
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <HiOutlineDocumentText />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Fill Checklist
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    We will assist in obtaining DSCs for partners, reserving your LLP name through RUN-LLP, and filing Form FiLLiP with all required business and partner information
                                </p>
                            </div>

                            {/* STEP 2 */}
                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    2
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <AiOutlineFileDone />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Submit & Verify
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    After submitting Form FiLLiP, you will receive an ARN. Our team will then guide you in drafting and filing the LLP Agreement through Form 3 within the stipulated 30-day period.
                                </p>
                            </div>

                            {/* STEP 3 */}
                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    3
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <AiOutlineCheckCircle />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Get Incorporated
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    After ROC verification, you’ll receive your Certificate of Incorporation, officially marking your LLP as registered and ready to start operations seamlessly
                                </p>
                            </div>

                        </div>
                    </div>

                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                {/* whyimg */}
                {/* <img src={plrImg5} alt="More Info" className="gst-image" /> */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading */}
                    <div className="text-center mb-16">

                        <p className="text-[#177B74] mb-3">
                            • All you need to know about essential compliances
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Post-Incorporation Compliance for LLP’s
                        </h2>
                    </div>

                    {/* Cards Grid */}
                    <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                        {[
                            {
                                title: "GST Registration & Return",
                                desc: " LLPs must obtain GST registration if turnover exceeds ₹20–₹40 lakhs or inter-state supply occurs, and file GST returns on time thereafter.",
                            },
                            {
                                title: "LLP Agreement Filing(Form 3)",
                                desc: "Every LLP must file its LLP Agreement with the MCA in Form 3 within 30 days of incorporation. This defines the rights and duties of all partners.",
                            },
                            {
                                title: "Accounting",
                                desc: "Maintain accurate books of accounts throughout the financial year — essential for audit, ROC filings, and tax compliance.",
                            },
                            {
                                title: "ROC Annual Filing(Form 8 & Form 11)",
                                desc: "LLPs must file their Form 11 within 60 days from the end of the financial year and Form 8 within 30 days from the end of six months of the financial year.",
                            },
                            {
                                title: "DIR-3 KYC Filing",
                                desc: "Every designated partner must complete Director KYC annually by 30th September to keep their DIN active and avoid penalties.",
                            },
                            {
                                title: "Income Tax Return",
                                desc: "Every LLP must file ITR-5 annually — the due date is 31st July (non-audit cases) or 31st October (if audit is applicable).",
                            },
                            {
                                title: "Audit Requirement",
                                desc: "A statutory audit is mandatory if the LLP’s turnover exceeds ₹40 lakhs or capital contribution exceeds ₹25 lakhs in a financial year",
                            },
                            {
                                title: "Trademark Registration",
                                desc: "Though optional, Trademark Registration is strongly recommended to legally protect the LLP’s brand name, logo, and identity from unauthorized use.",
                            },
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-[#1F514C]/20 to-transparent hover:from-[#1F514C]/40 transition"
                            >
                                <div className="h-full bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-7 shadow-sm hover:shadow-xl transition duration-300">

                                    {/* Top Accent Line */}
                                    <div className="h-[3px] w-10 bg-[#1F514C] rounded-full mb-5 group-hover:w-16 transition-all"></div>

                                    {/* Title */}
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        {item.desc}
                                    </p>

                                </div>
                            </div>

                        ))}
                    </div>

                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute left-[-120px] top-[-80px] w-[320px] h-[320px] bg-[#1F514C]/20 blur-[140px] rounded-full opacity-40"></div>
                    <div className="absolute right-[-120px] bottom-[-80px] w-[320px] h-[320px] bg-[#1F514C]/10 blur-[140px] rounded-full opacity-40"></div>

                    {/* Heading */}
                    <div className="text-center mb-20">
                        <p className="text-[#177B74] mb-3">
                            • Why Choose Us
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Why Choose NS LegalHelp?
                        </h2>
                    </div>

                    {/* Layout */}
                    <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">

                        {/* 🔥 HERO CARD */}
                        <div className="md:col-span-2 group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#079483]/30 to-transparent">

                            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition duration-300">

                                <div className="mb-6 text-[#1F514C] text-4xl">★</div>

                                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                                    End-to-end assistance
                                </h3>

                                <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
                                    From DSC to Certificate of Incorporation, we handle everything for you
                                    with complete transparency and expert guidance.
                                </p>

                                {/* subtle glow */}
                                <div className="absolute inset-0 rounded-3xl border border-[#1F514C]/20"></div>
                            </div>
                        </div>

                        {/* SIDE CARDS */}
                        <div className="grid gap-6">

                            {[
                                "Dedicated compliance expert.",
                                "Affordable & transparent pricing.",
                                "Quick processing with timely updates.",
                                "Post-incorporation compliance guidance.",
                            ].map((point, index) => (

                                <div
                                    key={index}
                                    className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-200 to-transparent hover:from-[#1F514C]/30 transition"
                                >
                                    <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">

                                        <div className="flex items-start gap-3">

                                            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#1F514C]/10 text-[#1F514C] text-sm font-bold">
                                                ✓
                                            </div>

                                            <p className="text-gray-700 text-sm leading-relaxed font-medium">
                                                {point}
                                            </p>

                                        </div>

                                    </div>
                                </div>

                            ))}

                        </div>

                    </div>
                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>


            </>
        );
        submenuClicked = 'Limited Liabilty Partnership';
    } else if (location.pathname === '/solePropritorship') {
        welcomeImage = welcomeImage = (
            <>
            </>
        );
        heading = 'Sole Proprietorship';
        description = description = (
            <>
                <div className="home-carousel-container">
                    <picture>
                        {/* Mobile Image */}
                        <source
                            media="(max-width: 768px)"
                            srcSet={sprImg1}
                        />

                        {/* Desktop Image */}
                        <source
                            media="(min-width: 769px)"
                            srcSet={spImg12}
                        />

                        <img
                            src={spImg12}
                            alt="More Info"
                            className="common-image"
                        />
                    </picture>
                </div>
                <hr />
            </>
        );
        desCloser = desCloser = (
            <>
                <p className="font-serif mt-[0.5rem] text-gray-600 text-base md:text-lg max-w-6xl mx-auto leading-relaxed">
                    ⚖️ Start your Sole Proprietorship easily and affordably with NS LegalHelp.— at just ₹1499/- only...
                </p>
                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>
            </>
        )
        mainDescription = mainDescription = (
            <>

                <section className="relative py-[0rem] md:py-[0rem] px-4 md:px-12 overflow-hidden">
                    {/* Heading */}
                    <div className="text-center mb-16 relative z-10">
                        <p className="text-[#177B74] mb-3">
                            • Sole Proprietorship
                        </p>

                        <p className="font-serif mt-[0.5rem] text-gray-900 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                            A Sole Proprietorship allows you to operate your business under a legally recognized structure.

                            It provides a business identity, enables opening a current bank account in the business name, and ensures compliance with tax and local laws.

                            Unlike other business forms, a sole proprietorship is simple to set up, and the owner has full control over operations.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5 items-center relative z-10">

                        {/* LEFT: Benefits */}
                        <div className="space-y">

                            {[
                                "Owned and managed by a single individual",
                                "Simple and affordable registration process",
                                "Full control of business operations",
                                "Minimal compliance requirements",
                                "Easy tax filing and GST registration (if applicable)",
                                "Suitable for freelancers, small shops, and service providers"
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#1F514C]/5 transition group"
                                >
                                    <div className="text-[#1F514C] mt-1 group-hover:translate-x-1 transition">
                                        <AiOutlineRight size={18} />
                                    </div>

                                    <p className="text-gray-700 text-sm md:text-base">
                                        {item}
                                    </p>
                                </div>

                            ))}

                        </div>

                        {/* RIGHT: Glass Info Card */}
                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-[#1F514C]/20 blur-3xl opacity-30 rounded-3xl"></div>

                            <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 md:p-10">

                                <h3 className="text-xl md:text-2xl font-semibold text-[#1F514C] mb-4">
                                    Why Choose LLP Registration?
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Unlike traditional partnerships, the liability of each partner is limited to their contribution. It offers limited liability to partners while maintaining operational flexibility — making it ideal for professionals, startups, and small businesses.
                                </p>

                                {/* Replacement for Button */}
                                <div className="border-t pt-5 mt-5">

                                    <p className="text-sm text-gray-500 mb-2">
                                        Trusted by startups & growing businesses
                                    </p>

                                    <div className="flex items-center gap-6 text-[#1F514C] font-medium text-sm">
                                        <span>✔ Easy Setup</span>
                                        <span>✔ Govt. Approved</span>
                                        <span>✔ 100% Online</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </>
        );
        mainDesTitle = mainDesTitle = (
            <>
            </>
        )
        moreInfo = moreInfo = (
            <>
                {/* whyimg */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute left-[-100px] top-[50px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading */}
                    <div className="text-center mb-16 relative z-10">
                        <p className="text-[#177B74] mb-3">
                            • Documentation
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Required Documents for <br className="hidden md:block" />
                            Sole Proprietorship
                        </h2>

                        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                            Ensure a smooth registration process by keeping these essential
                            documents ready..
                        </p>
                    </div>

                    {/* Content */}
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">

                        {/* LEFT SIDE (Highlight Card) */}
                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-[#1F514C]/20 blur-3xl opacity-30 rounded-3xl"></div>

                            <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 md:p-10">

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                    Quick Checklist
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    These documents are mandatory for directors and the registered
                                    office. Keeping them ready ensures faster approval and avoids delays.
                                </p>

                                {/* Mini Points */}
                                <div className="mt-6 space-y-3 text-sm text-[#1F514C] font-medium">
                                    <p>✔ Govt. Approved Documents</p>
                                    <p>✔ Digital Submission Supported</p>
                                    <p>✔ Required for All Directors</p>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT SIDE (Docs List) */}
                        <div className="space-y-0">

                            {[
                                "PAN card of the proprietor",
                                "Aadhaar card / Passport / Voter ID",
                                "Passport-size photograph",
                                "Proof of business address (Rent Agreement / Utility Bill / NOC)",
                                "Bank statement / telephone bill (as address proof)"
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#1F514C]/5 transition group"
                                >
                                    <div className="text-[#1F514C] mt-1 bg-[#1F514C]/10 p-2 rounded-lg">
                                        <AiOutlineCheck size={16} />
                                    </div>

                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                        {item}
                                    </p>
                                </div>

                            ))}

                        </div>

                    </div>
                </section>

                {/* <div className="flex items-center my-12"> */}
                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>
                {/* </div> */}

                {/* <img src={plrImg3} alt="More Info" className="carousel-image" /> */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Glow */}
                    <div className="absolute right-[-100px] top-[100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading (MATCHING YOUR DOC SECTION) */}
                    <div className="text-center mb-20">
                        <p className="text-[#177B74] mb-3">
                            • Registation Steps
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Complete your Proprietorship firm
                            registration in 5 simple steps!
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div className="relative max-w-4xl mx-auto">

                        {/* Center Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 md:-translate-x-1/2 w-[3px] h-full bg-[#1F514C]/20"></div>

                        {/* Steps */}
                        <div className="space-y-12 md:space-y-20">

                            {[
                                {
                                    title: "Complete a Checklist",
                                    desc: "Gather all required documents like PAN, Aadhaar, proof of address, and business details."
                                },
                                {
                                    title: "Obtain Registration Certificate",
                                    desc: "Receive your Sole Proprietorship registration certificate to make your business official."
                                },
                                {
                                    title: "Submit Your Documents",
                                    desc: "Share the documents with our team — we’ll handle the filing for you."
                                },
                                {
                                    title: "Get PAN & TAN",
                                    desc: " Secure your PAN and TAN for taxation and start your business operations smoothly."
                                },
                                {
                                    title: "Verification of Documents",
                                    desc: "We verify all details to ensure accuracy and compliance with legal requirements."
                                }
                            ].map((step, index) => {

                                const isLeft = index % 2 === 0;

                                return (
                                    <div key={index} className="relative flex md:items-center">

                                        {/* MOBILE + LEFT SPACING */}
                                        <div className="pl-12 md:pl-0 w-full md:flex md:justify-between">

                                            {/* LEFT SIDE (DESKTOP) */}
                                            <div
                                                className={`hidden md:block w-[45%] ${isLeft ? "text-right pr-10" : ""
                                                    }`}
                                            >
                                                {isLeft && (
                                                    <>
                                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                                            {step.title}
                                                        </h3>
                                                        <p className="mt-2 text-gray-600">
                                                            {step.desc}
                                                        </p>
                                                    </>
                                                )}
                                            </div>

                                            {/* MOBILE CONTENT (always visible) */}
                                            <div className="md:hidden">
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    {step.title}
                                                </h3>
                                                <p className="mt-1 text-gray-600 text-sm">
                                                    {step.desc}
                                                </p>
                                            </div>

                                            {/* RIGHT SIDE (DESKTOP) */}
                                            <div
                                                className={`hidden md:block w-[45%] ${!isLeft ? "text-left pl-10" : ""
                                                    }`}
                                            >
                                                {!isLeft && (
                                                    <>
                                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                                            {step.title}
                                                        </h3>
                                                        <p className="mt-2 text-gray-600">
                                                            {step.desc}
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {/* CIRCLE */}
                                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#1F514C] flex items-center justify-center shadow-lg">
                                                <span className="text-white text-sm md:text-base font-semibold">
                                                    {index + 1}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                {/* <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                   
                    <div className="absolute left-[-100px] bottom-[-100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

              
                    <div className="text-center mb-16">
                        <p className="text-[#177B74] mb-3">
                            • Process
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Simple Steps to Get Started
                        </h2>
                    </div>

             
                    <div className="relative max-w-6xl mx-auto">

              
                        <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-[#1F514C]/20"></div>

                        
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative">

                       
                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    1
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <HiOutlineDocumentText />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Fill Checklist
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    We will assist in obtaining DSCs for partners, reserving your LLP name through RUN-LLP, and filing Form FiLLiP with all required business and partner information
                                </p>
                            </div>

                     
                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    2
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <AiOutlineFileDone />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Submit & Verify
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    After submitting Form FiLLiP, you will receive an ARN. Our team will then guide you in drafting and filing the LLP Agreement through Form 3 within the stipulated 30-day period.
                                </p>
                            </div>

                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    3
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <AiOutlineCheckCircle />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Get Incorporated
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    After ROC verification, you’ll receive your Certificate of Incorporation, officially marking your LLP as registered and ready to start operations seamlessly
                                </p>
                            </div>

                        </div>
                    </div>

                </section> */}

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading */}
                    <div className="text-center mb-16">

                        <p className="text-[#177B74] mb-3">
                            • All you need to know about essential compliances
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Post-Incorporation Compliance for LLP’s
                        </h2>
                    </div>

                    {/* Cards Grid */}
                    <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {[
                            {
                                title: "GST Registration",
                                desc: " Sole proprietorships must register under GST if turnover exceeds ₹40 lakhs or if operating an online business (Amazon, Flipkart, etc.).",
                            },
                            {
                                title: "GST Return",
                                desc: "Registered proprietorships must file GST returns monthly, quarterly, or annually as per the GST Act.",
                            },
                            {
                                title: "MSME / Udyam Registration",
                                desc: "Optional but beneficial for loans, schemes, and credibility. Can be filed electronically.",
                            },
                            {
                                title: "Income Tax Return",
                                desc: "Must be filed for taxable income above the exemption threshold. Filing is similar to individual tax returns.",
                            },
                            {
                                title: "Tax Audit",
                                desc: "Mandatory if turnover exceeds ₹1 crore or professional receipts exceed ₹50 lakhs in a financial year. Ensures compliance under the Income Tax Act.",
                            },
                            {
                                title: "Accounting",
                                desc: "No separate records are legally required, but maintaining them helps track profits and business performance.",
                            },
                            {
                                title: "Trademark Registration",
                                desc: "Though optional, Trademark Registration is strongly recommended to legally protect the LLP’s brand name, logo, and identity from unauthorized use.",
                            },
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-[#1F514C]/20 to-transparent hover:from-[#1F514C]/40 transition"
                            >
                                <div className="h-full bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-7 shadow-sm hover:shadow-xl transition duration-300">

                                    {/* Top Accent Line */}
                                    <div className="h-[3px] w-10 bg-[#1F514C] rounded-full mb-5 group-hover:w-16 transition-all"></div>

                                    {/* Title */}
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        {item.desc}
                                    </p>

                                </div>
                            </div>

                        ))}
                    </div>

                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                {/* <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

            
                    <div className="absolute left-[-120px] top-[-80px] w-[320px] h-[320px] bg-[#1F514C]/20 blur-[140px] rounded-full opacity-40"></div>
                    <div className="absolute right-[-120px] bottom-[-80px] w-[320px] h-[320px] bg-[#1F514C]/10 blur-[140px] rounded-full opacity-40"></div>

                   
                    <div className="text-center mb-20">
                        <p className="text-[#177B74] mb-3">
                            • Why Choose Us
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Why Choose NS LegalHelp?
                        </h2>
                    </div>

                    
                    <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">

                      
                        <div className="md:col-span-2 group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#079483]/30 to-transparent">

                            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition duration-300">

                                <div className="mb-6 text-[#1F514C] text-4xl">★</div>

                                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                                    End-to-end assistance
                                </h3>

                                <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
                                    From DSC to Certificate of Incorporation, we handle everything for you
                                    with complete transparency and expert guidance.
                                </p>

                              
                                <div className="absolute inset-0 rounded-3xl border border-[#1F514C]/20"></div>
                            </div>
                        </div>

                        <div className="grid gap-6">

                            {[
                                "Dedicated compliance expert.",
                                "Affordable & transparent pricing.",
                                "Quick processing with timely updates.",
                                "Post-incorporation compliance guidance.",
                            ].map((point, index) => (

                                <div
                                    key={index}
                                    className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-200 to-transparent hover:from-[#1F514C]/30 transition"
                                >
                                    <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">

                                        <div className="flex items-start gap-3">

                                            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#1F514C]/10 text-[#1F514C] text-sm font-bold">
                                                ✓
                                            </div>

                                            <p className="text-gray-700 text-sm leading-relaxed font-medium">
                                                {point}
                                            </p>

                                        </div>

                                    </div>
                                </div>

                            ))}

                        </div>

                    </div>
                </section> */}

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>


            </>
        );
        submenuClicked = 'Sole Proprietorship';
    } else if (location.pathname === '/HufDeed') {
        welcomeImage = welcomeImage = (
            <>
            </>
        );
        heading = 'Hindu Undivided Family,HUF Deed';
        description = description = (
            <>
                <div className="home-carousel-container">
                    <picture>
                        {/* Mobile Image */}
                        <source
                            media="(max-width: 768px)"
                            srcSet={hufImg1}
                        />

                        {/* Desktop Image */}
                        <source
                            media="(min-width: 769px)"
                            srcSet={hufImg12}
                        />

                        <img
                            src={hufImg12}
                            alt="More Info"
                            className="common-image"
                        />
                    </picture>
                </div>

                <hr />
            </>
        );
        desCloser = desCloser = (
            <> <p className="font-serif mt-[0.5rem] text-gray-600 text-base md:text-lg max-w-6xl mx-auto leading-relaxed">
                ⚖️ Preserve your family wealth and enjoy tax benefits with an HUF— packages start at just ₹3,799/- (all inclusive).
            </p>
                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>
            </>
        )
        mainDescription = mainDescription = (
            <>

                <section className="relative py-[0rem] md:py-[0rem] px-4 md:px-12 overflow-hidden">
                    {/* Heading */}
                    <div className="text-center mb-16 relative z-10">
                        <p className="text-[#177B74] mb-3">
                            • Hindu Undivided Family,HUF Deed
                        </p>

                        <p className="font-serif mt-[0.5rem] text-gray-900 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                            A Hindu Undivided Family (HUF) is a distinct legal and tax entity recognized under Indian law. It allows members of a Hindu family to collectively own and manage assets, governed by Hindu Law and acknowledged under the Income Tax Act, 1961. An HUF is headed by a Karta (usually the eldest male member) and includes coparceners or other family members. It can own property, run a business, open a bank account, and file income tax returns under its own PAN, separate from the individual PANs of family members. Forming an HUF helps in tax planning, efficient asset management, and smooth succession of family-owned wealth or business.                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-5 items-center relative z-10">

                        {/* LEFT: Benefits */}
                        {/* <div className="space-y">

                            {[

                                "A HUF is formed automatically in a Hindu family — there is no need for a formal agreement.",
                                "It is governed by Hindu Law and recognized under the Income Tax Act, 1961.",
                                "The head of the family, known as the Karta, manages all affairs of the HUF.",
                                "All lineal descendants of a common ancestor become members by birth.",
                                "A HUF can hold assets, run a business, and enjoy separate tax benefits under the Income Tax Act.",
                                "It is an excellent way to manage and protect family wealth while minimizing tax liability."
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#1F514C]/5 transition group"
                                >
                                    <div className="text-[#1F514C] mt-1 group-hover:translate-x-1 transition">
                                        <AiOutlineRight size={18} />
                                    </div>

                                    <p className="text-gray-700 text-sm md:text-base">
                                        {item}
                                    </p>
                                </div>

                            ))}

                        </div> */}

                        {/* RIGHT: Glass Info Card */}
                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-[#1F514C]/20 blur-3xl opacity-30 rounded-3xl"></div>

                            <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 md:p-10">

                                <h3 className="text-xl md:text-2xl font-semibold text-[#1F514C] mb-4">
                                    Why Choose Hindu Undivided Family,HUF Deed?
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    A HUF is formed automatically in a Hindu family — there is no need for a formal agreement. It is governed by Hindu Law and recognized under the Income Tax Act, 1961. The head of the family, known as the Karta, manages all affairs of the HUF. All lineal descendants of a common ancestor become members by birth. A HUF can hold assets, run a business, and enjoy separate tax benefits under the Income Tax Act. It is an excellent way to manage and protect family wealth while minimizing tax liability.
                                </p>

                                {/* Replacement for Button */}
                                <div className="border-t pt-5 mt-5">

                                    <p className="text-sm text-gray-500 mb-2">
                                        Trusted by startups & growing businesses
                                    </p>

                                    <div className="flex items-center gap-6 text-[#1F514C] font-medium text-sm">
                                        <span>✔ Easy Setup</span>
                                        <span>✔ Govt. Approved</span>
                                        <span>✔ 100% Online</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </>
        );
        mainDesTitle = mainDesTitle = (
            <>
            </>
        )
        moreInfo = moreInfo = (
            <>
                {/* whyimg */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute left-[-100px] top-[50px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading */}
                    <div className="text-center mb-16 relative z-10">
                        <p className="text-[#177B74] mb-3">
                            • Documentation
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Required Documents for <br className="hidden md:block" />
                            HUF Deed
                        </h2>

                        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                            Ensure a smooth registration process by keeping these essential
                            documents ready..
                        </p>
                    </div>

                    {/* Content */}
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">

                        {/* LEFT SIDE (Highlight Card) */}
                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-[#1F514C]/20 blur-3xl opacity-30 rounded-3xl"></div>

                            <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 md:p-10">

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                    Quick Checklist
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    These documents are mandatory for directors and the registered
                                    office. Keeping them ready ensures faster approval and avoids delays.
                                </p>

                                {/* Mini Points */}
                                <div className="mt-6 space-y-3 text-sm text-[#1F514C] font-medium">
                                    <p>✔ Govt. Approved Documents</p>
                                    <p>✔ Digital Submission Supported</p>
                                    <p>✔ Required for All Directors</p>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT SIDE (Docs List) */}
                        <div className="space-y-0">

                            {[
                                "PAN card and Aadhaar card of Karta and coparceners",
                                "Passport - size photographs of all members",
                                "Electricity bill or rent agreement of registered office (address proof)",
                                "HUF Declaration Deed",
                                "HUF Bank Account proof(if available)"
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#1F514C]/5 transition group"
                                >
                                    <div className="text-[#1F514C] mt-1 bg-[#1F514C]/10 p-2 rounded-lg">
                                        <AiOutlineCheck size={16} />
                                    </div>

                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                        {item}
                                    </p>
                                </div>

                            ))}

                        </div>

                    </div>
                </section>

                {/* <div className="flex items-center my-12"> */}
                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>
                {/* </div> */}

                {/* <img src={plrImg3} alt="More Info" className="carousel-image" /> */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Glow */}
                    <div className="absolute right-[-100px] top-[100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading (MATCHING YOUR DOC SECTION) */}
                    <div className="text-center mb-20">
                        <p className="text-[#177B74] mb-3">
                            • Registation Steps
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Complete your HUF
                            registration in 5 simple steps!
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div className="relative max-w-4xl mx-auto">

                        {/* Center Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 md:-translate-x-1/2 w-[3px] h-full bg-[#1F514C]/20"></div>

                        {/* Steps */}
                        <div className="space-y-12 md:space-y-20">

                            {[
                                {
                                    title: "Complete a Checklist",
                                    desc: "Gather all required documents like PAN, Aadhaar, proof of address, and details of Karta and coparceners."
                                },
                                {
                                    title: "Drafting of HUF Deed",
                                    desc: "Our experts prepare a legally valid HUF deed outlining the family members, assets, and management structure."
                                },
                                {
                                    title: "Verification of Documents",
                                    desc: " Submit all documents for verification to ensure compliance and accuracy."
                                },
                                {
                                    title: "Drafting & Executing HUF Deed",
                                    desc: "Sign and execute the HUF deed, making it legally recognized and binding."
                                },
                                {
                                    title: "Obtain PAN & TAN",
                                    desc: " Apply for PAN and TAN for the HUF to enable taxation and legal financial transactions."
                                }
                            ].map((step, index) => {

                                const isLeft = index % 2 === 0;

                                return (
                                    <div key={index} className="relative flex md:items-center">

                                        {/* MOBILE + LEFT SPACING */}
                                        <div className="pl-12 md:pl-0 w-full md:flex md:justify-between">

                                            {/* LEFT SIDE (DESKTOP) */}
                                            <div
                                                className={`hidden md:block w-[45%] ${isLeft ? "text-right pr-10" : ""
                                                    }`}
                                            >
                                                {isLeft && (
                                                    <>
                                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                                            {step.title}
                                                        </h3>
                                                        <p className="mt-2 text-gray-600">
                                                            {step.desc}
                                                        </p>
                                                    </>
                                                )}
                                            </div>

                                            {/* MOBILE CONTENT (always visible) */}
                                            <div className="md:hidden">
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    {step.title}
                                                </h3>
                                                <p className="mt-1 text-gray-600 text-sm">
                                                    {step.desc}
                                                </p>
                                            </div>

                                            {/* RIGHT SIDE (DESKTOP) */}
                                            <div
                                                className={`hidden md:block w-[45%] ${!isLeft ? "text-left pl-10" : ""
                                                    }`}
                                            >
                                                {!isLeft && (
                                                    <>
                                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                                            {step.title}
                                                        </h3>
                                                        <p className="mt-2 text-gray-600">
                                                            {step.desc}
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {/* CIRCLE */}
                                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#1F514C] flex items-center justify-center shadow-lg">
                                                <span className="text-white text-sm md:text-base font-semibold">
                                                    {index + 1}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading */}
                    <div className="text-center mb-16">

                        <p className="text-[#177B74] mb-3">
                            • All you need to know about essential compliances
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Post-Registration Compliance required by Proprietorship
                        </h2>
                    </div>

                    {/* Cards Grid */}
                    <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {[
                            {
                                title: " PAN Application",
                                desc: " Obtain a separate PAN in the name of the HUF for taxation purposes.",
                            },
                            {
                                title: "GST Registration",
                                desc: "Required only if the HUF is engaged in business and turnover exceeds ₹20–₹40 lakhs.",
                            },
                            {
                                title: "GST return",
                                desc: "Once registered, the firm must file monthly, quarterly, or annual GST returns accurately and within due dates.",
                            },
                            {
                                title: "Accounting",
                                desc: "Maintain proper books of accounts for income, expenses, and family assets",
                            },
                            {
                                title: "Audit Requirement",
                                desc: "Applicable if the HUF’s total income exceeds the prescribed audit limits under Section 44AB.",
                            },
                            {
                                title: "Income Tax Return Filing (ITR-2/ITR-3)",
                                desc: "File annual income tax returns if the HUF earns income from property, business, or investments.",
                            }
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-[#1F514C]/20 to-transparent hover:from-[#1F514C]/40 transition"
                            >
                                <div className="h-full bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-7 shadow-sm hover:shadow-xl transition duration-300">

                                    {/* Top Accent Line */}
                                    <div className="h-[3px] w-10 bg-[#1F514C] rounded-full mb-5 group-hover:w-16 transition-all"></div>

                                    {/* Title */}
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        {item.desc}
                                    </p>

                                </div>
                            </div>

                        ))}
                    </div>

                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">


                    <div className="absolute left-[-120px] top-[-80px] w-[320px] h-[320px] bg-[#1F514C]/20 blur-[140px] rounded-full opacity-40"></div>
                    <div className="absolute right-[-120px] bottom-[-80px] w-[320px] h-[320px] bg-[#1F514C]/10 blur-[140px] rounded-full opacity-40"></div>


                    <div className="text-center mb-20">
                        <p className="text-[#177B74] mb-3">
                            • Why Choose Us
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Why Choose NS LegalHelp?
                        </h2>
                    </div>


                    <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">


                        <div className="md:col-span-2 group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#079483]/30 to-transparent">

                            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition duration-300">

                                <div className="mb-6 text-[#1F514C] text-4xl">★</div>

                                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                                    End-to-end assistance
                                </h3>

                                <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
                                    From DSC to Certificate of Incorporation, we handle everything for you
                                    with complete transparency and expert guidance.
                                </p>


                                <div className="absolute inset-0 rounded-3xl border border-[#1F514C]/20"></div>
                            </div>
                        </div>

                        <div className="grid gap-6">

                            {[
                                "Dedicated compliance expert.",
                                "Affordable & transparent pricing.",
                                "Quick processing with timely updates.",
                                "Post-incorporation compliance guidance.",
                            ].map((point, index) => (

                                <div
                                    key={index}
                                    className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-200 to-transparent hover:from-[#1F514C]/30 transition"
                                >
                                    <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">

                                        <div className="flex items-start gap-3">

                                            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#1F514C]/10 text-[#1F514C] text-sm font-bold">
                                                ✓
                                            </div>

                                            <p className="text-gray-700 text-sm leading-relaxed font-medium">
                                                {point}
                                            </p>

                                        </div>

                                    </div>
                                </div>

                            ))}

                        </div>

                    </div>
                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>
            </>
        );
        submenuClicked = 'Hindu Undivided Family,HUF Deed';
    } else if (location.pathname === '/onePersonCompany') {
        welcomeImage = welcomeImage = (
            <>

            </>
        );
        heading = 'One Person Company (OPC) ';
        description = description = (
            <>
                <div className="home-carousel-container">
                    <picture>
                        {/* Mobile Image */}
                        <source
                            media="(max-width: 768px)"
                            srcSet={opcrImg1}
                        />

                        {/* Desktop Image */}
                        <source
                            media="(min-width: 769px)"
                            srcSet={opcImg12}
                        />

                        <img
                            src={opcImg12}
                            alt="More Info"
                            className="common-image"
                        />
                    </picture>
                </div>
                <hr />
            </>
        );
        desCloser = desCloser = (
            <>
                <p className="font-serif mt-[0.5rem] text-gray-600 text-base md:text-lg max-w-6xl mx-auto leading-relaxed">
                    ⚖ Start Your One Person Company (OPC) with NS LegalHelp — packages begin at ₹7,199/- (all inclusive).
                </p>
                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>
            </>
        )
        mainDescription = mainDescription = (
            <>
                <section className="relative py-[0rem] md:py-[0rem] px-4 md:px-12 overflow-hidden">
                    {/* Heading */}
                    <div className="text-center mb-16 relative z-10">
                        <p className="text-[#177B74] mb-3">
                            • One Person Company
                        </p>

                        <p className="font-serif mt-[0.5rem] text-gray-900 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                            A One Person Company (OPC) is designed for solo entrepreneurs who want the benefits of a company while maintaining full control. It provides limited liability protection, a separate legal identity, and easier compliance — making it ideal for individual startups and professionals.</p>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-5 items-center relative z-10">

                        {/* LEFT: Benefits */}
                        {/* <div className="space-y">

                            {[

                                "A HUF is formed automatically in a Hindu family — there is no need for a formal agreement.",
                                "It is governed by Hindu Law and recognized under the Income Tax Act, 1961.",
                                "The head of the family, known as the Karta, manages all affairs of the HUF.",
                                "All lineal descendants of a common ancestor become members by birth.",
                                "A HUF can hold assets, run a business, and enjoy separate tax benefits under the Income Tax Act.",
                                "It is an excellent way to manage and protect family wealth while minimizing tax liability."
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#1F514C]/5 transition group"
                                >
                                    <div className="text-[#1F514C] mt-1 group-hover:translate-x-1 transition">
                                        <AiOutlineRight size={18} />
                                    </div>

                                    <p className="text-gray-700 text-sm md:text-base">
                                        {item}
                                    </p>
                                </div>

                            ))}

                        </div> */}

                        {/* RIGHT: Glass Info Card */}
                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-[#1F514C]/20 blur-3xl opacity-30 rounded-3xl"></div>

                            <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 md:p-10">

                                <h3 className="text-xl md:text-2xl font-semibold text-[#1F514C] mb-4">
                                    Why Choose One Person Company?
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Registering a One Person Company (OPC) provides the sole shareholder with limited liability protection and establishes the business as a separate legal entity. It allows the owner to have full control over all business decisions, while also enhancing credibility with clients, vendors, and banks. Additionally, an OPC makes it easier to raise funds through loans or equity and ensures perpetual succession, meaning the company continues even if the shareholder changes.
                                </p>

                                {/* Replacement for Button */}
                                <div className="border-t pt-5 mt-5">

                                    <p className="text-sm text-gray-500 mb-2">
                                        Trusted by startups & growing businesses
                                    </p>

                                    <div className="flex items-center gap-6 text-[#1F514C] font-medium text-sm">
                                        <span>✔ Easy Setup</span>
                                        <span>✔ Govt. Approved</span>
                                        <span>✔ 100% Online</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>

            </>
        );
        mainDesTitle = mainDesTitle = (
            <>
            </>
        )
        moreInfo = moreInfo = (
            <>

                {/* whyimg */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute left-[-100px] top-[50px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading */}
                    <div className="text-center mb-16 relative z-10">
                        <p className="text-[#177B74] mb-3">
                            • Documentation
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Required Documents for <br className="hidden md:block" />
                            One Person Company
                        </h2>

                        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                            Ensure a smooth registration process by keeping these essential
                            documents ready..
                        </p>
                    </div>

                    {/* Content */}
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">

                        {/* LEFT SIDE (Highlight Card) */}
                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-[#1F514C]/20 blur-3xl opacity-30 rounded-3xl"></div>

                            <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 md:p-10">

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                    Quick Checklist
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    These documents are mandatory for directors and the registered
                                    office. Keeping them ready ensures faster approval and avoids delays.
                                </p>

                                {/* Mini Points */}
                                <div className="mt-6 space-y-3 text-sm text-[#1F514C] font-medium">
                                    <p>✔ Govt. Approved Documents</p>
                                    <p>✔ Digital Submission Supported</p>
                                    <p>✔ Required for All Directors</p>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT SIDE (Docs List) */}
                        <div className="space-y-0">

                            {[
                                "PAN card of the shareholder/director",
                                "Aadhaar card / Passport / Voter ID",
                                "Passport-size photograph",
                                "Proof of registered office (Rent Agreement / Utility Bill /NOC)",
                                "Latest bank statement or telephone bill (as addressproof)"
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#1F514C]/5 transition group"
                                >
                                    <div className="text-[#1F514C] mt-1 bg-[#1F514C]/10 p-2 rounded-lg">
                                        <AiOutlineCheck size={16} />
                                    </div>

                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                        {item}
                                    </p>
                                </div>

                            ))}

                        </div>

                    </div>
                </section>

                {/* <div className="flex items-center my-12"> */}
                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>
                {/* </div> */}

                {/* <img src={plrImg3} alt="More Info" className="carousel-image" /> */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Glow */}
                    <div className="absolute right-[-100px] top-[100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading (MATCHING YOUR DOC SECTION) */}
                    <div className="text-center mb-20">
                        <p className="text-[#177B74] mb-3">
                            • Registation Steps
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Complete your One Person Company
                            registration in 5 simple steps!
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div className="relative max-w-4xl mx-auto">

                        {/* Center Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 md:-translate-x-1/2 w-[3px] h-full bg-[#1F514C]/20"></div>

                        {/* Steps */}
                        <div className="space-y-12 md:space-y-20">

                            {[
                                {
                                    title: "Obtain DSC",
                                    desc: "To initiate the company registration process, you must first obtain a Digital Signature Certificate (DSC)."
                                },
                                {
                                    title: "Draft MOA & AOA (e-MoA and e-AoA)",
                                    desc: "These documents must be prepared electronically (e-MoA and e-AoA) and filed as linked forms with SPICe+."
                                },
                                {
                                    title: "Name Approval",
                                    desc: "Before incorporation, the proposed company name must be approved by the Ministry of Corporate Affairs (MCA)"
                                },
                                {
                                    title: "Draft MOA & AOA (e-MoA and e-AoA)",
                                    desc: "These documents must be prepared electronically (e-MoA and e-AoA) and filed as linked forms with SPICe+."
                                },
                                {
                                    title: "Completion",
                                    desc: "Submit the completed SPICe+ form, including all linked forms, digitally signed documents, and supporting materials"
                                }
                            ].map((step, index) => {

                                const isLeft = index % 2 === 0;

                                return (
                                    <div key={index} className="relative flex md:items-center">

                                        {/* MOBILE + LEFT SPACING */}
                                        <div className="pl-12 md:pl-0 w-full md:flex md:justify-between">

                                            {/* LEFT SIDE (DESKTOP) */}
                                            <div
                                                className={`hidden md:block w-[45%] ${isLeft ? "text-right pr-10" : ""
                                                    }`}
                                            >
                                                {isLeft && (
                                                    <>
                                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                                            {step.title}
                                                        </h3>
                                                        <p className="mt-2 text-gray-600">
                                                            {step.desc}
                                                        </p>
                                                    </>
                                                )}
                                            </div>

                                            {/* MOBILE CONTENT (always visible) */}
                                            <div className="md:hidden">
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    {step.title}
                                                </h3>
                                                <p className="mt-1 text-gray-600 text-sm">
                                                    {step.desc}
                                                </p>
                                            </div>

                                            {/* RIGHT SIDE (DESKTOP) */}
                                            <div
                                                className={`hidden md:block w-[45%] ${!isLeft ? "text-left pl-10" : ""
                                                    }`}
                                            >
                                                {!isLeft && (
                                                    <>
                                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                                            {step.title}
                                                        </h3>
                                                        <p className="mt-2 text-gray-600">
                                                            {step.desc}
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {/* CIRCLE */}
                                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#1F514C] flex items-center justify-center shadow-lg">
                                                <span className="text-white text-sm md:text-base font-semibold">
                                                    {index + 1}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">


                    <div className="absolute left-[-100px] bottom-[-100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>


                    <div className="text-center mb-16">
                        <p className="text-[#177B74] mb-3">
                            • Process
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Simple Steps to Get Started
                        </h2>
                    </div>


                    <div className="relative max-w-6xl mx-auto">


                        <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-[#1F514C]/20"></div>


                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative">


                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    1
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <HiOutlineDocumentText />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Fill Checklist
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    Your dedicated compliance manager will collect the required documents and a simple checklist from you. Once verified by our experts,the registration process begins. You’ll receive regular updates on the progress until your company is successfully registered.
                                </p>
                            </div>


                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    2
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <AiOutlineFileDone />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Submit & Verify
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    After receiving your documents and checklist, we’ll apply for your Digital Signature Certificate (DSC) and proceed with name approval for your Private Limited Company. You can suggest up to two unique names related to your business, and we’ll file the name application in Part A of the SPICe+ form.
                                </p>
                            </div>

                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    3
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <AiOutlineCheckCircle />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Get Incorporated
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    We will draft the Memorandum of Association (MOA) and Articles of Association (AOA) and file the incorporation documents with the MCA through Part B of the SPICe+ form, along with the subscription statement. Once submitted, the MCA generally approves the application within 4–5 working days and issues the Certificate of Incorporation containing the CIN, PAN, and TAN. After receiving these, you can proceed to open your company’s bank account.
                                </p>
                            </div>

                        </div>
                    </div>

                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading */}
                    <div className="text-center mb-16">

                        <p className="text-[#177B74] mb-3">
                            • All you need to know about essential compliances
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Post-Registration Compliance required by Proprietorship
                        </h2>
                    </div>

                    {/* Cards Grid */}
                    <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                        {[
                            {
                                title: " GST Return Filing",
                                desc: "Once registered under GST, file returns accurately and consistently — monthly, quarterly, or annually as applicable to your business.",
                            },
                            {
                                title: "GST Registration",
                                desc: "Obtain GST registration within 30 days if your turnover exceeds ₹20–₹40 lakhs or if you engage in inter-state or online supply.",
                            },
                            {
                                title: "Accounting",
                                desc: " Maintain proper and updated books of accounts throughout the financial year. This is essential for statutory audits and tax filing compliance.",
                            },
                            {
                                title: "Statutory Audit",
                                desc: "Appoint a Chartered Accountant within 30 days of incorporation to conduct the annual audit of your company’s financial statements.",
                            },
                            {
                                title: "Income Tax Audit",
                                desc: "Mandatory under Section 44AB if your total turnover or receipts exceed ₹1 crore (₹10 crore for digital transactions).",
                            },
                            {
                                title: "ROC Annual Filing",
                                desc: "Submit your company’s financial statements (AOC- 4) and annual return (MGT- 7A) to the Registrar of Companies (ROC) after the AGM each year.",
                            },
                            {
                                title: "IEC Registration",
                                desc: "Obtain the Import Export Code (IEC) if your company deals with import or export of goods or services.",
                            },
                            {
                                title: "Trademark Registration",
                                desc: "Optional but recommended — protect your brand name, logo, and identity from unauthorized use and build long-term brand value",
                            }
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-[#1F514C]/20 to-transparent hover:from-[#1F514C]/40 transition"
                            >
                                <div className="h-full bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-7 shadow-sm hover:shadow-xl transition duration-300">

                                    {/* Top Accent Line */}
                                    <div className="h-[3px] w-10 bg-[#1F514C] rounded-full mb-5 group-hover:w-16 transition-all"></div>

                                    {/* Title */}
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        {item.desc}
                                    </p>

                                </div>
                            </div>

                        ))}
                    </div>

                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">


                    <div className="absolute left-[-120px] top-[-80px] w-[320px] h-[320px] bg-[#1F514C]/20 blur-[140px] rounded-full opacity-40"></div>
                    <div className="absolute right-[-120px] bottom-[-80px] w-[320px] h-[320px] bg-[#1F514C]/10 blur-[140px] rounded-full opacity-40"></div>


                    <div className="text-center mb-20">
                        <p className="text-[#177B74] mb-3">
                            • Why Choose Us
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Why Choose NS LegalHelp?
                        </h2>
                    </div>


                    <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">


                        <div className="md:col-span-2 group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#079483]/30 to-transparent">

                            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition duration-300">

                                <div className="mb-6 text-[#1F514C] text-4xl">★</div>

                                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                                    End-to-end assistance
                                </h3>

                                <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
                                    From DSC to Certificate of Incorporation, we handle everything for you
                                    with complete transparency and expert guidance.
                                </p>


                                <div className="absolute inset-0 rounded-3xl border border-[#1F514C]/20"></div>
                            </div>
                        </div>

                        <div className="grid gap-6">

                            {[
                                "Dedicated compliance expert.",
                                "Affordable & transparent pricing.",
                                "Quick processing with timely updates.",
                                "Post-incorporation compliance guidance.",
                            ].map((point, index) => (

                                <div
                                    key={index}
                                    className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-200 to-transparent hover:from-[#1F514C]/30 transition"
                                >
                                    <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">

                                        <div className="flex items-start gap-3">

                                            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#1F514C]/10 text-[#1F514C] text-sm font-bold">
                                                ✓
                                            </div>

                                            <p className="text-gray-700 text-sm leading-relaxed font-medium">
                                                {point}
                                            </p>

                                        </div>

                                    </div>
                                </div>

                            ))}

                        </div>

                    </div>
                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>
            </>
        );
        submenuClicked = 'One Person Company (OPC)';
    } else if (location.pathname === '/partnership') {
        welcomeImage = welcomeImage = (
            <>

            </>
        );
        heading = 'Partnership';
        description = description = (
            <>

                <div className="home-carousel-container">
                    <picture>
                        {/* Mobile Image */}
                        <source
                            media="(max-width: 768px)"
                            srcSet={ptImg1}
                        />

                        {/* Desktop Image */}
                        <source
                            media="(min-width: 769px)"
                            srcSet={pfImg12}
                        />

                        <img
                            src={pfImg12}
                            alt="More Info"
                            className="common-image"
                        />
                    </picture>
                </div>
                <hr />
            </>
        );
        desCloser = desCloser = (
            <>
                <p className="font-serif mt-[0.5rem] text-gray-600 text-base md:text-lg max-w-6xl mx-auto leading-relaxed">
                    ⚖️ Simple, fast, and affordable — packages start at just ₹2,199/- (all inclusive)..
                </p>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>
            </>
        )
        mainDescription = mainDescription = (
            <>

                <section className="relative py-[0rem] md:py-[0rem] px-4 md:px-12 overflow-hidden">
                    {/* Heading */}
                    <div className="text-center mb-16 relative z-10">
                        <p className="text-[#177B74] mb-3">
                            • Partnership
                        </p>

                        <p className="font-serif mt-[0.5rem] text-gray-900 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                            A partnership firm is formed when two or more individuals come together to carry on a business with a mutual agreement to share profits and losses. Though registration of a partnership is optional, a registered firm enjoys better legal protection and credibility.</p>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-5 items-center relative z-10">

                        {/* LEFT: Benefits */}
                        {/* <div className="space-y">

                            {[

                                "A HUF is formed automatically in a Hindu family — there is no need for a formal agreement.",
                                "It is governed by Hindu Law and recognized under the Income Tax Act, 1961.",
                                "The head of the family, known as the Karta, manages all affairs of the HUF.",
                                "All lineal descendants of a common ancestor become members by birth.",
                                "A HUF can hold assets, run a business, and enjoy separate tax benefits under the Income Tax Act.",
                                "It is an excellent way to manage and protect family wealth while minimizing tax liability."
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#1F514C]/5 transition group"
                                >
                                    <div className="text-[#1F514C] mt-1 group-hover:translate-x-1 transition">
                                        <AiOutlineRight size={18} />
                                    </div>

                                    <p className="text-gray-700 text-sm md:text-base">
                                        {item}
                                    </p>
                                </div>

                            ))}

                        </div> */}

                        {/* RIGHT: Glass Info Card */}
                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-[#1F514C]/20 blur-3xl opacity-30 rounded-3xl"></div>

                            <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 md:p-10">

                                <h3 className="text-xl md:text-2xl font-semibold text-[#1F514C] mb-4">
                                    Why Choose Partnership?
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    A Partnership Firm is a simple and flexible business structure that can be formed with a minimum of two partners and up to twenty. It is governed by the Indian Partnership Act, 1932, and does not require any minimum capital investment, making it an affordable option for small businesses. Partnership firms are easy to start, operate, and even dissolve when needed. They involve fewer compliances compared to companies or LLPs, and profits, responsibilities, and decision-making are shared among the partners as per the terms of the Partnership Deed.
                                </p>

                                {/* Replacement for Button */}
                                <div className="border-t pt-5 mt-5">

                                    <p className="text-sm text-gray-500 mb-2">
                                        Trusted by startups & growing businesses
                                    </p>

                                    <div className="flex items-center gap-6 text-[#1F514C] font-medium text-sm">
                                        <span>✔ Easy Setup</span>
                                        <span>✔ Govt. Approved</span>
                                        <span>✔ 100% Online</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </>
        );
        mainDesTitle = mainDesTitle = (
            <>
            </>
        )
        moreInfo = moreInfo = (
            <>

                {/* whyimg */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute left-[-100px] top-[50px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading */}
                    <div className="text-center mb-16 relative z-10">
                        <p className="text-[#177B74] mb-3">
                            • Documentation
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Required Documents for <br className="hidden md:block" />
                            Partnership
                        </h2>

                        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                            Ensure a smooth registration process by keeping these essential
                            documents ready..
                        </p>
                    </div>

                    {/* Content */}
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">

                        {/* LEFT SIDE (Highlight Card) */}
                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-[#1F514C]/20 blur-3xl opacity-30 rounded-3xl"></div>

                            <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 md:p-10">

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                    Quick Checklist
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    These documents are mandatory for directors and the registered
                                    office. Keeping them ready ensures faster approval and avoids delays.
                                </p>

                                {/* Mini Points */}
                                <div className="mt-6 space-y-3 text-sm text-[#1F514C] font-medium">
                                    <p>✔ Govt. Approved Documents</p>
                                    <p>✔ Digital Submission Supported</p>
                                    <p>✔ Required for All Directors</p>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT SIDE (Docs List) */}
                        <div className="space-y-0">

                            {[
                                "PAN card of partner",
                                "Aadhaar card / Passport / Voter ID",
                                "Passport-size photograph",
                                "Partnership Deed (drafted and notarized)",
                                "Proof of registered office (Rent Agreement / Utility Bill / NOC)"
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#1F514C]/5 transition group"
                                >
                                    <div className="text-[#1F514C] mt-1 bg-[#1F514C]/10 p-2 rounded-lg">
                                        <AiOutlineCheck size={16} />
                                    </div>

                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                        {item}
                                    </p>
                                </div>

                            ))}

                        </div>

                    </div>
                </section>

                {/* <div className="flex items-center my-12"> */}
                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>
                {/* </div> */}

                {/* <img src={plrImg3} alt="More Info" className="carousel-image" /> */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Glow */}
                    <div className="absolute right-[-100px] top-[100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading (MATCHING YOUR DOC SECTION) */}
                    <div className="text-center mb-20">
                        <p className="text-[#177B74] mb-3">
                            • Registation Steps
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Complete your Partnership
                            registration in 5 simple steps!
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div className="relative max-w-4xl mx-auto">

                        {/* Center Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 md:-translate-x-1/2 w-[3px] h-full bg-[#1F514C]/20"></div>

                        {/* Steps */}
                        <div className="space-y-12 md:space-y-20">

                            {[
                                {
                                    title: "Collect Partner Details",
                                    desc: "Our compliance team collects the required documents of all partners and verifies them before preparing the necessary paperwork."
                                },
                                {
                                    title: "Draft Partnership Deed",
                                    desc: "We prepare a legal Partnership Deed defining partner rights, duties, and profit-sharing ratios."
                                },
                                {
                                    title: "Notarization of Deed",
                                    desc: "Once the deed is finalized, it must be notarized by an authorized notary public to make it legally enforceable. Please note: The notarization fee is not included in our package and must be paid directly by the client."
                                },
                                {
                                    title: "Obtain PAN & TAN",
                                    desc: "After the deed is notarized, we assist in obtaining the Partnership Firm’s PAN and TAN, which are essential for tax filing and compliance purposes."
                                },
                                {
                                    title: "Open Bank Account",
                                    desc: "With the notarized deed and PAN, you can open a current bank account in your firm’s name and officially start business operations."
                                }
                            ].map((step, index) => {

                                const isLeft = index % 2 === 0;

                                return (
                                    <div key={index} className="relative flex md:items-center">

                                        {/* MOBILE + LEFT SPACING */}
                                        <div className="pl-12 md:pl-0 w-full md:flex md:justify-between">

                                            {/* LEFT SIDE (DESKTOP) */}
                                            <div
                                                className={`hidden md:block w-[45%] ${isLeft ? "text-right pr-10" : ""
                                                    }`}
                                            >
                                                {isLeft && (
                                                    <>
                                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                                            {step.title}
                                                        </h3>
                                                        <p className="mt-2 text-gray-600">
                                                            {step.desc}
                                                        </p>
                                                    </>
                                                )}
                                            </div>

                                            {/* MOBILE CONTENT (always visible) */}
                                            <div className="md:hidden">
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    {step.title}
                                                </h3>
                                                <p className="mt-1 text-gray-600 text-sm">
                                                    {step.desc}
                                                </p>
                                            </div>

                                            {/* RIGHT SIDE (DESKTOP) */}
                                            <div
                                                className={`hidden md:block w-[45%] ${!isLeft ? "text-left pl-10" : ""
                                                    }`}
                                            >
                                                {!isLeft && (
                                                    <>
                                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                                            {step.title}
                                                        </h3>
                                                        <p className="mt-2 text-gray-600">
                                                            {step.desc}
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {/* CIRCLE */}
                                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#1F514C] flex items-center justify-center shadow-lg">
                                                <span className="text-white text-sm md:text-base font-semibold">
                                                    {index + 1}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                {/* <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">


                    <div className="absolute left-[-100px] bottom-[-100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>


                    <div className="text-center mb-16">
                        <p className="text-[#177B74] mb-3">
                            • Process
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Simple Steps to Get Started
                        </h2>
                    </div>


                    <div className="relative max-w-6xl mx-auto">


                        <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-[#1F514C]/20"></div>


                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative">


                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    1
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <HiOutlineDocumentText />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Fill Checklist
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    Your dedicated compliance manager will collect the required documents and a simple checklist from you. Once verified by our experts,the registration process begins. You’ll receive regular updates on the progress until your company is successfully registered.
                                </p>
                            </div>


                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    2
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <AiOutlineFileDone />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Submit & Verify
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    After receiving your documents and checklist, we’ll apply for your Digital Signature Certificate (DSC) and proceed with name approval for your Private Limited Company. You can suggest up to two unique names related to your business, and we’ll file the name application in Part A of the SPICe+ form.
                                </p>
                            </div>

                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    3
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <AiOutlineCheckCircle />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Get Incorporated
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    We will draft the Memorandum of Association (MOA) and Articles of Association (AOA) and file the incorporation documents with the MCA through Part B of the SPICe+ form, along with the subscription statement. Once submitted, the MCA generally approves the application within 4–5 working days and issues the Certificate of Incorporation containing the CIN, PAN, and TAN. After receiving these, you can proceed to open your company’s bank account.
                                </p>
                            </div>

                        </div>
                    </div>

                </section> */}

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading */}
                    <div className="text-center mb-16">

                        <p className="text-[#177B74] mb-3">
                            • All you need to know about essential compliances
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Post-Registration Compliance required by Proprietorship
                        </h2>
                    </div>

                    {/* Cards Grid */}
                    <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {[
                            {
                                title: "GST Registration",
                                desc: "Required if annual turnover exceeds ₹20–₹40 lakhs or if the firm is engaged in inter-state or online business transactions."
                            },
                            {
                                title: "GST Return",
                                desc: "Once registered, the firm must file monthly, quarterly, or annual GST returns accurately and within due dates."
                            },
                            {
                                title: "Trademark Registration",
                                desc: "Optional but highly recommended to protect the firm’s name, brand, and logo from unauthorized use."
                            },
                            {
                                title: "Income Tax Return",
                                desc: "File ITR-5 annually, reporting the firm’s income, expenses, and profit-sharing ratio."
                            },
                            {
                                title: "Audit Requirement",
                                desc: "Audit is mandatory if turnover exceeds ₹1 crore (₹10 crore for digital transactions) under Section 44AB of the Income Tax Act."
                            },
                            {
                                title: "Accounting",
                                desc: "Maintain accurate records of income, expenses, and profit distribution among partners throughout the financial year."
                            }
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-[#1F514C]/20 to-transparent hover:from-[#1F514C]/40 transition"
                            >
                                <div className="h-full bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-7 shadow-sm hover:shadow-xl transition duration-300">

                                    {/* Top Accent Line */}
                                    <div className="h-[3px] w-10 bg-[#1F514C] rounded-full mb-5 group-hover:w-16 transition-all"></div>

                                    {/* Title */}
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        {item.desc}
                                    </p>

                                </div>
                            </div>

                        ))}
                    </div>

                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">


                    <div className="absolute left-[-120px] top-[-80px] w-[320px] h-[320px] bg-[#1F514C]/20 blur-[140px] rounded-full opacity-40"></div>
                    <div className="absolute right-[-120px] bottom-[-80px] w-[320px] h-[320px] bg-[#1F514C]/10 blur-[140px] rounded-full opacity-40"></div>


                    <div className="text-center mb-20">
                        <p className="text-[#177B74] mb-3">
                            • Why Choose Us
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Why Choose NS LegalHelp?
                        </h2>
                    </div>


                    <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">


                        <div className="md:col-span-2 group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#079483]/30 to-transparent">

                            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition duration-300">

                                <div className="mb-6 text-[#1F514C] text-4xl">★</div>

                                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                                    End-to-end assistance
                                </h3>

                                <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
                                    From DSC to Certificate of Incorporation, we handle everything for you
                                    with complete transparency and expert guidance.
                                </p>


                                <div className="absolute inset-0 rounded-3xl border border-[#1F514C]/20"></div>
                            </div>
                        </div>

                        <div className="grid gap-6">

                            {[
                                "Dedicated compliance expert.",
                                "Affordable & transparent pricing.",
                                "Quick processing with timely updates.",
                                "Post-incorporation compliance guidance.",
                            ].map((point, index) => (

                                <div
                                    key={index}
                                    className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-200 to-transparent hover:from-[#1F514C]/30 transition"
                                >
                                    <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">

                                        <div className="flex items-start gap-3">

                                            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#1F514C]/10 text-[#1F514C] text-sm font-bold">
                                                ✓
                                            </div>

                                            <p className="text-gray-700 text-sm leading-relaxed font-medium">
                                                {point}
                                            </p>

                                        </div>

                                    </div>
                                </div>

                            ))}

                        </div>

                    </div>
                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

            </>
        );
        submenuClicked = 'Partnership';
    } else if (location.pathname === '/ecomBusiness') {
        welcomeImage = welcomeImage = (
            <>
            </>
        );
        heading = 'E-Commerce Business';
        description = description = (
            <>
                <div className="home-carousel-container">
                    <picture>
                        {/* Mobile Image */}
                        <source
                            media="(max-width: 768px)"
                            srcSet={ecomImg1}
                        />

                        {/* Desktop Image */}
                        <source
                            media="(min-width: 769px)"
                            srcSet={ecmImg12}
                        />

                        <img
                            src={ecmImg12}
                            alt="More Info"
                            className="common-image"
                        />
                    </picture>
                </div>
                <hr />
            </>
        );
        desCloser = desCloser = (
            <>
                <p className="font-serif mt-[0.5rem] text-gray-600 text-base md:text-lg max-w-6xl mx-auto leading-relaxed">
                    ⚖️ Launch your online business with full compliance and confidence — packages start at just ₹6,499/- (all inclusive).
                </p>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>
            </>
        )
        mainDescription = mainDescription = (
            <>
                <section className="relative py-[0rem] md:py-[0rem] px-4 md:px-12 overflow-hidden">
                    {/* Heading */}
                    <div className="text-center mb-16 relative z-10">
                        <p className="text-[#177B74] mb-3">
                            • E-Commerce Business
                        </p>

                        <p className="font-serif mt-[0.5rem] text-gray-900 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                            An E-Commerce business involves selling goods or services online through a website, mobile app, or marketplace platforms such as Amazon, Flipkart, or Meesho. It can operate under various models like B2C (Business to Consumer), B2B (Business to Business), or D2C (Direct to Consumer). To legally run an E-Commerce business in India, it must be registered under an appropriate structure — such as a Proprietorship, Partnership, LLP, or Private Limited Company — and must also obtain GST registration. Proper registration ensures compliance with IT and Consumer Protection (E-Commerce) Rules, 2020, enables online payment gateways, builds brand credibility, and allows smooth listing on major marketplaces.</p>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-5 items-center relative z-10">

                        {/* LEFT: Benefits */}
                        {/* <div className="space-y">

                            {[

                                "A HUF is formed automatically in a Hindu family — there is no need for a formal agreement.",
                                "It is governed by Hindu Law and recognized under the Income Tax Act, 1961.",
                                "The head of the family, known as the Karta, manages all affairs of the HUF.",
                                "All lineal descendants of a common ancestor become members by birth.",
                                "A HUF can hold assets, run a business, and enjoy separate tax benefits under the Income Tax Act.",
                                "It is an excellent way to manage and protect family wealth while minimizing tax liability."
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#1F514C]/5 transition group"
                                >
                                    <div className="text-[#1F514C] mt-1 group-hover:translate-x-1 transition">
                                        <AiOutlineRight size={18} />
                                    </div>

                                    <p className="text-gray-700 text-sm md:text-base">
                                        {item}
                                    </p>
                                </div>

                            ))}

                        </div> */}

                        {/* RIGHT: Glass Info Card */}
                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-[#1F514C]/20 blur-3xl opacity-30 rounded-3xl"></div>

                            <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 md:p-10">

                                <h3 className="text-xl md:text-2xl font-semibold text-[#1F514C] mb-4">
                                    Why Choose E-Commerce Business?
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    An E-Commerce business offers a powerful way to reach customers beyond geographical boundaries and operate 24/7 with minimal overhead costs. It allows businesses to showcase products online, manage orders efficiently, and scale quickly with the help of digital tools and marketing. With increasing online shopping trends, starting an e-commerce business provides flexibility, wider market access, and significant growth opportunities for entrepreneurs.
                                </p>

                                {/* Replacement for Button */}
                                <div className="border-t pt-5 mt-5">

                                    <p className="text-sm text-gray-500 mb-2">
                                        Trusted by startups & growing businesses
                                    </p>

                                    <div className="flex items-center gap-6 text-[#1F514C] font-medium text-sm">
                                        <span>✔ Easy Setup</span>
                                        <span>✔ Govt. Approved</span>
                                        <span>✔ 100% Online</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </>
        );
        mainDesTitle = mainDesTitle = (
            <>
            </>
        )
        moreInfo = moreInfo = (
            <>

                {/* whyimg */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute left-[-100px] top-[50px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading */}
                    <div className="text-center mb-16 relative z-10">
                        <p className="text-[#177B74] mb-3">
                            • Documentation
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Required Documents for <br className="hidden md:block" />
                            E-Commerce Business
                        </h2>

                        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                            Ensure a smooth registration process by keeping these essential
                            documents ready..
                        </p>
                    </div>

                    {/* Content */}
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">

                        {/* LEFT SIDE (Highlight Card) */}
                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-[#1F514C]/20 blur-3xl opacity-30 rounded-3xl"></div>

                            <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 md:p-10">

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                    Quick Checklist
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    These documents are mandatory for directors and the registered
                                    office. Keeping them ready ensures faster approval and avoids delays.
                                </p>

                                {/* Mini Points */}
                                <div className="mt-6 space-y-3 text-sm text-[#1F514C] font-medium">
                                    <p>✔ Govt. Approved Documents</p>
                                    <p>✔ Digital Submission Supported</p>
                                    <p>✔ Required for All Directors</p>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT SIDE (Docs List) */}
                        <div className="space-y-0">

                            {[
                                "PAN card of applicant or company",
                                "Aadhaar card of promoter or director",
                                "Address proof (rental agreement or electricity bill)",
                                "Passport-size photographs",
                                "Digital Signature Certificate (DSC)",
                                "Business activity details or website link",
                                "Trademark application (if applicable)"
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#1F514C]/5 transition group"
                                >
                                    <div className="text-[#1F514C] mt-1 bg-[#1F514C]/10 p-2 rounded-lg">
                                        <AiOutlineCheck size={16} />
                                    </div>

                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                        {item}
                                    </p>
                                </div>

                            ))}

                        </div>

                    </div>
                </section>

                {/* <div className="flex items-center my-12"> */}
                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>
                {/* </div> */}

                {/* <img src={plrImg3} alt="More Info" className="carousel-image" /> */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Glow */}
                    <div className="absolute right-[-100px] top-[100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading (MATCHING YOUR DOC SECTION) */}
                    <div className="text-center mb-20">
                        <p className="text-[#177B74] mb-3">
                            • Registation Steps
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Complete your E-Commerce Business
                            in 5 simple steps!
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div className="relative max-w-4xl mx-auto">

                        {/* Center Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 md:-translate-x-1/2 w-[3px] h-full bg-[#1F514C]/20"></div>

                        {/* Steps */}
                        <div className="space-y-12 md:space-y-20">

                            {[
                                {
                                    title: "Choose Your Business Structure",
                                    desc: "Decide whether you’ll register as a Proprietorship, Partnership, LLP or Private Limited Company—each has different compliance levels and benefits"
                                },
                                {
                                    title: "Register your business",
                                    desc: "Our team prepares and files all necessary incorporation or registration forms with the relevant authority to legally establish your entity"
                                },
                                {
                                    title: "Obtain GST Registration",
                                    desc: "GST registration is crucial for online selling in India. We help you secure your GST number and ensure you’re ready to list on marketplaces"
                                },
                                {
                                    title: "Open a Current Bank Account",
                                    desc: "With registration and GST in place, you’re ready to open a business-current bank account in your entity’s name to receive payments and manage transactions."
                                },
                                {
                                    title: "Set Up Marketplace & Brand Registrations",
                                    desc: "We assist with getting your brand ready—such as trademark registration—and guide you in listing on major marketplaces and configuring payment gateways"
                                }
                            ].map((step, index) => {

                                const isLeft = index % 2 === 0;

                                return (
                                    <div key={index} className="relative flex md:items-center">

                                        {/* MOBILE + LEFT SPACING */}
                                        <div className="pl-12 md:pl-0 w-full md:flex md:justify-between">

                                            {/* LEFT SIDE (DESKTOP) */}
                                            <div
                                                className={`hidden md:block w-[45%] ${isLeft ? "text-right pr-10" : ""
                                                    }`}
                                            >
                                                {isLeft && (
                                                    <>
                                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                                            {step.title}
                                                        </h3>
                                                        <p className="mt-2 text-gray-600">
                                                            {step.desc}
                                                        </p>
                                                    </>
                                                )}
                                            </div>

                                            {/* MOBILE CONTENT (always visible) */}
                                            <div className="md:hidden">
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    {step.title}
                                                </h3>
                                                <p className="mt-1 text-gray-600 text-sm">
                                                    {step.desc}
                                                </p>
                                            </div>

                                            {/* RIGHT SIDE (DESKTOP) */}
                                            <div
                                                className={`hidden md:block w-[45%] ${!isLeft ? "text-left pl-10" : ""
                                                    }`}
                                            >
                                                {!isLeft && (
                                                    <>
                                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                                            {step.title}
                                                        </h3>
                                                        <p className="mt-2 text-gray-600">
                                                            {step.desc}
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {/* CIRCLE */}
                                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#1F514C] flex items-center justify-center shadow-lg">
                                                <span className="text-white text-sm md:text-base font-semibold">
                                                    {index + 1}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                {/* <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">


                    <div className="absolute left-[-100px] bottom-[-100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>


                    <div className="text-center mb-16">
                        <p className="text-[#177B74] mb-3">
                            • Process
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Simple Steps to Get Started
                        </h2>
                    </div>


                    <div className="relative max-w-6xl mx-auto">


                        <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-[#1F514C]/20"></div>


                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative">


                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    1
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <HiOutlineDocumentText />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Fill Checklist
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    Your dedicated compliance manager will collect the required documents and a simple checklist from you. Once verified by our experts,the registration process begins. You’ll receive regular updates on the progress until your company is successfully registered.
                                </p>
                            </div>


                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    2
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <AiOutlineFileDone />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Submit & Verify
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    After receiving your documents and checklist, we’ll apply for your Digital Signature Certificate (DSC) and proceed with name approval for your Private Limited Company. You can suggest up to two unique names related to your business, and we’ll file the name application in Part A of the SPICe+ form.
                                </p>
                            </div>

                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    3
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <AiOutlineCheckCircle />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Get Incorporated
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    We will draft the Memorandum of Association (MOA) and Articles of Association (AOA) and file the incorporation documents with the MCA through Part B of the SPICe+ form, along with the subscription statement. Once submitted, the MCA generally approves the application within 4–5 working days and issues the Certificate of Incorporation containing the CIN, PAN, and TAN. After receiving these, you can proceed to open your company’s bank account.
                                </p>
                            </div>

                        </div>
                    </div>

                </section> */}

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                {/* <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    <div className="text-center mb-16">

                        <p className="text-[#177B74] mb-3">
                            • All you need to know about essential compliances
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Post-Registration Compliance required by Proprietorship
                        </h2>
                    </div>

                    <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {[
                            {
                                title: "GST Registration",
                                desc: "Required if annual turnover exceeds ₹20–₹40 lakhs or if the firm is engaged in inter-state or online business transactions."
                            },
                            {
                                title: "GST Return",
                                desc: "Once registered, the firm must file monthly, quarterly, or annual GST returns accurately and within due dates."
                            },
                            {
                                title: "Trademark Registration",
                                desc: "Optional but highly recommended to protect the firm’s name, brand, and logo from unauthorized use."
                            },
                            {
                                title: "Income Tax Return",
                                desc: "File ITR-5 annually, reporting the firm’s income, expenses, and profit-sharing ratio."
                            },
                            {
                                title: "Audit Requirement",
                                desc: "Audit is mandatory if turnover exceeds ₹1 crore (₹10 crore for digital transactions) under Section 44AB of the Income Tax Act."
                            },
                            {
                                title: "Accounting",
                                desc: "Maintain accurate records of income, expenses, and profit distribution among partners throughout the financial year."
                            }
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-[#1F514C]/20 to-transparent hover:from-[#1F514C]/40 transition"
                            >
                                <div className="h-full bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-7 shadow-sm hover:shadow-xl transition duration-300">

                                  
                                    <div className="h-[3px] w-10 bg-[#1F514C] rounded-full mb-5 group-hover:w-16 transition-all"></div>

                                   
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                                        {item.title}
                                    </h3>

                                    
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        {item.desc}
                                    </p>

                                </div>
                            </div>

                        ))}
                    </div>

                </section> */}

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">


                    <div className="absolute left-[-120px] top-[-80px] w-[320px] h-[320px] bg-[#1F514C]/20 blur-[140px] rounded-full opacity-40"></div>
                    <div className="absolute right-[-120px] bottom-[-80px] w-[320px] h-[320px] bg-[#1F514C]/10 blur-[140px] rounded-full opacity-40"></div>


                    <div className="text-center mb-20">
                        <p className="text-[#177B74] mb-3">
                            • Why Choose Us
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Why Choose NS LegalHelp?
                        </h2>
                    </div>


                    <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">


                        <div className="md:col-span-2 group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#079483]/30 to-transparent">

                            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition duration-300">

                                <div className="mb-6 text-[#1F514C] text-4xl">★</div>

                                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                                    End-to-end assistance
                                </h3>

                                <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
                                    From DSC to Certificate of Incorporation, we handle everything for you
                                    with complete transparency and expert guidance.
                                </p>


                                <div className="absolute inset-0 rounded-3xl border border-[#1F514C]/20"></div>
                            </div>
                        </div>

                        <div className="grid gap-6">

                            {[
                                "Dedicated compliance expert.",
                                "Affordable & transparent pricing.",
                                "Quick processing with timely updates.",
                                "Post-incorporation compliance guidance.",
                            ].map((point, index) => (

                                <div
                                    key={index}
                                    className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-200 to-transparent hover:from-[#1F514C]/30 transition"
                                >
                                    <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">

                                        <div className="flex items-start gap-3">

                                            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#1F514C]/10 text-[#1F514C] text-sm font-bold">
                                                ✓
                                            </div>

                                            <p className="text-gray-700 text-sm leading-relaxed font-medium">
                                                {point}
                                            </p>

                                        </div>

                                    </div>
                                </div>

                            ))}

                        </div>

                    </div>
                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

            </>
        );
        submenuClicked = 'E-Commerce Business';
    } else if (location.pathname === '/nonProfitOrg') {
        welcomeImage = welcomeImage = (
            <>
            </>
        );
        heading = 'Non Profit Organization';
        description = description = (
            <>
                <div className="home-carousel-container">
                    <picture>
                        {/* Mobile Image */}
                        <source
                            media="(max-width: 768px)"
                            srcSet={npoImg1}
                        />

                        {/* Desktop Image */}
                        <source
                            media="(min-width: 769px)"
                            srcSet={ngoImg12}
                        />

                        <img
                            src={ngoImg12}
                            alt="More Info"
                            className="common-image"
                        />
                    </picture>
                </div>
                <hr />
            </>
        );
        desCloser = desCloser = (
            <>
                <p className="font-serif mt-[0.5rem] text-gray-600 text-base md:text-lg max-w-6xl mx-auto leading-relaxed">
                    ⚖️ Start your  Non Profit Organization or Section 8 Company in India with full compliance and confidence — packages start at just ₹13,499/- (all inclusive).
                </p>
                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>
            </>
        )
        mainDescription = mainDescription = (
            <>
                <section className="relative py-[0rem] md:py-[0rem] px-4 md:px-12 overflow-hidden">
                    {/* Heading */}
                    <div className="text-center mb-16 relative z-10">
                        <p className="text-[#177B74] mb-3">
                            • Non Profit Organization
                        </p>

                        <p className="font-serif mt-[0.5rem] text-gray-900 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                            A Section 8 Company is a registered Non-Profit Organisation (NPO) formed with the objective of promoting charitable, social, educational, religious, artistic, or environmental causes. It operates without profit motive, and any income earned must be reinvested in its objectives. Recognised under the Companies Act, 2013, Section 8 Companies enjoy high credibility, government approval, and tax benefits — making them the most preferred structure for NGOs in India.</p>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-5 items-center relative z-10">

                        {/* LEFT: Benefits */}
                        {/* <div className="space-y">

                            {[

                                "A HUF is formed automatically in a Hindu family — there is no need for a formal agreement.",
                                "It is governed by Hindu Law and recognized under the Income Tax Act, 1961.",
                                "The head of the family, known as the Karta, manages all affairs of the HUF.",
                                "All lineal descendants of a common ancestor become members by birth.",
                                "A HUF can hold assets, run a business, and enjoy separate tax benefits under the Income Tax Act.",
                                "It is an excellent way to manage and protect family wealth while minimizing tax liability."
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#1F514C]/5 transition group"
                                >
                                    <div className="text-[#1F514C] mt-1 group-hover:translate-x-1 transition">
                                        <AiOutlineRight size={18} />
                                    </div>

                                    <p className="text-gray-700 text-sm md:text-base">
                                        {item}
                                    </p>
                                </div>

                            ))}

                        </div> */}

                        {/* RIGHT: Glass Info Card */}
                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-[#1F514C]/20 blur-3xl opacity-30 rounded-3xl"></div>

                            <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 md:p-10">

                                <h3 className="text-xl md:text-2xl font-semibold text-[#1F514C] mb-4">
                                    Why Choose E-Commerce Business?
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    A Section 8 Company is a not-for-profit legal entity formed to promote charitable objectives. It enjoys limited liability, strong legal standing, and is governed by the Companies Act, 2013. There is no minimum capital requirement, and the company’s profits must be fully applied towards charitable activities. Its structure allows for better credibility, funding opportunities, tax exemptions, and corporate partnerships — making it ideal for serious social impact initiatives.
                                </p>

                                {/* Replacement for Button */}
                                <div className="border-t pt-5 mt-5">

                                    <p className="text-sm text-gray-500 mb-2">
                                        Trusted by startups & growing businesses
                                    </p>

                                    <div className="flex items-center gap-6 text-[#1F514C] font-medium text-sm">
                                        <span>✔ Easy Setup</span>
                                        <span>✔ Govt. Approved</span>
                                        <span>✔ 100% Online</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>

            </>
        );
        mainDesTitle = mainDesTitle = (
            <>
            </>
        )
        moreInfo = moreInfo = (
            <>

                {/* whyimg */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute left-[-100px] top-[50px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading */}
                    <div className="text-center mb-16 relative z-10">
                        <p className="text-[#177B74] mb-3">
                            • Documentation
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Required Documents for <br className="hidden md:block" />
                            Non Profit Organization
                        </h2>

                        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                            Ensure a smooth registration process by keeping these essential
                            documents ready..
                        </p>
                    </div>

                    {/* Content */}
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">

                        {/* LEFT SIDE (Highlight Card) */}
                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-[#1F514C]/20 blur-3xl opacity-30 rounded-3xl"></div>

                            <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 md:p-10">

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                    Quick Checklist
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    These documents are mandatory for directors and the registered
                                    office. Keeping them ready ensures faster approval and avoids delays.
                                </p>

                                {/* Mini Points */}
                                <div className="mt-6 space-y-3 text-sm text-[#1F514C] font-medium">
                                    <p>✔ Govt. Approved Documents</p>
                                    <p>✔ Digital Submission Supported</p>
                                    <p>✔ Required for All Directors</p>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT SIDE (Docs List) */}
                        <div className="space-y-0">

                            {[
                                "PAN & Aadhaar of Directors",
                                "Passport-size photographs",
                                "Address proof of Directors (Driving License / Passport / Voter ID)",
                                "Office address proof (Electricity Bill / Rent Agreement / NOC)",
                                "Objective/Activity details of the proposed NGO",
                                "Digital Signature of Directors"
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#1F514C]/5 transition group"
                                >
                                    <div className="text-[#1F514C] mt-1 bg-[#1F514C]/10 p-2 rounded-lg">
                                        <AiOutlineCheck size={16} />
                                    </div>

                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                        {item}
                                    </p>
                                </div>

                            ))}

                        </div>

                    </div>
                </section>

                {/* <div className="flex items-center my-12"> */}
                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>
                {/* </div> */}

                {/* <img src={plrImg3} alt="More Info" className="carousel-image" /> */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Glow */}
                    <div className="absolute right-[-100px] top-[100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading (MATCHING YOUR DOC SECTION) */}
                    <div className="text-center mb-20">
                        <p className="text-[#177B74] mb-3">
                            • Registation Steps
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Complete your Non Profit Organization
                            in 5 simple steps!
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div className="relative max-w-4xl mx-auto">

                        {/* Center Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 md:-translate-x-1/2 w-[3px] h-full bg-[#1F514C]/20"></div>

                        {/* Steps */}
                        <div className="space-y-12 md:space-y-20">

                            {[
                                {
                                    title: "Obtain DSC",
                                    desc: "To initiate the company registration process, you must first obtain a Digital Signature Certificate (DSC)."
                                },
                                {
                                    title: "Name Approval",
                                    desc: "Before incorporation, the proposed company name must be approved by the Ministry of Corporate Affairs (MCA)"
                                },
                                {
                                    title: "Filing SPICe+ From",
                                    desc: "The SPICe+ form is a comprehensive, web-based application introduced to simplify company incorporation."
                                },
                                {
                                    title: "Draft MOA & AOA (e-MoA and e-AoA)",
                                    desc: "These documents must be prepared electronically (e-MoA and e-AoA) and filed as linked forms with SPICe+."
                                },
                                {
                                    title: "Completion",
                                    desc: "Submit the completed SPICe+ form, including all linked forms, digitally signed documents, and supporting materials."
                                }
                            ].map((step, index) => {

                                const isLeft = index % 2 === 0;

                                return (
                                    <div key={index} className="relative flex md:items-center">

                                        {/* MOBILE + LEFT SPACING */}
                                        <div className="pl-12 md:pl-0 w-full md:flex md:justify-between">

                                            {/* LEFT SIDE (DESKTOP) */}
                                            <div
                                                className={`hidden md:block w-[45%] ${isLeft ? "text-right pr-10" : ""
                                                    }`}
                                            >
                                                {isLeft && (
                                                    <>
                                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                                            {step.title}
                                                        </h3>
                                                        <p className="mt-2 text-gray-600">
                                                            {step.desc}
                                                        </p>
                                                    </>
                                                )}
                                            </div>

                                            {/* MOBILE CONTENT (always visible) */}
                                            <div className="md:hidden">
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    {step.title}
                                                </h3>
                                                <p className="mt-1 text-gray-600 text-sm">
                                                    {step.desc}
                                                </p>
                                            </div>

                                            {/* RIGHT SIDE (DESKTOP) */}
                                            <div
                                                className={`hidden md:block w-[45%] ${!isLeft ? "text-left pl-10" : ""
                                                    }`}
                                            >
                                                {!isLeft && (
                                                    <>
                                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                                            {step.title}
                                                        </h3>
                                                        <p className="mt-2 text-gray-600">
                                                            {step.desc}
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {/* CIRCLE */}
                                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#1F514C] flex items-center justify-center shadow-lg">
                                                <span className="text-white text-sm md:text-base font-semibold">
                                                    {index + 1}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                {/* <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">


                    <div className="absolute left-[-100px] bottom-[-100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>


                    <div className="text-center mb-16">
                        <p className="text-[#177B74] mb-3">
                            • Process
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Simple Steps to Get Started
                        </h2>
                    </div>


                    <div className="relative max-w-6xl mx-auto">


                        <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-[#1F514C]/20"></div>


                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative">


                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    1
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <HiOutlineDocumentText />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Fill Checklist
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    Your dedicated compliance manager will collect the required documents and a simple checklist from you. Once verified by our experts,the registration process begins. You’ll receive regular updates on the progress until your company is successfully registered.
                                </p>
                            </div>


                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    2
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <AiOutlineFileDone />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Submit & Verify
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    After receiving your documents and checklist, we’ll apply for your Digital Signature Certificate (DSC) and proceed with name approval for your Private Limited Company. You can suggest up to two unique names related to your business, and we’ll file the name application in Part A of the SPICe+ form.
                                </p>
                            </div>

                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    3
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <AiOutlineCheckCircle />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Get Incorporated
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    We will draft the Memorandum of Association (MOA) and Articles of Association (AOA) and file the incorporation documents with the MCA through Part B of the SPICe+ form, along with the subscription statement. Once submitted, the MCA generally approves the application within 4–5 working days and issues the Certificate of Incorporation containing the CIN, PAN, and TAN. After receiving these, you can proceed to open your company’s bank account.
                                </p>
                            </div>

                        </div>
                    </div>

                </section> */}

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    <div className="text-center mb-16">

                        <p className="text-[#177B74] mb-3">
                            • All you need to know about essential compliances
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Post-Registration Compliance required by Non Profit Organization
                        </h2>
                    </div>

                    <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {[
                            {
                                title: "ROC Annual Filing",
                                desc: "Submit your company’s financial statements (AOC-4) and annual return (MGT-7) to the Registrar of Companies (ROC) after the AGM each year."
                            },
                            {
                                title: "Accounting",
                                desc: "Maintain proper and updated books of accounts throughout the financial year. This is essential for statutory audits and tax filing compliance."
                            },
                            {
                                title: "Statutory Audit",
                                desc: "Appoint a Chartered Accountant within 30 days of incorporation to conduct the annual audit of your company’s financial statements."
                            },
                            {
                                title: "Income Tax Audit",
                                desc: "Mandatory ITR filing every financial year."
                            },
                            {
                                title: "80G & 12A Registration (Optional)",
                                desc: "Enables donors to claim tax benefits; highly recommended for fundraising"
                            },
                            {
                                title: "CSR Compliance (if applicable)",
                                desc: "For NGOs receiving donations from corporate CSR funds."
                            }
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-[#1F514C]/20 to-transparent hover:from-[#1F514C]/40 transition"
                            >
                                <div className="h-full bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-7 shadow-sm hover:shadow-xl transition duration-300">


                                    <div className="h-[3px] w-10 bg-[#1F514C] rounded-full mb-5 group-hover:w-16 transition-all"></div>


                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                                        {item.title}
                                    </h3>


                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        {item.desc}
                                    </p>

                                </div>
                            </div>

                        ))}
                    </div>

                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">


                    <div className="absolute left-[-120px] top-[-80px] w-[320px] h-[320px] bg-[#1F514C]/20 blur-[140px] rounded-full opacity-40"></div>
                    <div className="absolute right-[-120px] bottom-[-80px] w-[320px] h-[320px] bg-[#1F514C]/10 blur-[140px] rounded-full opacity-40"></div>


                    <div className="text-center mb-20">
                        <p className="text-[#177B74] mb-3">
                            • Why Choose Us
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Why Choose NS LegalHelp?
                        </h2>
                    </div>


                    <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">


                        <div className="md:col-span-2 group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#079483]/30 to-transparent">

                            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition duration-300">

                                <div className="mb-6 text-[#1F514C] text-4xl">★</div>

                                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                                    End-to-end assistance
                                </h3>

                                <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
                                    From DSC to Certificate of Incorporation, we handle everything for you
                                    with complete transparency and expert guidance.
                                </p>


                                <div className="absolute inset-0 rounded-3xl border border-[#1F514C]/20"></div>
                            </div>
                        </div>

                        <div className="grid gap-6">

                            {[
                                "Dedicated compliance expert.",
                                "Affordable & transparent pricing.",
                                "Quick processing with timely updates.",
                                "Post-incorporation compliance guidance.",
                            ].map((point, index) => (

                                <div
                                    key={index}
                                    className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-200 to-transparent hover:from-[#1F514C]/30 transition"
                                >
                                    <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">

                                        <div className="flex items-start gap-3">

                                            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#1F514C]/10 text-[#1F514C] text-sm font-bold">
                                                ✓
                                            </div>

                                            <p className="text-gray-700 text-sm leading-relaxed font-medium">
                                                {point}
                                            </p>

                                        </div>

                                    </div>
                                </div>

                            ))}

                        </div>

                    </div>
                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>
            </>
        );
        submenuClicked = 'Non Profit Organization';
    }
    else if (location.pathname === '/gst-return') {
        welcomeImage = welcomeImage = (
            <>
            </>
        );
        heading = 'GST Returns';
        description = description = (
            <>
                <div className="home-carousel-container">
                    <picture>
                        {/* Mobile Image */}
                        <source
                            media="(max-width: 768px)"
                            srcSet={gstImg1}
                        />

                        {/* Desktop Image */}
                        <source
                            media="(min-width: 769px)"
                            srcSet={gstR2}
                        />

                        <img
                            src={gstR2}
                            alt="More Info"
                            className="common-image"
                        />
                    </picture>
                </div>
                <hr />
            </>
        );
        desCloser = desCloser = (
            <>
                <p className="font-serif mt-[0.5rem] text-gray-600 text-base md:text-lg max-w-6xl mx-auto leading-relaxed">
                    ⚖️ If you're registered under GST, timely and accurate return filing is mandatory. At NS Legalhelp, we simplify your GST return filing with professional support, automated filing reminders, and full compliance tracking.
                </p>
                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>
            </>
        )
        mainDescription = mainDescription = (
            <>

                <section className="relative py-[0rem] md:py-[0rem] px-4 md:px-12 overflow-hidden">
                    {/* Heading */}
                    <div className="text-center mb-16 relative z-10">
                        <p className="text-[#177B74] mb-3">
                            • GST Returns
                        </p>

                        <p className="font-serif mt-[0.5rem] text-gray-900 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                            A GST return is a document that registered taxpayers must file with the GST Department, containing details of their sales, purchases, tax collected, and tax paid.</p>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5 items-center relative z-10">

                        {/* LEFT: Benefits */}
                        <div className="space-y">

                            {[

                                "Smooth input tax credit (ITC) claims.",
                                "Transparency in your business operations.",
                                "Legal compliance and avoidance of penalties",
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#1F514C]/5 transition group"
                                >
                                    <div className="text-[#1F514C] mt-1 group-hover:translate-x-1 transition">
                                        <AiOutlineRight size={18} />
                                    </div>

                                    <p className="text-gray-700 text-sm md:text-base">
                                        {item}
                                    </p>
                                </div>

                            ))}

                        </div>

                        {/* RIGHT: Glass Info Card */}
                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-[#1F514C]/20 blur-3xl opacity-30 rounded-3xl"></div>

                            <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 md:p-10">

                                <h3 className="text-xl md:text-2xl font-semibold text-[#1F514C] mb-4">
                                    Why Choose GST Returns?
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    A GST return is a periodic statement filed by a business to report its sales, purchases, tax collected, and tax paid to the government.
                                </p>

                                {/* Replacement for Button */}
                                <div className="border-t pt-5 mt-5">

                                    <p className="text-sm text-gray-500 mb-2">
                                        Trusted by startups & growing businesses
                                    </p>

                                    <div className="flex items-center gap-6 text-[#1F514C] font-medium text-sm">
                                        <span>✔ Easy Setup</span>
                                        <span>✔ Govt. Approved</span>
                                        <span>✔ 100% Online</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </>
        );
        mainDesTitle = mainDesTitle = (
            <>
            </>
        )
        moreInfo = moreInfo = (
            <>

                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    <div className="text-center mb-16">

                        <p className="text-[#177B74] mb-3">
                            • All you need to know about GST Returns
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Who Should File GST Returns?
                        </h2>
                    </div>

                    <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {[
                            {
                                title: "",
                                desc: "Businesses registered under GST."
                            },
                            {
                                title: "",
                                desc: "Traders,service providers, and manufacturers."
                            },
                            {
                                title: "",
                                desc: "E-commerce sellers."
                            },
                            {
                                title: "",
                                desc: "Freelancers and agencies."
                            },
                            {
                                title: "",
                                desc: "Exporters."
                            },
                            {
                                title: "",
                                desc: "Composition scheme holders"
                            }
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-[#1F514C]/20 to-transparent hover:from-[#1F514C]/40 transition"
                            >
                                <div className="h-full bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-7 shadow-sm hover:shadow-xl transition duration-300">


                                    <div className="h-[3px] w-10 bg-[#1F514C] rounded-full mb-5 group-hover:w-16 transition-all"></div>


                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                                        {item.title}
                                    </h3>


                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        {item.desc}
                                    </p>

                                </div>
                            </div>

                        ))}
                    </div>

                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                {/* Table */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-[#1F514C]/20 blur-[140px] rounded-full opacity-40"></div>

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <p className="text-[#177B74] mb-3">
                            • GST Filing
                        </p>

                        <h2 className="font-serif text-[34px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-gray-900">
                            Important GST Filing Due Dates
                        </h2>
                    </div>

                    {/* Table Wrapper */}
                    <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-lg border border-gray-200">

                        {/* Table Header */}
                        <div className="grid grid-cols-3 bg-[#1F514C] text-white text-sm md:text-base font-semibold">
                            <div className="p-4">Return</div>
                            <div className="p-4">Frequency</div>
                            <div className="p-4">Due Date</div>
                        </div>

                        {/* Rows */}
                        {[
                            {
                                return: "GSTR-1",
                                frequency: "Monthly",
                                due: "11th of next month"
                            },
                            {
                                return: "GSTR-3B",
                                frequency: "Monthly",
                                due: "20th/22nd/24th of next month"
                            },
                            {
                                return: "GSTR-4",
                                frequency: "Quarterly (CMP)",
                                due: "18th of the month following the quarter"
                            },
                            {
                                return: "GSTR-9",
                                frequency: "Annual",
                                due: "31st December of following FY"
                            }
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="grid grid-cols-3 text-gray-700 text-sm md:text-base border-t border-gray-200 hover:bg-[#1F514C]/5 transition"
                            >
                                <div className="p-4 font-medium">{item.return}</div>
                                <div className="p-4">{item.frequency}</div>
                                <div className="p-4">{item.due}</div>
                            </div>

                        ))}

                    </div>

                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>


                {/* <img src={plrImg3} alt="More Info" className="carousel-image" /> */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Glow */}
                    <div className="absolute right-[-100px] top-[100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading (MATCHING YOUR DOC SECTION) */}
                    <div className="text-center mb-20">
                        <p className="text-[#177B74] mb-3">
                            • Simple Process
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Why Choose NS LegalHelp for
                            Gst Filling?
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div className="relative max-w-4xl mx-auto">

                        {/* Center Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 md:-translate-x-1/2 w-[3px] h-full bg-[#1F514C]/20"></div>

                        {/* Steps */}
                        <div className="space-y-12 md:space-y-20">

                            {[
                                {
                                    title: "Experienced GST Professionals",
                                    desc: ""
                                },
                                {
                                    title: "Transparent Pricing",
                                    desc: ""
                                },
                                {
                                    title: "Timely Return Filing",
                                    desc: ""
                                },
                                {
                                    title: "Filing Reminders and Support",
                                    desc: ""
                                }
                            ].map((step, index) => {

                                const isLeft = index % 2 === 0;

                                return (
                                    <div key={index} className="relative flex md:items-center">

                                        {/* MOBILE + LEFT SPACING */}
                                        <div className="pl-12 md:pl-0 w-full md:flex md:justify-between">

                                            {/* LEFT SIDE (DESKTOP) */}
                                            <div
                                                className={`hidden md:block w-[45%] ${isLeft ? "text-right pr-10" : ""
                                                    }`}
                                            >
                                                {isLeft && (
                                                    <>
                                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                                            {step.title}
                                                        </h3>
                                                        <p className="mt-2 text-gray-600">
                                                            {step.desc}
                                                        </p>
                                                    </>
                                                )}
                                            </div>

                                            {/* MOBILE CONTENT (always visible) */}
                                            <div className="md:hidden">
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    {step.title}
                                                </h3>
                                                <p className="mt-1 text-gray-600 text-sm">
                                                    {step.desc}
                                                </p>
                                            </div>

                                            {/* RIGHT SIDE (DESKTOP) */}
                                            <div
                                                className={`hidden md:block w-[45%] ${!isLeft ? "text-left pl-10" : ""
                                                    }`}
                                            >
                                                {!isLeft && (
                                                    <>
                                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                                            {step.title}
                                                        </h3>
                                                        <p className="mt-2 text-gray-600">
                                                            {step.desc}
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {/* CIRCLE */}
                                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#1F514C] flex items-center justify-center shadow-lg">
                                                <span className="text-white text-sm md:text-base font-semibold">
                                                    {index + 1}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">


                    <div className="absolute left-[-100px] bottom-[-100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>


                    <div className="text-center mb-16">
                        <p className="text-[#177B74] mb-3">
                            • Process
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Simple Steps to Get Started
                        </h2>
                    </div>


                    <div className="relative max-w-6xl mx-auto">


                        <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-[#1F514C]/20"></div>


                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative">


                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    1
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <HiOutlineDocumentText />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Fill Checklist
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    A Compliance Manager will contact you to remind you of your GST filing due date and to collect your documents along with a simple checklist. Please complete the checklist and submit it together with your documents for processing.
                                </p>
                            </div>


                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    2
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <AiOutlineFileDone />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Prepare of Returns
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    Our expert team will meticulously verify your documents and proceed with the preparation of your GST return. Your dedicated Compliance Manager will keep you informed at every stage, ensuring you are updated on the progress of your GST return filing.
                                </p>
                            </div>

                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    3
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <AiOutlineCheckCircle />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Return Filing
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    Your GST return will be shared with you for review before filing. Once you approve it, we will file the return online. After successful filing, a confirmation email along with the acknowledgment receipt will be sent to your registered email ID.
                                </p>
                            </div>

                        </div>
                    </div>

                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

            </>
        );
        submenuClicked = 'GST Return';
    } else if (location.pathname === '/itr-return') {
        heading = 'Income Tex Returns';
        description = description = (
            <>
                <div className="home-carousel-container">
                    <picture>
                        {/* Mobile Image */}
                        <source
                            media="(max-width: 768px)"
                            srcSet={itrImg1}
                        />

                        {/* Desktop Image */}
                        <source
                            media="(min-width: 769px)"
                            srcSet={itrR}
                        />

                        <img
                            src={itrR}
                            alt="More Info"
                            className="common-image"
                        />
                    </picture>
                </div>
                <hr />
            </>
        );
        desCloser = desCloser = (
            <>
                <p className="font-serif mt-[0.5rem] text-gray-600 text-base md:text-lg max-w-6xl mx-auto leading-relaxed">
                    ⚖️ Whether you are a salaried employee, freelancer, or business owner, filing your income tax return accurately and on time is crucial. With NS Legalhelp, experience stress-free ITR filing handled by qualified professionals.
                </p>
                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>
            </>
        )
        mainDescription = mainDescription = (
            <>

                <section className="relative py-[0rem] md:py-[0rem] px-4 md:px-12 overflow-hidden">
                    {/* Heading */}
                    <div className="text-center mb-16 relative z-10">
                        <p className="text-[#177B74] mb-3">
                            • Income Tax Return
                        </p>

                        <p className="font-serif mt-[0.5rem] text-gray-900 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                            Income Tax Return (ITR) is a form where individuals and businesses declare their income, tax paid, deductions claimed, and other financial details for a financial year to the Income Tax Department of India.</p>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5 items-center relative z-10">

                        {/* LEFT: Benefits */}
                        <div className="space-y">

                            {[

                                "Timely and accurate ITR filing.",
                                "Avoid penalties and legal notices.",
                                "Claim refunds on TDS deducted.",
                                "Maintain clean financial records for loans, visas, and investments.",
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#1F514C]/5 transition group"
                                >
                                    <div className="text-[#1F514C] mt-1 group-hover:translate-x-1 transition">
                                        <AiOutlineRight size={18} />
                                    </div>

                                    <p className="text-gray-700 text-sm md:text-base">
                                        {item}
                                    </p>
                                </div>

                            ))}

                        </div>

                        {/* RIGHT: Glass Info Card */}
                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-[#1F514C]/20 blur-3xl opacity-30 rounded-3xl"></div>

                            <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 md:p-10">

                                <h3 className="text-xl md:text-2xl font-semibold text-[#1F514C] mb-4">
                                    Why Choose Income Tax Return?
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Filing an Income Tax Return ensures legal compliance and helps you avoid penalties while maintaining a clear financial record.
                                </p>

                                {/* Replacement for Button */}
                                <div className="border-t pt-5 mt-5">

                                    <p className="text-sm text-gray-500 mb-2">
                                        Trusted by startups & growing businesses
                                    </p>

                                    <div className="flex items-center gap-6 text-[#1F514C] font-medium text-sm">
                                        <span>✔ Easy Setup</span>
                                        <span>✔ Govt. Approved</span>
                                        <span>✔ 100% Online</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </>
        );
        mainDesTitle = mainDesTitle = (
            <>

            </>
        )
        moreInfo = moreInfo = (
            <>

                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    <div className="text-center mb-16">

                        <p className="text-[#177B74] mb-3">
                            • All you need to know about Income Tex Returns
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Who Should File ITR?
                        </h2>
                    </div>

                    <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {[
                            {
                                title: "",
                                desc: "Salaried individuals earning over ₹2.5 lakhs/year."
                            },
                            {
                                title: "",
                                desc: "Freelancers & professionals with taxable income."
                            },
                            {
                                title: "",
                                desc: "Business owners and startups."
                            },
                            {
                                title: "",
                                desc: "Individuals with foreign income or assets."
                            },
                            {
                                title: "",
                                desc: "NRIs with Indian income."
                            },
                            {
                                title: "",
                                desc: "Investors earning capital gains from shares, mutual funds, property."
                            }
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-[#1F514C]/20 to-transparent hover:from-[#1F514C]/40 transition"
                            >
                                <div className="h-full bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-7 shadow-sm hover:shadow-xl transition duration-300">


                                    <div className="h-[3px] w-10 bg-[#1F514C] rounded-full mb-5 group-hover:w-16 transition-all"></div>


                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                                        {item.title}
                                    </h3>


                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        {item.desc}
                                    </p>

                                </div>
                            </div>

                        ))}
                    </div>

                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                {/* Table */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-[#1F514C]/20 blur-[140px] rounded-full opacity-40"></div>

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <p className="text-[#177B74] mb-3">
                            • Income Tex Returns Filing
                        </p>

                        <h2 className="font-serif text-[34px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-gray-900">
                            Types of ITR Forms We Handle
                        </h2>
                    </div>

                    {/* Table Wrapper */}
                    <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-lg border border-gray-200">

                        {/* Table Header */}
                        <div className="grid grid-cols-3 bg-[#1F514C] text-white text-sm md:text-base font-semibold">
                            <div className="p-4">ITR Form</div>
                            <div className="p-4">Suitable For</div>
                        </div>

                        {/* Rows */}
                        {[
                            {
                                return: "ITR-1",
                                frequency: "Salaried individuals with income up to ₹50L",
                            },
                            {
                                return: "ITR-2",
                                frequency: "Individuals with capital gains, multiple properties",
                            },
                            {
                                return: "ITR-3",
                                frequency: "Professionals and business owners (non-presumptive)",
                            },
                            {
                                return: "ITR-4",
                                frequency: "Freelancers & small businesses under presumptive taxation",
                            },
                            {
                                return: "ITR-5",
                                frequency: "LLPs, Partnerships, Firms",
                            },
                            {
                                return: "ITR-6",
                                frequency: "Companies other than those claiming exemption under section 11",
                            }
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="grid grid-cols-3 text-gray-700 text-sm md:text-base border-t border-gray-200 hover:bg-[#1F514C]/5 transition"
                            >
                                <div className="p-4 font-medium">{item.return}</div>
                                <div className="p-4">{item.frequency}</div>
                                <div className="p-4">{item.due}</div>
                            </div>

                        ))}

                    </div>

                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                 <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-[#1F514C]/20 blur-[140px] rounded-full opacity-40"></div>

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <p className="text-[#177B74] mb-3">
                            • ITR Filing Due Date
                        </p>

                        <h2 className="font-serif text-[34px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-gray-900">
                            (Financial Year 2024-2025)
                        </h2>
                    </div>

                    {/* Table Wrapper */}
                    <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-lg border border-gray-200">

                        {/* Table Header */}
                        <div className="grid grid-cols-3 bg-[#1F514C] text-white text-sm md:text-base font-semibold">
                            <div className="p-4">Suitable For</div>
                            <div className="p-4">Due Date</div>
                        </div>

                        {/* Rows */}
                        {[
                            {
                                return: "Individuals (Not Requiring Audit)",
                                frequency: "15th Sept ’25",
                            },
                            {
                                return: "Individuals & Professionals (Requiring Audit)",
                                frequency: "31st Oct ’25",
                            },
                            {
                                return: "Belated Return",
                                frequency: "Till 31st Dec ’25",
                            },
                            {
                                return: "Updated Return 4 years from the end of the relevant assessment year",
                                frequency: "For FY 24–25, the due date is 31st Mar 2030",
                            }
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="grid grid-cols-3 text-gray-700 text-sm md:text-base border-t border-gray-200 hover:bg-[#1F514C]/5 transition"
                            >
                                <div className="p-4 font-medium">{item.return}</div>
                                <div className="p-4">{item.frequency}</div>
                                <div className="p-4">{item.due}</div>
                            </div>

                        ))}

                    </div>

                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>


                {/* <img src={plrImg3} alt="More Info" className="carousel-image" /> */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Glow */}
                    <div className="absolute right-[-100px] top-[100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>

                    {/* Heading (MATCHING YOUR DOC SECTION) */}
                    <div className="text-center mb-20">
                        <p className="text-[#177B74] mb-3">
                            • Simple Process
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                           Fill Your ITR In 4 Easy Steps
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div className="relative max-w-4xl mx-auto">

                        {/* Center Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 md:-translate-x-1/2 w-[3px] h-full bg-[#1F514C]/20"></div>

                        {/* Steps */}
                        <div className="space-y-12 md:space-y-20">

                            {[
                                {
                                    title: "Submit Documents",
                                    desc: ""
                                },
                                {
                                    title: "Verification of Documents",
                                    desc: ""
                                },
                                {
                                    title: "We Prepare & Review Your Return",
                                    desc: ""
                                },
                                {
                                    title: "You Approve & We File It- Get Confirmation In 24 Hours",
                                    desc: ""
                                }
                            ].map((step, index) => {

                                const isLeft = index % 2 === 0;

                                return (
                                    <div key={index} className="relative flex md:items-center">

                                        {/* MOBILE + LEFT SPACING */}
                                        <div className="pl-12 md:pl-0 w-full md:flex md:justify-between">

                                            {/* LEFT SIDE (DESKTOP) */}
                                            <div
                                                className={`hidden md:block w-[45%] ${isLeft ? "text-right pr-10" : ""
                                                    }`}
                                            >
                                                {isLeft && (
                                                    <>
                                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                                            {step.title}
                                                        </h3>
                                                        <p className="mt-2 text-gray-600">
                                                            {step.desc}
                                                        </p>
                                                    </>
                                                )}
                                            </div>

                                            {/* MOBILE CONTENT (always visible) */}
                                            <div className="md:hidden">
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    {step.title}
                                                </h3>
                                                <p className="mt-1 text-gray-600 text-sm">
                                                    {step.desc}
                                                </p>
                                            </div>

                                            {/* RIGHT SIDE (DESKTOP) */}
                                            <div
                                                className={`hidden md:block w-[45%] ${!isLeft ? "text-left pl-10" : ""
                                                    }`}
                                            >
                                                {!isLeft && (
                                                    <>
                                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                                            {step.title}
                                                        </h3>
                                                        <p className="mt-2 text-gray-600">
                                                            {step.desc}
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {/* CIRCLE */}
                                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#1F514C] flex items-center justify-center shadow-lg">
                                                <span className="text-white text-sm md:text-base font-semibold">
                                                    {index + 1}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>

                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">


                    <div className="absolute left-[-100px] bottom-[-100px] w-[300px] h-[300px] bg-[#1F514C]/20 blur-[120px] rounded-full opacity-40"></div>


                    <div className="text-center mb-16">
                        <p className="text-[#177B74] mb-3">
                            • Process
                        </p>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Simple Steps to Get Started
                        </h2>
                    </div>


                    <div className="relative max-w-6xl mx-auto">


                        <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-[#1F514C]/20"></div>


                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative">


                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    1
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <HiOutlineDocumentText />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                   Who Should File
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    All proprietors under the age of 60 are required to file an Income Tax Return if their total income exceeds ₹2.5 lakh in a financial year. For those aged between 60 and 80 years, ITR filing becomes mandatory if the total income exceeds ₹3 lakh. In the case of proprietors above 80 years of age, the threshold is ₹5 lakh. Additionally, all Partnership Firms, Limited Liability Partnerships (LLPs), and Companies are obligated to file income tax returns every year, regardless of whether there was any income, profit, or even business activity during the year. Even in cases of no transactions, filing a NIL return before the due date is compulsory to stay compliant.
                                </p>
                            </div>


                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    2
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <AiOutlineFileDone />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    TAX Audit
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    A tax audit is mandatory if a business has total sales exceeding ₹1 crore or if a professional earns gross receipts above ₹50 lakh in a financial year. In certain cases, a tax audit may still be required even if these limits are not crossed. Businesses subject to tax audit must file their ITR and Tax Audit Report by 30th September each year. For companies, audit is compulsory regardless of turnover. In the case of LLPs, an audit is required if the turnover exceeds ₹40 lakh or the capital contribution is more than ₹25 lakh.
                                </p>
                            </div>

                            <div className="relative group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#1F514C] text-white flex items-center justify-center font-semibold shadow-lg">
                                    3
                                </div>

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1F514C]/10 text-[#1F514C] mb-6">
                                    <AiOutlineCheckCircle />
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                    Forms
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    A Proprietorship firm must file its Income Tax Return using Form ITR-3 or ITR-4 (Sugam), depending on the nature of income. Partnership Firms and LLPs are required to file ITR using Form 5, while Companies must use Form ITR-6. Charitable trusts need to file their return using Form ITR-7. If a tax audit is applicable, the return must be digitally signed. For Companies and LLPs, digital signature is mandatory. In other cases, the return can be verified electronically through Aadhaar OTP or net banking. Alternatively, the signed ITR-V (Acknowledgement) can be sent physically to the CPC for verification.
                                </p>
                            </div>

                        </div>
                    </div>

                </section>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>
            </>
        );
        submenuClicked = 'Income Tex Return';
    } else if (location.pathname === '/tds-return') {
        heading = 'TDS Returns';
        description = 'Fill Your TDS Returns Now';
        moreInfo = '';
        submenuClicked = 'TDS Return';
    } else if (location.pathname === '/pf-return') {
        heading = 'PF Returns';
        description = 'Fill Your PF Returns Now';
        moreInfo = '';
        submenuClicked = 'PF Return';
    } else if (location.pathname === '/pf-return') {
        heading = 'PF Returns';
        description = 'Fill Your PF Returns Now';
        moreInfo = '';
        submenuClicked = 'PF Return';
    } else if (location.pathname === '/plc-annualFilling') {
        welcomeImage = welcomeImage = (
            <>
                {/* <div className="home-carousel-container">
                    <img src={gstWelcomeImg} alt="More Info" className="carousel-image" />
                </div> */}
            </>
        );
        heading = 'Private Limited Comapny Annual Filling';
        description = description = (
            <>
                {/* <p>A GST return is a document that registered taxpayers must file with the GST Department, containing details of their sales, purchases, tax collected, and tax paid.</p> */}
                <div className="home-carousel-container">
                    <picture>
                        {/* Mobile Image */}
                        <source
                            media="(max-width: 768px)"
                            srcSet={plcAImg1}
                        />

                        {/* Desktop Image */}
                        <source
                            media="(min-width: 769px)"
                            srcSet={plcR}
                        />

                        <img
                            src={itrR}
                            alt="More Info"
                            className="common-image"
                        />
                    </picture>
                </div>
                <hr />
            </>
        );
        desCloser = desCloser = (
            <>
                <p className="common-info"><b>At NS Legalhelp, we ensure your company stays 100% compliant with the MCA, helping you avoid penalties and build credibility.</b></p>
            </>
        )
        mainDescription = mainDescription = (
            <>
                {/* <h4>What is Private Limited Comapny Annual Filling?</h4> */}
                <p>Every Private Limited Company registered in India is required to fulfill certain statutory compliances under the Companies Act, 2013—regardless of whether it is actively doing business or not. These are known as ROC (Registrar of Companies) compliances, and they include the filing of annual returns, maintaining company records, conducting board meetings, and more.

                    <br />
                    <strong><u>There are two main forms to be filed:</u></strong>
                    <br />
                    <AiOutlineRight /><strong>Form AOC-4:</strong> This includes your company’s financials — like the Balance Sheet and Profit & Loss Account.
                    <br />
                    <AiOutlineRight /><strong>Form MGT-7:</strong> This gives an overview of your company’s details — such as directors, shareholders, and registered office.

                </p>
                <hr />
            </>
        );
        mainDesTitle = mainDesTitle = (
            <>
                <h3>What Is Private Limited Comapny Annual Filling?</h3>
                <hr />
                {/* <h6>All You Need To Know</h6> */}
            </>
        )
        moreInfo = moreInfo = (
            <>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-content">
                            <h3 className="card-title">

                                Why Choose NS Legalhelp for ROC Compliance?

                            </h3>

                            <div className="why-grid">
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #4DBCAF, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Expert support.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #4DBCAF, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Timely reminders for due dates.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #4DBCAF, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Complete document handling & filing.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #4DBCAF, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Affordable, transparent pricing.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #4DBCAF, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>End-to-end compliance management.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                {/* bannerImage */}
                <img src={plcAImg2} alt="More Info" className="gst-image" />
                <hr />

                {/* table */}
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-content">
                            <h3 className="card-title">

                                Tax Audit Applicability

                            </h3>
                            <table className="gst-table">
                                <thead>
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th>Compliance</th>
                                        <th>Particulars</th>
                                        {/* <th>Compliance</th> */}
                                        <th>Particulars</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>AGM</td>
                                        <td>Annual General Meeting</td>
                                        {/* <td>30-09-2025</td> */}
                                        <td>None</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>ITR (audit assessee) </td>
                                        <td>Income tax return of Private Limited Companies</td>
                                        {/* <td>30-10-2025</td> */}
                                        <td>Rs. 1000/- or Rs. 5000/- depending on the taxable income and date of late filing</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Form AOC-4</td>
                                        <td>Form for filing financial statement and other documents with the Registrar</td>
                                        {/* <td>within 30 days of AGM</td> */}
                                        <td>Rs. 100/- per day post applicable due date</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Form MGT-7</td>
                                        <td>Form for filing annual return by a company.</td>
                                        {/* <td>within 60 days of AGM</td> */}
                                        <td>Rs. 100/- per day post applicable due date</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>DIR 3 e KYC</td>
                                        <td>Filing of KYC details of individual Directors holding Director Identification Number (DIN)</td>
                                        {/* <td>30-09-2025</td> */}
                                        <td>Rs. 5,000/- per Director post applicable due date</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Form DPT-3</td>
                                        <td>Return of Deposits</td>
                                        {/* <td>30-06-2025</td> */}
                                        <td>Upto 12 times the Normal fees for filing Form, depending upon the delay in filing</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>

                {/* whyimg */}
                <img src={plcAImg5} alt="More Info" className="gst-image" />
                <hr />
                {/* gst steps */}
                <img src={plcAImg4} alt="More Info" className="carousel-image" />

            </>
        );
        submenuClicked = 'Private Limited Comapny Annual Filling';
    } else if (location.pathname === '/opc-annualFilling') {
        welcomeImage = welcomeImage = (
            <>
                {/* <div className="home-carousel-container">
                    <img src={gstWelcomeImg} alt="More Info" className="carousel-image" />
                </div> */}
            </>
        );
        heading = 'OPC Annual Filling';
        description = description = (
            <>
                {/* <p>A GST return is a document that registered taxpayers must file with the GST Department, containing details of their sales, purchases, tax collected, and tax paid.</p> */}

                <div className="home-carousel-container">
                    <picture>
                        {/* Mobile Image */}
                        <source
                            media="(max-width: 768px)"
                            srcSet={opcImg1}
                        />

                        {/* Desktop Image */}
                        <source
                            media="(min-width: 769px)"
                            srcSet={opcR}
                        />

                        <img
                            src={opcR}
                            alt="More Info"
                            className="common-image"
                        />
                    </picture>
                </div>
                <hr />
            </>
        );
        desCloser = desCloser = (
            <>
                <p className="common-info"><b>At NS Legalhelp, we ensure your company stays 100% compliant with the MCA, helping you avoid penalties and build credibility.</b></p>
            </>
        )
        mainDescription = mainDescription = (
            <>
                {/* <h4>What is Private Limited Comapny Annual Filling?</h4> */}
                <p>Every One Person Company (OPC) registered under the Companies Act, 2013 is required to file ROC annual returns and financial statements—even if there is no business activity. An OPC is a type of private limited company owned and managed by a single individual. Despite having only one owner, it must comply with legal requirements under the Companies Act, 2013, including annual filings with the Registrar of Companies (ROC).

                    <br />
                    <strong><u>Every OPC is required to file:</u></strong>
                    <br />
                    <AiOutlineRight />Financial Statements (Form AOC-4)
                    <br />
                    <AiOutlineRight />Annual Return (Form MGT-7A)

                </p>
                <hr />
            </>
        );
        mainDesTitle = mainDesTitle = (
            <>
                <h3 style={{ color: "#cb6d0fff" }}>What is ROC Annual Compliance Filing for OPC??</h3>
                <hr />
                {/* <h6>All You Need To Know</h6> */}
            </>
        )
        moreInfo = moreInfo = (
            <>

                {/* stepImg */}
                <img src={opcImg3} alt="More Info" className="gst-image" />
                <hr />

                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-content">
                            <h3 className="card-title" style={{ color: "#cb6d0fff" }}>

                                Why ROC Compliance is Important

                            </h3>

                            <div className="why-grid">
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #cb6d0fff, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Avoid penalties of ₹100 per day per form.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #cb6d0fff, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Maintain active legal status of your OPC.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #cb6d0fff, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Essential for applying for loans or funding.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #cb6d0fff, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Ensures transparency and trustworthiness.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #ff8000ff, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Required to retain your Director Identification Number (DIN).</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                {/* bannerImage */}
                <img src={opcImg2} alt="More Info" className="gst-image" />
                <hr />

                {/* table */}
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-content">
                            <h3 className="card-title" style={{ color: "#cb6d0fff" }}>

                                ROC Forms Required for OPC Annual Filing

                            </h3>
                            <table className="gst-table">
                                <thead style={{ backgroundColor: "#cb6d0fff" }}>
                                    <tr>
                                        <th>Form Name</th>
                                        <th>Purpose</th>
                                        {/* <th>Particulars</th> */}
                                        {/* <th>Compliance</th> */}
                                        {/* <th>Particulars</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>AOC-4</td>
                                        <td>Filing of financial statements (Balance Sheet, P&L, etc.)</td>
                                        {/* <td>Annual General Meeting</td> */}
                                        {/* <td>30-09-2025</td> */}
                                        {/* <td>None</td> */}
                                    </tr>
                                    <tr>
                                        <td>MGT-7A</td>
                                        <td>Annual return of OPC </td>
                                        {/* <td>Income tax return of Private Limited Companies</td> */}
                                        {/* <td>30-10-2025</td> */}
                                        {/* <td>Rs. 1000/- or Rs. 5000/- depending on the taxable income and date of late filing</td> */}
                                    </tr>
                                    <tr>
                                        <td>DIR-3 KYC</td>
                                        <td>KYC of Directors</td>
                                        {/* <td>Form for filing financial statement and other documents with the Registrar</td> */}
                                        {/* <td>within 30 days of AGM</td> */}
                                        {/* <td>Rs. 100/- per day post applicable due date</td> */}
                                    </tr>
                                    <tr>
                                        <td>DPT-3</td>
                                        <td>Return of deposits (if applicable)</td>
                                        {/* <td>Form for filing annual return by a company.</td> */}
                                        {/* <td>within 60 days of AGM</td> */}
                                        {/* <td>Rs. 100/- per day post applicable due date</td> */}
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>

                {/* whyimg */}
                <img src={opcImg5} alt="More Info" className="gst-image" />
                <hr />
                {/* gst steps */}
                <img src={opcImg4} alt="More Info" className="carousel-image" />

            </>
        );
        submenuClicked = 'OPC Annual Filling';
    } else if (location.pathname === '/llp-annualFilling') {
        welcomeImage = welcomeImage = (
            <>
                {/* <div className="home-carousel-container">
                    <img src={gstWelcomeImg} alt="More Info" className="carousel-image" />
                </div> */}
            </>
        );
        heading = 'LLP Annual Filling';
        description = description = (
            <>
                {/* <p>A GST return is a document that registered taxpayers must file with the GST Department, containing details of their sales, purchases, tax collected, and tax paid.</p> */}
                <div className="home-carousel-container">
                    <img src={llpImg1} alt="More Info" className="carousel-image" />
                </div>
                <hr />
            </>
        );
        desCloser = desCloser = (
            <>
                <p className="common-info"><b>At NS Legalhelp, we offer affordable, accurate, and end-to-end compliance solutions for LLPs of all sizes.</b></p>
            </>
        )
        mainDescription = mainDescription = (
            <>
                {/* <h4>What is Private Limited Comapny Annual Filling?</h4> */}
                <p>All Limited Liability Partnerships (LLPs) registered in India are required to file annual ROC compliances, regardless of turnover or business activity. These filings ensure legal standing and help avoid late fees and legal complications.
                </p>
                <hr />
            </>
        );
        mainDesTitle = mainDesTitle = (
            <>
                <h3 style={{ color: "#6F7AF8" }}>What is LLP Annual Compliance Filing for OPC?</h3>
                <hr />
                {/* <h6>All You Need To Know</h6> */}
            </>
        )
        moreInfo = moreInfo = (
            <>

                {/* stepImg */}
                <img src={llpImg3} alt="More Info" className="gst-image" />
                <hr />

                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-content">
                            <h3 className="card-title" style={{ color: "#6F7AF8" }}>

                                Why is ROC Compliance Important for LLPs

                            </h3>

                            <div className="why-grid">
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #6F7AF8, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Avoid penalties of ₹100 per day per form.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #6F7AF8, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Maintain active legal status of your OPC.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #6F7AF8, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Build trust with clients and banks.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #6F7AF8, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Ensures transparency and trustworthiness.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #6F7AF8, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Avoid strike-off by the Registrar of Companies.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                {/* bannerImage */}
                <img src={llpImg2} alt="More Info" className="gst-image" />
                <hr />

                {/* table */}
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-content">
                            <h3 className="card-title" style={{ color: "#6F7AF8" }}>

                                Mandatory Annual ROC Compliances for LLPs

                            </h3>
                            <table className="gst-table">
                                <thead style={{ backgroundColor: "#6F7AF8" }}>
                                    <tr>

                                        <th>Compliance</th>
                                        <th>Form Name</th>
                                        <th>Purpose</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Statement of Account & Solvency</td>
                                        <td>Form 8</td>
                                        <td>Filing of financial (Data even NIL)</td>
                                    </tr>
                                    <tr>
                                        <td>Annual Return</td>
                                        <td>Form 11</td>
                                        <td>Summary of partner and LLP details</td>
                                    </tr>
                                    <tr>
                                        <td>Income Tax Return</td>
                                        <td>ITR-5</td>
                                        <td>Annual return filing with Income Tax Dept</td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>

                {/* whyimg */}
                <img src={llpImg5} alt="More Info" className="gst-image" />
                <hr />
                {/* gst steps */}
                <img src={llpImg4} alt="More Info" className="carousel-image" />

            </>
        );
        submenuClicked = 'LLP Annual Filling';
    } else if (location.pathname === '/nidhi-annualFilling') {
        welcomeImage = welcomeImage = (
            <>
                {/* <div className="home-carousel-container">
                    <img src={gstWelcomeImg} alt="More Info" className="carousel-image" />
                </div> */}
            </>
        );
        heading = 'Nidhi Company Annual Filling';
        description = description = (
            <>
                <div className="home-carousel-container">
                    <picture>
                        {/* Mobile Image */}
                        <source
                            media="(max-width: 768px)"
                            srcSet={nidImg1}
                        />

                        {/* Desktop Image */}
                        <source
                            media="(min-width: 769px)"
                            srcSet={ndiR}
                        />

                        <img
                            src={ndiR}
                            alt="More Info"
                            className="common-image"
                        />
                    </picture>
                </div>
                <hr />
            </>
        );
        desCloser = desCloser = (
            <>
                <p className="common-info"><b>At NS Legalhelp, we ensure your company stays 100% compliant with the MCA, helping you avoid penalties and build credibility.</b></p>
            </>
        )
        mainDescription = mainDescription = (
            <>
                {/* <h4>What is Private Limited Comapny Annual Filling?</h4> */}
                <p>A Nidhi Company, formed under the Companies Act, 2013, is a type of Non-Banking Financial Company (NBFC) created to promote savings and provide loans exclusively to its members.

                    <br />
                    <strong><u>Key forms to be filed:</u></strong>
                    <br />
                    <AiOutlineRight /><strong>NDH-1</strong> → Return of Statutory Compliance (filed within 90 days of the end of the financial year)
                    <br />
                    <AiOutlineRight /><strong>NDH-3</strong> → Half-yearly return on members and deposits (filed within 30 days of each half-year end)
                    <br />
                    <AiOutlineRight /><strong>AOC-4</strong> → Filing of financial statements (Balance Sheet, P&L, Cash Flow, etc.)
                    <br />
                    <AiOutlineRight /><strong>MGT-7 </strong> → Annual return (Directors, Members, Shareholding, etc.)
                    <br />
                    <AiOutlineRight /><strong>NDH-4</strong> → Application for continuation of business (if applicable)
                    <br />
                    <hr />
                    <strong><u>Advantages of Nidhi Company Annual Compliance:</u></strong>
                    <br />
                    Staying updated with annual compliance increases the credibility and reliability of a Nidhi Company among its members and regulatory bodies. It ensures the company’s continuous legal existence, protects it from penalties and late fees, and helps management avoid legal issues.
                    Consistent filing of annual returns builds trust and assures members that the company operates transparently and responsibly.

                </p>
                <hr />
            </>
        );
        mainDesTitle = mainDesTitle = (
            <>
                <h3 style={{ color: "#536A8C" }}>What is Annual ROC Filing for Nidhi Companies?</h3>
                <hr />
                {/* <h6>All You Need To Know</h6> */}
            </>
        )
        moreInfo = moreInfo = (
            <>

                {/* stepImg */}
                <img src={nidImg3} alt="More Info" className="gst-image" />
                <hr />

                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-content">
                            <h3 className="card-title" style={{ color: "#536A8C" }}>

                                Why Choose NS LegalHelp for Nidhi Compliance?

                            </h3>

                            <div className="why-grid">
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #536A8C, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Dedicated Compliance Manager.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #536A8C, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Timely preparation & filing of NDH, ROC & ITR forms.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #536A8C, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Transparent & affordable pricing.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #536A8C, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Expert reminders for every due date.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #536A8C, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Support for overdue filings & restoring compliance.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                {/* bannerImage */}
                <img src={nidImg2} alt="More Info" className="gst-image" />
                <hr />

                {/* table */}
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-content">
                            <h3 className="card-title" style={{ color: "#536A8C" }}>

                                ROC Forms Required for OPC Annual Filing

                            </h3>
                            <table className="gst-table">
                                <thead style={{ backgroundColor: "#536A8C" }}>
                                    <tr>
                                        <th>Compliance</th>
                                        <th>Form Name</th>
                                        <th>Penalty for Non-Filing</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Statutory Compliance</td>
                                        <td>NDH-1</td>
                                        <td>₹100 per day</td>
                                    </tr>
                                    <tr>
                                        <td>Half-Yearly Return</td>
                                        <td>NDH-3</td>
                                        <td>₹100 per day</td>
                                    </tr>
                                    <tr>
                                        <td>Financial Statements</td>
                                        <td>AOC-4</td>
                                        <td>₹100 per day</td>
                                    </tr>
                                    <tr>
                                        <td>Annual Return</td>
                                        <td>MGT-7</td>
                                        <td>₹100 per day</td>
                                    </tr>
                                    <tr>
                                        <td>Continuation of Business (if applicable)</td>
                                        <td>NDH-4</td>
                                        <td>₹100 per day</td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>

                {/* whyimg */}
                <img src={nidImg5} alt="More Info" className="gst-image" />
                <hr />
                {/* gst steps */}
                <img src={nidImg4} alt="More Info" className="carousel-image" />

            </>
        );
        submenuClicked = 'Nidhi Company Annual Filling';
    } else if (location.pathname === '/section8-annualFilling') {
        welcomeImage = welcomeImage = (
            <>
                {/* <div className="home-carousel-container">
                    <img src={gstWelcomeImg} alt="More Info" className="carousel-image" />
                </div> */}
            </>
        );
        heading = 'NPO/Section-8 Comapny Annual Filling';
        description = description = (
            <>
                <div className="home-carousel-container">
                    <picture>
                        {/* Mobile Image */}
                        <source
                            media="(max-width: 768px)"
                            srcSet={secImg1}
                        />

                        {/* Desktop Image */}
                        <source
                            media="(min-width: 769px)"
                            srcSet={ndcR}
                        />

                        <img
                            src={ndcR}
                            alt="More Info"
                            className="common-image"
                        />
                    </picture>
                </div>
                <hr />
            </>
        );
        desCloser = desCloser = (
            <>
                <p className="common-info"><b>At NS Legalhelp, we ensure your company stays 100% compliant with the MCA, helping you avoid penalties and build credibility.</b></p>
            </>
        )
        mainDescription = mainDescription = (
            <>
                {/* <h4>What is Private Limited Comapny Annual Filling?</h4> */}
                <p>A Section 8 Company (NGO), formed under the Companies Act, 2013, is set up to promote charitable, social, cultural, educational, or welfare activities.
                    <br />
                    Even though Section 8 Companies enjoy tax exemptions, they must comply with ROC annual filings and income tax laws to maintain their legal status and credibility.

                    <br />
                    <strong><u>Key forms to be filed:</u></strong>
                    <br />
                    <AiOutlineRight /><strong>Form AOC-4</strong> → Filing of financial statements (Balance Sheet, Income & Expenditure, Receipts & Payments)
                    <br />
                    <AiOutlineRight /><strong>Form MGT-7 </strong> → Filing of annual return (Directors, Members, Shareholding, etc.)
                    <br />
                    <AiOutlineRight /><strong>Form ADT-1 </strong> → Auditor appointment or re-appointment
                    <br />
                    <AiOutlineRight /><strong>DIR-3 KYC </strong> → Annual KYC of Directors
                    <br />
                    <AiOutlineRight /><strong>Form 10B </strong> →  Audit report (mandatory for NGOs registered under Section 12A)
                    <br />
                    <hr />
                    <strong><u>Advantages of Section 8 Company Annual Compliance:</u></strong>
                    <br />
                    Staying updated with annual compliance enhances the credibility and trustworthiness of a Section 8 Company. It helps the organization raise funds more easily for its causes and ensures its continuous legal existence. Meeting compliance requirements on time protects the company from legal issues, penalties, and other regulatory risks. Moreover, consistent filing of annual returns builds confidence among donors, members, and stakeholders — helping the company fulfill its primary objective of fostering trust.


                </p>
                <hr />
            </>
        );
        mainDesTitle = mainDesTitle = (
            <>
                <h3 style={{ color: "#D8A947" }}>What is Annual ROC Filing for Section 8 Companies?</h3>
                <hr />
                {/* <h6>All You Need To Know</h6> */}
            </>
        )
        moreInfo = moreInfo = (
            <>

                {/* stepImg */}
                <img src={secImg3} alt="More Info" className="gst-image" />
                <hr />

                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-content">
                            <h3 className="card-title" style={{ color: "#D8A947" }}>

                                Why Choose NS LegalHelp for NGO Compliance?

                            </h3>

                            <div className="why-grid">
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #D8A947, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Dedicated Compliance Manager.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #D8A947, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Complete ROC & ITR filings handled for you.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #D8A947, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Professional certification for (AOC-4).</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #D8A947, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Affordable and transparent pricing.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #D8A947, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Reminders for every due date.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #D8A947, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Support for DPT-3, Tax Audit & Director.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                {/* bannerImage */}
                <img src={secImg2} alt="More Info" className="gst-image" />
                <hr />

                {/* table */}
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-content">
                            <h3 className="card-title" style={{ color: "#D8A947" }}>

                                ROC Forms Required for OPC Annual Filing

                            </h3>
                            <table className="gst-table">
                                <thead style={{ backgroundColor: "#D8A947" }}>
                                    <tr>
                                        <th>Compliance</th>
                                        <th>Form Name</th>
                                        <th>Penalty for Non-Filing</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>AGM</td>
                                        <td>Minutes</td>
                                        <td>–</td>
                                    </tr>
                                    <tr>
                                        <td>ITR (Audit Case)</td>
                                        <td>ITR-7</td>
                                        <td>₹1,000 – ₹5,000 depending on delay</td>
                                    </tr>
                                    <tr>
                                        <td>Financial Statements</td>
                                        <td>AOC-4</td>
                                        <td>₹100 per day</td>
                                    </tr>
                                    <tr>
                                        <td>Annual Return</td>
                                        <td>MGT-7</td>
                                        <td>₹100 per day</td>
                                    </tr>
                                    <tr>
                                        <td>Director KYC</td>
                                        <td>DIR-3 KYC</td>
                                        <td>₹5,000 per director</td>
                                    </tr>
                                    <tr>
                                        <td>Return of Deposits</td>
                                        <td>DPT-3</td>
                                        <td>Up to 12x filing fees</td>
                                    </tr>
                                    <tr>
                                        <td>Audit Report</td>
                                        <td>Form 10B</td>
                                        <td>Must be filed before ITR</td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>

                {/* whyimg */}
                <img src={secImg5} alt="More Info" className="gst-image" />
                <hr />
                {/* gst steps */}
                <img src={secImg4} alt="More Info" className="carousel-image" />

            </>
        );
        submenuClicked = 'NPO/Section-8 Comapny Annual Filling';
    } else if (location.pathname === '/iec-reg') {
        welcomeImage = welcomeImage = (
            <>
                {/* <div className="home-carousel-container">
                    <img src={gstWelcomeImg} alt="More Info" className="carousel-image" />
                </div> */}
            </>
        );
        heading = 'IEC Registration';
        description = description = (
            <>
                {/* <p>A GST return is a document that registered taxpayers must file with the GST Department, containing details of their sales, purchases, tax collected, and tax paid.</p> */}
                <div className="home-carousel-container">
                    <picture>
                        {/* Mobile Image */}
                        <source
                            media="(max-width: 768px)"
                            srcSet={iecImg1}
                        />

                        {/* Desktop Image */}
                        <source
                            media="(min-width: 769px)"
                            srcSet={iecR}
                        />

                        <img
                            src={iecR}
                            alt="More Info"
                            className="common-image"
                        />
                    </picture>
                </div>
                <hr />
            </>
        );
        desCloser = desCloser = (
            <>
                <p className="common-info"><b>⚖️ Start your import-export business legally with a valid IEC!</b></p>
            </>
        )
        mainDescription = mainDescription = (
            <>
                <p>The Import Export Code (IEC) is a 10-digit unique identification number allotted to businesses or individuals engaged in international trade. It is issued by the DGFT under the Ministry of Commerce and is required for customs clearance, foreign remittances, and compliance with export-import regulations.
                    <br />
                    IEC is issued once and is valid for a lifetime, with no requirement for annual renewal, making it a simple yet essential compliance for exporters and importers.

                    <br />
                    <strong><u>Key Features of IEC Registration:</u></strong>
                    <br />
                    IEC registration is mandatory for anyone planning to import or export goods or services from India. It is easy to obtain, involves minimal documentation, and remains valid for a lifetime. IEC holders can avail benefits under various export promotion schemes, receive foreign payments, and clear shipments smoothly through customs. It is applicable to individuals, proprietorships, partnerships, LLPs, companies, and NGOs.

                </p>
                <hr />
            </>
        );
        mainDesTitle = mainDesTitle = (
            <>
                <h3 style={{ color: "#C36E4C" }}>What is IEC Registration?</h3>
                <hr />
                {/* <h6>All You Need To Know</h6> */}
            </>
        )
        moreInfo = moreInfo = (
            <>

                <hr />
                <img src={iecImg2} alt="More Info" className="gst-image" />
                <img src={iecImg3} alt="More Info" className="gst-image" />
                <hr />
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-content">
                            <h3 className="card-title" style={{ color: "#C36E4C" }}>

                                Why Choose NS LegalHelp for IEC Registration?

                            </h3>

                            <div className="why-grid">
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #C36E4C, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Quick and hassle-free registration.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #C36E4C, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Affordable pricing with no hidden charges.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #C36E4C, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Expert handling of DGFT process.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #C36E4C, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Dedicated support until approval.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #C36E4C, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Post-registration compliance guidance.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                {/* whyimg */}
                <hr />
                <img src={iecImg6} alt="More Info" className="gst-image" />
                <hr />
                {/* gst steps */}
                <img src={iecImg5} alt="More Info" className="carousel-image" />
                <hr />
                {/* gst steps */}
                <img src={iecImg4} alt="More Info" className="carousel-image" />

            </>
        );
        submenuClicked = 'IEC Registration';
    } else if (location.pathname === '/gst-reg') {
        welcomeImage = welcomeImage = (
            <>
                {/* <div className="home-carousel-container">
                    <img src={gstWelcomeImg} alt="More Info" className="carousel-image" />
                </div> */}
            </>
        );
        heading = 'GST Registation';
        description = description = (
            <>
                {/* <p>A GST return is a document that registered taxpayers must file with the GST Department, containing details of their sales, purchases, tax collected, and tax paid.</p> */}
                <div className="home-carousel-container">
                    <picture>
                        {/* Mobile Image */}
                        <source
                            media="(max-width: 768px)"
                            srcSet={gstRegImg1}
                        />

                        {/* Desktop Image */}
                        <source
                            media="(min-width: 769px)"
                            srcSet={gstR}
                        />

                        <img
                            src={gstR}
                            alt="More Info"
                            className="common-image"
                        />
                    </picture>
                </div>
                <hr />
            </>
        );
        desCloser = desCloser = (
            <>
                <p className="common-info"><b>⚖️ Get your business GST-compliant quickly and hassle-free!</b></p>
            </>
        )
        mainDescription = mainDescription = (
            <>
                <p>GST Registration is the process through which a business is registered under the Goods and Services Tax Act, 2017. Once registered, the business becomes a taxable entity authorized to collect GST from customers and claim Input Tax Credit (ITC) on purchases. GST applies to manufacturers, traders, service providers, freelancers, and online sellers operating in India.
                    <br />
                    <br />
                    <strong><u>Key Features of GST Registration:</u></strong>
                    <br />
                    GST registration provides a single, unified tax system across India, replacing multiple indirect taxes. It enables businesses to legally collect tax, claim input tax credit, expand operations across states, and build trust with customers, vendors, and government authorities. GST registration also supports seamless participation in e-commerce and government tenders.

                </p>
                <hr />
            </>
        );
        mainDesTitle = mainDesTitle = (
            <>
                <h3 style={{ color: "#28604D" }}>What is GST Registration??</h3>
                <hr />
                {/* <h6>All You Need To Know</h6> */}
            </>
        )
        moreInfo = moreInfo = (
            <>

                <hr />
                <img src={gstRegImg2} alt="More Info" className="gst-image" />
                <img src={gstRegImg3} alt="More Info" className="gst-image" />
                <hr />
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-content">
                            <h3 className="card-title" style={{ color: "#28604D" }}>

                                Who is Required to Obtain GST Registration?

                            </h3>

                            <div className="why-grid">
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #28604D, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Businesses with turnover exceeding ₹20 lakhs (₹10 lakhs for special category states).</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #28604D, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Businesses involved in inter-state supply of goods or services.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #28604D, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>E-commerce sellers and operators.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #28604D, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Casual taxable persons and non-resident taxable persons.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #28604D, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Businesses required to deduct or collect tax under GST.</p>
                                </div>
                                <div className="why-card" style={{ background: 'linear-gradient(135deg, #28604D, #ffffff)', textAlign: 'center' }}>
                                    <p style={{ color: 'black', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Voluntary applicants seeking tax compliance and credibility.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                {/* whyimg */}
                <hr />
                <img src={gstRegImg4} alt="More Info" className="gst-image" />
                <hr />
                {/* gst steps */}
                <img src={gstRegImg5} alt="More Info" className="carousel-image" />

            </>
        );
        submenuClicked = 'GST Registation';
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_pttzz1f', 'template_5lyufwh', e.target, '1bIgXVe5hH5o9wLga')
            .then(() => {
                alert("✅ Email sent successfully!");
                // setShowSuccessMessage(true);
                // setShowErrorMessage(false);
                // e.target.reset();
            }, () => {
                alert("❌ Failed to send email. Try again.", "error");
                // setErrorMessage('Failed to send email, please try again.');
                // setShowErrorMessage(true);
                // setShowSuccessMessage(false);
            });
    };

    const isCityBased = cityBasedMenus.includes(submenuClicked);

    useEffect(() => {
        if (
            isCityBased &&
            prices?.[submenuClicked] &&
            Object.keys(prices[submenuClicked]).length > 0
        ) {
            const firstCity = Object.keys(prices[submenuClicked])[0];
            setSelectedState(firstCity);
        }
    }, [submenuClicked, prices]);

    console.log("Full Prices Object:", prices);

    console.log("Service:", submenuClicked);
    console.log("Selected State:", selectedState);
    console.log("Service Data:", prices?.[submenuClicked]);
    console.log("State Data:", prices?.[submenuClicked]?.[selectedState]);


    return (
        <>
            <div >
                <div className="overlay-wrapper">
                    {/* IMAGE */}
                    <p className="overlay-image">{description}</p>
                    {/* OVERLAY FORM */}
                    <div className="overlay-form">
                        <div className="overlay-header">
                            <h3>Register today</h3>
                            <span>4.8★ Rated | Experts Assisted</span>
                        </div>

                        <form onSubmit={handleSubmit} >
                            <input type="text" name="name" placeholder="Your name" className="common-input" required />
                            <input type="tel" name="phone" placeholder="Phone number" className="common-input" required />
                            <input type="email" name="email" placeholder="Email address" className="common-input" required />
                            <input type="hidden" name="submenu" value={submenuClicked} />
                            <button type="submit" className="common-button">Submit</button>
                        </form>
                    </div>
                    <p className="common-info">{desCloser}</p>
                </div>

                <div className="card-wrapper">
                    <div>
                        <div >
                            <h3 >{mainDesTitle}</h3>
                            <p >{mainDescription}</p>
                        </div>
                    </div>
                </div>

                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#1F514C]/40 to-transparent"></div>
                {/* Price Plan Section */}
                <section className="relative bg-white py-[1rem] md:py-[1rem] px-4 md:px-12 overflow-hidden">

                    {/* Background Glow Layers */}
                    <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-white blur-[140px] rounded-full opacity-40"></div>
                    <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-[#1F514C]/10 blur-[140px] rounded-full opacity-40"></div>

                    <div className="max-w-4xl mx-auto">

                        {/* Heading */}
                        <div className="text-center mb-5">
                            <p className="text-[#177B74] mb-3">• Pricing</p>

                            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                                {prices[submenuClicked]?.[selectedState]
                                    ? "Choose Your Pricing"
                                    : "Pricing Plans"}
                            </h2>

                            <p className="text-gray-500 mt-4">
                                Simple, transparent pricing with no hidden costs
                            </p>
                        </div>

                        {/* Dropdown */}
                        {isCityBased && (
                            <div className="flex justify-center mb-12">
                                <select
                                    className="px-5 py-3 rounded-l border border-gray-200 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#1F514C]/40 hover:shadow-lg transition"
                                    value={selectedState}
                                    onChange={(e) => setSelectedState(e.target.value)}
                                >
                                    {Object.keys(prices?.[submenuClicked] || {}).map((city) => (
                                        <option key={city} value={city}>
                                            {city}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {/* Cards */}
                        <div className="grid gap-4 md:grid-cols-2 items-stretch">

                            {/* Essential Plan */}
                            <div className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-gray-200 to-transparent hover:from-[#1F514C]/30 transition">

                                <div className="h-full bg-white/80 backdrop-blur-l rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300">

                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                                            Essential Plan
                                        </span>
                                    </h3>

                                    <p className="text-4xl font-bold text-gray-900 mb-2">
                                        ₹
                                        {isCityBased
                                            ? prices?.[submenuClicked]?.[selectedState]?.essential
                                            : prices?.[submenuClicked]?.essential}
                                    </p>

                                    <p className="text-gray-500 mb-6">All Inclusive</p>

                                    <ul className="space-y-3 text-gray-600">
                                        {planInclusions[submenuClicked]?.essential?.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span className="text-[#1F514C] mt-1">✔</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* subtle bottom glow */}
                                    <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#1F514C]/20 transition"></div>
                                </div>
                            </div>

                            {/* Enhanced Plan (Highlighted) */}
                            <div className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-[#1F514C]/40 to-transparent scale-[1.02]">

                                {/* Glow Behind */}
                                <div className="absolute inset-0 bg-[#1F514C]/10 blur-2xl rounded-3xl"></div>

                                <div className="relative h-full bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                                    {/* Badge */}
                                    <span className="absolute -top-4 right-6 bg-[#1F514C] text-white text-xs px-4 py-1 rounded-full shadow-lg">
                                        Best Value
                                    </span>

                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                        <span className="px-3 py-1 bg-[#1F514C]/10 text-[#1F514C] rounded-full text-sm">
                                            Enhanced Plan
                                        </span>
                                    </h3>

                                    <p className="text-5xl font-bold text-gray-900 mb-2">
                                        ₹
                                        {isCityBased
                                            ? prices?.[submenuClicked]?.[selectedState]?.enhanced
                                            : prices?.[submenuClicked]?.enhanced}
                                    </p>

                                    <p className="text-gray-500 mb-6">All Inclusive</p>

                                    <ul className="space-y-3 text-gray-700">
                                        {planInclusions[submenuClicked]?.enhanced?.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span className="text-[#1F514C] mt-1">✔</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* glow border */}
                                    <div className="absolute inset-0 rounded-3xl border border-[#1F514C]/20"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

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

            </div>
            {/* <hr /> */}
            <h1>{moreInfo}</h1>
            <div className="home-carousel-container">
                {welcomeImage}
            </div>
            <FAQSection submenuClicked={submenuClicked} />

        </>
    );
};

export default Common;
