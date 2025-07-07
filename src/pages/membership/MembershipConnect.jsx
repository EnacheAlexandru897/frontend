import React from 'react'
import { SiNike } from "react-icons/si";
import { Link } from 'react-router-dom'
import membershipConnect from './membershipConnect.json'
import MembershipConnectList from './MembershipConnectList';
const MembershipConnect = () => {

  const createMembershipConnectList = (component) =>{
    return <MembershipConnectList 
      id = {component.id}
      key = {component.id}
      mt = {component.mt}
      flexCol = {component.flexCol}
      background = {component.background}
      textColor = {component.textColor}
      title = {component.title}
      name = {component.name}
      info = {component.info}
      button = {component.button}
    />
    
  }

  return (
    <div className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5 pt-10 pb-29'>
      <p className='font-medium text-[23px]'>Connect Through Membership</p>

      <ul className='pt-19 flex modf3:space-x-5 max-modf3:flex-col max-modf3:space-y-19'>

        {
          membershipConnect && membershipConnect.map(createMembershipConnectList)
        }

        {/** 
        <li className='w-1/4 max-modf3:w-full flex flex-col items-center  text-center '>

          <div className='w-15 h-15  bg-white items-center flex justify-center rounded-lg border-1 border-gray-100 shadow-lg/18'>
            <SiNike className='' size={35}/>
          </div>

          <div className='mt-6 flex flex-col items-center max-modf3:mt-18'>
            <p className='font-medium text-[19px]'>Nike App</p>
            <p className='text-[17px] w-[60%] mt-2'>Kee up daily with the best of Nike, personalized for you</p>
            <div className='mt-5'>
              <Link className='text-[17px] border-b-3 font-medium'>Explore</Link>
            </div>
          </div>
        </li>

        <li className='w-1/4 max-modf3:w-full flex flex-col items-center  text-center '>
          <div className='w-15 h-15  bg-black flex flex-col text-white items-center  justify-center rounded-lg border-1 border-gray-100 shadow-lg/18'>
            <SiNike className='-mt-1' size={35}/>
            <p className='font-black text-[18px] -tracking-[2px] -mt-4'>NRC</p>
          </div>

          <div className='mt-6 flex flex-col items-center max-modf3:mt-18'>
            <p className='font-medium text-[19px]'>Nike Run Club</p>
            <p className='text-[17px] w-[60%] mt-2'>Run with us in the Nike Run Club App.</p>
            <div className='mt-5'>
              <Link className='text-[17px] border-b-3 font-medium'>Explore</Link>
            </div>
          </div>
          
        </li>


        <li className='w-1/4 max-modf3:w-full flex flex-col items-center  text-center '>
          <div className='w-15 h-15  bg-white flex flex-col  items-center  justify-center rounded-lg border-1 border-gray-100 shadow-lg/18'>
            <SiNike className='-mt-1' size={35}/>
            <p className='font-black text-[18px] -tracking-[2px] -mt-4'>NTC</p>
          </div>

          <div className='mt-6 flex flex-col items-center max-modf3:mt-18'>
            <p className='font-medium text-[19px]'>Nike Training Club</p>
            <p className='text-[17px] w-[60%] mt-2'>Move with the best in the Nike Training Club App.</p>
            <div className='mt-5'>
              <Link className='text-[17px] border-b-3 font-medium'>Explore</Link>
            </div>
          </div>
        </li>


        <li className='w-1/4 max-modf3:w-full flex flex-col items-center  text-center '>
          <div className='w-15 h-15  bg-red-600 flex flex-col text-white items-center  justify-center rounded-lg border-1 border-gray-100 shadow-lg/18'>
            <SiNike className='-mt-1' size={35}/>
            <p className='font-black text-[16.5px] -tracking-[2px] -mt-4'>SNKRS</p>
          </div>

          <div className='mt-6 flex flex-col items-center max-modf3:mt-18'>
            <p className='font-medium text-[19px]'>SNKRS</p>
            <p className='text-[17px] w-[60%] mt-2'>Find the freshest drops in the SNKRS App.</p>
            <div className='mt-5'>
              <Link className='text-[17px] border-b-3 font-medium'>Explore</Link>
            </div>
          </div>

          
        </li>*/}
        

      </ul>
    </div>
  )
}

export default MembershipConnect
