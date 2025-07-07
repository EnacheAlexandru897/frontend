import React from 'react'
import { Link } from 'react-router-dom'
import menFooter from './menFooter.json'
import MenFooterList from './MenFooterList'

const MenFooter = () => {

  const createMenFooterList = (component) =>{
    return <MenFooterList 
      id = {component.id}
      key = {component.id}
      title = {component.title}
      text1 = {component.text1}
      text2 = {component.text2}
      text3 = {component.text3}
      text4 = {component.text4}
    />
  }

  return (
    <ul className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5 pt-12
      modf3:flex modf:justify-center  max-modf3:space-y-3 modf:space-x-10 modf6:space-x-14 max-modf:justify-between'>

      {
        menFooter && menFooter.map(createMenFooterList)
      }

      {/** 
      <li className='truncate modf3:w-[20%] modf:w-45 '>
        <p className='font-bold text-[20px] truncate'>Men's Shoes</p>

        <div className='mt-7 text-gray-500 text-[16.5px] space-y-2 font-medium max-modf3:hidden'>

          <div className='truncate'>
            <Link className='hover:text-black'>Men's High Tops</Link>
          </div>
          
          <div className='truncate'>
            <Link className='hover:text-black'>Men's Cross Training Shoes</Link>
          </div>
          
          <div className='truncate'>
            <Link className='hover:text-black'>Nike Men's Track Spikes</Link>
          </div>
          
          <div className='truncate'>
            <Link className=' hover:text-black '>Men's Weightlifting Shoes</Link>
          </div>
          
        </div>
      </li>


      <li className='truncate modf3:w-[22%] modf:w-48 '>
        <p className='font-bold text-[20px] truncate'>Men's Clothing & Gear</p>

        <div className='mt-7 text-gray-500 text-[16.5px] space-y-2 font-medium max-modf3:hidden'>

          <div className='truncate'>
            <Link className='hover:text-black'>T-Shirts for Men</Link>
          </div>
          
          <div className='truncate'>
            <Link className='hover:text-black'>Men's Tank Tops</Link>
          </div>
          
          <div className='truncate'>
            <Link className='hover:text-black'>Men's 2 in 1 Shorts</Link>
          </div>
          
          <div className=' truncate'>
            <Link className=' hover:text-black '>Men's Football Shorts</Link>
          </div>
          
        </div>
      </li>


      <li className='truncate max-modf:w-[19%] '>
        <p className='font-bold text-[20px]'>Collections</p>

        <div className='mt-7 text-gray-500 text-[16.5px] space-y-2 font-medium max-modf3:hidden'>

          <div className='truncate'>
            <Link className='hover:text-black'>Men's Nike Air Max</Link>
          </div>
          
          <div className=' truncate'>
            <Link className='hover:text-black'>Men's Nike Air Max 90</Link>
          </div>
          
          <div className='truncate'>
            <Link className='hover:text-black'>Men's Huaraches</Link>
          </div>
          
          <div className='truncate'>
            <Link className=' hover:text-black '>Nike Cortez Men's</Link>
          </div>
          
        </div>
      </li>


      <li className='truncate max-modf:w-[19%] '>
        <p className='font-bold text-[20px]'>Featured</p>

        <div className='mt-7 text-gray-500 text-[16.5px] space-y-2 font-medium max-modf3:hidden'>

          <div className='truncate'>
            <Link className='hover:text-black'>Nike Run Club</Link>
          </div>
          
          <div className='truncate'>
            <Link className='hover:text-black'>Nike Training Club</Link>
          </div>
          
          <div className='truncate'>
            <Link className='hover:text-black'>Men's Sportswear</Link>
          </div>
          
          <div className=' truncate'>
            <Link className=' hover:text-black '>Men's Yoga</Link>
          </div>
          
        </div>
      </li>*/} 


    
  </ul>
  )
}

export default MenFooter
