import React from 'react'
import VideoHome from '../../components/VideoHome'

import { Link } from 'react-router-dom'
import HomeScroll1 from './HomeScroll1'
import HomeGrid from './HomeGrid'
import HomeImg from './HomeImg'
import HomeBottom from './HomeBottom'
import HomeFooter from './HomeFooter'



const Home = () => {
  return (
    <div className=''>
      
      <VideoHome />

      <HomeScroll1 />

      <HomeGrid />

     

      <HomeFooter />

    </div>
    
  )
}

export default Home
