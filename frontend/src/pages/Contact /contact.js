import React from 'react'
import './contact.css'
import contactPhoto from '../../assets/images/madhu.jpg';

const contact = () => {
  return (
    <>
        <div className=' contact'>
            <div className='card card0 border-0'>
                <div className='row'>
                    <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                        <div className='row'>
                            <div className='card1'>
                                <div className='row border-line'>
                                    <img className='image' src={contactPhoto} alt='contact'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                        <div className='row'>
                        <div className='card2 d-flex card border-0 px-4 py-3'>
                            <h4>Connect with ICONS</h4>
                        </div>
                        <div className='row px-3 mb-4'>
                            <div className='line'/>
                            <small className='or text-center'> OR</small>
                            <div className='line'/>
                        </div>
                        <div className='row px-3'>
                            <input type='text' name='name' placeholder='Enter your Name' className='mb-3'/>
                        </div>
                        <div className='row px-3'>
                            <input type='email' name='email' placeholder='Enter your Email Address' className='mb-3'/>
                        </div>
                        <div className='row px-3'>
                            <input type='number' name='number' placeholder='Enter your Number' className='mb-3'/>
                        </div>
                        <div className='row px-3'>
                            <textarea type='text' name='msg' placeholder='Enter your Message' className='mb-3'/>
                        </div>
                        <div className='row px-3'>
                            <button className='' type='submit' >
                                Submit Message
                            </button>
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