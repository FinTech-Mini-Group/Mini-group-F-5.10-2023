import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

import bannerimage from "../assets/banner image.png";
import bannerimage2 from "../assets/banner image2.png";

// import required modules
import { Pagination } from "swiper/modules";

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
          <div class="md:px-[100px] sm:px-[50px] px-[24px] bg-banner bg-cover bg-center text-left flex gap-20  w-full items-center justify-between font-raleway">
            <div class="w-8/12">
              <h3 class="md:text-3xl sm:text-lg text-xs capitalize font-bold"> Тяжёлое машиностроение — это <br /> вам не песнь светлого будущего</h3>
              <div class="mt-5 md:block hidden capitalize opacity-60">
                <p>Вот вам яркий пример современных тенденций — <br />{" "}
                экономическая повестка сегодняшнего дня создаёт.</p>
                </div>
                <button class=" sm:text-base text-xs  md:px-4 px-2.5 md:py-2 py-1.5 text-Cwhite bg-bgmain rounded-[2.18px] mt-10"><span class="undefined"></span>Узнать больше</button></div>
                <div className=" flex justify-center items-center w-80 h-full"> <img src={bannerimage} alt="" />
                  </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:px-[100px] sm:px-[50px] px-[24px] bg-banner2 bg-cover bg-center text-left flex gap-20  w-full items-center justify-between font-raleway">
            <div className="w-8/12">
              <h1 className="md:text-3xl sm:text-lg text-xs capitalize font-bold">
                Портативный воздухоохладитель - Firefly Electric and Lighting{" "}
                <br /> Corporation
              </h1>
              <div className="mt-5 md:block hidden  capitalize opacity-60">
              <p className="">
                Однозначно, акционеры крупнейших компаний формируют <br />{" "}
                глобальную экономическую сеть и при этом — .
              </p>
              </div>
              <button class=" sm:text-base text-xs  md:px-4 px-2.5 md:py-2 py-1.5 text-Cwhite bg-bgmain rounded-[2.18px] mt-10"><span class="undefined"></span>Узнать больше</button>
            </div>
            <div className=" flex justify-center items-center w-80 h-full">
              <img src={bannerimage2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:px-[100px] sm:px-[50px] px-[24px] bg-banner3 bg-cover bg-center text-left flex gap-20  w-full items-center justify-between font-raleway">
            <div className="w-8/12">
              <h1 className="md:text-3xl sm:text-lg text-xs capitalize font-bold">
                Нет звука приятнее, чем гитарный <br /> перебор
              </h1>
              <div className="mt-5 md:block hidden  capitalize opacity-60">
              <p className=" ">
                Господа, социально-экономическое развитие требует анализа <br />{" "}
                распределения внутренних резервов и.
              </p>
              </div>
              <button class=" sm:text-base text-xs  md:px-4 px-2.5 md:py-2 py-1.5 text-Cwhite bg-bgmain rounded-[2.18px] mt-10"><span class="undefined"></span>Узнать больше</button>
             
            </div>
            <div className=" flex justify-center items-center w-80 h-full">
              <img src={bannerimage} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
