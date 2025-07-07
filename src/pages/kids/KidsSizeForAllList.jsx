import React from 'react'
import { Link } from 'react-router-dom'

const KidsSizeForAllList = (props) => {
  return (
    <li key={props.id} className={`w-1/4 max-modf3:shrink-0 max-modf3:w-[70%] max-modf3:${props.ml} relative`}>
      <img className='h-138 w-full max-modf3:h-120  object-cover' src={props.img} alt="" />
      
      <div className='w-[72%] absolute bottom-10 left-10'>
        <p className='text-white font-medium text-[19px]'>{props.name}</p>
        <div className='mt-7'>
          <Link className='font-medium bg-white py-1.75 px-4.5 rounded-full hover:bg-gray-300'>{props.shop}</Link>
        </div>
      </div>

      
    </li>
  )
}

export default KidsSizeForAllList
