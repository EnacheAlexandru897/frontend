import React from 'react'
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  return (
    <div className='mt-25 max-w-screen-2xl mx-auto pl-13  pr-11 max-modf:px-8 max-modf1:px-5'>
      <div className=' pt-15 max-modf:pt-8  border-t-1 border-gray-300 flex modf:justify-between max-modf:flex-col'>
        <div className='flex space-x-39.5 text-[14.5px] max-modf:flex-col
        
        '>
          <div className='text-gray-500 font-medium space-y-2
          max-modf:w-full
          max-modf:border-b-1 max-modf:border-gray-300 
          max-modf:py-7 max-modf:cursor-pointer max-modf:flex max-modf:justify-between 
          '>
            <div>
              <p className='font-medium text-black mb-10 max-modf:mb-0'>Resources</p>

              <div className='space-y-2 max-modf:hidden'>
                <p className='max-modf:mt-6'>Find a Store</p>
                <p>Nike Journal</p>
                <p>Become a Member</p>
                <p>Feedback</p>
                <p className='max-modf:mb-5'>Promo Codes</p>
              </div>
            </div>


            <div className='modf:hidden'>
              <IoIosArrowDown size={25}/>
            </div>
            
            
          </div>

          <div className='text-gray-500 font-medium space-y-2 max-modf:w-full

          max-modf:border-b-1 max-modf:border-gray-300 
          max-modf:py-7
          max-modf:cursor-pointer max-modf:flex max-modf:justify-between
           '>
            <div>
              <p className='font-medium text-black mb-10 max-modf:mb-0'>Help</p>
              <div className='space-y-2 max-modf:hidden'>
                <p className='max-modf:mt-6'>Get Help</p>
                <p>Order Status</p>
                <p>Shipping and Delivery</p>
                <p>Returns</p>
                <p>Payment Options</p>
                <p>Contact Us</p>
                <p className='max-modf:mb-5'>Reviews</p>
              </div>
            </div>

            <div className='modf:hidden'>
              <IoIosArrowDown size={25}/>
            </div>
            
            
          </div>

          <div className='text-gray-500 font-medium space-y-2 
          max-modf:border-b-1 max-modf:border-gray-300  max-modf:cursor-pointer max-modf:flex max-modf:justify-between
          max-modf:py-7'>
            <div>
              <p className='font-medium text-black mb-10 max-modf:mb-0
              '>Company</p>
              <div className='space-y-2 max-modf:hidden'>
                <p className='max-modf:mt-6'>About Nike</p>
                <p>News</p>
                <p>Careers</p>
                <p>Investors</p>
                <p>Sustainability</p>
                <p className='max-modf:mb-5'>Purpose</p>
              </div>
            </div>
            
            <div className='modf:hidden'>
              <IoIosArrowDown size={25}/>
            </div>
            

            
          </div>
        </div>

        <div className=''>
          <div className='flex items-center space-x-1.5 text-[15px]
          max-modf:border-b-1 max-modf:border-gray-300 max-modf:py-7 cursor-pointer
          '>
            <CiGlobe size={17}/>
          <p>Romania</p>
          </div>
          
        </div>
      </div>

      <div className='flex  space-x-6 pb-30 pt-15 text-[14.5px] text-gray-500 tracking-wide relative 
      max-modf:flex-col max-modf:space-y-2
      '>
        <p>&copy; 2025 Nike, Inc. All rights reserved</p>
        <div>
          <p className='hover:text-black cursor-pointer'>Guides</p>
        </div>
        <p className='hover:text-black cursor-pointer'>Terms of Use</p>
        <p className='hover:text-black cursor-pointer'>Terms of Sale</p>
        <p className='hover:text-black cursor-pointer'>Company Details </p>
        <p className='hover:text-black cursor-pointer 
        max-modf6:absolute max-modf6:bottom-21
        max-modf:static
        '>Privacy & Cookie Policy</p>
        
        <p className='hover:text-black cursor-pointer max-modf5:absolute max-modf5:bottom-21
        max-modf6:left-45 max-modf:static
        '>Privacy & Cookie Setting</p>
      </div>
    </div>
  )
}

export default Footer
