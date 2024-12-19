import React from 'react'
import './about.css'
import stoneImage from '../About/stone.jpg'//adding the pictures of stone for "about us" section

const about = () => {
    return (
        <>
            <div className='about'>
                <div className='row'>
                    <div className='col-md-6  col-xl-6 col-lg-6 col-xs-12 about-img'>
                        <img src={stoneImage} alt='stoneImage' />
                    </div>
                    <div className='col-md-6 about-content'>
                        <h1>About Us</h1>
                        <p>
                            <p>
                                We are a trusted name in the global trade and export of premium natural stones, committed to delivering quality and craftsmanship to clients across international markets. With expertise in sourcing, processing, and exporting a wide range of natural stones — including granite, marble, sandstone, and limestone — we cater to diverse industries such as construction, interior design, and landscaping.
                            </p>
                            <p>What We Offer
                                - Premium Products: A carefully curated selection of natural stones, available in a variety of colors, textures, and finishes to meet global standards and diverse preferences.
                                - Tailored Solutions: Custom sizes, cuts, and finishes to suit the specific needs of our clients, ensuring seamless integration into their projects.
                                - Global Reach: Expertise in handling export logistics, documentation, and compliance, ensuring smooth and timely delivery to countries worldwide.
                            </p>
                            <p>Why Choose Us?
                                - Superior Quality: Our stones undergo rigorous quality checks to ensure durability, aesthetic appeal, and precision.
                                - Sustainability Focus: We prioritize eco-friendly practices in sourcing and production to minimize environmental impact.
                                - Customer-Centric Approach: From consultation to delivery, we provide personalized support to ensure client satisfaction
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default about