import React from 'react'

const MembershipMembersList = (props) => {
  return (
    <li key={props.id} className='w-1/3 max-modf3:w-full flex flex-col items-center '>
      <img className={`${props.width} ${props.height} object-cover`} src={props.img} alt="" />
      <div className='flex justify-center flex-col items-center mt-8'>
        <p className='font-medium text-[22px] text-center'>{props.name}</p>
        <p className='text-center w-[66%] max-modf:w-[80%] mt-1'>{props.info}</p>
      </div>
    </li>
  )
}

export default MembershipMembersList
