import React from 'react'
import { Link } from 'react-router-dom'

const JordanAbEasy = () => {
  return (
    <div>
      <div className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5 modf3:text-center leading-10 py-12'>
        <p className='font-medium text-[17px] max-modf:text-[16.5px]'>Kids' Jordan Flight Court</p>
        <p className='font-black text-[49px] max-modf:text-[39px]'>AB EASY WIN</p>
        <p className='text-[21.5px] max-modf:text-[18px] max-modf3:leading-6 max-modf3:mt-1.5'>Easy comfort. Versatile style. Meet the new go-to for all-day play.</p>

        <div className='mt-4'>
          <Link className='bg-black text-white font-medium px-4 py-1.5 rounded-full hover:bg-gray-500'>Shop</Link>
        </div>
      </div>
    </div>
  )
}

export default JordanAbEasy
