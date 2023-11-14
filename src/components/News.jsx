import React from 'react'
import { icons } from '../utilits/icons'
import bannerimage from '../assets/banner image.png'


function News() {
  return (
    <div className='container my-[50px] w-full'>
        <div className='w-full'>
            <h1 className='text-Cback text-subtitle mb-[30px] '>Будьте в курсе происходящего</h1>
            <div className='flex justify-beetween items-center w-full bg-banner bg-no-repeat'>
                <div className='py-14 px-24'>
                  <h1 className='text-TitleBold text-Cback mb-[20px]'>Тяжёлое машиностроение — это <br/> вам не песнь светлого будущего</h1>
                  <p className='text-Body text-Cback mb-[68px]'>Вот вам яркий пример современных тенденций — <br/> экономическая повестка сегодняшнего дня создаёт.</p>
                  <button className='py-[8px] px-[16px] border-2 border-solid rounded-[4px] bg-bgmain mb-[48px]'>Узнать больше</button>
                  <div>
                    <div className='flex items-center gap-10'>
                      <span className='p-[8px] rounded-[4px] bg-[white]'>{icons.arrowleft}</span>
                      <span className='p-[8px] rounded-[4px] bg-[white]'>{icons.arrowright}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={bannerimage} alt="" />
                </div>
            </div>

        </div>
        <div>

        </div>
    </div>
  )
}

export default News