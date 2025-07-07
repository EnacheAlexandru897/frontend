import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import womenLatest from './womenLatest.json'
import WomenLatestList from './WomenLatestList'

const WomenLatest = () => {

  const createWomenLatestList = (component) =>{
    return <WomenLatestList 
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
    <div className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5 py-12'>
      <div className='flex items-center justify-between px-10 max-modf:px-7 max-modf1:x-3'>
        <p className='text-[25px] font-medium'>Latest & Greates</p>

        <div className='flex space-x-3 max-modf3:hidden'>
          <div className='bg-gray-100 p-3 rounded-full'>
            <MdOutlineKeyboardArrowLeft size={25}/>
          </div>

          <div className='bg-gray-100 p-3 rounded-full'>
            <MdOutlineKeyboardArrowRight size={25}/>
          </div>
        </div>
      </div>

      
      <div className=''>

        <ul className=' overflow-x-scroll  py-8  flex space-x-3'>

          {
            womenLatest && womenLatest.map(createWomenLatestList)
          }

          {/** 
          <li className='w-[30%] max-modf:w-[80%] shrink-0  ml-10 max-modf:ml-7 max-modf1:ml-3'>
            <img className='w-full object-cover' src={womenlat1} alt="" />
            <p className='mt-3 font-medium text-[20px]'>Summer Ready</p>
          </li>

          <li className='w-[30%] max-modf:w-[80%] shrink-0 '>
            <img className='w-full object-cover' src={womenlat2} alt="" />
            <p className='mt-3 font-medium text-[20px]'>Nike From Collection</p>
          </li>

          <li className='w-[30%] max-modf:w-[80%] shrink-0 '>
            <img className='w-full object-cover' src={womenlat3} alt="" />
            <p className='mt-3 font-medium text-[20px]'>Max Cushioning Ride</p>
          </li>

          <li className='w-[30%] max-modf:w-[80%] shrink-0 '>
            <img className='w-full object-cover' src={womenlat4} alt="" />
            <p className='mt-3 font-medium text-[20px]'>Nike Style By</p>
          </li>

          <li className='w-[30%] max-modf:w-[80%] shrink-0 '>
            <img className='w-full object-cover' src={womenlat5} alt="" />
            <p className='mt-3 font-medium text-[20px]'>Perfect Leggings</p>
          </li>

          <li className='w-[30%] max-modf:w-[80%] shrink-0 '>
            <img className='w-full object-cover' src={womenlat6} alt="" />
            <p className='mt-3 font-medium text-[20px]'>Nike Prism Pack</p>
          </li>

          <li className='w-[30%] max-modf:w-[80%] shrink-0 '>
            <img className='w-full object-cover' src={womenlat7} alt="" />
            <p className='mt-3 font-medium text-[20px]'>Nike Air Max</p>
          </li>*/}
        </ul>
      </div>
    </div>
  )
}

export default WomenLatest
