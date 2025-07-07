import React from 'react'
import video1 from '../assets/nike1.mp4'
import { Link } from 'react-router-dom'
const VideoHome = () => {
  return (
    <div className='relative'>
      
      <video src={video1} autoPlay loop muted className=' w-screen  object-cover max-modf1:h-[114vw] modf1:h-[43vw]'></video>

      <div className='absolute bottom-0 pl-13 max-modf:pl-8 pb-13 max-modf:pb-7 text-white '>
        <div className=' '>
          <p className='text-[63px] max-modf:text-[35px] max-modf:leading-7 tracking-tighter leading-15 font-black
          max-modf1:text-[30px]
          '>TURN OFFSEASON <br /> ON</p>
          <p className='text-[21px] max-modf:text-[17px] max-modf1:text-[15px] mt-2'>Get set for summer with gear that can take the heat.</p>

          <div className=' mt-8 max-modf:space-x-1.5 space-x-3 font-medium max-modf1:text-[14.5px]'>
            <Link className='bg-white text-black px-4.5 py-2 rounded-full hover:bg-white/70 transform duration-100'>Shop</Link>
            <Link className='bg-white text-black px-4.5 py-2 rounded-full hover:bg-white/70 transform duration-100'>Shop Kids'</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoHome
