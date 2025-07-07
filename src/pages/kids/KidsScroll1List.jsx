import React from 'react'

const KidsScroll1List = (props) => {
  return (
    <li key={props.id} className={`w-[38.25%] max-modf:w-[70%] ${props.ml1} max-modf:${props.ml2} max-modf1:${props.ml3} shrink-0`}>
      <img className='w-full object-cover max-modf1:hidden' src={props.img1} alt="" />
      <img className='w-full object-cover modf1:hidden' src={props.img2} alt="" />
      <p className='text-[22px] font-medium pt-7'>{props.name}</p>
    </li>
  )
}

export default KidsScroll1List
