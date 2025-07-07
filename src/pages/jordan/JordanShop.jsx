import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import JordanShopList from './JordanShopList'
import jordanShop from './jordanShop.json'

const JordanShop = () => {

  const createJordanShopList= (component)=>{
    return <JordanShopList 
      id = {component.id}
      key = {component.id}
      ml1 = {component.ml1}
      ml2 = {component.ml2}
      ml3 = {component.ml3}
      img = {component.img}
      name = {component.name}
    />
  }
  return (
    <div className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5 pt-12'>
      <div className='flex items-center justify-between px-10 max-modf:px-7 max-modf1:x-3'>
        <p className='text-[25px] font-bold'>SHOP OUR ICONS</p>

        <div className='flex space-x-3 max-modf3:hidden'>
          <div className='bg-gray-100 p-3 rounded-full'>
            <MdOutlineKeyboardArrowLeft size={25}/>
          </div>

          <div className='bg-gray-100 p-3 rounded-full'>
            <MdOutlineKeyboardArrowRight size={25}/>
          </div>
        </div>
      </div>

      <ul className='flex space-x-3 overflow-x-scroll py-4'>
        
        {
          jordanShop && jordanShop.map(createJordanShopList)
        }
        {/* 
        <li className='ml-10 max-modf:ml-7 max-modf1:ml-3 w-[38%] max-modf:w-[70%] shrink-0 relative'>
          <img className='w-full object-cover max-modf1:h-[60vw]' src={jordanshop1} alt="" />
          <div className='bg-white text-black absolute bottom-10 left-14 px-5 py-1.5 rounded-full hover:bg-gray-300 max-modf:left-8 max-modf:bottom-8 max-modf1:bottom-4 max-modf1:left-4'>
            <Link className='font-medium'>Air Jordan 1</Link>
          </div>
        </li>

        <li className='shrink-0 w-[38%] max-modf:w-[70%] relative'>
          <img className='w-full object-cover max-modf1:h-[60vw]' src={jordanshop2} alt="" />

          <div className='bg-white text-black absolute bottom-10 left-14 px-5 py-1.5 rounded-full hover:bg-gray-300 max-modf:left-8 max-modf:bottom-8 max-modf1:bottom-4 max-modf1:left-4'>
            <Link className='font-medium'>Air Jordan 1</Link>
          </div>
        </li>

        <li className='shrink-0 w-[38%] max-modf:w-[70%] relative'>
          <img className='w-full object-cover max-modf1:h-[60vw]' src={jordanshop3} alt="" />

          <div className='bg-white text-black absolute bottom-10 left-14 px-5 py-1.5 rounded-full hover:bg-gray-300 max-modf:left-8 max-modf:bottom-8 max-modf1:bottom-4 max-modf1:left-4'>
            <Link className='font-medium'>Air Jordan 1</Link>
          </div>
        </li>

        <li className='shrink-0 w-[38%] max-modf:w-[70%] relative'>
          <img className='w-full object-cover max-modf1:h-[60vw]' src={jordanshop4} alt="" />

          <div className='bg-white text-black absolute bottom-10 left-14 px-5 py-1.5 rounded-full hover:bg-gray-300 max-modf:left-8 max-modf:bottom-8 max-modf1:bottom-4 max-modf1:left-4'>
            <Link className='font-medium'>Air Jordan 1</Link>
          </div>
        </li>

        <li className='shrink-0 w-[38%] max-modf:w-[70%] relative'>
          <img className='w-full object-cover  max-modf1:h-[60vw]' src={jordanshop5} alt="" />

          <div className='bg-white text-black absolute bottom-10 left-14 px-5 py-1.5 rounded-full hover:bg-gray-300 max-modf:left-8 max-modf:bottom-8 max-modf1:bottom-4 max-modf1:left-4'>
            <Link className='font-medium'>Air Jordan 1</Link>
          </div>
        </li>

        <li className='shrink-0 w-[38%] mr-10 max-modf:mr-7 max-modf1:mr-3 max-modf:w-[70%] relative'>
          <img className='w-full object-cover max-modf1:h-[60vw]' src={jordanshop6} alt="" />

          <div className='bg-white text-black absolute bottom-10 left-14 px-5 py-1.5 rounded-full hover:bg-gray-300 max-modf:left-8 max-modf:bottom-8 max-modf1:bottom-4 max-modf1:left-4'>
            <Link className='font-medium'>Air Jordan 1</Link>
          </div>
        </li>*/}
      </ul>
    </div>
  )
}

export default JordanShop
