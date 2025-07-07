import React from 'react'
import WomenFooterList from './WomenFooterList'
import womenFooter from './womenFooter.json'
const WomenFooter = () => {

  const createWomenFooterList = (component) =>{
    return <WomenFooterList 
      id = {component.id}
      key = {component.id}
      title = {component.title}
      text1 = {component.text1}
      text2 = {component.text2}
      text3 = {component.text3}
      text4 = {component.text4}
    />
  }

  return (
    <ul className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5 pt-12
      modf3:flex modf:justify-center  max-modf3:space-y-3 modf:space-x-5 modf6:space-x-11 max-modf:justify-between'>

      {
        womenFooter && womenFooter.map(createWomenFooterList)
      }
  </ul>
  )
}

export default WomenFooter
