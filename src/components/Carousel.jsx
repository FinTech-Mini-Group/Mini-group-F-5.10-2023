
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

import bannerimage from '../assets/banner image.png'
import bannerimage2 from '../assets/banner image2.png'


// import required modules
import { Pagination } from 'swiper/modules';

function Carousel() {
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
                    <div className='lg:flex justify-beetween w-full items-center bg-banner bg-no-repeat'>
                        <div className='lg:py-14 lg:px-24'>
                            <h1 className='text-start  lg:text-TitleBold text-Cback mb-[20px] lg:text-start'>Тяжёлое машиностроение — это <br /> вам не песнь светлого будущего</h1>
                            <p className='lg:text-Body text-Cback mb-[68px]'>Вот вам яркий пример современных тенденций — <br /> экономическая повестка сегодняшнего дня создаёт.</p>
                            <button className='py-[8px] px-[16px] border-2 border-solid rounded-[4px] bg-bgmain text-white mb-[48px]'>Узнать больше</button>
                            
                        </div>
                        <div >
                            <img src={bannerimage} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:flex justify-beetween items-center w-full bg-banner2 bg-no-repeat'>
                        <div className='lg:py-14 lg:px-24'>
                            <h1 className='text-start  lg:text-TitleBold text-Cback mb-[20px] lg:text-start'>Портативный воздухоохладитель - Firefly Electric and Lighting <br/> Corporation</h1>
                            <p className='lg:text-Body text-Cback mb-[68px]'>Однозначно, акционеры крупнейших компаний формируют <br/> глобальную экономическую сеть и при этом — .</p>
                            <button className='py-[8px] px-[16px] border-2 border-solid rounded-[4px] bg-bgmain text-white mb-[48px]'>Узнать больше</button>
                         
                        </div>
                        <div >
                            <img src={bannerimage2} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:flex justify-beetween items-center w-full bg-banner3 bg-no-repeat'>
                        <div className='lg:py-14 lg:px-24'>
                            <h1 className='text-start  lg:text-TitleBold text-Cback mb-[20px] lg:text-start'>Нет звука приятнее, чем гитарный <br/> перебор</h1>
                            <p className='lg:text-Body text-Cback mb-[68px]'>Господа, социально-экономическое развитие требует анализа <br/> распределения внутренних резервов и.</p>
                            <button className='py-[8px] px-[16px] border-2 border-solid rounded-[4px] bg-bgmain text-white mb-[48px]'>Узнать больше</button>
                           
                        </div>
                        <div >
                            <img src={bannerimage} alt="" />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Carousel