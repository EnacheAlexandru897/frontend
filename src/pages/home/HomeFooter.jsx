import React from 'react'
import HomeFooterList from './HomeFooterList'
import homeFooter from './homeFooter.json'

const HomeFooter = () => {

  function createHomeFooterList(component){
    return <HomeFooterList 
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
    <div>
      <ul className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5 pt-12
      modf3:flex modf:justify-center  max-modf3:space-y-3 modf:space-x-20 max-modf:justify-between
        '>


        {
          homeFooter && homeFooter.map(createHomeFooterList)
        }



        {/*
        <li className='max-modf4:w-1/4  max-modf3:w-full '>
          <p className='text-[21px] font-bold truncate  max-modf4:w-[85%] max-modf3:w-full hover:overflow-visible hover:whitespace-normal'>Shoes</p>

          <div className='text-[17px] font-medium text-gray-500 mt-5 space-y-3 max-modf3:hidden truncate  max-modf4:w-[85%]'>
            <p className='truncate hover:overflow-visible hover:whitespace-normal'>Black Running Shoes</p>
            <p className='truncate hover:overflow-visible hover:whitespace-normal'>White Running Shoes</p>
            <p className='truncate hover:overflow-visible hover:whitespace-normal'>Nike P-6000</p>
            <p className='truncate hover:overflow-visible hover:whitespace-normal'>Nike Initiator</p>
          </div>
        </li>

        <li className='max-modf3:w-full max-modf4:w-1/4 '>
          <p className='text-[21px] font-bold truncate max-modf4:w-[85%] max-modf3:w-full hover:overflow-visible hover:whitespace-normal'>Clothing</p>

          <div className='text-[17px] font-medium text-gray-500 mt-5 space-y-3 max-modf3:hidden truncate max-modf4:w-[85%]'>
            <p className='truncate hover:overflow-visible hover:whitespace-normal'>Yoga Trousers</p>
            <p className='truncate hover:overflow-visible hover:whitespace-normal'>Tech Fleece Joggers</p>
            <p className='truncate hover:overflow-visible hover:whitespace-normal'>Tech Fleece</p>
          </div>
        </li>

        <li className='max-modf4:w-1/4  max-modf3:w-full'>
          <p className='text-[21px] font-bold truncate max-modf4:w-[85%] max-modf3:w-full hover:overflow-visible hover:whitespace-normal'>Kids'</p>

          <div className='text-[17px] font-medium text-gray-500 mt-5 space-y-3 max-modf3:hidden truncate  max-modf4:w-[85%]'>
            <p className='truncate hover:overflow-visible hover:whitespace-normal'>Girls' Black Shoes</p>
            <p className='truncate hover:overflow-visible hover:whitespace-normal'>Kids' Black Shoes</p>
          </div>
        </li>

        <li className='max-modf4:w-1/4  max-modf3:w-full '>
          <p className='text-[21px] font-bold truncate max-modf4:w-[85%] max-modf3:w-full hover:overflow-visible hover:whitespace-normal'>Featured</p>

          <div className='text-[17px] font-medium text-gray-500 mt-5 space-y-3 max-modf3:hidden truncate  max-modf4:w-[85%]'>
            <p className='truncate hover:overflow-visible hover:whitespace-normal'>Football Club Teams</p>
            <p className='truncate hover:overflow-visible hover:whitespace-normal'>Football</p>
            <p className='truncate hover:overflow-visible hover:whitespace-normal'>Nike England</p>
            <p className='truncate hover:overflow-visible hover:whitespace-normal'>Nike Run Club</p>
          </div>
        </li>*/}


      </ul>
    </div>
  )
}

export default HomeFooter
