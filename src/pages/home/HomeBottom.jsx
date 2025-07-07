import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
  return (
    <div className='mt-2 max-w-screen-2xl mx-auto '>

      <div className='max-modf:px-8 max-modf1:px-5 modf:justify-center flex modf:space-x-23 max-modf:justify-between  max-modf3:justify-start max-modf3:flex-col'>
          <div className='space-y-4 text-gray-500  '>
            <p className='font-medium text-[22px] text-black'>Shoes</p>
            <div className='max-modf4:w-34 max-modf1:w-28 max-modf3:hidden'>
              <Link className='hover:text-black'><p className='mt-7 text-[17px] font-medium truncate'>Black Running Shoes</p></Link>
            </div>
            <div className='max-modf4:w-34 max-modf1:w-29 max-modf3:hidden'>
              <Link className='hover:text-black'><p className='text-[17px] font-medium truncate'>White Running Shoes</p></Link>
            </div>
            
            <div className='max-modf3:hidden'>
              <Link className='hover:text-black'><p className='text-[17px] font-medium truncate'>Nike P-6000</p></Link>
            </div>
            <div className='max-modf3:hidden'>
              <Link className='hover:text-black'><p className='text-[17px] font-medium truncate'>Nike Initiator</p></Link>
            </div>
            
        </div>

        <div className='space-y-4 text-gray-500  '>
          <p className='font-medium text-[22px] text-black'>Clothing</p>
          <div className='max-modf1:w-25 max-modf3:hidden'>
            <Link className='hover:text-black'><p className='mt-7 text-[17px] font-medium truncate'>Yoga Trousers</p></Link>
          </div>
          <div className='max-modf4:w-31 max-modf1:w-26 max-modf3:hidden'>
            <Link className='hover:text-black'><p className='text-[17px] font-medium truncate'>Tech Fleece Joggers</p></Link>
          </div>
          
          <div className='max-modf3:hidden'>
            <Link className='hover:text-black'><p className='text-[17px] font-medium truncate'>Tech Fleece</p></Link>
          </div>
          
          
        </div>

        <div className='space-y-4 text-gray-500 '>
          <p className='font-medium text-[22px] text-black'>Kids'</p>
          <div className=' max-modf3:hidden max-modf4:w-31 max-modf1:w-27'>
            <Link className='hover:text-black'><p className='mt-7 text-[17px] font-medium truncate'>Girls' Black Shoes</p></Link>
          </div>
          <div className='max-modf3:hidden max-modf4:w-31 max-modf1:w-27'>
            <Link className='hover:text-black'><p className='text-[17px] font-medium truncate'>Kids' Black Shoes</p></Link>
          </div>
          
          
          
        </div>

        <div className='space-y-4 text-gray-500 '>
          <p className='font-medium text-[22px] text-black'>Featured</p>
          <div className='max-modf4:w-34 max-modf1:w-28 max-modf3:hidden'>
            <Link className='hover:text-black'><p className='mt-7 text-[17px] font-medium truncate'>Football Club Teams</p></Link>
          </div>
          <div className='max-modf3:hidden'>
            <Link className='hover:text-black'><p className='text-[17px] font-medium truncate'>Football</p></Link>
          </div>
          
          <div className='max-modf3:hidden'>
            <Link className='hover:text-black'><p className='text-[17px] font-medium truncate'>Nike England</p></Link>
          </div>
          <div className='max-modf3:hidden max-modf1:w-27'>
            <Link className='hover:text-black'><p className='text-[17px] font-medium truncate'>Nike Run Club</p></Link>
          </div>
          
        </div>
      </div>

      
    </div>
  )
}

export default HomeBottom
