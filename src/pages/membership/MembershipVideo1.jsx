import React from 'react'
import membershipvid2 from '../../assets/membership/membershipvid2.mp4'
const MembershipVideo1 = () => {
  return (
    <div className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5 py-12 w-full'>
      <video className='h-[45vw] w-full object-cover' src={membershipvid2} autoPlay loop muted></video>
    </div>
  )
}

export default MembershipVideo1
