import React from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

import image9 from '../assets/image 9.png'
import image10 from '../assets/image 10.png'
import image11 from '../assets/image 11.png'
import { Pagination } from 'swiper/modules';


function Carouseltwo() {
  return (
    <div>
    <Swiper
        spaceBetween={30}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
    >
        <SwiperSlide>
        <div className='border-2 border-solid bg-Cglobal rounded-[4px]'>
            <img className='px-[54px] pt-7 pb-[40px] ' src={image9} alt="" />
            <p className='text-center text-Body text-Cback mb-[10px]'>MacBook Pro 13 inch 8/256/A2338 </p>
            <p className=' text-center text-subtitle text-Cback mb-9'>14 000 000 сум</p>
           </div>  
        </SwiperSlide>
        <SwiperSlide>
        <div className='border-2 border-solid bg-Cglobal rounded-[4px]'>
            <img className='px-[54px] pt-7 pb-[40px] ' src={image10} alt="" />
            <p className='text-center text-Body text-Cback mb-[10px]'>MacBook Air M2 13 inch 8/256/A2338  </p>
            <p className=' text-center text-subtitle text-Cback mb-9'>11 000 000 сум</p>
           </div>  
        </SwiperSlide>
        <SwiperSlide>
        <div className='border-2 border-solid bg-Cglobal rounded-[4px]'>
            <img className='px-[54px] pt-7 pb-[40px] ' src={image11} alt="" />
            <p className='text-center text-Body text-Cback mb-[10px]'>Iphone 14 Pro 128gb</p>
            <p className=' text-center text-subtitle text-Cback mb-9'>26 500 000 сум</p>
           </div>  
        </SwiperSlide>

    </Swiper>
</div>
  )
}

export default Carouseltwo