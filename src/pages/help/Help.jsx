import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { TbMessage } from "react-icons/tb";
import { SlScreenSmartphone } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import HelpList from './HelpList';

import components from './components.json';

const Help = () => {

  function createHelpList(component){
    return <HelpList 
      id = {component.id}
      key = {component.id}
      title = {component.title}
      question1 = {component.question1}
      question2 = {component.question2}
      question3 = {component.question3}
      viewAll = {component.viewAll}
    />
  }
  
  return (
    <div>
      <title>Nike Customer Service. Nike RO</title>
      
      <div className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5  flex py-10 flex-col text-center'>
        <p className='font-medium text-[35px]'>GET HELP</p>
        <div className='flex mt-5  justify-center'>
          <div className='relative  flex items-center  w-[34.5%] max-modf:w-[51%] max-modf3:w-full'>

            <div className='w-full flex items-center'>


              <input  className={`text-[16.5px] w-full border outline-none py-4 pl-2.5 pr-11 rounded-lg
              `}
               type="text" placeholder='' />
               <div className={`absolute bg-white left-3 `}>What can we help you with?</div>
            </div>  
            

            <div className='absolute right-4'>
            <IoIosSearch  size={22}/>
            </div>
          </div>
          
          
          
        </div>
      </div>


      <div className='max-modf:px-8 max-modf1:px-5 pl-23 pr-25.5 pt-6 '>
        <div className='pb-4 border-b border-b-gray-300 leading-7'>
          <p className='text-[25px] font-medium'>Quick Assists</p>
          <p className='text-[17px]'>Answers to our most frequently asked questions are just one click away.</p>
        </div>


        <ul className='modf:grid modf:grid-cols-3 modf:gap-6 pt-10 text-[16.5px]'>
          
          {
            components && components.map(createHelpList)
          }

          
          {/*<HelpList />

          <li className='max-modf:flex max-modf:items-center max-modf:justify-between max-modf:py-4 max-modf:border-b max-modf:cursor-pointer max-modf:border-b-gray-300'>
            <p className='font-medium'>Dispatch & Delivery</p>
            <div className='max-modf:hidden'>
              <p>What are Nike's delivery options?</p>
              <p>How do I get free delivery on Nike orders?</p>
              <p>Can my Nike order be dispatched internationally?</p>
              <p>View All</p>
            </div>
            <div className='modf:hidden'>
              <IoIosArrowDown size={25}/>
            </div>
          </li>

          <li className='max-modf:flex max-modf:items-center max-modf:justify-between max-modf:py-4 max-modf:border-b max-modf:cursor-pointer max-modf:border-b-gray-300'>
            <p className='font-medium'>Orders & Payment</p>
            <div className='max-modf:hidden'>
              <p>Where is my Nike order?</p>
              <p>Can I cancel or change my Nike order?</p>
              <p>What are Nike's payment options?</p>
              <p>View all</p>
              
            </div>
            <div className='modf:hidden'>
              <IoIosArrowDown size={25}/>
            </div>
          </li>

          <li className='max-modf:flex max-modf:items-center max-modf:justify-between max-modf:py-4 max-modf:border-b max-modf:cursor-pointer max-modf:border-b-gray-300'>
            <p className='font-medium'>Shopping</p>
            <div className='max-modf:hidden'>
              <p>How do I find the right size and fit?</p>
              <p>Does Nike offer product advice?</p>
              <p>How do I use a Nike promo code?</p>
              <p>View all</p>
            </div>
            <div className='modf:hidden'>
              <IoIosArrowDown size={25}/>
            </div>
          </li>

          <li className='max-modf:flex max-modf:items-center max-modf:justify-between max-modf:py-4 max-modf:border-b max-modf:cursor-pointer max-modf:border-b-gray-300'>
            <p className='font-medium'>Nike Membership & Apps</p>
            <div className='max-modf:hidden'>
              <p>What is Nike Membership?</p>
              <p>How do I get Nike's newest sneaker releases?</p>
              <p>What are the birthday promo terms and conditions?</p>
              <p>View all</p>
            </div>
            <div className='modf:hidden'>
              <IoIosArrowDown size={25}/>
            </div>
          </li>

          <li className='max-modf:flex max-modf:items-center max-modf:justify-between max-modf:py-4 max-modf:border-b max-modf:cursor-pointer max-modf:border-b-gray-300'>
            <p className='font-medium'>Company Info</p>
            <div className='max-modf:hidden'>
              <p>Do Nike shoes have a warranty?</p>
              <p>What is the Nike By You personalisation policy?</p>
              <p>Where can I learn more about Nike, Inc.?</p>
              <p>View all</p>
            </div>
            <div className='modf:hidden'>
              <IoIosArrowDown className='' size={25}/>
            </div>
          </li>*/}
          
        </ul>

        <div className='pt-20 pb-4 border-b border-b-gray-300'>
          <p className='text-[24px] font-medium'>Contact Us</p>
        </div>

        <div className='pt-10 modf:flex modf:justify-center modf:space-x-1.5 max-modf:justify-start max-modf:space-y-9'>
          <div className='modf:w-1/3  flex modf:flex-col modf:items-center cursor-pointer text-[17px] max-modf:space-x-5'>
            <TbMessage size={45}/>
            <div className='modf:text-center'>
              <p className='modf:mt-5 font-medium'>Chat with us</p>
              <p>8:00 - 1:00</p>
              <p>7 days a week</p>
            </div>
            
          </div>

          <div className='modf:w-1/3  flex modf:flex-col modf:items-center cursor-pointer text-[17px] max-modf:space-x-5
          '>
            <SlScreenSmartphone className='' size={45}/>
            <div className='modf:text-center'>
              <p className='modf:mt-5 font-medium'>Call us</p>
              <p className='max-modf:font-medium'>+40373788944</p>
              <p>10:00 - 19:00</p>
              <p>Monday - Friday</p>
            </div>
            
          </div>

          <div className='modf:w-1/3  flex modf:flex-col modf:items-center cursor-pointer text-[17px] max-modf:space-x-5'>
            <SlLocationPin size={45}/>
            
            <div className='modf:text-center'>
              <p className='modf:mt-5 font-medium'>Find a Store</p>
            </div>
            
          </div>
        </div>
      </div>



    </div>
  )
}

export default Help
