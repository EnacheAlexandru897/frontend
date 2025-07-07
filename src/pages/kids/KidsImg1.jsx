import React from 'react'
import { Link } from 'react-router-dom'
import kids from '../../assets/kids/kids.PNG'
import kids1 from '../../assets/kids/kids1.PNG'

const KidsImg1 = () => {
  return (
    <div className='relative w-full modf3:text-white'>
      <img className='w-full object-cover max-modf3:hidden' src={kids} alt="" />
      <img className='w-full object-cover modf3:hidden' src={kids1} alt="" />

      <div className='modf3:absolute bottom-10 max-modf:bottom-8 modf3:text-center max-modf3:px-5 w-full  max-modf3:pt-10'>
        <p className='text-[66px] max-modf:text-[40px] max-modf3:text-[34px] max-modf3:-tracking-[2.5px] font-black modf3:-tracking-[4px] max-modf1:leading-9 leading-14.5'>HELP THEM FEAR <br className='max-modf:hidden' /> <br className='modf1:hidden max-modf3:hidden'/> NOTHING</p>
        <p className='text-[18px] max-modf3:text-[17.25px] font-medium modf:mt-3 max-modf:-mt-1 max-modf1:mt-2'>The 2025 National Team Collections have <br className='modf1:hidden max-modf3:hidden'/> arrived.</p>
        <div className='mt-10 max-modf:mt-8'>
          <Link className='bg-white py-2 text-black px-5 rounded-full font-medium max-modf3:bg-black max-modf3:text-white
            hover:bg-gray-300 max-modf3:hover:bg-gray-500'>Shop</Link>
        </div>
      </div>
    </div>
  )
}

export default KidsImg1
