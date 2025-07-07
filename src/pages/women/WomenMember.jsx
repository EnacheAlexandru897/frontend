import React from 'react'
import womenMember from './womenMember.json'
import WomenMemberList from './WomenMemberList'

const WomenMember = () => {

  const createWomenMemberList = (component) =>{
    return <WomenMemberList 
      id = {component.womenMember}
      key = {component.womenMember}
      ml1 = {component.ml1}
      ml2 = {component.ml2}
      img = {component.img}
      name = {component.name}
      info = {component.info}
      button = {component.button}
    />
  }

  return (
    <div className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5 py-14' >
      <div className='text-[25px] font-medium px-10 max-modf:px-7 pb-4'>
        <p>Member Benefit</p>
      </div>

      <ul className='flex space-x-3 modf12:px-10 max-modf12:overflow-x-scroll  pb-6'>

        {
          womenMember && womenMember.map(createWomenMemberList)
        }

        {/** 
        <li className='modf12:w-1/3 max-modf12:w-[32.75%] relative max-modf12:ml-10 max-modf:ml-7 max-modf:w-[80%]   max-modf12:shrink-0'>
          <img className='w-full max-modf1:h-130 object-cover' src={womenmember1} alt="" /> 


          <div className='absolute bottom-12 left-11 max-modf1:left-6 text-white'>
            <p className='font-medium text-[17px]'>Member Product</p>
            <p className='mt-2 font-medium leading-[29px] tracking-[0px] text-[25px] modf12:w-[88%] m'>First and  Exclusive  Access   to Products</p>

            <div className='mt-8'>
              <Link className='px-5 py-1.75 bg-white text-black rounded-full
              hover:bg-gray-300
              '>Shop with Us</Link>
            </div>
          </div>
        </li>

        <li className='modf12:w-1/3 max-modf12:w-[32.75%] max-modf:w-[80%] relative   max-modf12:shrink-0'>
          <img className='w-full max-modf1:h-130 object-cover' src={womenmember2} alt="" />

          <div className='absolute bottom-12 left-11 max-modf1:left-6 text-white'>
            <p className='font-medium text-[17px]'>Nike Run Club</p>
            <p className='mt-2 font-medium leading-[29px] tracking-[0px] text-[25px] w-[95%]'>Run Tracking, Audio Guided Runs  and  Expert Tips</p>

            <div className='mt-8'>
              <Link className='px-5 py-1.75 bg-white text-black rounded-full
              hover:bg-gray-300
              '>Run With Us</Link>
            </div>
          </div>
        </li>

        <li className='modf12:w-1/3 max-modf12:w-[32.75%] max-modf:w-[80%] relative  max-modf12:shrink-0'>
          <img className='w-full max-modf1:h-130 object-cover' src={womenmember3} alt="" />

          <div className='absolute bottom-12 left-11 max-modf1:left-6 text-white'>
            <p className='font-medium text-[17px]'>Nike Training Club</p>
            <p className='mt-2 font-medium leading-[29px] tracking-[0px] text-[25px] w-[84%]'>Hundreds of  Workouts Breathwork and More</p>

            <div className='mt-8'>
              <Link className='px-5 py-1.75 bg-white text-black rounded-full
              hover:bg-gray-300
              '>Move With Us</Link>
            </div>
          </div>
        </li>*/}
      </ul>
    </div>
  )
}

export default WomenMember
