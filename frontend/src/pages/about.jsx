import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const about = () => {
    return (
        <div><div className='text-2xl text-center pt-8 border-t'>
            <Title text1={"ABOUT"} text2={'US'} />

        </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About Us" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>
                        <strong>Who We Are:</strong>
                        Welcome to [Your Brand Name], your one-stop shop for [product/service, e.g., "quality apparel" or "innovative gadgets"]. Founded in [year], we are dedicated to delivering top-notch products that meet your needs with style and functionality.
                    </p>
                    <p>
                        <strong>Our Mission:</strong>
                        At [Your Brand Name], we strive to [mission statement, e.g., "empower our customers with affordable yet premium products"]. Every product reflects our commitment to quality, sustainability, and customer satisfaction.
                    </p>
                    <p>
                        <strong>Why Choose Us:</strong>
                        Our diverse range of products, competitive pricing, and exceptional customer service make us the preferred choice for customers worldwide. Discover exclusive deals and a hassle-free shopping experience tailored just for you.
                    </p>
                    <p>
                        <strong>Our Values:</strong>
                        - **Customer First**: Your satisfaction is our top priority.
                        - **Sustainability**: Committed to environmentally responsible practices.
                        - **Innovation**: Continuously improving to serve you better.
                    </p>
                    <p>
                        Join us on our journey and become part of a growing community that values quality and trust. Follow us on [social media links] to stay updated!
                    </p>
                </div>
            </div>
            <div className='text-xl py-4'>
                <Title text1={'WHY'} text2={'CHOOSE US'} />

            </div>
            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance</b>
                    <p>
                        We ensure every product meets industry standards by adhering to rigorous
                        testing protocols and quality benchmarks. Our approach minimizes defects and
                        guarantees customer satisfaction.
                    </p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Continuous Improvement</b>
                    <p>
                        Quality is a journey, not a destination. Through continuous process monitoring
                        and iterative improvements, we strive to exceed expectations and set new
                        standards of excellence.
                    </p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Customer-Centric Approach</b>
                    <p>
                        Our Quality Assurance framework revolves around the needs of our clients.
                        By integrating feedback and staying proactive, we ensure our solutions align
                        perfectly with user expectations.
                    </p>
                </div>
            </div>


        </div>

    )
}

export default about
