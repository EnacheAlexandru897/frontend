import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
 
import KidsBestReadsList from './KidsBestReadsList'
import kidsBestReads from './kidsBestReads.json'

const KidsBestReads = () => {

  const createKidsBestReadsList = (component) =>{
    return <KidsBestReadsList 
      id = {component.id}
      key = {component.id}
      ml1 = {component.ml1}
      ml2 = {component.ml2}
      ml3 = {component.ml3}
      img = {component.img}
      img1 = {component.img1}
      text = {component.text}
      name = {component.name}
      info = {component.info}
    />
  }

  return (
    <div className='max-w-screen-2xl mx-auto  pb-12'>
      <div className='px-13 max-modf:px-8 max-modf1:px-5 flex items-center justify-between '>
        <p className='pl-10 max-modf:pl-7 max-modf1:pl-3 text-[25px] font-medium'>Best Reads</p> 


        <div className='flex space-x-3 max-modf3:hidden pr-10 max-modf:pr-7 max-modf1:pr-3'>
          <div className='bg-gray-100 p-3 rounded-full'>
            <MdOutlineKeyboardArrowLeft size={25}/>
          </div>

          <div className='bg-gray-100 p-3 rounded-full'>
            <MdOutlineKeyboardArrowRight size={25}/>
          </div>
        </div>
      </div>

      <ul className='overflow-x-scroll overflow-y-hidden flex px-13 max-modf:px-8 max-modf1:px-5 space-x-3 py-8'>

        {
          kidsBestReads && kidsBestReads.map(createKidsBestReadsList)
        }

        {/** 
        <li className='modf:w-112.75 max-modf:w-[74%] shrink-0 ml-10 max-modf:ml-7 max-modf1:ml-3 '>
          <img className='w-full modf:h-74.25 object-cover max-modf1:hidden' src={kidsbestr1} alt="" />
          <img className='w-full modf1:hidden h-[98%] object-cover' src={kidsbestr5} alt="" />

          <div>
            <p className='text-gray-500 text-[17px] font-medium'>Nike and LEGO® partnership</p>
            <p className='font-medium text-[24px]'>Sport Is Our Play</p>
            <p className='text-[21px] max-modf:text-[18.25px]'>Introducing our newest partner in play, the LEGO Group. With our shared commitment to sport and creativity, we're building a world of infinite possibilites.</p>
          </div>
        </li>


        <li className='modf:w-112.75 max-modf:w-[74%] shrink-0'>
          <img className='w-full max-modf1:h-[98%] modf:h-74.25  object-cover' src={kidsbestr2} alt="" />

          <div>
            <p className='text-gray-500 text-[17px] font-medium'>Buying Guide</p>
            <p className='font-medium text-[24px]'>The Best Nike Leggings for Kids</p>
            <p className='text-[21px] max-modf:text-[18.25px]'>Explore comfy, versatile Nike leggings for kids in this Nike buying guide.</p>
          </div>
        </li>

        
        <li className='modf:w-112.75 max-modf:w-[74%] shrink-0'>
          <img className='w-full modf:h-74.25 object-cover max-modf1:h-[98%]'  src={kidsbestr3} alt="" />

          <div>
            <p className='text-gray-500 text-[17px] font-medium'>Sizing Tips</p>
            <p className='font-medium text-[24px]'>Girls Sports Bra Fit Guide</p>
            <p className='text-[21px] max-modf:text-[18.25px]'>Finding the perfect bra fit with the right support fuels her confidence. tap into this step-by-step guide for everything you need to know.</p>
          </div>
        </li>


        <li className='modf:w-112.75  max-modf:w-[74%] shrink-0  mr-10 max-modf:mr-7 max-modf1:mr-3'>
          <img  className='w-full modf:h-74.25 object-cover max-modf1:h-[98%]' src={kidsbestr4} alt="" />

          <div>
            <p className='text-gray-500 text-[17px] font-medium'>Buying Guide</p>
            <p className='font-medium text-[24px]'>The Best Nike Shoes for Kids</p>
            <p className='text-[21px] max-modf:text-[18.25px]'>Whether their day calls for pick-up basketball, hopscotch or sprints around the track, there's a Nike kids' shoe for every young athlete.</p>
          </div>
        </li>*/}

      </ul>
    </div>
  )
}

export default KidsBestReads
