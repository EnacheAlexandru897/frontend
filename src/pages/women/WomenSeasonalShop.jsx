import React from 'react'
import womenSeasonalShop from './womenSeasonalShop.json'
import WomenSeasonalShopList from './WomenSeasonalShopList'
const WomenSeasonalShop = () => {

  const createWomenSeasonalShopList = (component) =>{
    return <WomenSeasonalShopList 
      id = {component.key}
      key = {component.key}
      img = {component.img}
      img1 = {component.img1}
      name = {component.name}
      button = {component.button}
    />
  }

  return (
    <div className='px-13 max-modf:px-8 max-modf1:px-5 max-w-screen-2xl mx-auto'>
      <div className='py-3 text-[25px] font-medium'>
        <p>Seasonal Shop</p>
      </div>

      <ul className='flex max-modf3:flex-col modf3:space-x-3 max-modf3:space-y-3'>
        
        {
          womenSeasonalShop && womenSeasonalShop.map(createWomenSeasonalShopList)
        }

        {/** 
        <li className='modf3:w-1/2 relative'>
          <img className='w-full h-79 object-cover max-modf1:hidden' src={womenseas1} alt="" />
          <img className='w-full h-89 max-modf3:h-155 object-cover modf1:hidden' src={womenseas3} alt="" />

          <div className='absolute  bottom-14 max-modf:bottom-8 text-white left-10 max-modf:left-7 max-modf1:left-3'>
            <p className='font-medium text-[20px]'>Fresh styles for summer days</p>
            <div className='mt-8'>
              <Link className='py-1.75 font-medium px-4.5 rounded-full bg-white text-black'>Shop</Link>
            </div>
          </div>
        </li>

        <li className='modf3:w-1/2 relative'>
          <img className='w-full h-79 object-cover max-modf1:hidden' src={womenseas2} alt="" />
            <img className='w-full h-89 object-cover modf1:hidden max-modf3:h-155' src={womenseas4} alt="" />
          
          <div className='absolute  bottom-14 max-modf:bottom-8 text-white left-10 max-modf:left-7 max-modf1:left-3'>
            <p className='font-medium text-[20px]'>Summer Training</p>
            <div className='mt-8'>
              <Link className='py-1.75 font-medium px-4.5 rounded-full bg-white text-black'>Shop</Link>
            </div>
          </div>
        </li>*/}
      </ul>
    </div>
  )
}

export default WomenSeasonalShop
