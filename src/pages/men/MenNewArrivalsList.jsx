import React from 'react'

const MenNewArrivalsList = (props) => {
  return (
    <li key={props.id} className={`${props.ml1} max-modf:${props.ml2} max-modf1:${props.ml3} w-[30%] shrink-0  max-modf:w-[80%]`}>
      <img className='w-full object-cover' src={props.img} alt="" />
      <p className='font-medium text-[16.5px]'>{props.title}</p>
      <p className='text-gray-500 text-[16.5px]'>{props.info}</p>
      <p className='font-medium mt-3 text-[17px]'>{props.price}</p>
    </li>
  )
}

export default MenNewArrivalsList
