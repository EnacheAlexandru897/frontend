import React from 'react'
import { useState, useEffect } from 'react';

import { IoIosSearch } from "react-icons/io";
import { SiNike } from "react-icons/si";
import { SiJordan } from "react-icons/si";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";


import { FiUser } from "react-icons/fi";


import { Link } from 'react-router-dom';


const Navbar = () => {

  const [isVisible, setIsVisible] = useState(true);
  const [prevScroll,setPrevScroll] = useState(0);

  
    const handleScroll = () =>{
      
      const currentScroll = window.scrollY;
      if(currentScroll > prevScroll && currentScroll >50) {
        setIsVisible(false);
      }
      else{
        setIsVisible(true);
      }
      setPrevScroll(currentScroll);
    };
    useEffect(()=>{
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll)
    })
    
  



  return (
    <div className={`flex flex-col z-99 sticky 
        ${isVisible ? "top-0" : ""}`}>

      <div className='bg-gray-100 xl:visible max-modf:hidden'>
        <div className='max-w-screen-2xl mx-auto pl-13 pr-14 flex items-center justify-between text-[13px] py-1.5'>
          <div>
            <Link to='/jordan'>
              <SiJordan size={20}/> 
            </Link>
          </div>

          <div className='space-x-3 flex items-center '>
            <Link to='/retail' className='hover:text-gray-500'>Find a Store</Link>
            <div className='border h-3'></div>
            <Link to='/help' className='hover:text-gray-500'>Help</Link>
            <div className='border h-3'></div>
            <Link to='/membership' className='hover:text-gray-500'>Join Us</Link>
            <div className='border-1 h-3'></div>
            <Link to='/signIn' className='hover:text-gray-500'> Sign In</Link>
          </div>

        </div>
      </div>

      <div className='bg-white'>
        <div className='max-w-screen-2xl mx-auto pl-13 pr-10.5 py-1.5 flex items-center justify-between
        max-modf:pl-8 max-modf:pr-5.5 max-modf1:pl-5 max-modf1:pr-3.5
        '>
          <div className=''>
            <Link to='/'>
              <SiNike size={60}/>
            </Link>
            
          </div>

          <div className=' text-[17.5px] font-medium space-x-4 ml-48 max-modf:hidden'>
            
            <Link className='relative before:absolute before:border before:w-full before:-bottom-1 before:h-0.5 before:bg-black before:rounded-full before:invisible
            hover:before:visible
            
            ' to='/new'>New and Featured</Link>
            <Link className='relative before:absolute before:border before:w-full before:-bottom-1 before:h-0.5 before:bg-black before:rounded-full before:invisible
            hover:before:visible
            
            ' to='/men'>Men</Link>
            <Link className='relative before:absolute before:border before:w-full before:-bottom-1 before:h-0.5 before:bg-black before:rounded-full before:invisible
            hover:before:visible
            
            ' to='/women'>Women</Link>
            <Link className='relative before:absolute before:border before:w-full before:-bottom-1 before:h-0.5 before:bg-black before:rounded-full before:invisible
            hover:before:visible
            
            ' to='/kids'>Kids</Link>
          </div>

          <div className='flex items-center space-x-1.5
          max-modf:space-x-2'>

            <div className='relative flex items-center'>
              <div className='absolute bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full z-11 p-[5.5px]
              max-modf:bg-white
              max-modf:-left-8' >
                <IoIosSearch  size={25} />
              </div>
              <div className=' bg-gray-100 rounded-full hover:bg-gray-200'>
                <input type="text" name="" id="" placeholder='Search' className=' rounded-full w-44 py-1.5 px-10 max-modf:hidden'/>
              </div>
              
            </div>

            

            <div className=' hover:bg-gray-200 cursor-pointer rounded-full z-11 p-[5.5px]
            max-modf:hidden'><CiHeart size={25}/></div>

            <div className='modf:hidden
            hover:bg-gray-200 cursor-pointer rounded-full p-[5.5px]'>
              <FiUser size={25}/>
            </div>
            

            <div className=' hover:bg-gray-200 cursor-pointer rounded-full p-[5.5px]'><IoBagOutline size={25} /></div>

            <div className='hover:bg-gray-200 cursor-pointer rounded-full p-[5.5px] modf:hidden'>
              <RxHamburgerMenu size={25}/>
            </div>
            
            
          </div>


        </div>
      </div>
    </div>
  )
}

export default Navbar
