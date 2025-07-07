import React from 'react'
import { Link } from 'react-router-dom'
import mens from '../../assets/mens.PNG'

const MenImg1 = () => {
  return (
    <div>
      <div>
        <div className='w-full '>
          <img className='w-full max-modf1:h-[115vw] max-modf1:object-left object-cover' src={mens} alt="" />
        </div>
      </div>


      <div className='px-13 max-modf:px-8 max-modf1:px-5 modf3:text-center py-12'>
        <div>
          <p className='font-black max-modf:text-[39px] text-[65px] -tracking-[4.25px]'>TURN OFFSEASON ON</p>
          <p className='text-[20.5px] max-modf:text-[18px]'>Run through summer with gear that can take the heat.</p>

          <div className='mt-8'>
            <Link className='bg-black text-white py-1.5 px-4.5 rounded-full hover:bg-gray-500 transform duration-50 text-[17px]'>Shop</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenImg1
