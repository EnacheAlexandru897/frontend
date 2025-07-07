import React from 'react'
import jordanp4 from '../../assets/jordan/jordanp4.PNG'
import { Link } from 'react-router-dom'
const JordanShowEmUp = () => {
  return (
    <div>
      <div className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5 modf3:text-center leading-10 py-12'>
        <p className='font-medium text-[17px] max-modf:text-[16.5px]'>Air Jordan Collection</p>
        <p className='font-black text-[49px] max-modf:text-[39px]'>SHOW 'EM UP</p>
        <p className='text-[21.5px] max-modf:text-[18px] max-modf3:leading-6 max-modf3:mt-1.5'>Crafted for your flyest self, the new Air Jordan Collection brings iconic prints and elevated cuts.</p>

        <div className='mt-4'>
          <Link className='bg-black text-white font-medium px-4 py-1.5 rounded-full hover:bg-gray-500'>Shop</Link>
        </div>
      </div>



      <div className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5'>
        <img className='w-full object-cover max-modf3:h-[115vw] max-modf3:object-right' src={jordanp4} alt="" />
      </div>
    </div>
  )
}

export default JordanShowEmUp
