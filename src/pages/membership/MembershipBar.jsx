import React from 'react'
import { Link } from 'react-router-dom'

const MembershipBar = () => {
  return (
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
  )
}

export default MembershipBar
