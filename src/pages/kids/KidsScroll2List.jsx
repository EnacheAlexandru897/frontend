import React from 'react'

const KidsScroll2List = (props) => {
  return (
    <li key={props.id} className={`w-[30.25%] max-modf:w-[70%] ${props.ml1} max-modf:${props.ml2} max-modf1:${props.ml3} shrink-0`}>
      <img className='w-full object-cover' src={props.img} alt="" />
      
      <p className='text-[22px] font-medium pt-3'>{props.name}</p>
    </li>
  )
}

export default KidsScroll2List
