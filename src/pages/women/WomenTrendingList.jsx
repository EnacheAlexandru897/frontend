import React from 'react'

const WomenTrendingList = (props) => {
  return (
    <li key={props.id} className={`w-[30%] max-modf:w-[80%]  shrink-0 ${props.ml1} max-modf:${props.ml2} max-modf1:${props.ml3}`}>
      <img className='w-full object-cover' src={props.img} alt="" />
      <p className='font-medium text-[16.5px] mt-4'>{props.name}</p>
      <p className='text-[16px] text-gray-500'>{props.info}</p>
      <p className='font-medium text-[17px] mt-2.5'>{props.price}</p>
    </li>
  )
}

export default WomenTrendingList
