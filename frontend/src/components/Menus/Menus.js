import React from 'react'
import "./Menus.css";
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
        <div className= "navabar-profile-pic">
        <img src={image} alt="Profile Pic" style={{ width: "150px", height: "auto" }}/>
        </div> 
        <div className='nav-items'>
            <div className='nav-item'>
                <div className='nav-link'>
                    <MdHome/>
                    Home
                </div>
                <div className='nav-link'>
                    <IoIosInformationCircleOutline/>
                    About Us
                </div>
                <div className='nav-link'>
                    <IoMdPhotos />
                    Gallery
                </div>
                <div className='nav-link'>
                    <IoMdContact/>
                    Contact
                </div>
                <div className='nav-link'>
                    <MdWork/>
                    Past Work
                </div>
            </div>

        </div>
        </>
    ) : (
        <div className='nav-items'>
            <div className='nav-item'>
                <div className='nav-link'>
                    <MdHome title='Home'/>
                    
                </div>
                <div className='nav-link'>
                    <IoIosInformationCircleOutline title="About Us"/>
                    
                </div>
                <div className='nav-link'>
                    <IoMdPhotos title="Gallery"/>
                    
                </div>
                <div className='nav-link'>
                    <MdHome/>
                    
                </div>
                <div className='nav-link'>
                    <MdWork/>
                    
                </div>
            </div>

        </div>
    )}
    </>
  )
}

export default Menus