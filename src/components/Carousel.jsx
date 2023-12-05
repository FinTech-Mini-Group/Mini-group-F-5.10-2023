
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

import { icons } from '../utilits/icons'
import bannerimage from '../assets/banner image.png'


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
                    <div className='lg:flex justify-beetween items-center bg-banner bg-no-repeat'>
                        <div className='lg:py-14 lg:px-24'>
                            <h1 className='text-start  lg:text-TitleBold text-Cback mb-[20px] lg:text-start'>Тяжёлое машиностроение — это <br /> вам не песнь светлого будущего</h1>
                            <p className='lg:text-Body text-Cback mb-[68px]'>Вот вам яркий пример современных тенденций — <br /> экономическая повестка сегодняшнего дня создаёт.</p>
                            <button className='py-[8px] px-[16px] border-2 border-solid rounded-[4px] bg-bgmain text-white mb-[48px]'>Узнать больше</button>
                            <div>
                                <div className='flex items-center gap-10'>
                                    <span className='p-[8px] rounded-[4px] bg-[white]'>{icons.arrowleft}</span>
                                    <span className='p-[8px] rounded-[4px] bg-[white]'>{icons.arrowright}</span>
                                </div>
                            </div>
                        </div>
                        <div >
                            <img src={bannerimage} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:flex justify-beetween items-center w-full bg-banner bg-no-repeat'>
                        <div className='lg:py-14 lg:px-24'>
                            <h1 className='text-start  lg:text-TitleBold text-Cback mb-[20px] lg:text-start'>Тяжёлое машиностроение — это <br /> вам не песнь светлого будущего</h1>
                            <p className='lg:text-Body text-Cback mb-[68px]'>Вот вам яркий пример современных тенденций — <br /> экономическая повестка сегодняшнего дня создаёт.</p>
                            <button className='py-[8px] px-[16px] border-2 border-solid rounded-[4px] bg-bgmain text-white mb-[48px]'>Узнать больше</button>
                            <div>
                                <div className='flex items-center gap-10'>
                                    <span className='p-[8px] rounded-[4px] bg-[white]'>{icons.arrowleft}</span>
                                    <span className='p-[8px] rounded-[4px] bg-[white]'>{icons.arrowright}</span>
                                </div>
                            </div>
                        </div>
                        <div >
                            <img src={bannerimage} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:flex justify-beetween items-center w-full bg-banner bg-no-repeat'>
                        <div className='lg:py-14 lg:px-24'>
                            <h1 className='text-start  lg:text-TitleBold text-Cback mb-[20px] lg:text-start'>Тяжёлое машиностроение — это <br /> вам не песнь светлого будущего</h1>
                            <p className='lg:text-Body text-Cback mb-[68px]'>Вот вам яркий пример современных тенденций — <br /> экономическая повестка сегодняшнего дня создаёт.</p>
                            <button className='py-[8px] px-[16px] border-2 border-solid rounded-[4px] bg-bgmain text-white mb-[48px]'>Узнать больше</button>
                            <div>
                                <div className='flex items-center gap-10'>
                                    <span className='p-[8px] rounded-[4px] bg-[white]'>{icons.arrowleft}</span>
                                    <span className='p-[8px] rounded-[4px] bg-[white]'>{icons.arrowright}</span>
                                </div>
                            </div>
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