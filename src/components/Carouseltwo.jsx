import React from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import image9 from '../assets/image 9.png'
import image10 from '../assets/image 10.png'
import image11 from '../assets/image 11.png'
import { Pagination } from 'swiper/modules';


function Carouseltwo() {
  return (
    <div className='carousel_two'>
    <Swiper
        spaceBetween={10}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
    >
        <SwiperSlide>
            <div className='border-2 border-solid bg-Cglobal w-full rounded-[4px] flex lg:flex-col items-center'>
            <div className='md:w-[80px] lg:w-[400px]  lg:px-[54px] pt-7 pb-[40px]'>  
            <img className='  ' src={image9} alt="" />
            </div> 
            <div>
            <p className=' md:text-sm lg:text-center lg:text-Body lg:text-Cback lg:mb-[10px]'>MacBook Pro 13 inch 8/256/A2338 </p>
            <p className=' md:text-base lg:text-center lg:text-subtitle lg:text-Cback lg:mb-9 '>14 000 000 сум</p>
            </div> 
           </div>  
        </SwiperSlide>
        <SwiperSlide>
        <div className='border-2 border-solid bg-Cglobal w-full rounded-[4px] flex lg:flex-col items-center'>
            <div className='md:w-[80px] lg:w-[400px]  lg:px-[54px] pt-7 pb-[40px]'>  
            <img className='  ' src={image10} alt="" />
            </div> 
            <div>
            <p className=' md:text-sm lg:text-center lg:text-Body lg:text-Cback lg:mb-[10px]'>MacBook Air M2 13 inch 8/256/A2338 </p>
            <p className=' md:text-base lg:text-center lg:text-subtitle lg:text-Cback lg:mb-9 '>11 000 000 сум</p>
            </div> 
           </div>  
        </SwiperSlide>
        <SwiperSlide>
        <div className='border-2 border-solid bg-Cglobal w-full rounded-[4px] flex lg:flex-col items-center'>
            <div className='md:w-[80px] lg:w-[400px]  lg:px-[54px] pt-7 pb-[40px]'>  
            <img className='  ' src={image11} alt="" />
            </div> 
            <div>
            <p className=' md:text-mac lg:text-center lg:text-Body lg:text-Cback lg:mb-[10px]'>Iphone 14 Pro 128gb</p>
            <p className=' md:text-base lg:text-center lg:text-subtitle lg:text-Cback lg:mb-9 '>26 500 000 сум</p>
            </div> 
           </div>  
        </SwiperSlide>

    </Swiper>
</div>
  )
}

export default Carouseltwo



