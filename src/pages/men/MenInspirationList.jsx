import React from 'react'

const MenInspirationList = (props) => {
  return (
    <li key={props.id} className={`${props.ml1} max-modf:${props.ml2} max-modf1:${props.ml3} w-[30%] shrink-0  max-modf:w-[80%]`}>
      <img className='w-full object-cover' src={props.img} alt="" />
      <p className='pt-4 text-[20px] font-medium'>{props.title}</p>
    </li>
  )
}

export default MenInspirationList
