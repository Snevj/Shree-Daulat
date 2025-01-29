import React, { useState } from 'react';
import './MobileNav.css';
import { FiMenu } from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from 'react-scroll';
import { MdHome } from "react-icons/md"
import { IoMdPhotos } from "react-icons/io";//all next 4 imports are of icons from react icons
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

const MobileNav = () => {
    const [open, setOpen] = useState(false)

    //handle open
    const handleOpen = () => {
        setOpen(!open);
    };
    //handle menu clicks 
    const handleMenuClicks = () => {
        setOpen(false);
    }
    return (
        <>
            <div className='mobile-nav'>
                <div className='mobile-nav-header'>
                    {open ? (<CiMenuBurger size={30} className='mobile-nav-icon' onClick={handleOpen} />)
                        : (<FiMenu size={30} className='mobile-nav-icon' onClick={handleOpen} />)}
                    <span className='mobile-nav-title'>Menus</span>
                </div>
            </div>

            {open && (
                <div className='mobile-nav-menu'>
                    <div className='nav-items'>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <Link to="home" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks} >
                                    <MdHome />
                                    Home
                                </Link>
                            </div>
                            <div className='nav-link'>
                                <Link to="about" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
                                    <IoIosInformationCircleOutline />
                                    About Us
                                </Link>
                            </div>
                            <div className='nav-link'>
                                <Link to="gallery" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
                                    <IoMdPhotos />
                                    Gallery
                                </Link>
                            </div>
                            <div className='nav-link'>
                                <Link to="experiencepast" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
                                    <MdWork />
                                    Past Work
                                </Link>
                            </div>
                            <div className='nav-link'>
                                <Link to="contact" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
                                    <IoMdContact />
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}     
        </>
    );
};


export default MobileNav