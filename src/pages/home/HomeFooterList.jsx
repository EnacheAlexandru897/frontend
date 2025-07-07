import React from 'react'
import { Link } from 'react-router-dom'
const HomeFooterList = (props) => {
  return (
    <li key={props.id} className='max-modf4:w-1/4  max-modf3:w-full ' >
      <p className='text-[21px] font-bold truncate  max-modf4:w-[85%] max-modf3:w-full hover:overflow-visible hover:whitespace-normal'>{props.title}</p>

      <div className='text-[17px] font-medium text-gray-500 mt-5 space-y-3 max-modf3:hidden truncate  max-modf4:w-[85%] flex flex-col'>
        <Link className='truncate hover:overflow-visible hover:whitespace-normal hover:text-black'>{props.text1}</Link>
        <Link className='truncate hover:overflow-visible hover:whitespace-normal hover:text-black'>{props.text2}</Link>
        <Link className='truncate hover:overflow-visible hover:whitespace-normal hover:text-black'>{props.text3}</Link>
        <Link className='truncate hover:overflow-visible hover:whitespace-normal hover:text-black'>{props.text4}</Link>
      </div>
    </li>
  )
}

export default HomeFooterList
