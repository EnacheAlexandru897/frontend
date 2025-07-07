import React from 'react'
import { Link } from 'react-router-dom'
import jordan from '../../assets/jordan/jordan.PNG'

const JordanImg1 = () => {
  return (
    <div className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5 pt-12'>
      <div className='relative'>
        <img className='max-modf1:h-[115vw] w-full object-cover' src={jordan} alt="" />

        <div className='absolute  w-[90%] max-modf:left-7 left-10  bottom-10 text-white'>
          <p className='font-black text-[45px] max-modf:text-[35px] w-[70%] leading-8'>JORDAN X QUAI 54</p>
          <p className='font-medium text-[16.5px] max-modf:text-[16px] w-[70%] mt-4'>With one foot on the court and one foot on the streets, make the justle look easy.</p>

          <div className='mt-8'>
            <Link className='bg-white text-black px-4 py-2 rounded-full font-medium'>Shop</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JordanImg1
