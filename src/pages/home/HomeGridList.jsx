import React from 'react'
import { Link } from 'react-router-dom'

const HomeGridList = (props) => {
  return (
    <li key={props.id} className='relative max-modf3:w-full'>
      <img className='w-full object-cover' src={props.img} alt="" />
      <div className='absolute bottom-12 text-white left-12 max-modf:left-5.5'>
        <p className='font-medium text-[17px]'>{props.text1}</p>
        <p className='mt-1 font-medium text-[23px]'>{props.text2}</p>
        <div className='mt-10'>
          <Link className='bg-white text-black px-4.5 py-2 rounded-full font-medium'>{props.shop}</Link>
        </div>
        
      </div>
    </li>
  )
}

export default HomeGridList
