import React from 'react'
import { Link } from 'react-router-dom'

const MenSeasonalShopList = (props) => {
  return (
    <li key={props.id} className='relative modf3:w-1/2'>
      <img className='w-full h-79 object-cover max-modf1:hidden' src={props.img} alt="" />

      <img className='w-full modf1:hidden object-cover' src={props.img1} alt="" />

      <div className='absolute bottom-14 left-10
      max-modf:bottom-8 max-modf:left-5
      '>
        <p className='text-white text-[23px] font-medium'>{props.name}</p>
        <div className='mt-7'>
          <Link className='bg-white text-black py-2 px-5 rounded-full hover:bg-gray-300'>{props.button}</Link>
        </div>
      </div>
    </li>
  )
}

export default MenSeasonalShopList
