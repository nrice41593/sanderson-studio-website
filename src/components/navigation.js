import React from "react";
import {Link} from "react-router-dom";

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
]

export default function Navigation ()  {
    return (
        <nav className="site-nav">
            <span className="menu-title">Sanderson Studio</span>
            <div className="menu-content-container">
                <ul className="dropdown">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}