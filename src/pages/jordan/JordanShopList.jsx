import React from 'react'
import { Link } from 'react-router-dom'

const JordanShopList = (props) => {
  return (
    <li key={props.id} className={`${props.ml1} max-modf:${props.ml2} max-modf1:${props.ml3} w-[38%] max-modf:w-[70%] shrink-0 relative`}>
      <img className='w-full object-cover max-modf1:h-[60vw]' src={props.img} alt="" />
      <div className='bg-white text-black absolute bottom-10 left-14 px-5 py-1.5 rounded-full hover:bg-gray-300 max-modf:left-8 max-modf:bottom-8 max-modf1:bottom-4 max-modf1:left-4'>
        <Link className='font-medium'>{props.name}</Link>
      </div>
    </li>
  )
}

export default JordanShopList
