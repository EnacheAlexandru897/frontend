import React from 'react'
import { Link } from 'react-router-dom'
import KidsSizeForAllList from './KidsSizeForAllList'
import kidsSizeForAll from './kidsSizeForAll.json'

const KidsSizeForAll = () => {

  const createKidsForAllList = (component) =>{
    return <KidsSizeForAllList 
      id = {component.id}
      key = {component.id}
      ml = {component.ml}
      img = {component.img}
      name = {component.name}
      shop = {component.shop}
    />
  }

  return (
    <div className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5 pb-12'>
      <div className='max-modf3:ml-3'>
        <p className='text-[25px] font-medium'>Size for All</p> 
      </div>

      <ul className='flex space-x-3  py-8 max-modf3:overflow-x-scroll'>

        {
          kidsSizeForAll && kidsSizeForAll.map(createKidsForAllList)
        }

        {/** 
        <li className='w-1/4 max-modf3:shrink-0 max-modf3:w-[70%] max-modf3:ml-3 relative'>
          <img className='h-138 w-full max-modf3:h-120  object-cover' src={kidssize5} alt="" />
          
          <div className='w-[72%] absolute bottom-10 left-10'>
            <p className='text-white font-medium text-[19px]'>Babies & Toddlers (0 - 4Y)</p>
            <div className='mt-7'>
              <Link className='font-medium bg-white py-1.75 px-4.5 rounded-full hover:bg-gray-300'>Shop</Link>
            </div>
          </div>

          
        </li>


        <li className='w-1/4 max-modf3:shrink-0  max-modf3:w-[70%] relative'>
          <img className='h-138 max-modf3:h-120 w-full  object-cover' src={kidssize6} alt="" />
          
          <div className='w-[72%] absolute bottom-10 left-10'>
            <p className='text-white font-medium text-[19px]'>Younger Kids (4 - 7Y)</p>
            <div className='mt-7'>
              <Link className='font-medium bg-white py-1.75 px-4.5 rounded-full hover:bg-gray-300'>Shop</Link>
            </div>
          </div>
          
        </li>


        <li className='w-1/4 max-modf3:shrink-0 max-modf3:w-[70%] relative'>
          <img className='h-138 max-modf3:h-120 w-full  object-cover' src={kidssize7} alt="" />
          
          <div className='w-[72%] absolute bottom-10 left-10'>
            <p className='text-white font-medium text-[19px]'>Older Kids (7 - 15Y)</p>
            <div className='mt-7'>
              <Link className='font-medium bg-white py-1.75 px-4.5 rounded-full hover:bg-gray-300'>Shop</Link>
            </div>
          </div>
          
        </li>

        <li className='w-1/4 max-modf3:shrink-0 max-modf3:w-[70%] relative'>
          <img className='h-138 max-modf3:h-120 w-full  object-cover' src={kidssize8} alt="" />
          
          <div className='w-[72%] absolute bottom-10 left-10'>
            <p className='text-white font-medium text-[19px]'>Extended Sizes</p>
            <div className='mt-7'>
              <Link className='font-medium bg-white py-1.75 px-4.5 rounded-full hover:bg-gray-300'>Shop</Link>
            </div>
          </div>
          
        </li>*/}
      </ul>
    </div>
  )
}

export default KidsSizeForAll
