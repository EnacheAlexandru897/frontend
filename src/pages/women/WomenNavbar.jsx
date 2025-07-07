import React from 'react'
import { Link } from 'react-router-dom'

const WomenNavbar = () => {
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


        <div className='max-w-screen-2xl mx-auto flex px-13 max-modf:px-8 max-modf1:px-5 py-10 max-modf9:justify-between
        max-modf:justify-start max-modf:flex-col max-modf:space-y-1
        '>

          <div className='text-[22px] font-medium'>
            <p>Women</p>
          </div>

          <div className='flex space-x-8  modf9:w-[90%] modf9:justify-center font-medium text-[17px] truncate'>

            <div>
              <Link className='hover:text-gray-500'>Shoes</Link>
            </div>

            <div>
              <Link className='hover:text-gray-500'>Clothing</Link>
            </div>

            <div>
              <Link className='hover:text-gray-500'>Just Released</Link>
            </div>

            <div>
              <Link className='hover:text-gray-500'>Best Sellers</Link>
            </div>

            <div>
              <Link className='hover:text-gray-500'>Sale</Link>
            </div>

            <div>
              <Link className='hover:text-gray-500'>Teens</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WomenNavbar
