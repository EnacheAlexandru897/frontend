import React from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';

import hidefilter from '../../assets/hidefilter.png'

import new1 from '../../assets/new/new1s.png'
import new2 from '../../assets/new/new2.png'
import new3 from '../../assets/new/new3.png'
import new4 from '../../assets/new/new4.png'
import new5 from '../../assets/new/new5.png'
import new6 from '../../assets/new/new6.png'
import NewNavbar from './NewNavbar';

const New = () => {
  return (
    <div>
      <title>New Trainers & Gear. Nike RO</title>
        <NewNavbar />




        {/*
        <div className='modf:hidden max-modf:pl-8 max-modf1:pl-5 flex flex-col py-4 border-b border-b-gray-300'>
          <p className='text-[20px] font-medium'>New Trainers & Gear</p>
          <div className='flex font-medium text-[17px] overflow-x-scroll space-x-8.25 mt-9 truncate'>
            <p>Shoes</p>
            <p>Tops & T-Shirts</p>
            <p>Shorts</p>
            <p>Trouse & Tights</p>
            <p>Accessories & Equipment</p>
            <p>Jackets</p>
            <p>Hoodles & Sweatsh</p>
          </div>
        </div>

        
        <div className='max-w-screen-2xl mx-auto px-13  py-4 flex items-center justify-between
        max-modf:px-8 max-modf1:px-5 '>
          <div className='text-[25px]  '>
            <p className='font-medium max-modf:hidden'>New Trainers & Gear (459)</p>
            <p className='modf:hidden text-[18px] text-gray-600'>459 Results</p>
          </div>

          <div className='flex items-center modf:space-x-4'>
            <div className='flex max-modf:-mr-2 items-end space-x-1.5 cursor-pointer
            max-modf:border max-modf:rounded-full max-modf:py-1 max-modf:border-gray-400 max-modf:px-4
            '>
              <p className='max-modf:hidden font-medium'>Hide Filters</p>
              <p className='modf:hidden font-medium'>Filter</p>
              <div>
                <img className='w-[24px]' src={hidefilter} alt="" />
              </div>
            </div>

            <div className='flex items-center space-x-1 cursor-pointer max-modf:hidden'>
              <p className='text-[17px]'>Sort By</p>
              <div className=''>
                <MdOutlineKeyboardArrowDown size={25}/>
              </div>
            </div>
          </div>
        </div>


        <div className='max-w-screen-2xl mx-auto px-13 py-4  flex max-modf:px-8 max-modf1:px-5  '>
          <div className='pb-9 w-52 overflow-y-scroll h-[70vh] max-modf:hidden'>
            <div className='font-medium text-[17px] space-y-2 '>
              <p className='cursor-pointer'>Shoes</p>
              <p>Tops & T-Shirts</p>
              <p>Shorts</p>
              <p>Trouse & Tights</p>
              <p>Accessories & <br /> Equipment</p>
              <p>Jackets</p>
              <p>Hoodles & <br /> Sweatsh</p>
              <p>Tracksuits</p>
              <p>Socks</p>
            </div>


            <div className='font-medium text-[17px] mt-10 '>

              <div className=' '>
                <div className='border-t border-t-gray-900  w-full py-3 flex justify-between cursor-pointer'>
                  <p>Gender</p>
                  <MdOutlineKeyboardArrowDown size={25}/>
                </div>
              </div>

              <div>
                <div className='border-t border-t-gray-900  w-full py-3 flex justify-between cursor-pointer'>
                  <p>Kids</p>
                  <MdOutlineKeyboardArrowDown size={25}/>
                </div>
              </div>

              <div>
                <div className='border-t border-t-gray-900  w-full py-3 flex justify-between cursor-pointer'>
                  <p>Shop By Price</p>
                  <MdOutlineKeyboardArrowDown size={25}/>
                </div>
              </div>

              <div>
                <div className='border-t border-t-gray-900  w-full py-3 flex justify-between cursor-pointer'>
                  <p>Colour</p>
                  <MdOutlineKeyboardArrowDown size={25}/>
                </div>
              </div>

              <div>
                <div className='border-t border-t-gray-900  w-full py-3 flex justify-between cursor-pointer'>
                  <p>Brand</p>
                  <MdOutlineKeyboardArrowDown size={25}/>
                </div>
              </div>

              <div>
                <div className='border-t border-t-gray-900  w-full py-3 flex justify-between cursor-pointer'>
                  <p>Fit</p>
                  <MdOutlineKeyboardArrowDown size={25}/>
                </div>
              </div>

              <div>
                <div className='border-t border-t-gray-900  w-full py-3 flex justify-between cursor-pointer'>
                  <p>Fit</p>
                  <MdOutlineKeyboardArrowDown size={25}/>
                </div>
              </div>

              <div>
                <div className='border-t border-t-gray-900  w-full py-3 flex justify-between cursor-pointer'>
                  <p>Technology</p>
                  <MdOutlineKeyboardArrowDown size={25}/>
                </div>

                <div>
                  <p>s</p>
                </div>
              </div>

            </div>
          </div>

          <div className='pl-11.5 grid grid-cols-3 gap-4'>
            <div className='w-72.5 '>
              <img src={new1} className='w-72.5 h-72.5 object-cover' alt="" />
              <div className='flex flex-col text-[16px] tracking-wider'>
                <p className='text-red-600 font-medium'>Just In</p>
                <p className='font-medium'>Nike Stride</p>
                <p className='text-gray-500'>Men's Dri-FIT 18cm (approx.) Briefs-Lined Running Shorts</p>
                <p className='text-gray-500'>2 Colours</p>
                <p className='font-medium mt-4'>RON 299.99</p>
              </div>
            </div>

            <div className='w-72.5 '>
              <img src={new2} className='w-72.5 h-72.5 object-cover' alt="" />
              <div className='flex flex-col text-[16px] tracking-wider'>
                <p className='text-red-600 font-medium'>Available in SNKRS</p>
                <p className='font-medium'>Nike Air Max 95 SP</p>
                <p className='text-gray-500'>Men's Shoes</p>
                <p className='text-gray-500'>1 Colours</p>
                <p className='font-medium mt-4'>RON 1,049.99</p>
              </div>
            </div>

            <div className='w-72.5 '>
              <img src={new3} className='w-72.5 h-72.5 object-cover' alt="" />
              <div className='flex flex-col text-[16px] tracking-wider'>
                <p className='text-red-600 font-medium'>Just In</p>
                <p className='font-medium'>Nike Pegasus Premium</p>
                <p className='text-gray-500'>Women;s Road Running Shoes</p>
                <p className='text-gray-500'>1 Colours</p>
                <p className='font-medium mt-4'>RON 1,049.99</p>
              </div>

              
            </div>

            <div className='w-72.5 '>
              <img src={new4} className='w-72.5 h-72.5 object-cover' alt="" />
              <div className='flex flex-col text-[16px] tracking-wider'>
                <p className='text-red-600 font-medium'>Just In</p>
                <p className='font-medium'>Inter Milan Supporter</p>
                <p className='text-gray-500'>Women;s Nike Footbal T-Shirt</p>
                <p className='text-gray-500'>1 Colours</p>
                <p className='font-medium mt-4'>RON 169.99</p>
              </div>

              
            </div>

            <div className='w-72.5 relative'>
              <img src={new5} className='w-72.5 h-72.5 object-cover' alt="" />
              <div className='flex flex-col text-[16px] tracking-wider absolute top-17 text-white left-8 '>
                <p className='font-black text-[35px] leading-7 -tracking-[3px]'>FEAR <br /> NOTHING</p>
                <p className='mt-5'>Nike 2025 National Team <br /> Collections</p>

                <div className='mt-9'>

                  <Link className='text-black py-2.5 px-6 bg-white rounded-full'>
                  Shop
                </Link>
                </div>
                
              </div>

              
            </div>

            <div className='w-72.5 '>
              <img src={new6} className='w-72.5 h-72.5 object-cover' alt="" />
              <div className='flex flex-col text-[16px] tracking-wider'>
                <p className='text-red-600 font-medium'>Just In</p>
                <p className='font-medium'>Nike Indy Women's Artist Collection</p>
                <p className='text-gray-500'>Light-Suppor Padded Printed Sports</p>
                <p className='text-gray-500'>1 Colours</p>
                <p className='font-medium mt-4'>RON 199.99</p>
              </div>

              
            </div>

              
          </div>
        </div>*/}
    </div>

    
  )
}

export default New
