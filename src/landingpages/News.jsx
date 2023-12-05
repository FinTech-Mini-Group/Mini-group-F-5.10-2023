import React from 'react'
import bannerimage from '../assets/banner image.png'
import image9 from '../assets/image 9.png'
import Carousel from '../components/Carousel'
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
           <div className='border-2 border-solid bg-Cglobal rounded-[4px]'>
            <img className='px-[54px] pt-7 pb-[40px] ' src={image9} alt="" />
            <p className='text-center text-Body text-Cback mb-[10px]'>MacBook Pro 13 inch 8/256/A2338 </p>
            <p className=' text-center text-subtitle text-Cback mb-9'>14 000 000 сум</p>
            <div className='flex justify-center items-center gap-10 pb-9'>
                      <span className='p-[8px] rounded-[4px] bg-button'>{icons.arrowleft}</span>
                      <span className='p-[8px] rounded-[4px] bg-button'>{icons.arrowright}</span>
              </div>
           </div>
        </div>
    </div>
  )
}

export default News
