import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import menLatest from './menLatest.json'
import MenLatestList from './MenLatestList'

const MenLatest = () => {

  const createMenLatest = (component) =>{
    return <MenLatestList 
      id = {component.id}
      key = {component.id}
      ml1 = {component.ml1}
      ml2 = {component.ml2}
      ml3 = {component.ml3}
      img = {component.img}
      name = {component.name}
      info = {component.info}
      button = {component.button}
    />
  }

  return (
    <div className='max-w-screen-2xl mx-auto py-5'>
      <div className='flex justify-between items-center w-full px-13 max-modf:px-8 max-modf1:px-5'>
        <div>
          <p className='text-[25px] font-medium pl-10 max-modf:pl-7'>Latest & Greatest</p>
        </div>
        <div className='max-modf1:hidden flex items-center space-x-3'>
        
          <div className='bg-gray-100 p-3 rounded-full'>
            <MdOutlineKeyboardArrowLeft size={25}/>
          </div>

          <div className='bg-gray-200 p-3 rounded-full hover:bg-gray-400/40 cursor-pointer'>
            <MdOutlineKeyboardArrowRight size={25}/>
          </div>
        </div>
      </div>


      <div>
        <ul className='flex overflow-x-scroll  space-x-2.5 py-8 relative'>


          {
            menLatest && menLatest.map(createMenLatest)
          }

          {/** 
          <li className=' ml-13 max-modf:ml-8 max-modf1:ml-5  w-[30%] max-modf:w-[80%] shrink-0 relative'>
            <img className='w-full object-cover' src={menlat1} alt="" />

            <div className='absolute bottom-14 text-white left-8'>
              <p className='font-medium text-[17px]'>Fear Nothing</p>
              <p className='mt-3 font-medium text-[22px]'>Nike 2025 National Team  Collections</p>

              <div className='mt-8'>
                <Link className='bg-white text-black px-4.5 py-1.5 rounded-full'>Shop</Link>
              </div>
            </div>
          </li>

          <li className='  w-[30%] shrink-0 max-modf:w-[80%]'>
            <img className='w-full object-cover' src={menlat2} alt="" />
          </li>

          <li className=' w-[30%] shrink-0 max-modf:w-[80%]'>
            <img className='w-full object-cover' src={menlat3} alt="" />
          </li>


          <li className=' w-[30%] shrink-0 max-modf:w-[80%]'>
            <img className='w-full object-cover' src={menlat4} alt="" />
          </li>

          <li className=' w-[30%] shrink-0 max-modf:w-[80%]'>
            <img className='w-full object-cover' src={menlat5} alt="" />
          </li>*/}
        </ul>
      </div>
    </div>
  )
}

export default MenLatest
