import React from 'react'
import { Link } from 'react-router-dom'
import { SiJordan } from "react-icons/si";

const JordanNavbar = () => {
  return (
    <div className='mt-10 max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5'>
      <div className='flex justify-center'><SiJordan size={90}/></div>
      <div className='mt-7 flex space-x-7 font-medium text-[17px] modf4:justify-center truncate'>
        <Link>New Releases</Link>
        <Link>Men</Link>
        <Link>Women</Link>
        <Link>Kids</Link>
        <Link>Jordan Basketball</Link>
        <Link>Social and Community Impact</Link>
      </div>
    </div>
  )
}

export default JordanNavbar
