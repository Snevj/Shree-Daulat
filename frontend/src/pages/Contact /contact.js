import React from 'react'
import './contact.css'
import contactPhoto from '../../assets/images/madhu.jpg';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";



const contact = () => {
    return (
        <>
            <div className=' contact'id='contact'>
                <div className='card card0 border-0'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                            <div className='row'>
                                <div className='card1'>
                                    <div className='row border-line'>
                                        <img className='image' src={contactPhoto} alt='contact' />
                                        <p className='imageCaption'>Hello! My name is Madhu Vijay and I'm the owner of this firm. We believe in esporting the top qualtiy Stones.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='card2 d-flex card border-0 px-4 py-3'>
                                <div className='row'>
                                    <div className='row'>
                                        <h6>Contact with 
                                            <FaLinkedin color='blue' size={32} className='ms-2'/>
                                            <FaInstagram size={32} color='pink'/>
                                            <FaFacebook size={32} color='blue' />
                                        </h6 >
                                    </div>

                                    <div className='row px-3 mb-4'>
                                        <div className='line' />
                                        <small className='or text-center'> OR</small>
                                        <div className='line' />
                                    </div>
                                    <div className='row px-3'>
                                        <input type='text' name='name' placeholder='Enter your Name' className='mb-3' />
                                    </div>
                                    <div className='row px-3'>
                                        <input type='email' name='email' placeholder='Enter your Email Address' className='mb-3' />
                                    </div>
                                    <div className='row px-3'>
                                        <input type='text' name='number' placeholder='Enter your Number' className='mb-3' />
                                    </div>
                                    <div className='row px-3'>
                                        <textarea type='text' name='msg' placeholder='Enter your Message' className='mb-3' />
                                    </div>
                                    <div className='row px-3'>
                                        <button className='button' type='submit' >
                                            Submit Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default contact