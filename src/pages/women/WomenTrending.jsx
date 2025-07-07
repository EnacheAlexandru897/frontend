import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

import womenTrending from './womenTrending.json'
import WomenTrendingList from './WomenTrendingList'

const WomenTrending = () => {

  const createWomenTrendingList = (component) =>{
    return <WomenTrendingList 
      id = {component.id}
      key = {component.id}
      ml1 = {component.ml1}
      ml2 = {component.ml2}
      ml3 = {component.ml3}
      img = {component.img}
      name = {component.name}
      info = {component.info}
      price = {component.price}
    />
  }

  return (
    <div className='max-w-screen-2xl mx-auto  py-5'>
      <div className='px-13 max-modf:px-8 max-modf1:px-5 flex items-center justify-between '>
        <p className='text-[25px] font-medium'>Trending This Week</p>

        <div className='flex space-x-3 max-modf3:hidden'>
          <div className='bg-gray-100 p-3 rounded-full'>
            <MdOutlineKeyboardArrowLeft size={25}/>
          </div>

          <div className='bg-gray-100 p-3 rounded-full'>
            <MdOutlineKeyboardArrowRight size={25}/>
          </div>
        </div>
      </div>

      <div>

        <ul className='flex  overflow-x-scroll pt-5 pb-8 space-x-3'>
          
          {
            womenTrending && womenTrending.map(createWomenTrendingList)
          }


          {/** 
          <li className='w-[30%] max-modf:w-[80%]  shrink-0 ml-13 max-modf:ml-8 max-modf1:ml-5'>
            <img className='w-full object-cover' src={womentre1} alt="" />
            <p className='font-medium text-[16.5px] mt-4'>Nike Sportswear</p>
            <p className='text-[16px] text-gray-500'>Women's Denim Trousers</p>
            <p className='font-medium text-[17px] mt-2.5'>RON 449.99</p>
          </li>

          <li className='w-[30%] max-modf:w-[80%]  shrink-0'>
            <img className='w-full object-cover' src={womentre2} alt="" />
            <p className='font-medium text-[16.5px] mt-4'>Nike Field General 'Butter'</p>
            <p className='text-[16px] text-gray-500'>Women's Shoes</p>
            <p className='font-medium text-[17px] mt-2.5'>RON 549.99</p>
          </li>

          <li className='w-[30%] max-modf:w-[80%]  shrink-0'>
            <img className='w-full object-cover' src={womentre3} alt="" />
            <p className='font-medium text-[16.5px] mt-4'>Nike Pacific</p>
            <p className='text-[16px] text-gray-500'>Women's Shoes</p>
            <p className='font-medium text-[17px] mt-2.5'>RON 379.99</p>
          </li>

          <li className='w-[30%] max-modf:w-[80%]  shrink-0'>
            <img className='w-full object-cover' src={womentre4} alt="" />
            <p className='font-medium text-[16.5px] mt-4'>Nike Free Metcon 6</p>
            <p className='text-[16px] text-gray-500'>Women's Workout Shoes</p>
            <p className='font-medium text-[17px] mt-2.5'>RON 649.99</p>
          </li>

          <li className='w-[30%] max-modf:w-[80%]  shrink-0'>
            <img className='w-full object-cover' src={womentre5} alt="" />
            <p className='font-medium text-[16.5px] mt-4'>Nike Pegasus 41</p>
            <p className='text-[16px] text-gray-500'>Women's Road Running Shoes</p>
            <p className='font-medium text-[17px] mt-2.5'>RON 699.99</p>
          </li>

          <li className='w-[30%] max-modf:w-[80%]  shrink-0'>
            <img className='w-full object-cover' src={womentre6} alt="" />
            <p className='font-medium text-[16.5px] mt-4'>Nike Sportswear</p>
            <p className='text-[16px] text-gray-500'>Women's T-shirt</p>
            <p className='font-medium text-[17px] mt-2.5'>RON 199.99</p>
          </li>

          <li className='w-[30%] max-modf:w-[80%]  shrink-0'>
            <img className='w-full object-cover' src={womentre7} alt="" />
            <p className='font-medium text-[16.5px] mt-4'>Nike LD-1000</p>
            <p className='text-[16px] text-gray-500'>Women's Shoes</p>
            <p className='font-medium text-[17px] mt-2.5'>RON 449.99</p>
          </li>*/}
        </ul>
      </div>


    </div>
  )
}

export default WomenTrending
