import React from 'react'
import womenBestReads from './womenBestReads.json'
import WomenBestReadsList from './WomenBestReadsList'

const WomenBestReads = () => {

  const createWomenBestReadsList = (component) =>{
    return <WomenBestReadsList 
      id = {component.id}
      key = {component.id}
      ml = {component.ml}
      ml1 = {component.ml1}
      img = {component.img}
      name = {component.name}
      title = {component.title}
      info = {component.info}
    />
  }

  return (
    <div className='max-w-screen-2xl mx-auto px-13 max-modf:px-8 max-modf1:px-5'>

          <div className='text-[25px] font-medium px-10 max-modf:px-7 pb-4'>
            <p>Best Reads</p>
          </div>

          <ul className='overflow-x-scroll  flex space-x-3 pb-4'>

            {
              womenBestReads && womenBestReads.map(createWomenBestReadsList)
            }

            {/** 
            <li className='ml-10 max-modf:ml-7 max-modf:w-[80%] max-modf7:w-[100%]  shrink-0 w-[39.25%]'>
              <img className='w-full object-cover' src={womenbestr1} alt="" />

              <div className='w-full'>
                <p className='pt-8 text-[17px] text-gray-600 font-medium'>Buying guide</p>
                <p className='font-medium pt-1 text-[23.5px]'>How to choose a sports bra</p>
                <p className='text-[21px] max-modf:text-[18px] pt-1'>Follow these tips on choosing the exact fit and style for a sports bra that meets your workout needs.</p>
              </div>
            </li>

            <li className='max-modf:w-[80%] max-modf7:w-[100%] shrink-0 w-[39.25%]'>
              <img className='w-full object-cover' src={womenbestr2} alt="" />

              <div className='w-full'>
                <p className='pt-8 text-[17px] text-gray-600 font-medium'>Styling tips</p>
                <p className='font-medium pt-1 text-[23.5px]'>How to style cargo trousers</p>
                <p className='text-[21px] max-modf:text-[18px] pt-1'>All the pockets, please.</p>
              </div>
            </li>

            <li className='max-modf:w-[80%] max-modf7:w-[100%] shrink-0 w-[39.25%]'>
              <img className='w-full object-cover' src={womenbestr3} alt="" />

              <div className='w-full'>
                <p className='pt-8 text-[17px] text-gray-600 font-medium'>Innovation</p>
                <p className='font-medium pt-1 text-[23.5px]'>Give old sneakers new-life--with oranges, walnuts and flour?</p>
                <p className='text-[21px] max-modf:text-[18px] pt-1'>Yes really! Join Nike footwear designers as they share three ways to use natural ingredients in easy, at-home actions that'll help your sneakers last longer.</p>
              </div>
            </li>


            <li className='max-modf:w-[80%] max-modf7:w-[100%] shrink-0 w-[39.25%]'>
              <img className='w-full object-cover' src={womenbestr4} alt="" />

              <div className='w-full'>
                <p className='pt-8 text-[17px] text-gray-600 font-medium'>Buying guide</p>
                <p className='font-medium pt-1 text-[23.5px]'>How to layer clothes for every season</p>
                <p className='text-[21px] max-modf:text-[18px] pt-1'>Stay comfortable in any type of weather with these layering tips.</p>
              </div>
            </li>

            <li className='max-modf:w-[80%] max-modf7:w-[100%] shrink-0 w-[39.25%]'>
              <img className='w-full object-cover' src={womenbestr5} alt="" />

              <div className='w-full'>
                <p className='pt-8 text-[17px] text-gray-600 font-medium'>Health & Wellness</p>
                <p className='font-medium pt-1 text-[23.5px]'>How to Stress Affects the Body -- And What To Do About It</p>
                <p className='text-[21px] max-modf:text-[18px] pt-1'>You may not even fully realize how stress manifests within you each day. Here, experts and researchers alike detail the effects of stress on the body and offer ways you can try to reduce it.</p>
              </div>
            </li>

            <li className='max-modf:w-[80%] max-modf7:w-[100%] shrink-0 w-[39.25%]'>
              <img className='w-full object-cover' src={womenbestr6} alt="" />

              <div className='w-full'>
                <p className='pt-8 text-[17px] text-gray-600 font-medium'>Styling tips</p>
                <p className='font-medium pt-1 text-[23.5px]'>How to style leggings for a day out</p>
                <p className='text-[21px] max-modf:text-[18px] pt-1'>Check out these six outfit ideas featuring the most versatile comfy pants, with style at the top of mind.</p>
              </div>
            </li>

            <li className='max-modf:w-[80%] max-modf7:w-[100%] shrink-0 w-[39.25%]'>
              <img className='w-full object-cover' src={womenbestr7} alt="" />

              <div className='w-full'>
                <p className='pt-8 text-[17px] text-gray-600 font-medium'>Buying guide</p>
                <p className='font-medium pt-1 text-[23.5px]'>How to find your size in Nike women's pants</p>
                <p className='text-[21px] max-modf:text-[18px] pt-1'>In this guide, find your measurements to determine your size in Nike women's pants</p>
              </div>
            </li>

            <li className='max-modf:w-[80%] max-modf7:w-[100%] shrink-0 w-[39.25%]'>
              <img className='w-full object-cover' src={womenbestr8} alt="" />

              <div className='w-full'>
                <p className='pt-8 text-[17px] text-gray-600 font-medium'>Buying guide</p>
                <p className='font-medium pt-1 text-[23.5px]'>Nike Fleece hoodie style for women to shop now</p>
                <p className='text-[21px] max-modf:text-[18px] pt-1'>Whether you prefer fluffy fleece or tech-ready designs, these hoodies tout major warmth and comfort wherever you go.</p>
              </div>
            </li>

            <li className='max-modf:w-[80%] max-modf7:w-[100%] shrink-0 w-[39.25%]'>
              <img className='w-full object-cover' src={womenbestr9} alt="" />

              <div className='w-full'>
                <p className='pt-8 text-[17px] text-gray-600 font-medium'>Coaching</p>
                <p className='font-medium pt-1 text-[23.5px]'>Trained Podcast: Elevate women in sports with Anna Kessel</p>
                <p className='text-[21px] max-modf:text-[18px] pt-1'>Women belong in sport. Sportswriter and journalist Anna Kessel is saying it louder for the people at the back.</p>
              </div>
            </li>

            <li className='max-modf:w-[80%] max-modf7:w-[100%] shrink-0 w-[39.25%]'>
              <img className='w-full object-cover' src={womenbestr10} alt="" />

              <div className='w-full'>
                <p className='pt-8 text-[17px] text-gray-600 font-medium'>Styling tips</p>
                <p className='font-medium pt-1 text-[23.5px]'>How to style your Nike oversized t-shirt</p>
                <p className='text-[21px] max-modf:text-[18px] pt-1'>Follow these tips to have confidence in your ensemble.</p>
              </div>
            </li>*/}



          </ul>
        </div>
  )
}

export default WomenBestReads
