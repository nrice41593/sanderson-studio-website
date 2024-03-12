import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/SandersonStudioLogo.png';

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Vision',
        path: '/vision'
    },
    {
        title: 'In The Studio',
        path: '/inthestudio'
    },
    {
        title: 'Commission',
        path: '/commission'
    },
];

export default function Navigation() {
    const [showPopup, setShowPopup] = useState(false);

    const handlePopupToggle = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div>
            <nav className="site-nav">
                <span className="menu-title"><img src={logo} alt="Logo"/></span>
                <div className="menu-content-container">
                    <ul className="dropdown">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav> 
        </div>
    );
}
