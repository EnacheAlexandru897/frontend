import React from 'react'
import menSeasonalShop from './menSeasonalShop.json'
import MenSeasonalShopList from './MenSeasonalShopList'

const MenSeasonalShop = () => {

  const createMenSeasonalShopList = (component) =>{
    return <MenSeasonalShopList 
      id = {component.id}
      key = {component.id}
      img = {component.img}
      img1 = {component.img1}
      name = {component.name}
      button = {component.button}
    />
  }

  return (
    <div className='max-w-screen-2xl mx-auto px-13 py-18 max-modf:px-8 max-modf1:px-5'>
    
      <p className=' text-[22.5px] font-medium pb-7'>Your Seasonal Shop</p>

      <ul className='modf3:flex modf3:space-x-3 max-modf3:space-y-3'>

        {
          menSeasonalShop && menSeasonalShop.map(createMenSeasonalShopList)
        }

        {/** 
        <li className='relative modf3:w-1/2'>
          <img className='w-full h-79 object-covermax-modf1:hidden' src={yourseas1} alt="" />

          <img className='w-full modf1:hidden object-cover' src={yourseas3} alt="" />

          <div className='absolute bottom-14 left-10
          max-modf:bottom-8 max-modf:left-5
          '>
            <p className='text-white text-[23px] font-medium'>Running Looks</p>
            <div className='mt-7'>
              <Link className='bg-white text-black py-2 px-5 rounded-full hover:bg-gray-300'>Shop</Link>
            </div>
          </div>
        </li>

        <li className='modf3:w-1/2 relative'>
          <img className='w-full h-79 object-cover max-modf1:hidden' src={yourseas2} alt="" />


          <img className='w-full modf1:hidden object-cover' src={yourseas4} alt="" />
          

          <div className='absolute bottom-14 left-10
          max-modf:bottom-8 max-modf:left-5
          '>
            <p className='text-white text-[23px] font-medium'>Race Ready</p>
            <div className='mt-7'>
              <Link className='bg-white text-black py-2 px-5 rounded-full hover:bg-gray-300'>Shop</Link>
            </div>
          </div>

        </li>*/}
      </ul>
    </div>
  )
}

export default MenSeasonalShop
