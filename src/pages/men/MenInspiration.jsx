import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import menInspiration from './menInspiration.json'
import MenInspirationList from './MenInspirationList'
const MenInspiration = () => {

  const createMenInspirationList = (component) =>{
    return <MenInspirationList 
      id = {component.id}
      key = {component.id}
      ml1 = {component.ml1}
      ml2 = {component.ml2}
      ml3 = {component.ml3}
      img = {component.img}
      title = {component.title}
    />
  }

  return (
    <div className='max-w-screen-2xl mx-auto  pt-2 pb-14  '>
      <div className='px-13 max-modf:px-8 max-modf1:px-5 flex justify-between items-center'>
        <div className='pl-10 max-modf:px-7'>
          <p className='text-[25px] font-medium'>More Inspiration</p>
        </div>

        
        <div className='flex space-x-4 max-modf3:hidden'>
          <div className='bg-gray-100 p-3 rounded-full'>
            <MdOutlineKeyboardArrowLeft size={25}/>
          </div>

          <div className='bg-gray-200 p-3 rounded-full hover:bg-gray-400/40 cursor-pointer'>
            <MdOutlineKeyboardArrowRight size={25}/>
          </div>
        </div>
      </div>

      <div className=''>
        <ul className='flex overflow-x-scroll  space-x-2.5 py-8 relative'>

          {
            menInspiration && menInspiration.map(createMenInspirationList)
          }

          {/** 
          <li className='ml-13 max-modf:ml-8 max-modf1:ml-5 w-[30%] shrink-0  max-modf:w-[80%]'>
            <img className='w-full object-cover' src={menmi1} alt="" />
            <p className='pt-4 text-[20px] font-medium'>New Releases</p>
          </li>

          <li className='w-[30%] shrink-0  max-modf:w-[80%]'>
            <img className='w-full object-cover' src={menmi2} alt="" />
            <p className='pt-4 text-[20px] font-medium'>Bestesellers</p>
          </li>

          <li className='w-[30%] shrink-0  max-modf:w-[80%]'>
            <img className='w-full object-cover' src={menmi3} alt="" />
            <p className='pt-4 text-[20px] font-medium'>Sportswear</p>
          </li>

          <li className='w-[30%] shrink-0  max-modf:w-[80%]'>
            <img className='w-full object-cover' src={menmi4} alt="" />
            <p className='pt-4 text-[20px] font-medium'>Member Shop</p>
          </li>

          <li className=' w-[30%] shrink-0  max-modf:w-[80%]'>
            <img className='w-full object-cover' src={menmi5} alt="" />
            <p className='pt-4 text-[20px] font-medium'>Accesories & Equipment</p>
          </li>*/}
        </ul>
      </div>
    </div>
  )
}

export default MenInspiration
