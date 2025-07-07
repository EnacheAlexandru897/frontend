import React from 'react'

import MembershipMembersList from './MembershipMembersList'
import membershipMembers from './membershipMembers.json'
const MembershipMembers = () => {

  const createMEmbershipMembersList = (component) =>{
    return <MembershipMembersList 
      id = {component.id}
      key = {component.id}
      width = {component.width}
      height = {component.height}
      img = {component.img}
      name = {component.name}
      info = {component.info}
    />
  }

  return (
    <div className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5'>
      <p className='text-[25px] font-medium'>Members Also Get</p>

      
      <ul className='flex modf3:space-x-16 px-10 pt-10 max-modf3:flex-col max-modf3:space-y-19'>


        {
          membershipMembers && membershipMembers.map(createMEmbershipMembersList)
        }

        {/** 
        <li className='w-1/3 max-modf3:w-full flex flex-col items-center '>
          <img className='w-24 object-cover ' src={membership1} alt="" />
          <div className='flex justify-center flex-col items-center mt-8'>
            <p className='font-medium text-[22px] text-center'>Free Shipping</p>
            <p className='text-center w-[66%] max-modf:w-[80%] mt-1'>That's right, delivery is free for all Members.</p>
          </div>
        </li>
        
        <li className='w-1/3 max-modf3:w-full flex flex-col items-center'>
          <img className='w-17 h-17 object-cover ' src={membership2} alt="" />
          <div className='flex justify-center flex-col items-center mt-8'>
            <p className='font-medium text-[22px]  text-center'>Receiptless Returns</p>
            <p className='text-center w-[66%] mt-1 max-modf:w-[80%]'>Use the Nike App to return or exchange, receipt-free.</p>
          </div>
        </li>

        <li className='w-1/3 max-modf3:w-full flex flex-col items-center '>
          <img className='w-17 h-17 object-cover ' src={membership3} alt="" />
          <div className='flex justify-center flex-col items-center mt-8'>
            <p className='font-medium text-[22px] text-center'>Member Experiences</p>
            <p className='text-center w-[66%] mt-1 max-modf:w-[80%]'>Join your community for live, Member-only events..</p>
          </div>
        </li>*/}
        
        
        
      </ul>
        
      
    </div>
  )
}

export default MembershipMembers
