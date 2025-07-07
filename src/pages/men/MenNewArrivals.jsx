import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

import menNewArrivals from './menNewArrivals.json'
import MenNewArrivalsList from './MenNewArrivalsList'

const MenNewArrivals = () => {

  const createMenNewArrivalsList = (component) =>{
    return <MenNewArrivalsList 
      id = {component.id}
      key = {component.id}
      ml1 = {component.ml1}
      ml2 = {component.ml2}
      ml3 = {component.ml3}
      img = {component.img}
      title = {component.title}
      info = {component.info}
      price = {component.price}
    />
  }

  return (
    <div className='max-w-screen-2xl mx-auto  py-5'>
      <div className='flex justify-between items-center w-full px-13 max-modf:px-8 max-modf1:px-5'>
        <div>
          <p className='text-[25px] font-medium pl-10 max-modf:pl-7'>New Arrivals</p>
        </div>
        <div className='max-modf1:hidden flex items-center space-x-3'>
          <div>
            <Link className='font-medium hover:text-gray-500'>Discover All</Link>
          </div>

          <div className='bg-gray-100 p-3 rounded-full'>
            <MdOutlineKeyboardArrowLeft size={25}/>
          </div>

          <div className='bg-gray-200 p-3 rounded-full hover:bg-gray-400/40 cursor-pointer'>
            <MdOutlineKeyboardArrowRight size={25}/>
          </div>
        </div>
      </div>

      <div className=' '>
        
        <ul className='flex  overflow-x-scroll space-x-3 relative py-8'>
          
          {
            menNewArrivals && menNewArrivals.map(createMenNewArrivalsList)
          }

          {/** 
          <li className='ml-13 max-modf:ml-8 max-modf1:ml-5 w-[30%] shrink-0  max-modf:w-[80%]'>
            <img className='w-full object-cover' src={men1} alt="" />
            <p className='font-medium text-[16.5px]'>Nike ReactX Rejuven8</p>
            <p className='text-gray-500 text-[16.5px]'>Men's Slides</p>
            <p className='font-medium mt-3 text-[17px]'>RON 299.99</p>
          </li>

          <li className='w-[30%] shrink-0  max-modf:w-[80%]'>
            <img className='w-full object-cover' src={men2} alt="" />
            <p className='font-medium text-[16.5px]'>Nike Pregasus Premium</p>
            <p className='text-gray-500 text-[16.5px]'>Men's Road Running Shoes</p>
            <p className='font-medium mt-3 text-[17px]'>RON 1,049.99</p>
          </li>

          <li className='w-[30%] shrink-0  max-modf:w-[80%]'>
            <img className='w-full object-cover' src={men3} alt="" />
            <p className='font-medium text-[16.5px]'>Nike Air MAx 95 SP</p>
            <p className='text-gray-500 text-[16.5px]'>Men's Shoes</p>
            <p className='font-medium mt-3 text-[17px]'>RON 1,049.99</p>
          </li>

          <li className='w-[30%] shrink-0  max-modf:w-[80%]'>
            <img className='w-full object-cover' src={men4} alt="" />
            <p className='font-medium text-[16.5px]'>Nike Vomero 18 SE</p>
            <p className='text-gray-500 text-[16.5px]'>Men's Road Running Shoes</p>
            <p className='font-medium mt-3 text-[17px]'>RON 799.99</p>
          </li>
          
          
          <li className='w-[30%] shrink-0  max-modf:w-[80%]'>
            <img className='w-full object-cover' src={men5} alt="" />
            <p className='font-medium text-[16.5px]'>England Club</p>
            <p className='text-gray-500 text-[16.5px]'>Men's Nike Football Knit Polo</p>
            <p className='font-medium mt-3 text-[17px]'>RON 449.99</p>
          </li>


          <li className='w-[30%] shrink-0  max-modf:w-[80%]'>
            <img className='w-full object-cover' src={men6} alt="" />
            <p className='font-medium text-[16.5px]'>Niko Vomero 18</p>
            <p className='text-gray-500 text-[16.5px]'>Men's Road Running Shoes</p>
            <p className='font-medium mt-3 text-[17px]'>RON 749.99</p>
          </li>

          <li className='w-[30%] shrink-0  max-modf:w-[80%]'>
            <img className='w-full object-cover' src={men7} alt="" />
            <p className='font-medium text-[16.5px]'>FFF Club</p>
            <p className='text-gray-500 text-[16.5px]'>Men's Nike Football Knit Polo</p>
            <p className='font-medium mt-3 text-[17px]'>RON 449.99</p>
          </li>

          <li className='w-[30%] shrink-0  max-modf:w-[80%]'>
            <img className='w-full object-cover' src={men8} alt="" />
            <p className='font-medium text-[16.5px]'>Nike Air Max TL 2.5</p>
            <p className='text-gray-500 text-[16.5px]'>Men's Shoes</p>
            <p className='font-medium mt-3 text-[17px]'>RON 899.99</p>
          </li>

          <li className='w-[30%] shrink-0  max-modf:w-[80%]'>
            <img className='w-full object-cover' src={men9} alt="" />
            <p className='font-medium text-[16.5px]'>Nike Hypervenom Phantom RGN SE 'Bright Citrus'</p>
            <p className='text-gray-500 text-[16.5px]'>Firm-Ground Low-Top Football Boot</p>
            <p className='font-medium mt-3 text-[17px]'>RON 1,249.99</p>
          </li>

          <li className='w-[30%] shrink-0  max-modf:w-[80%]'>
            <img className='w-full object-cover' src={men10} alt="" />
            <p className='font-medium text-[16.5px]'>Nike P-6000</p>
            <p className='text-gray-500 text-[16.5px]'>Shoes</p>
            <p className='font-medium mt-3 text-[17px]'>RON 549.99</p>
          </li>*/}
          
          
          

        
        </ul>
        
      </div>
    </div>
  )
}

export default MenNewArrivals
