import React from 'react'
import { Link } from 'react-router-dom'

import look8 from '../../assets/photo/8.png'

import mbappe1 from '../../assets/photo/mbappe1.png'
import mbappe2 from '../../assets/photo/mbappe2.png'

const HomeImg = () => {
  return (
    <div className='max-w-screen-2xl mx-auto px-13 pr-11.5 mb-10 relative
    max-modf:px-8   
    '>
      
      <div className='flex flex-row modf1:hidden justify-between max-modf1:pb-15 max-modf3:pb-40 '>
        <img className='w-1/2' src={mbappe1} alt="" />
        <img className='w-1/2' src={mbappe2} alt="" />
      </div>

      <img className='max-modf1:hidden  w-full' src={look8} alt="" />

      <div className='absolute bottom-10 max-modf:bottom-4 max-modf1:bottom-3 modf3:items-center w-full -left-0.25 max-modf:left-3 flex modf3:justify-center modf3:text-center  flex-col font-medium

      max-modf3:px-5 max-modf3:bottom-0 max-modf3:bg-gray-200/30 max-modf3:pb-5 
      '>
        <p className='text-[18px] max-modf:text-[16px]'>Athlete Picks</p>
        <p className='mt-3 text-[25px] max-modf:text-[23px]'>Kylian Mbappe</p>
        <div className='mt-8'>
          <Link className='bg-black text-white py-2 rounded-full text-[17px] max-modf:text-[15px] px-5'>Shop</Link>
        </div>
      </div>
    </div>
  )
}

export default HomeImg
