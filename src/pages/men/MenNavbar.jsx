import React from 'react'
import { Link } from 'react-router-dom'

const MenNavbar = () => {
  return (
    <div>
      <div className='bg-gray-100 py-4  flex justify-center'>
        <div className='text-center hidden'>
          <p className='font-medium text-[18px] text-gray-700'>Shop All New Arrivals</p>
          <div className='text-[12.75px] font-medium'>
            <Link className='underline'>
              Shop
            </Link>
          </div>
        </div>

        <div className='text-center'>
          <p className='font-medium text-[18px] text-gray-700'>Free Delivery & Returns</p>
          <div className='text-[12.75px] font-medium'>
            <p>Nike Members get free delivery and free 30-day returns. <Link className='font-bold underline'>Learn More</Link> <Link className='font-bold underline'>Join Us</Link></p>
          </div>
        </div>
      </div>
      
      <div className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5 py-10 flex max-modf:flex-col max-modf:justify-start max-modf9:justify-between max-modf:space-y-1.5 '>
        <div className='text-[22px] font-medium'>
          <p>Men</p>
        </div>
        

        <div className='flex  modf9:w-[94%] modf9:justify-center text-[17px] font-medium items-center max-modf8:truncate'>
          <div className='flex space-x-8 '>
            <div className='hover:text-gray-500'>
              <Link>Shoes</Link>
            </div>

            <div className='hover:text-gray-500'>
              <Link>Clothing</Link>
            </div>

            <div className='hover:text-gray-500'>
              <Link>Just Released</Link>
            </div>

            <div className='hover:text-gray-500'>
              <Link>Best Sellers</Link>
            </div>

            <div className='hover:text-gray-500'>
              <Link>Sale</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenNavbar
