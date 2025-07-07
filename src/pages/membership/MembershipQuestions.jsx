import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import membershipQuestions from './membershipQuestions.json'
import MembershipQuestionsList from './MembershipQuestionsList';
const MembershipQuestions = () => {

  const createMembershipQuestionsList = (component) =>{
    return <MembershipQuestionsList 
      id = {component.id}
      key = {component.id}
      question = {component.question}
      answer = {component.answer}
      span = {component.span}
    />
  }

  return (
    <div className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5 pt-27'>
      <p className='text-[25px] font-medium'>Frequently Asked Questions</p>

      <ul className='mt-15'>

        {
          membershipQuestions && membershipQuestions.map(createMembershipQuestionsList)
        }

        {/** 
        <li className='border-b-1 border-gray-300 pb-4'>
          <div className='flex items-center justify-between py-8 cursor-pointer '>
            <p className=' text-[19.25px]'>What is Nike Membership?</p>
            <IoIosArrowDown size={25}/>
          </div>

          <p className='mb-6  text-[19.25px]'>Nike Membership is access to the very best of Nike through any of our apps, exclusive products and Member-only experiences. Nike Members also enjoy free delivery and receiptless returns. It's free and easy to join. <span className='underline font-medium'>Sign up</span>.</p>
        </li>


        <li className='border-b-1 border-gray-300 pb-4'>
          <div className='flex items-center justify-between py-8 cursor-pointer '>
            <p className=' text-[19.25px]'>Am I a Nike Member?</p>
            <IoIosArrowDown size={25}/>
          </div>

          <p className='mb-6  text-[19.25px]'>Maybe! If you've ever logged in to a Nike App, then yes, yes you are. Welcome back! If not, let's change that. <span className='underline font-medium'>Sign up</span>.</p>
        </li>


        <li className='border-b-1 border-gray-300 pb-4'>
          <div className='flex items-center justify-between py-8 cursor-pointer '>
            <p className=' text-[19.25px]'>Is Nike Membership free?</p>
            <IoIosArrowDown size={25}/>
          </div>

          <p className='mb-6  text-[19.25px]'>100% yes. Members enjoy all the benefits of Nike Membership at no cost, because once you're in, we've got you. Zero money gets you access to all of it.</p>
        </li>*/}

        


      </ul>
    </div>
  )
}

export default MembershipQuestions
