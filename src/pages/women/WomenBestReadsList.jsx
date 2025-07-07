import React from 'react'

const WomenBestReadsList = (props) => {
  return (
    <li key={props.id} className={`${props.ml} max-modf:${props.ml1} max-modf:w-[80%] max-modf7:w-[100%]  shrink-0 w-[39.25%]`}>
      <img className='w-full object-cover' src={props.img} alt="" />

      <div className='w-full'>
        <p className='pt-8 text-[17px] text-gray-600 font-medium'>{props.name}</p>
        <p className='font-medium pt-1 text-[23.5px]'>{props.title}</p>
        <p className='text-[21px] max-modf:text-[18px] pt-1'>{props.info}</p>
      </div>
    </li>
  )
}

export default WomenBestReadsList
