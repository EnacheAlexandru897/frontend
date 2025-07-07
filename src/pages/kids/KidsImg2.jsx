import React from 'react'
import { Link } from 'react-router-dom'

import kidsben from '../../assets/kids/kidsben.PNG'
import kidsben1 from '../../assets/kids/kidsben2.PNG'

const KidsImg2 = () => {
  return (
    <div className='w-full relative max-modf3:px-5'>
      <img className='w-full max-modf1:hidden h-75 object-cover' src={kidsben} alt="" />
      <img className='w-full modf1:hidden h-75 object-cover' src={kidsben1} alt="" />

      <div className='modf3:w-full absolute modf3:text-center bottom-14 text-white  max-modf3:bottom-8 max-modf3:left-11'> 
        <p className='text-[63px] leading-18 max-modf12:leading-14 max-modf:leading-6 -tracking-[4px] font-black max-modf:text-[37px] max-modf:-tracking-[3px] max-modf3:-ml-0.5'>MEMBER <br className='max-modf:hidden modf12:hidden'/> HIGHLIGHTS</p>
        <p className='text-[18px] max-modf:text-[16.75px] max-modf12:mt-3'>Discover all the benefits for the entire family.</p>

        <div className='mt-8'>
          <Link className='bg-white text-black rounded-full px-4.25 hover:bg-gray-300 py-1.5 font-medium'>Learn More</Link>
        </div>
      </div>
    </div>
  )
}

export default KidsImg2
