import React, { useState } from 'react';
import '../Navbar/navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo1.png';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuItems = [
        {
            title: 'Build Your Own Business',
            submenu: {
                columns: [
                    {
                        heading: 'For Indian Entrepreneur',
                        items: [
                            { title: 'Private Limited Company', link: '/private-limited-company' },
                            { title: 'Limited Liabilty Partnership', link: '/limited-liabilty-partnership' },
                            { title: 'Sole Proprietorship', link: '/services/web' },
                            { title: 'Hindu Undivided Family,HUF Deed', link: '/services/app' },
                            { title: 'Public Limited Comapny', link: '/services/web' },
                            { title: 'One Person Company (OPC)', link: '/services/app' },
                            { title: 'Partnership', link: '/services/web' },
                            { title: 'E-Commerce Business', link: '/services/app' },
                            { title: 'Company Registration In USA', link: '/services/app' },
                        ]
                    },
                    {
                        heading: 'Special Entities',
                        items: [
                            { title: 'Non Profit Organization', link: '/services/web' },
                            { title: 'Nidhi Company', link: '/services/app' },
                            { title: 'Producer Comapany', link: '/services/web' },
                        ]
                    },
                    {
                        heading: 'For Foreign Entrepreneur',
                        items: [
                            { title: 'Indian Subsidiary', link: '/services/web' },
                            { title: 'Company Registration By Foreigner', link: '/services/app' },
                        ]
                    },
                ]
            }
        },
        {
            title: 'Registration',
            submenu: {
                columns: [
                    {
                        heading: 'For Indian Entrepreneur',
                        items: [
                            { title: 'Private Limited Company', link: '/services/web' },
                            { title: 'Limited Liabilty Partnership', link: '/services/app' },
                            { title: 'Sole Proprietorship', link: '/services/web' },
                            { title: 'Hindu Undivided Family(HUF),HUF Deed', link: '/services/app' },
                        ]
                    },
                    {
                        items: [
                            { title: 'Public Limited Comapny', link: '/services/web' },
                            { title: 'One Person Company (OPC)', link: '/services/app' },
                            { title: 'Partnership', link: '/services/web' },
                            { title: 'E-Commerce Business', link: '/services/app' },
                        ]
                    },
                    {
                        heading: 'Special Entities',
                        items: [
                            { title: 'Non Profit Organization', link: '/services/web' },
                            { title: 'Nidhi Company', link: '/services/app' },
                            { title: 'Producer Comapany', link: '/services/web' },
                        ]
                    }
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
                            { title: 'TDS Return', link: '/tds-return' },
                            { title: 'PF Return ', link: '/pf-return' },
                           
                        ]
                    },
                    {
                        items: [
                            { title: 'Income Tex Return', link: '/services/app' },
                            { title: 'TDS Return Revision ', link: '/services/web' },
                            { title: 'ESI Return', link: '/services/app' },
                        ]
                    },
                    {
                        heading: 'Annual Filing',
                        items: [
                            { title: 'Private Limited Comapny Annual Filling', link: '/services/web' },
                            { title: 'LLP Annual Filling', link: '/services/app' },
                            { title: 'Public Limited Comapny Annual Filling', link: '/services/web' },
                            { title: 'OPC Annual Filling', link: '/services/web' },

                            { title: 'NPO/Section-8 Comapny Annual Filling', link: '/services/web' },
                            { title: 'Nidhi Company Annual Filling', link: '/services/app' },
                            { title: 'Producer Comapny Annual Filling', link: '/services/web' },
                            { title: 'Trust Annual Filling', link: '/services/web' },
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
                        heading: 'For Indian Entrepreneur',
                        items: [
                            { title: 'Private Limited Company', link: '/services/web' },
                            { title: 'Limited Liabilty Partnership', link: '/services/app' },
                            { title: 'Sole Proprietorship', link: '/services/web' },
                            { title: 'Hindu Undivided Family(HUF),HUF Deed', link: '/services/app' },
                        ]
                    },
                    {
                        items: [
                            { title: 'Public Limited Comapny', link: '/services/web' },
                            { title: 'One Person Company (OPC)', link: '/services/app' },
                            { title: 'Partnership', link: '/services/web' },
                            { title: 'E-Commerce Business', link: '/services/app' },
                        ]
                    },
                    {
                        heading: 'Special Entities',
                        items: [
                            { title: 'Non Profit Organization', link: '/services/web' },
                            { title: 'Nidhi Company', link: '/services/app' },
                            { title: 'Producer Comapany', link: '/services/web' },
                        ]
                    }
                ]
            }
        },
        {
            title: 'Trademark & other IPRs',
            submenu: {
                columns: [
                    {
                        heading: 'For Indian Entrepreneur',
                        items: [
                            { title: 'Private Limited Company', link: '/services/web' },
                            { title: 'Limited Liabilty Partnership', link: '/services/app' },
                            { title: 'Sole Proprietorship', link: '/services/web' },
                            { title: 'Hindu Undivided Family(HUF),HUF Deed', link: '/services/app' },
                        ]
                    },
                    {
                        items: [
                            { title: 'Public Limited Comapny', link: '/services/web' },
                            { title: 'One Person Company (OPC)', link: '/services/app' },
                            { title: 'Partnership', link: '/services/web' },
                            { title: 'E-Commerce Business', link: '/services/app' },
                        ]
                    },
                    {
                        heading: 'Special Entities',
                        items: [
                            { title: 'Non Profit Organization', link: '/services/web' },
                            { title: 'Nidhi Company', link: '/services/app' },
                            { title: 'Producer Comapany', link: '/services/web' },
                        ]
                    }
                ]
            }
        },
        {
            title: 'Accounting',
            submenu: {
                columns: [
                    {
                        heading: 'For Indian Entrepreneur',
                        items: [
                            { title: 'Private Limited Company', link: '/services/web' },
                            { title: 'Limited Liabilty Partnership', link: '/services/app' },
                            { title: 'Sole Proprietorship', link: '/services/web' },
                            { title: 'Hindu Undivided Family(HUF),HUF Deed', link: '/services/app' },
                        ]
                    },
                    {
                        items: [
                            { title: 'Public Limited Comapny', link: '/services/web' },
                            { title: 'One Person Company (OPC)', link: '/services/app' },
                            { title: 'Partnership', link: '/services/web' },
                            { title: 'E-Commerce Business', link: '/services/app' },
                        ]
                    },
                    {
                        heading: 'Special Entities',
                        items: [
                            { title: 'Non Profit Organization', link: '/services/web' },
                            { title: 'Nidhi Company', link: '/services/app' },
                            { title: 'Producer Comapany', link: '/services/web' },
                        ]
                    }
                ]
            }
        },
        {
            title: 'Blogs',
            submenu: {
                columns: [
                    {
                        heading: 'For Indian Entrepreneur',
                        items: [
                            { title: 'Private Limited Company', link: '/services/web' },
                            { title: 'Limited Liabilty Partnership', link: '/services/app' },
                            { title: 'Sole Proprietorship', link: '/services/web' },
                            { title: 'Hindu Undivided Family(HUF),HUF Deed', link: '/services/app' },
                        ]
                    },
                    {
                        items: [
                            { title: 'Public Limited Comapny', link: '/services/web' },
                            { title: 'One Person Company (OPC)', link: '/services/app' },
                            { title: 'Partnership', link: '/services/web' },
                            { title: 'E-Commerce Business', link: '/services/app' },
                        ]
                    },
                    {
                        heading: 'Special Entities',
                        items: [
                            { title: 'Non Profit Organization', link: '/services/web' },
                            { title: 'Nidhi Company', link: '/services/app' },
                            { title: 'Producer Comapany', link: '/services/web' },
                        ]
                    }
                ]
            }
        },
    ];

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggleSubmenu = (index) => {
        setActiveMenu(activeMenu === index ? null : index);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="p-4 shadow-md">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="NS LegalHelp"
                            style={{ height: '170px', width: 'auto' ,margin:'-56px'}} // adjust as needed
                        />
                    </Link>
                </div>

                <button className="menu-toggle" onClick={toggleMobileMenu}> 
                    ☰
                </button>
                <div className="navbar-menu-section">
                <ul className={`menu ${mobileMenuOpen ? 'open' : ''}`}>
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={`menu-item ${item.submenu ? 'has-submenu' : ''}`}
                            onMouseEnter={() => !mobileMenuOpen && setActiveMenu(index)}
                            onMouseLeave={() => !mobileMenuOpen && setActiveMenu(null)}
                            onClick={() => mobileMenuOpen && toggleSubmenu(index)}
                        >
                            <a href={item.link || '#'}>{item.title}</a>

                            {item.submenu && activeMenu === index && (
                                item.submenu.columns ? (
                                    <div className="mega-submenu">
                                        <div className="submenu-heading">{item.submenu.heading}</div>
                                        <div className="submenu-columns">
                                            {item.submenu.columns.map((column, colIndex) => (
                                                <ul key={colIndex} className="submenu-column">
                                                    <li className="submenu-column-heading">{column.heading}</li>
                                                    {column.items.map((subItem, subIndex) => (
                                                        <li key={subIndex} className="submenu-item">
                                                            <a href={subItem.link}>{subItem.title}</a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <ul className="submenu">
                                        {item.submenu.map((subItem, subIndex) => (
                                            <li key={subIndex} className="submenu-item">
                                                <a href={subItem.link}>{subItem.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                )
                            )}
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
