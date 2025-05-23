import React from 'react'
import "./Menus.css";
import { Link } from 'react-scroll';
import { MdHome } from "react-icons/md"
import { IoMdPhotos } from "react-icons/io";//all next 4 imports are of icons from react icons
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import image from "../../assets/images/Shree daulat.png" //I have imported the image from the Menus folder



const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? (
        <>
        <div className= "navbar-profile-pic">
            <img src={image} alt="Profile Pic" style={{ width: "150px", height: "auto"  }}/>
        </div>
        
        <div className='nav-items'>
            <div className='nav-item'>
                <div className='nav-link'>
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                        <MdHome/>
                        Home
                    </Link>            
                </div>
                <div className='nav-link'>
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                        <IoIosInformationCircleOutline/>
                        About Us
                    </Link>                    
                </div>
                <div className='nav-link'>
                    <Link to="gallery" spy={true} smooth={true} offset={-100} duration={100}>
                        <IoMdPhotos />
                        Gallery
                    </Link>                    
                </div>
                <div className='nav-link'>
                    <Link to="experiencepast" spy={true} smooth={true} offset={-100} duration={100}>
                        <MdWork/>
                        Past Work
                    </Link>
                </div>
                <div className='nav-link'>
                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                        <IoMdContact/>
                        Contact
                    </Link>
                </div>
            </div>
        </div>
        </>
    ) : (
        <div className='nav-items'>
            <div className='nav-item'>
                <div className='nav-link'>
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                        <MdHome/>   
                    </Link>
                    
                </div>
                <div className='nav-link'>
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                        <IoIosInformationCircleOutline/>
                    </Link>
                    
                </div>
                <div className='nav-link'>
                    <Link to="gallery" spy={true} smooth={true} offset={-100} duration={100}>
                        <IoMdPhotos />
                    </Link> 
                    
                </div>
                <div className='nav-link'>
                    <Link to="experiencepast" spy={true} smooth={true} offset={-100} duration={100}>
                        <MdWork/>
                    </Link>
                    
                </div>
                <div className='nav-link'>
                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                        <IoMdContact/>
                    </Link>                
                </div>
            </div>

        </div>
    )}
    </>
  )
}

export default Menus