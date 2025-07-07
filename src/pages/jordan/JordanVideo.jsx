import React from 'react'
import jordanvideo from '../../assets/jordan/jordanvideo.mp4'
const JordanVideo = () => {
  return (
    <div className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5 pb-12 pt-19'>
      <video className='object-cover  max-modf1:h-[115vw]' src={jordanvideo} autoPlay muted loop></video>
    </div>
  )
}

export default JordanVideo
