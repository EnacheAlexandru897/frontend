import React from 'react'

import { Link } from 'react-router-dom'

import WomenNavbar from './WomenNavbar'
import WomenImg from './WomenImg'
import WomenLatest from './WomenLatest'
import WomenTrending from './WomenTrending'
import WomenSeasonalShop from './WomenSeasonalShop'
import WomenMember from './WomenMember'
import WomenBestReads from './WomenBestReads'
import WomenFooter from './WomenFooter'
const Women = () => {
  return (
    <div>
      <title>Women's Shoes. Clothing & Accessories. Nike RO</title>
      
      <div>


        <WomenNavbar />

        <WomenImg />

        <WomenLatest />

        <WomenTrending />
        
        <WomenSeasonalShop />

        <WomenMember />        

        <WomenBestReads />

        <WomenFooter />
        

      </div>

        
    </div>
  )
}

export default Women
