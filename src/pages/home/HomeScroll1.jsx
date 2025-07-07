import React from 'react'
 
import HomeScroll1List from './HomeScroll1List'
import homeScroll1 from  './homeScroll1.json'

const HomeScroll1 = () => {

  const createHomeScroll1List = (component) =>{
    return <HomeScroll1List
      id = {component.id} 
      key = {component.id}
      img = {component.img}
      text = {component.text}
    />
  }
  return (
    <ul className='px-13 pr-11.75 py-10 flex max-w-screen-2xl mx-auto space-x-3
    max-modf:px-8 max-modf:overflow-x-scroll
    '>

      {
        homeScroll1 && homeScroll1.map(createHomeScroll1List)
      }

      {/* 
      <li className='w-[32.5%] max-modf:w-[76%] max-modf:shrink-0 relative'>
        <img className='object-cover w-full' src={look1} alt="" />
        <div className='absolute bottom-12 text-black left-12 '>
          <button className='relative flex items-center font-medium bg-white py-1.5 pl-4 pr-4 cursor-pointer rounded-full
          hover:bg-gray-200
          '>
            <IoEyeOutline  className='mr-1' size={22}/>
            Shop the Look</button>
        </div>
        
      </li>

      <li className='w-[32.5%] max-modf:w-[76%] max-modf:shrink-0 relative '>
        <img className='object-cover w-full' src={look2} alt="" />
        <div className='absolute bottom-12 text-black left-12 '>
          <button className='relative flex items-center font-medium bg-white py-1.5 pl-4 pr-4 cursor-pointer rounded-full
          hover:bg-gray-200
          '>
            <IoEyeOutline  className='mr-1' size={22}/>
            Shop the Look</button>
        </div>
        
      </li>

      <li className='w-[32.5%] max-modf:w-[76%] max-modf:shrink-0 relative '>
        <img className='object-cover w-full' src={look3} alt="" />
        <div className='absolute bottom-12 text-black left-12 '>
          <button className='relative flex items-center font-medium bg-white py-1.5 pl-4 pr-4 cursor-pointer rounded-full
          hover:bg-gray-200
          '>
            <IoEyeOutline  className='mr-1' size={22}/>
            Shop the Look</button>
        </div>
        
      </li>*/}

    </ul>
  )
}

export default HomeScroll1
