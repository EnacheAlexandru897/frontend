import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import kidsScroll2 from './kidsScroll2.json'
import KidsScroll2List from './KidsScroll2List'

const KidsScroll2 = () => {

  const createKidsScroll2List = (component) =>{
    return <KidsScroll2List 
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
    <div className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5 pb-12'>
      <div className='px-10 max-modf:px-7 max-modf1:px-3 flex items-center justify-between '>
        <p className='text-[25px] font-medium'>Latest & Greatest</p> 


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
          kidsScroll2 && kidsScroll2.map(createKidsScroll2List)
        }

        {/** 
        <li className='w-[30.25%] max-modf:w-[70%] ml-10 max-modf:ml-7 max-modf1:ml-3 shrink-0'>
          <img className='w-full object-cover' src={kidslatest1} alt="" />
          
          <p className='text-[22px] font-medium pt-3'>Summer Ready</p>
        </li>

        <li className='w-[30.25%] max-modf:w-[70%]  shrink-0'>
          <img className='w-full object-cover' src={kidslatest2} alt="" />
          
          <p className='text-[22px] font-medium pt-3'>Max Cushioning Ride</p>
        </li>

        <li className='w-[30.25%] max-modf:w-[70%]  shrink-0'>
          <img className='w-full object-cover' src={kidslatest3} alt="" />
          
          <p className='text-[22px] font-medium pt-3'>Teen Girls</p>
        </li>

        <li className='w-[30.25%] max-modf:w-[70%]  shrink-0'>
          <img className='w-full object-cover' src={kidslatest4} alt="" />
          
          <p className='text-[22px] font-medium pt-3'>Air Max Dn8</p>
        </li>

        <li className='w-[30.25%] max-modf:w-[70%]  shrink-0'>
          <img className='w-full object-cover' src={kidslatest5} alt="" />
          
          <p className='text-[22px] font-medium pt-3'>Fresh Footwear</p>
        </li>

        <li className='w-[30.25%] max-modf:w-[70%]  shrink-0'>
          <img className='w-full object-cover' src={kidslatest6} alt="" />
          
          <p className='text-[22px] font-medium pt-3'>Bras & Leggings</p>
        </li>

        <li className='w-[30.25%] max-modf:w-[70%] mr-10 max-modf:mr-7 max-modf1:mr-3 shrink-0'>
          <img className='w-full object-cover' src={kidslatest7} alt="" />
          
          <p className='text-[22px] font-medium pt-3'>Black & White Selects</p>
        </li>*/}

      </ul>
    </div>
  )
}

export default KidsScroll2
