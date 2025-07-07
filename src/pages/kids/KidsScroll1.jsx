import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

import KidsScroll1List from './KidsScroll1List'
import kidsScroll1 from './kidsScroll1.json'
const KidsScroll1 = () => {
  const createKidsScroll1List = (component) =>{
    return <KidsScroll1List 
      id = {component.id}
      key = {component.id}
      ml1 = {component.ml1}
      ml2 = {component.ml2}
      ml3 = {component.ml3}
      img1 = {component.img1}
      img2 = {component.img2}
      name = {component.name}
    />
  }

  return (
    <div className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5 py-12'>
      <div className='px-10 max-modf:px-7 max-modf1:px-3 flex items-center justify-between '>
        <p className='text-[25px] font-medium'>Shop by Sport</p> 


        <div className='flex space-x-3 max-modf3:hidden '>
          <div className='bg-gray-100 p-3 rounded-full'>
            <MdOutlineKeyboardArrowLeft size={25}/>
          </div>

          <div className='bg-gray-100 p-3 rounded-full'>
            <MdOutlineKeyboardArrowRight size={25}/>
          </div>
        </div>
      </div>

      <ul className='overflow-x-scroll py-8 flex space-x-3'>

        {
          kidsScroll1 && kidsScroll1.map(createKidsScroll1List)
        }

        {/* 
        <li className='w-[38.25%] max-modf:w-[70%] ml-10 max-modf:ml-7 max-modf1:ml-3 shrink-0'>
          <img className='w-full object-cover max-modf1:hidden' src={kidsshop1} alt="" />
          <img className='w-full object-cover modf1:hidden' src={kidsshop6} alt="" />
          <p className='text-[22px] font-medium pt-7'>Football</p>
        </li>

        <li className='w-[38.25%] max-modf:w-[70%] shrink-0'>
          <img className='w-full object-cover max-modf1:hidden' src={kidsshop2} alt="" />
          <img className='w-full object-cover modf1:hidden' src={kidsshop7} alt="" />
          <p className='text-[22px] font-medium pt-7'>Running</p>
        </li>

        <li className='w-[38.25%] max-modf:w-[70%] shrink-0'>
          <img className='w-full object-cover max-modf1:hidden' src={kidsshop3} alt="" />
          <img className='w-full object-cover modf1:hidden' src={kidsshop8} alt="" />
          <p className='text-[22px] font-medium pt-7'>PE</p>
        </li>

        <li className='w-[38.25%] max-modf:w-[70%] shrink-0'>
          <img className='w-full object-cover max-modf1:hidden' src={kidsshop4} alt="" />
          <img className='w-full object-cover modf1:hidden' src={kidsshop9} alt="" />
          <p className='text-[22px] font-medium pt-7'>Dance</p>
        </li>

        <li className='w-[38.25%] max-modf:w-[70%] mr-10 shrink-0 max-modf:mr-7 max-modf1:mr-3'>
          <img className='w-full object-cove max-modf1:hidden' src={kidsshop5} alt="" />
          <img className='w-full object-cove modf1:hidden' src={kidsshop10} alt="" />
          <p className='text-[22px] font-medium pt-7'>Baketball</p>
        </li>*/}
      </ul>
    </div>
  )
}

export default KidsScroll1
