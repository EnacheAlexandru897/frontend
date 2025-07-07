import React from 'react'
import membershipvid1 from '../../assets/membership/membershipvid1.mp4'
import { Link } from 'react-router-dom'

const MembershipVideo = () => {
  return (
    <div className='relative'>
      <video className='w-full object-cover h-[40vw] max-modf3:h-[115vw]' src={membershipvid1} loop autoPlay muted></video>

      <div className='absolute w-full top-0 bottom-0 flex flex-col justify-center items-center text-white'>
        <p className='text-[65px] max-modf:text-[38px] font-black  modf:w-[62%] max-modf:w-[67%] text-center modf:leading-14 max-modf:leading-8 modf:-tracking-[3px] max-modf:-tracking-[2px]'>IT'S BETTER AS A MEMBER</p>
        <p className='font-medium text-[18px] w-[63%] mt-2 text-center leading-5'>Move, Shop, Customise and Celebrate with the best of Nike.</p>

        <div className='mt-8'>
          <Link className='bg-white font-medium text-black py-2 hover:bg-gray-300 px-5 rounded-full'>Sign up</Link>
        </div>
      </div>
    </div>
  )
}

export default MembershipVideo
