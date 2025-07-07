import React from 'react'
import { IoEyeOutline } from 'react-icons/io5'
 

const HomeScroll1List = (props) => {
  return (
    <li key={props.id} className='w-[32.5%] max-modf:w-[76%] max-modf:shrink-0 relative' >
      <img className='object-cover w-full' src={props.img} alt="" />
      <div className='absolute bottom-12 text-black left-12 '>
        <button className='relative flex items-center font-medium bg-white py-1.5 pl-4 pr-4 cursor-pointer rounded-full
        hover:bg-gray-200
        '>
          <IoEyeOutline  className='mr-1' size={22}/>
          {props.text}</button>
      </div>
      
    </li>
  )
}

export default HomeScroll1List
