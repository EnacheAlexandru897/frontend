import React from 'react'

const KidsBestReadsList = (props) => {
  return (
    <li key={props.id} className={`modf:w-112.75 max-modf:w-[74%] shrink-0 ${props.ml1} max-modf:${props.ml2} max-modf1:${props.ml3}`}>
      <img className='w-full modf:h-74.25 object-cover max-modf1:hidden' src={props.img} alt="" />
       
      <img className='w-full modf1:hidden h-[98vw] object-cover' src={props.img1} alt="" />
      

      <div>
        <p className='text-gray-500 text-[17px] font-medium'>{props.text}</p>
        <p className='font-medium text-[24px]'>{props.name}</p>
        <p className='text-[21px] max-modf:text-[18.25px]'>{props.info}</p>
      </div>
    </li>
  )
}

export default KidsBestReadsList
