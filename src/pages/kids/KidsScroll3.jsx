import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import kidsScroll3 from './kidsScroll3.json'
import KidsScroll3List from './KidsScroll3List'

const KidsScroll3 = () => {

  const createKidsScroll3List = (component) =>{
    return <KidsScroll3List 
      id = {component.id}
      key = {component.id}
      ml1 = {component.ml1}
      ml2 = {component.ml2}
      ml3 = {component.ml3}
      img = {component.img}
      name = {component.name}
      text = {component.text}
      price = {component.price}
    />
  }

  return (
    <div className='max-w-screen-2xl mx-auto  pb-12'>
        <div className='px-13 max-modf:px-8 max-modf1:px-5 flex items-center justify-between '>
          <p className='text-[25px] font-medium'>Tredning This Week</p> 


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
            kidsScroll3 && kidsScroll3.map(createKidsScroll3List)
          }

          {/** 
          <li className='ml-13 max-modf:ml-8 max-modf1:ml-5 w-[30%] max-modf:w-[70%]  shrink-0'>
            <img className='w-full object-cover' src={kidstrending1} alt="" />
            
            <div className='leading-6'>
              <p className='text-[17px] font-medium pt-3'>Nike Multi</p>
              <p className='text-[17px] text-gray-500'>Older Kids' Dri-FIT Training Shorts</p>
              <p className='font-medium text-[17px]'>RON 99.99</p>
            </div>
          </li>

          <li className=' w-[30%] max-modf:w-[70%]  shrink-0'>
            <img className='w-full object-cover' src={kidstrending2} alt="" />
            
            <div className='leading-6'>
              <p className='text-[17px] font-medium pt-3'>Nike Vomero 5</p>
              <p className='text-[17px] text-gray-500'>Older KiKid's Shoes</p>
              <p className='font-medium text-[17px]'>RON 549.99</p>
            </div>
          </li>


          <li className=' w-[30%] max-modf:w-[70%]  shrink-0'>
            <img className='w-full object-cover' src={kidstrending3} alt="" />
            
            <div className='leading-6'>
              <p className='text-[17px] font-medium pt-3'>Nike Field General</p>
              <p className='text-[17px] text-gray-500'>Older Kids' Shoes</p>
              <p className='font-medium text-[17px]'>RON 379.99</p>
            </div>
          </li>

          <li className=' w-[30%] max-modf:w-[70%]  shrink-0'>
            <img className='w-full object-cover' src={kidstrending4} alt="" />
            
            <div className='leading-6'>
              <p className='text-[17px] font-medium pt-3'>Nike Sportswear</p>
              <p className='text-[17px] text-gray-500'>Older Kids' (Girls') Oversized T-Shirt</p>
              <p className='font-medium text-[17px]'>RON 139.99</p>
            </div>
          </li>

          <li className=' w-[30%] max-modf:w-[70%]  shrink-0'>
            <img className='w-full object-cover' src={kidstrending5} alt="" />
            
            <div className='leading-6'>
              <p className='text-[17px] font-medium pt-3'>Nike Flex Runner 3</p>
              <p className='text-[17px] text-gray-500'>Older Kids' Shoes</p>
              <p className='font-medium text-[17px]'>RON 179.99</p>
            </div>
          </li>

          <li className=' w-[30%] max-modf:w-[70%]  shrink-0'>
            <img className='w-full object-cover' src={kidstrending6} alt="" />
            
            <div className='leading-6'>
              <p className='text-[17px] font-medium pt-3'>Nike Pro</p>
              <p className='text-[17px] text-gray-500'>Girls' Shorts</p>
              <p className='font-medium text-[17px]'>RON 119.99</p>
            </div>
          </li>

          <li className=' w-[30%] max-modf:w-[70%]  shrink-0'>
            <img className='w-full object-cover' src={kidstrending7} alt="" />
            
            <div className='leading-6'>
              <p className='text-[17px] font-medium pt-3'>Nike Force 1 Low EasyOn</p>
              <p className='text-[17px] text-gray-500'>Baby/Toddler Shoes</p>
              <p className='font-medium text-[17px]'>RON 299.99</p>
            </div>
          </li>

          <li className=' w-[30%] max-modf:w-[70%]  shrink-0'>
            <img className='w-full object-cover' src={kidstrending8} alt="" />
            
            <div className='leading-6'>
              <p className='text-[17px] font-medium pt-3'>Nike Force 1 Low EasyOn</p>
              <p className='text-[17px] text-gray-500'>Younger Kids' Shoes</p>
              <p className='font-medium text-[17px]'>RON 349.99</p>
            </div>
          </li>

          <li className=' w-[30%] max-modf:w-[70%]  shrink-0'>
            <img className='w-full object-cover' src={kidstrending9} alt="" />
            
            <div className='leading-6'>
              <p className='text-[17px] font-medium pt-3'>Nike Cosmic Runer</p>
              <p className='text-[17px] text-gray-500'>Baby/Toddler Shoes</p>
              <p className='font-medium text-[17px]'>RON 179.99</p>
            </div>
          </li>

          <li className='mr-13 max-modf:mr-8 max-modf1:mr-5 w-[30%] max-modf:w-[70%]  shrink-0'>
            <img className='w-full object-cover' src={kidstrending10} alt="" />
            
            <div className='leading-6'>
              <p className='text-[17px] font-medium pt-3'>Nike Sportswear</p>
              <p className='text-[17px] text-gray-500'>Older Kids' T-Shirt</p>
              <p className='font-medium text-[17px]'>RON 79.99</p>
            </div>
          </li>*/}
          

        </ul>
      </div>
  )
}

export default KidsScroll3
