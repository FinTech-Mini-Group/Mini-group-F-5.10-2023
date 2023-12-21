import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { products } from '../landingpages/data'
import { icons } from '../utilits/icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Products.css';


function Products() {
  const navigate = useNavigate()

  console.log(products)
  return (
    <div className='Products'>
      {/* <div className='lg:grid  grid-cols-5 justify-between gap-7 w-full'> */}
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          className="mySwiper"
        >

          {
            products.map((element, value) =>
              <SwiperSlide>
                <div className='p-[20px] rounded-[5px] bg-[#FAFAFA] cursor-pointer ' key={value} >
                  <img onClick={() => navigate(`/${element.path}`)} className='w-full' src={element.img} alt="" />
                  <div className=' my-[10px]'>
                    <button className='py-[5px] px-[8px] rounded-[4px] bg-Cbadge text-white mr-[10px]'>{element.discount} % скидка</button>
                    <button className='py-[5px] px-[8px] rounded-[4px] bg-bgblue text-white'>Супер цена</button>
                  </div>
                  <p className='mb-[10px] text-Body text-Cback'>{element.name}</p>
                  <p className='text-Bodystrik text-[#999] line-through '>{element.old} сум</p>
                  <p className='text-subtitle !text-[#00B709]'>{element.price}сум</p>
                  <p className=' mx-[10px] my-[10px] border-b-[1px]  w-[248px] bg-change'></p>
                  <div className='flex'>
                    <button className=' flex p-[8px] rounded-[4px] bg-bgmain'>{icons.shoppingcart}<span className='ml-[10px] text-Bold text-white '>В корзину</span></button>
                    <button className='p-[8px] rounded-[4px] border-[1px] border-solid ml-[20px]'>{icons.heart}</button>
                  </div>
                </div>
              </SwiperSlide>
            )
          }

        </Swiper>
      {/* </div> */}
    </div>




  )
}

export default Products