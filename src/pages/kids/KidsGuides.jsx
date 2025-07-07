import React from 'react'
import KidsGuidesList from './KidsGuidesList'
import kidsGuides from './kidsGuides.json'


const KidsGuides = () => {

  const createKidsGuidesList = (component) =>{
    return <KidsGuidesList 
      id = {component.id}
      key = {component.id}
      img1 = {component.img1}
      img2 = {component.img2}
      name = {component.name}
      lMore = {component.lMore}
    />

  }

  return (
    <div className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5 pb-12'>
      <div>
        <p className='text-[25px] font-medium'>Fit Guides</p> 
      </div>

      <ul className='flex max-modf3:flex-col modf3:space-x-3 max-modf3:space-y-3 py-8'>

        {
          kidsGuides && kidsGuides.map(createKidsGuidesList)
        }


        {/**      
        <li className='w-1/3 max-modf3:w-full'>
          <img className='h-141.75 w-full max-modf3:hidden  object-cover' src={kidsfitg1} alt="" />
          <img className='h-135 w-full modf3:hidden  object-cover' src={kidsfitg4} alt="" />

          <p className='mt-8 font-medium text-[22.5px]'>Kid's Football Boot Fit Guide</p>
          <div className='mt-5'>
            <Link className='bg-black text-white px-5 py-1.5 rounded-full font-medium hover:bg-gray-500'>Learn More</Link>
          </div>
        </li>


        <li className='w-1/3 max-modf3:w-full'>
          <img className='h-141.75 w-full max-modf3:hidden object-cover' src={kidsfitg2} alt="" />
          <img className='h-135 w-full modf3:hidden object-cover' src={kidsfitg5} alt="" />

          <p className='mt-8 font-medium text-[22.5px]'>Kid's Running Shoe Fit Guide</p>
          <div className='mt-5'>
            <Link className='bg-black text-white px-5 py-1.5 rounded-full font-medium hover:bg-gray-500'>Learn More</Link>
          </div>
        </li>


        <li className='w-1/3 max-modf3:w-full'>
          <img className='h-141.75 w-full max-modf3:hidden object-cover' src={kidsfitg3} alt="" />
          <img className='h-135 w-full modf3:hidden object-cover' src={kidsfitg6} alt="" />

          <p className='mt-8 font-medium text-[22.5px]'>Kid's Lifestyle Shoe Fit Guide</p>
          <div className='mt-5'>
            <Link className='bg-black text-white px-5 py-1.5 rounded-full font-medium hover:bg-gray-500'>Learn More</Link>
          </div>
        </li>*/}  
      </ul>
    </div>
  )
}

export default KidsGuides
