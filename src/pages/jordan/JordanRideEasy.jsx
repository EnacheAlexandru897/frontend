import React from 'react'
import { Link } from 'react-router-dom'
import jordanp1 from '../../assets/jordan/jordanp1.PNG'
import jordanp2 from '../../assets/jordan/jordanp2.PNG'
const JordanRideEasy = () => {
  return (
    <div>
      <div className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5 modf3:text-center leading-10'>
        <p className='font-medium text-[17px] max-modf:text-[16.5px]'>Air Jordan 4RM</p>
        <p className='font-black text-[49px] max-modf:text-[39px]'>RIDE EASY</p>
        <p className='text-[21.5px] max-modf:text-[18px] max-modf3:leading-6 max-modf3:mt-1.5'>A fresh spin on classic comfort that never fails the fit check.</p>

        <div className='mt-4'>
          <Link className='bg-black text-white font-medium px-4 py-1.5 rounded-full hover:bg-gray-500'>Shop</Link>
        </div>
      </div>

      <div className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5 pt-16'>
        <img className='w-full object-cover max-modf1:hidden' src={jordanp1} alt="" />
        <img className='w-full object-cover modf1:hidden h-[115vw]' src={jordanp2} alt="" />
      </div>      
    </div>
  )
}

export default JordanRideEasy
