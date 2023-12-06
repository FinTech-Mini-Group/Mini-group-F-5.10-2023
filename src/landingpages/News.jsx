import React from 'react'
import bannerimage from '../assets/banner image.png'
import image9 from '../assets/image 9.png'
import Carousel from '../components/Carousel'
import Carouseltwo from '../components/Carouseltwo'
import { icons } from '../utilits/icons'


function News() {
  console.log('Swig')
  return (
    <div className=' lg:container lg:my-[50px] lg:w-full lg:flex justify-center m-auto'>
        <div className='lg:w-full lg:mr-[30px]'>
            <h1 className=' text-subtitle lg:text-Cback lg:text-subtitle lg:mb-[30px] lg:text-start '>Будьте в курсе происходящего</h1>
           <Carousel/>
        </div>
        <div>
           <h2 className=' text-center lg:text-subtitle text-Cback mb-7 lg:text-start'>Товары дня</h2> 
           <Carouseltwo/> 
        </div>
    </div>
  )
}

export default News
