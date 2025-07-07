import React from 'react'
import { SiNike } from 'react-icons/si'
import { Link } from 'react-router-dom'

const MembershipConnectList = (props) => {
  return (
    <li key={props.id} className='w-1/4 max-modf3:w-full flex flex-col items-center  text-center '>
      <div className={`w-15 h-15  ${props.background} ${props.textColor} flex ${props.flexCol}  items-center  justify-center rounded-lg border-1 border-gray-100 shadow-lg/18`}>
        <SiNike className={`-${props.mt}`} size={35}/>
        <p className='font-black text-[18px] -tracking-[2px] -mt-4'>{props.title}</p>
      </div>

      <div className='mt-6 flex flex-col items-center max-modf3:mt-18'>
        <p className='font-medium text-[19px]'>{props.name}</p>
        <p className='text-[17px] w-[60%] mt-2'>{props.info}</p>
        <div className='mt-5'>
          <Link className='text-[17px] border-b-3 font-medium'>{props.button}</Link>
        </div>
      </div>
    </li>
  )
}

export default MembershipConnectList
