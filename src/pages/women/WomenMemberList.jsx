import React from 'react'
import { Link } from 'react-router-dom'

const WomenMemberList = (props) => {
  return (
    <li className={`modf12:w-1/3 max-modf12:w-[32.75%] relative max-modf12:${props.ml1} max-modf:${props.ml2} max-modf:w-[80%]   max-modf12:shrink-0`}>
      <img className='w-full max-modf1:h-130 object-cover' src={props.img} alt="" /> 


      <div className='absolute bottom-12 left-11 max-modf1:left-6 text-white'>
        <p className='font-medium text-[17px]'>{props.name}</p>
        <p className='mt-2 font-medium leading-[29px] tracking-[0px] text-[25px] modf12:w-[88%] m'>{props.info}</p>

        <div className='mt-8'>
          <Link className='px-5 py-1.75 bg-white text-black rounded-full
          hover:bg-gray-300
          '>{props.button}</Link>
        </div>
      </div>
    </li>
  )
}

export default WomenMemberList
