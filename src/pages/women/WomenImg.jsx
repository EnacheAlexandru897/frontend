import React from 'react'
import women from '../../assets/women/women1.PNG'
import { Link } from 'react-router-dom'
const WomenImg = () => {
  return (
    <div className='w-full relative text-white'>
      <img className='w-full max-modf3:h-[115vw] object-cover' src={women} alt="" />
      <div className='absolute w-full text-center bottom-10 max-modf11:hidden'>
        <p className='font-black -tracking-[6px] text-[68px] max-modf:-tracking-[4px] max-modf:text-[38px]'>FEAR NOTHING</p>
        <p className='font-medium text-[17px]
        max-modf:text-[15.5px]
        '>The 2025 Nike National Team Collections have arrived.</p>

        <div className='mt-8'>
          <Link className='py-2 px-5 bg-white text-black rounded-full font-medium
          hover:bg-gray-300
          '>Shop</Link>
        </div>
      </div>
    </div>
  )
}

export default WomenImg
