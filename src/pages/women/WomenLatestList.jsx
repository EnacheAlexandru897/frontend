import React from 'react'

const WomenLatestList = (props) => {
  return (
    <li key={props.id} className={`w-[30%] max-modf:w-[80%] shrink-0  ${props.ml1} max-modf:${props.ml2} max-modf1:${props.ml3}`}>
      <img className='w-full object-cover' src={props.img} alt="" />
      <p className='mt-3 font-medium text-[20px]'>{props.name}</p>
    </li>
    
  )
}

export default WomenLatestList
