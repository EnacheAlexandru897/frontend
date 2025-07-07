import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const NewNavbar = () => {
  return (
    <div className='bg-gray-100 py-4'>
      <div className='flex  max-w-screen-2xl mx-auto w-full px-13 justify-center
      max-modf:px-8 max-modf1:px-5 
      '>
        <div className=' flex w-172 justify-between max-modf3:justify-center  items-center
        '>
          <div className='max-modf3:hidden'>
            <MdOutlineKeyboardArrowLeft size={25}/>

          </div>

          <div className='relative'>
            <div className=' items-baseline space-x-4 modf8:hidden' >
              <p className='font-medium'>SHOP ALL NEW ARRIVALS</p>
              <Link to='/new'>
              <p className='text-[12px] underline font-medium'>Shop</p> 
              </Link>
            </div>

            <div className='flex items-center modf3:-ml-68 max-modf7:-ml-55 max-modf8:hidden max-modf3:-ml-68'>
              <p className='font-medium max-modf7:text-center'>FREE DELIVERY & <br className='modf7:hidden '/> RETURNS</p>
              <div className='text-[13px] absolute modf3:-left-26 w-100  text-center max-modf3:-left-27 max-modf7:-left-22 max-modf7:w-80'>
              <p>Nike Members get free delivery and free 30-day</p>
              <p>returns. Learn More Join Us</p>
              </div>
            </div>
          </div>
          

          <div className='max-modf3:hidden'>
            <MdOutlineKeyboardArrowRight size={25}/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default NewNavbar
