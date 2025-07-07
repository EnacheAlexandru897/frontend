import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const MembershipQuestionsList = (props) => {
  return (
    <li key={props.id} className='border-b-1 border-gray-300 pb-4'>
      <div className='flex items-center justify-between py-8 cursor-pointer '>
        <p className=' text-[19.25px]'>{}</p>
        <IoIosArrowDown size={25}/>
      </div>

      <p className='mb-6  text-[19.25px]'>{props.answer} <span className='underline font-medium'>{props.span}</span></p>
    </li>
  )
}

export default MembershipQuestionsList
