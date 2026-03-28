import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo1.png";


const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false); // 👈 added

    const menuItems = [
        {
            title: 'Start Your Own Business',
            submenu: {
                columns: [
                    {
                        heading: 'For Indian Entrepreneur',
                        items: [
                            { title: 'Private Limited Company', link: '/private-limited-company' },
                            { title: 'Limited Liabilty Partnership', link: '/limited-liabilty-partnership' },
                            { title: 'Sole Proprietorship', link: '/solePropritorship' },
                            { title: 'Hindu Undivided Family,HUF Deed', link: '/HufDeed' },
                            // { title: 'Public Limited Comapny', link: '/services/web' },
                            { title: 'One Person Company (OPC)', link: '/onePersonCompany' },
                            { title: 'Partnership', link: '/partnership' },
                            { title: 'E-Commerce Business', link: '/ecomBusiness' },
                            { title: 'Company Registration In USA', link: '/services/app' },
                        ]
                    },
                    {
                        heading: 'Special Entities',
                        items: [
                            { title: 'Non Profit Organization', link: '/nonProfitOrg' },
                            { title: 'Nidhi Company', link: '/services/app' },
                            // { title: 'Producer Comapany', link: '/services/web' },
                        ]
                    },
                    // {
                    //     heading: 'For Foreign Entrepreneur',
                    //     items: [
                    //         { title: 'Indian Subsidiary', link: '/services/web' },
                    //         { title: 'Company Registration By Foreigner', link: '/services/app' },
                    //     ]
                    // },
                ]
            }
        },
        {
            title: 'Returns',
            submenu: {
                columns: [
                    {
                        heading: 'Returns',
                        items: [
                            { title: 'GST Return', link: '/gst-return' },
                            // { title: 'TDS Return', link: '/tds-return' },
                            // { title: 'PF Return ', link: '/pf-return' },
                            { title: 'Income Tex Return', link: '/itr-return' },
                            // { title: 'TDS Return Revision ', link: '/services/web' },
                            // { title: 'ESI Return', link: '/services/app' },

                        ]
                    },
                    {
                        heading: 'Annual Filing',
                        items: [
                            { title: 'Private Limited Comapny Annual Filling', link: '/plc-annualFilling' },
                            { title: 'LLP Annual Filling', link: '/llp-annualFilling' },
                            // { title: 'Public Limited Comapny Annual Filling', link: '/services/web' },
                            { title: 'OPC Annual Filling', link: '/opc-annualFilling' },

                            { title: 'NPO/Section-8 Comapny Annual Filling', link: '/section8-annualFilling' },
                            { title: 'Nidhi Company Annual Filling', link: '/nidhi-annualFilling' },
                            // { title: 'Producer Comapny Annual Filling', link: '/services/web' },
                            // { title: 'Trust Annual Filling', link: '/services/web' },
                        ]
                    }
                ]
            }
        },
        {
            title: 'Website',
            submenu: {
                columns: [
                    {
                        heading: '',
                        items: [
                            { title: 'Website Info', link: '/website' },
                        ]
                    }
                    // {
                    //     heading: 'Other Registration',
                    //     items: [
                    //         { title: 'IEC Registration', link: '/services/web' },
                    //         { title: 'IEC Modification', link: '/services/app' },
                    //         { title: 'ESIC Registration', link: '/services/web' },
                    //         {title:  'Degital Signature', link: '/services/web' },
                    //         { title: 'DIN Application', link: '/services/app' },
                    //         { title: 'EPF Registration', link: '/services/web' },
                    //         { title: 'SSI/MIME Udyog Aadhar Registration', link: '/services/web' },
                    //     ]
                    // }
                ]
            }
        },
        {
            title: 'Registration',
            submenu: {
                columns: [
                    //  {
                    //      heading : 'This  Service Available Soon..',
                    //      items: [
                    //         { title: '', link: '/gst-reg' },
                    //         { title: '', link: '/services/app' },
                    //     ]   
                    // }
                    {
                        heading: 'Tax Registration',
                        items: [
                            { title: 'GST Registation', link: '/gst-reg' },
                            // { title: 'GST Modification', link: '/services/app' },
                        ]
                    },
                    // {
                    //     items: [
                    //         { title: 'PAN Application', link: '/services/web' },
                    //         { title: 'TAN Application', link: '/services/app' },
                    //     ]
                    // },
                    {
                        heading: 'Other Registration',
                        items: [
                            { title: 'IEC Registration', link: '/iec-reg' },
                            // { title: 'IEC Modification', link: '/services/app' },
                            // { title: 'ESIC Registration', link: '/services/web' },
                            // {title:  'Degital Signature', link: '/services/web' },
                            // { title: 'DIN Application', link: '/services/app' },
                            // { title: 'EPF Registration', link: '/services/web' },
                            // { title: 'SSI/MIME Udyog Aadhar Registration', link: '/services/web' },
                        ]
                    }
                ]
            }
        },

        {
            title: 'Compliances',
            submenu: {
                columns: [
                    {
                        heading: 'This  Service Available Soon..',
                        items: [
                            { title: '', link: '/gst-reg' },
                            { title: '', link: '/services/app' },
                        ]
                    }
                    // {
                    //     heading: 'For Indian Entrepreneur',
                    //     items: [
                    //         { title: 'Private Limited Company', link: '/services/web' },
                    //         { title: 'Limited Liabilty Partnership', link: '/services/app' },
                    //         { title: 'Sole Proprietorship', link: '/services/web' },
                    //         { title: 'Hindu Undivided Family(HUF),HUF Deed', link: '/services/app' },
                    //     ]
                    // },
                    // {
                    //     items: [
                    //         { title: 'Public Limited Comapny', link: '/services/web' },
                    //         { title: 'One Person Company (OPC)', link: '/services/app' },
                    //         { title: 'Partnership', link: '/services/web' },
                    //         { title: 'E-Commerce Business', link: '/services/app' },
                    //     ]
                    // },
                    // {
                    //     heading: 'Special Entities',
                    //     items: [
                    //         { title: 'Non Profit Organization', link: '/services/web' },
                    //         { title: 'Nidhi Company', link: '/services/app' },
                    //         { title: 'Producer Comapany', link: '/services/web' },
                    //     ]
                    // }
                ]
            }
        },
        // {
        // title: 'Trademark & other IPRs',
        // submenu: {
        //     columns: [
        //         {
        //             heading: 'This  Service Available Soon..',
        //             items: [
        //                 { title: '', link: '/gst-reg' },
        //             ]
        //         }
        // {
        //     heading: 'For Indian Entrepreneur',
        //     items: [
        //         { title: 'Private Limited Company', link: '/services/web' },
        //         { title: 'Limited Liabilty Partnership', link: '/services/app' },
        //         { title: 'Sole Proprietorship', link: '/services/web' },
        //         { title: 'Hindu Undivided Family(HUF),HUF Deed', link: '/services/app' },
        //     ]
        // },
        // {
        //     items: [
        //         { title: 'Public Limited Comapny', link: '/services/web' },
        //         { title: 'One Person Company (OPC)', link: '/services/app' },
        //         { title: 'Partnership', link: '/services/web' },
        //         { title: 'E-Commerce Business', link: '/services/app' },
        //     ]
        // },
        // {
        //     heading: 'Special Entities',
        //     items: [
        //         { title: 'Non Profit Organization', link: '/services/web' },
        //         { title: 'Nidhi Company', link: '/services/app' },
        //         { title: 'Producer Comapany', link: '/services/web' },
        //     ]
        // }
        //         ]
        //     }
        // },
        // {
        //     title: 'Accounting',
        //     submenu: {
        //         columns: [
        //             {
        //                 heading: 'For Indian Entrepreneur',
        //                 items: [
        //                     { title: 'Private Limited Company', link: '/services/web' },
        //                     { title: 'Limited Liabilty Partnership', link: '/services/app' },
        //                     { title: 'Sole Proprietorship', link: '/services/web' },
        //                     { title: 'Hindu Undivided Family(HUF),HUF Deed', link: '/services/app' },
        //                 ]
        //             },
        //             {
        //                 items: [
        //                     { title: 'Public Limited Comapny', link: '/services/web' },
        //                     { title: 'One Person Company (OPC)', link: '/services/app' },
        //                     { title: 'Partnership', link: '/services/web' },
        //                     { title: 'E-Commerce Business', link: '/services/app' },
        //                 ]
        //             },
        //             {
        //                 heading: 'Special Entities',
        //                 items: [
        //                     { title: 'Non Profit Organization', link: '/services/web' },
        //                     { title: 'Nidhi Company', link: '/services/app' },
        //                     { title: 'Producer Comapany', link: '/services/web' },
        //                 ]
        //             }
        //         ]
        //     }
        // },
        // {
        //     title: 'Blogs',
        //     submenu: {
        //         columns: [
        //             {
        //                 heading: 'For Indian Entrepreneur',
        //                 items: [
        //                     { title: 'Private Limited Company', link: '/services/web' },
        //                     { title: 'Limited Liabilty Partnership', link: '/services/app' },
        //                     { title: 'Sole Proprietorship', link: '/services/web' },
        //                     { title: 'Hindu Undivided Family(HUF),HUF Deed', link: '/services/app' },
        //                 ]
        //             },
        //             {
        //                 items: [
        //                     { title: 'Public Limited Comapny', link: '/services/web' },
        //                     { title: 'One Person Company (OPC)', link: '/services/app' },
        //                     { title: 'Partnership', link: '/services/web' },
        //                     { title: 'E-Commerce Business', link: '/services/app' },
        //                 ]
        //             },
        //             {
        //                 heading: 'Special Entities',
        //                 items: [
        //                     { title: 'Non Profit Organization', link: '/services/web' },
        //                     { title: 'Nidhi Company', link: '/services/app' },
        //                     { title: 'Producer Comapany', link: '/services/web' },
        //                 ]
        //             }
        //         ]
        //     }
        // },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-8">

                {/* NAVBAR ROW */}
                <div className="flex items-center justify-between h-16">

                    {/* LOGO */}
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-[11.5rem] w-[10.5rem]"
                        />
                    </Link>

                    {/* CENTER MENU (DESKTOP ONLY) */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 space-x-12">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative group"
                                onMouseEnter={() => setActiveMenu(index)}
                                onMouseLeave={() => setActiveMenu(null)}
                            >
                                {item.link ? (
                                    <Link
                                        to={item.link}
                                        className="text-sm font-medium text-gray-700 hover:text-[#1F514C] transition whitespace-nowrap"
                                    >
                                        {item.title}
                                    </Link>
                                ) : (
                                    <span className="text-sm font-medium text-gray-700 hover:text-[#1F514C] transition whitespace-nowrap">
                                        {item.title}
                                    </span>
                                )}

                                {/* DROPDOWN */}
                                {item.submenu && activeMenu === index && (
                                    <div className="absolute left-1/2 -translate-x-1/2 top-full bg-white shadow-2xl rounded-2xl p-8 min-w-[600px] border">

                                        <div className="grid grid-cols-2 gap-12">
                                            {item.submenu.columns.map((column, colIndex) => (
                                                <div key={colIndex}>

                                                    {column.heading && (
                                                        <h4 className="text-xm font-semibold uppercase tracking-wide text-[#167B74] hover:text-[#167B74] transition">
                                                            {column.heading}
                                                        </h4>
                                                    )}

                                                    <ul className="space-y-3">
                                                        {column.items.map((subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <Link
                                                                    to={subItem.link}
                                                                    className="text-gray-600 hover:text-[#167B74] transition text-sm"
                                                                >
                                                                    {subItem.title}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* RIGHT SIDE CTA (DESKTOP ONLY) */}
                    <div className="hidden lg:flex items-center gap-6">
                        <span className="text-sm text-gray-600">
                            📞 +91-9193006617
                        </span>

                        <Link
                           to="/contact#contactUs"
                            className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* MOBILE MENU ICON */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden text-2xl"
                    >
                        ☰
                    </button>
                </div>

                {/* MOBILE MENU */}
                {mobileOpen && (
                    <div className="lg:hidden bg-white border-t shadow-md">
                        <div className="px-6 py-6 space-y-6">

                            {menuItems.map((item, index) => (
                                <div key={index}>

                                    <div
                                        onClick={() =>
                                            setActiveMenu(activeMenu === index ? null : index)
                                        }
                                        className="flex justify-between items-center font-medium text-[#167B74]-800 cursor-pointer"
                                    >
                                        <h4 className="text-xm font-semibold uppercase tracking-wide text-[#167B74] hover:text-[#167B74] transition">
                                            {item.title}
                                            {item.submenu && <span>▾</span>}
                                        </h4>

                                    </div>

                                    {/* MOBILE SUBMENU FIXED */}
                                    {item.submenu && activeMenu === index && (
                                        <div className="mt-3 space-y-4 pl-4">

                                            {item.submenu.columns.map((column, colIndex) => (
                                                <div key={colIndex}>

                                                    {column.heading && (
                                                        <h4 className="text-xm font-semibold uppercase tracking-wide text-[#167B74] hover:text-[#167B74] transition">
                                                            {column.heading}
                                                        </h4>
                                                    )}

                                                    <ul className="space-y-2">
                                                        {column.items.map((subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <Link
                                                                    to={subItem.link}
                                                                    onClick={() => setMobileOpen(false)}
                                                                    className="block text-sm text-gray-600"
                                                                >
                                                                    {subItem.title}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                </div>
                                            ))}

                                        </div>
                                    )}

                                </div>
                            ))}

                            <div className="pt-4 border-t text-sm text-gray-600">
                                📞 +91-9193006617
                            </div>

                        </div>
                    </div>
                )}

            </div>
        </nav>
    );
};

export default Navbar;