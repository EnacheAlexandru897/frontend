import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const HelpList = (props) => {
  return (
    <li key={props.id} className='max-modf:flex max-modf:items-center max-modf:justify-between max-modf:pb-4 max-modf:border-b max-modf:cursor-pointer max-modf:border-b-gray-300'>
      <p className='font-medium'>{props.title}</p>
      <div className='max-modf:hidden'>
        <p>{props.question1}</p>
        <p>{props.question2}</p>
        <p>{props.question3}</p>
        <p>{props.viewAll}</p>
      </div>

      <div className='modf:hidden'>
        <IoIosArrowDown size={25}/>
      </div>
    </li>
  )
}

export default HelpList
