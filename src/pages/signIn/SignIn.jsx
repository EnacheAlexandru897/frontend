import React from 'react'
import { SiNike } from "react-icons/si";
import { SiJordan } from "react-icons/si";
import { Link } from 'react-router-dom'


const SignIn = () => {
  return (
    <div className='flex justify-center  items-center '>
      <title>Welcome to Nike--Sign In</title>

      <div className='flex flex-col   w-140 px-10'>
        <div className='flex mt-7 space-x-3'>
        <SiNike size={55}/>
        <SiJordan size={40}/>
        </div>

        <div className=' w-[96.75%]  '>
          <p className='text-[30px] mt-4'>Enter your email to join us or sign in.</p>
          <p className='text-[17px] mt-2'>Romania <span className='underline text-gray-500'>Change</span></p>

          <input className='border w-full rounded-lg px-3 text-[18px] mt-10 py-3.5' type="email" placeholder='Email*'/>
          <p className='text-[17px] mt-10 w-[84%] text-gray-500'>By continuing, you agree to Nike's <span className='underline font-medium'>Terms of Use</span> and you confirm you have read Nike's <span className='underline font-medium'>Privacy Policy</span>.</p>

          <div className='py-10 flex modf8:justify-end max-modf8:w-full'>
            <button className='max-modf8:w-full bg-black text-white px-5.5 py-2.25 rounded-full font-medium text-[16.5px] cursor-pointer hover:bg-gray-600
            max-modf8:py-4.25
            '>Continue</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
