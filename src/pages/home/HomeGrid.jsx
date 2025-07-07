import React from 'react'
import { Link } from 'react-router-dom'

import HomeGridList from './HomeGridList'
import homeGrid from './homeGrid.json'
const HomeGrid = () => {

  const createHomeGridList =(component) =>{
    return <HomeGridList 
      id = {component.id}
      key = {component.id}
      img = {component.img}
      text1 = {component.text1}
      text2 = {component.text2}
      shop = {component.shop}
    />
  }
  return (
    <ul className='px-13   py-10 modf3:grid modf3:grid-cols-2 modf3:gap-3 max-w-screen-2xl mx-auto
    max-modf:pl-8 max-modf:pr-[31px]
    max-modf3:px-0 max-modf3:space-y-3
    '>

      {
        homeGrid && homeGrid.map(createHomeGridList)
      }

      {/* 
      <li className='relative max-modf3:w-full'>
        <img className='w-full object-cover' src={look4} alt="" />
        <div className='absolute bottom-12 text-white left-12 max-modf:left-5.5'>
          <p className='font-medium text-[17px]'>Just Arrived</p>
          <p className='mt-1 font-medium text-[23px]'>Nike National Team Collection</p>
          <div className='mt-10'>
            <Link className='bg-white text-black px-4.5 py-2 rounded-full font-medium'>Shop</Link>
          </div>
          
        </div>
      </li>
      
      <li className='relative'>
        <img className='w-full object-cover' src={look5} alt="" />

        <div className='absolute bottom-12 text-white left-12 max-modf:left-5.5'>
          <p className='font-medium text-[17px]'>Shox R4</p>
          <p className='mt-1 font-medium text-[23px]'>Nike Style By</p>
          <div className='mt-8'>
            <Link className='bg-white text-black px-4.5 py-2 rounded-full font-medium'>Shop</Link>
          </div>
          
        </div>
      </li>

      <li className='relative'>
        <img className='w-full object-cover' src={look6} alt="" />
        <div className='absolute bottom-12 text-white left-12 max-modf:left-5.5'>
          <p className='font-medium text-[17px]'>Nike Form Collection</p>
          <p className='mt-1 font-medium text-[23px]'>Your One and Only Layer</p>
          <div className='mt-8'>
            <Link className='bg-white text-black px-4.5 py-2 rounded-full font-medium'>Shop</Link>
          </div>
          
        </div>
      </li>

      <li className='relative'>
        <img className='w-full object-cover' src={look7} alt="" />
        <div className='absolute bottom-12 text-white left-12 max-modf:left-5.5'>
          <p className='font-medium text-[17px]'>Nike Trail</p>
          <p className='mt-1 font-medium text-[23px]'>Run Untamed</p>
          <div className='mt-8'>
            <Link className='bg-white text-black px-4.5 py-2 rounded-full font-medium'>Shop</Link>
          </div>
          
        </div>
      </li>*/}
      
    </ul>
  )
}

export default HomeGrid
