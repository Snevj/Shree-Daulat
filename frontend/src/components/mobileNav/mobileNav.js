import React from 'react';
import './MobileNav.css';
import { FiMenu } from "react-icons/fi";


const mobileNav = () => {
  return (
    <>
        <div className='mobile-nav'>
            <div className='mobile-nav-header'>
                <FiMenu size={30} className='mobile-nav-icon' />
                <span className='mobile-nav-title'>Menus</span>
            </div>
        </div>
    </>
  );
};


export default mobileNav