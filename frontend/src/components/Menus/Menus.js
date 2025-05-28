import React, { useState } from 'react'
import "./Menus.css";
import { Link } from 'react-scroll';
import { MdHome } from "react-icons/md"
import { IoMdPhotos } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import image from "../../assets/images/Shree daulat.png"

const Menus = ({ toggle }) => {
    const [activeLink, setActiveLink] = useState('home');

    // Navigation items data
    const navItems = [
        {
            id: 'home',
            icon: <MdHome />,
            label: 'Home',
            target: 'home'
        },
        {
            id: 'about',
            icon: <IoIosInformationCircleOutline />,
            label: 'About Us',
            target: 'about'
        },
        {
            id: 'gallery',
            icon: <IoMdPhotos />,
            label: 'Gallery',
            target: 'gallery'
        },
        {
            id: 'work',
            icon: <MdWork />,
            label: 'Past Work',
            target: 'experiencepast'
        },
        {
            id: 'contact',
            icon: <IoMdContact />,
            label: 'Contact',
            target: 'contact'
        }
    ];

    const handleLinkClick = (linkId) => {
        setActiveLink(linkId);
    };

    return (
        <div className={`nav-container ${toggle ? 'expanded' : 'contracted'}`}>
            {toggle && (
                <div className="navbar-profile-pic">
                    <img 
                        src={image} 
                        alt="Profile Pic" 
                        style={{ width: "150px", height: "auto" }}
                    />
                </div>
            )}
            
            <div className='nav-items'>
                {navItems.map((item) => (
                    <div key={item.id} className='nav-item'>
                        <div 
                            className={`nav-link ${activeLink === item.id ? 'active' : ''}`}
                            data-tooltip={item.label}
                            onClick={() => handleLinkClick(item.id)}
                        >
                            <Link 
                                to={item.target} 
                                spy={true} 
                                smooth={true} 
                                offset={-100} 
                                duration={500}
                                onSetActive={() => setActiveLink(item.id)}
                            >
                                {item.icon}
                                {toggle && <span>{item.label}</span>}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menus;
