import React from 'react'
 

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import MembershipScrollList from './MembershipScrollList';
import membershipScroll from './membershipScroll.json'

const MembershipScroll = () => {

  const createMembershipScrollList = (component) =>{
    return <MembershipScrollList 
     id = {component.id}
     key = {component.id}
     ml1 = {component.ml1}
     ml2 = {component.ml2}
     ml3 = {component.ml3}
     img = {component.img}
     title = {component.title}
     info = {component.info}
     button = {component.button}
    />
  }

  return (
    <div className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5 py-12'>
      <div className='px-10 max-modf:px-7 max-modf1:px-3 flex items-center justify-between '>
        <p className='text-[25px] font-medium'>Member Benefits</p> 


        <div className='flex space-x-3 max-modf3:hidden '>
          <div className='bg-gray-100 p-3 rounded-full'>
            <MdOutlineKeyboardArrowLeft size={25}/>
          </div>

          <div className='bg-gray-100 p-3 rounded-full'>
            <MdOutlineKeyboardArrowRight size={25}/>
          </div>
        </div>
      </div>

      <ul className='py-4 overflow-x-scroll flex space-x-3'>
        
        {
          membershipScroll && membershipScroll.map(createMembershipScrollList)
        }

        {/** 
        <li className='ml-10 max-modf:ml-7 max-modf1:ml-3 w-[30.25%] shrink-0 
        max-modf:w-[70%] relative
        '>
          <img className='w-full object-cover' src={membp1} alt="" />

          <div className='absolute  bottom-14 text-white font-medium left-14 max-modf:left-8 max-modf:bottom-8'>
            <p className='text-[17px]'>Member Product</p>
            <p className='mt-2 text-[25px] leading-7'>Your Exclusive Access</p>
            
            <div className='mt-8'>
              <Link className='bg-white text-black font-medium px-5 py-2 rounded-full hover:bg-gray-300'>Shop</Link>
            </div>
          </div>
        </li>

        <li className='w-[30.25%] shrink-0 max-modf:w-[70%] relative'>
          <img className='w-full object-cover' src={membp2} alt="" />

          <div className='absolute  bottom-14 text-white font-medium left-14 max-modf:left-8 max-modf:bottom-8'>
            <p className='text-[17px]'>Member Rewards</p>
            <p className='mt-2 text-[25px] leading-7'>How we say thank you</p>
            
            <div className='mt-8'>
              <Link className='bg-white text-black font-medium px-5 py-2 rounded-full hover:bg-gray-300'>Celebrate</Link>
            </div>
          </div>
        </li>

        <li className='w-[30.25%] shrink-0 max-modf:w-[70%] relative'>
          <img className='w-full object-cover' src={membp3} alt="" />

          <div className='absolute  bottom-14 text-white font-medium left-14 max-modf:left-8 max-modf:bottom-8'>
            <p className='text-[17px]'>Sport & Wellness</p>
            <p className='mt-2 text-[25px] leading-7'>Movement Where You're At</p>
            
            <div className='mt-8'>
              <Link className='bg-white text-black font-medium px-5 py-2 rounded-full hover:bg-gray-300'>Move</Link>
            </div>
          </div>
        </li>

        <li className='w-[30.25%] shrink-0 max-modf:w-[70%] relative'>
          <img className='w-full object-cover' src={membp4} alt="" />

          <div className='absolute  bottom-14 text-white font-medium left-14 max-modf:left-8 max-modf:bottom-8'>
            <p className='text-[17px]'>Nike By You</p>
            <p className='mt-2 text-[25px] leading-7'>Your customisation service</p>
            
            <div className='mt-8'>
              <Link className='bg-white text-black font-medium px-5 py-2 rounded-full hover:bg-gray-300'>Customise</Link>
            </div>
          </div>
        </li>

        <li className='w-[30.25%] shrink-0 mr-10 max-modf:mr-7 max-modf1:mr-3 max-modf:w-[70%] relative'>
          <img className='w-full object-cover' src={membp5} alt="" />

          <div className='absolute  bottom-14 text-white font-medium left-14 max-modf:left-8 max-modf:bottom-8'>
            <p className='text-[17px]'>SNKRS</p>
            <p className='mt-2 text-[25px] leading-7'>Your ultimate SNKRS community</p>
            
            <div className='mt-8'>
              <Link className='bg-white text-black font-medium px-5 py-2 rounded-full hover:bg-gray-300'>Explore</Link>
            </div>
          </div>
        </li>*/}
        
        

      </ul>
    </div>
  )
}

export default MembershipScroll
