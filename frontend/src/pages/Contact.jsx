import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 border-t'>
                <Title text1={'CONTACT'} text2={'US'} />

            </div>
            <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
                <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="Store Image" />
                <div className='flex flex-col justify-center items-start gap-6'>
                    <p className='font-semibold text-xl'>OUR Store</p>
                    <p className='text-gray-700'>Welcome to our store! We provide a wide range of quality products that cater to all your needs.</p>
                    <p className='text-gray-700'>📍 <strong>Address:</strong> 1234 Main Street, City Center, Metropolis</p>
                    <p className='text-gray-700'>📞 <strong>Contact:</strong> +1 (123) 456-7890</p>
                    <p className='text-gray-700'>⏰ <strong>Hours:</strong> Monday - Friday: 9:00 AM - 8:00 PM, Saturday - Sunday: 10:00 AM - 6:00 PM</p>
                    <p className='text-gray-700'>💌 <strong>Email:</strong> info@ourstore.com</p>
                </div>
            </div>

        </div>
    )
}

export default Contact
