import React from 'react'

const KidsScroll3List = (props) => {
  return (
    <li key={props.id} className={`${props.ml1} max-modf:${props.ml2} max-modf1:${props.ml3} w-[30%] max-modf:w-[70%]  shrink-0`}>
      <img className='w-full object-cover' src={props.img} alt="" />
      
      <div className='leading-6'>
        <p className='text-[17px] font-medium pt-3'>{props.name}</p>
        <p className='text-[17px] text-gray-500'>{props.text}</p>
        <p className='font-medium text-[17px]'>{props.price}</p>
      </div>
    </li>
  )
}

export default KidsScroll3List
