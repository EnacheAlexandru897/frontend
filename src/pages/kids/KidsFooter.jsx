import React from 'react'
import KidsFooterList from './KidsFooterList'
import kidsFooter from './kidsFooter.json'
const KidsFooter = () => {

  const createKidsFooterList = (component) =>{
    return <KidsFooterList 
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
      modf3:flex modf:justify-center  max-modf3:space-y-3 modf:space-x-20 max-modf:justify-between
    '>

      {
        kidsFooter && kidsFooter.map(createKidsFooterList)
      }


      {/** 
      <li className='max-modf:w-1/4 modf:w-48 max-modf3:w-full'>
        <p className='truncate font-bold text-[21px]'>Kid's Shoes</p>
        <div className='mt-5 text-[17px] text-gray-500 font-medium space-y-3 w-[90%] max-modf1:w-[85%] max-modf3:hidden'>
          <p className='truncate'>Kid's Astro Boots</p>
          <p className='truncate'>Nike Air Max 270 Kids</p>
          <p className='truncate'>Kids' Gym Shoes</p>
          <p className='truncate'>Girl's Football Boots</p>
        </div>
      </li>

      <li className='max-modf:w-1/4 modf:w-48 max-modf3:w-full '>
        <p className='modf3:truncate max-modf1:w-[85%] font-bold text-[21px] max-modf3:w-[100%]'>Kids' Clothing</p>
        <div className='mt-5 text-[17px] text-gray-500 font-medium  w-[94%] max-modf1:w-[85%] max-modf3:hidden'>
          <p className='truncate'>Boys' Tracksuit Sale</p>
          <p className='truncate'>Baby & Toddler Clothes</p>
          <p className='truncate'>Leggings</p>
          <p className='truncate'>Kids' Puffer Jacket</p>
        </div>
      </li>

      <li className='max-modf:w-1/4 w-48 max-modf3:w-full'>
        <p className=' truncate font-bold text-[21px]'>Kids' Gear</p>
        <div className='mt-5 text-[17px] text-gray-500 font-medium  w-[90%] max-modf1:w-[85%] max-modf3:hidden'>
          <p className='truncate' >Football Gloves</p>
          <p className='truncate'>Kids' Football Kits</p>
          <p className='truncate'>Kids' NBA</p>
          
        </div>
      </li>

      <li className='max-modf:w-1/4 w-48 max-modf3:w-full'>
        <p className='truncate font-bold text-[21px]'>Featured</p>
        <div className='mt-5 text-[17px] text-gray-500 font-medium  w-[90%] max-modf1:w-[85%] max-modf3:hidden'>
          <p className='truncate'>Swimwear</p>
          <p className='truncate'>Nike Run Club</p>
          <p className='truncate'>Nike Training Club</p>
          <p className='truncate'>Running Sports Bras</p>
        </div>
      </li>*/}


    </ul>
  )
}

export default KidsFooter
