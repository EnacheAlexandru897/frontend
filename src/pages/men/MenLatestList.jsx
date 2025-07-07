import React from 'react'
import { Link } from 'react-router-dom'

const MenLatestList = (props) => {
  return (
    <li key={props.id} className={`${props.ml1} max-modf:${props.ml2} max-modf1:${props.ml3}  w-[30%] max-modf:w-[80%] shrink-0 relative`}>
      <img className='w-full object-cover' src={props.img} alt="" />

      <div className='absolute bottom-14 text-white left-8'>
        <p className='font-medium text-[17px]'>{props.name}</p>
        <p className='mt-3 font-medium text-[22px]'>{props.info}</p>

        <div className='mt-8'>
          <Link className='bg-white text-black px-4.5 py-1.5 rounded-full'>{props.button}</Link>
        </div>
      </div>
    </li>
  )
}

export default MenLatestList
