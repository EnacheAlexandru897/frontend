import React from 'react'
import { Link } from 'react-router-dom'

const WomenSeasonalShopList = (props) => {
  return (
    <li key={props.id} className='modf3:w-1/2 relative'>
      <img className='w-full h-79 object-cover max-modf1:hidden' src={props.img} alt="" />
      <img className='w-full h-89 max-modf3:h-155 object-cover modf1:hidden' src={props.img1} alt="" />

      <div className='absolute  bottom-14 max-modf:bottom-8 text-white left-10 max-modf:left-7 max-modf1:left-3'>
        <p className='font-medium text-[20px]'>{props.name}</p>
        <div className='mt-8'>
          <Link className='py-1.75 font-medium px-4.5 rounded-full bg-white text-black'>{props.button}</Link>
        </div>
      </div>
    </li>
  )
}

export default WomenSeasonalShopList
