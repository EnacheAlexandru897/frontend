import React from 'react'
import { Link } from 'react-router-dom'

const KidsGuidesList = (props) => {
  return (
    <li key={props.id} className='w-1/3 max-modf3:w-full'>
      <img className='h-141.75 w-full max-modf3:hidden  object-cover' src={props.img1} alt="" />
      <img className='h-135 w-full modf3:hidden  object-cover' src={props.img2} alt="" />

      <p className='mt-8 font-medium text-[22.5px]'>{props.name}</p>
      <div className='mt-5'>
        <Link className='bg-black text-white px-5 py-1.5 rounded-full font-medium hover:bg-gray-500'>{props.lMore}</Link>
      </div>
    </li>
  )
}

export default KidsGuidesList