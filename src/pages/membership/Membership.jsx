import React from 'react'

import { SiNike } from "react-icons/si";

import membership4 from '../../assets/membership/membership4.avif'

import MembershipBar from './MembershipBar';
import MembershipVideo from './MembershipVideo';
import MembershipScroll from './MembershipScroll';
import MembershipMembers from './MembershipMembers';
import MembershipConnect from './MembershipConnect';
import MembershipVideo1 from './MembershipVideo1';
import MembershipQuestions from './MembershipQuestions';
const Membership = () => {
  return (
    <div className=''>
      <title>Nike Membership. Nike RO</title>


      <MembershipBar />

      <MembershipVideo />

      <MembershipScroll />

      <MembershipMembers />

      <div className='w-full pt-49'>
        <img className='w-full max-modf:h-8 object-cover' src={membership4} alt="" />
      </div>

      <MembershipConnect />

      <MembershipVideo1 />

      <MembershipQuestions />
      
      <div className='flex items-center justify-center pt-40 pb-25'>
        <SiNike color='red' size={70}/>
        <p className='text-[32px]'>Membership</p>
      </div>
    </div>
  )
}

export default Membership
