import React from 'react'
import { Link } from 'react-router-dom'

const MembershipScrollList = (props) => {
  return (
    <li key={props.id} className={`${props.ml1} max-modf:${props.ml2} max-modf1:${props.ml3} w-[30.25%] shrink-0 
    max-modf:w-[70%] relative`}>
      <img className='w-full object-cover' src={props.img} alt="" />

      <div className='absolute  bottom-14 text-white font-medium left-14 max-modf:left-8 max-modf:bottom-8'>
        <p className='text-[17px]'>{props.title}</p>
        <p className='mt-2 text-[25px] leading-7'>{props.info}</p>
        
        <div className='mt-8'>
          <Link className='bg-white text-black font-medium px-5 py-2 rounded-full hover:bg-gray-300'>{props.button}</Link>
        </div>
      </div>
    </li>
  )
}

export default MembershipScrollList
