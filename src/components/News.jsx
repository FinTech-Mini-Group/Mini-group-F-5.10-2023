import React from 'react'
import { icons } from '../utilits/icons'
import bannerimage from '../assets/banner image.png'
import image9 from '../assets/image 9.png'

function News() {
  return (
    <div className='container my-[50px] mx-[100px] w-full flex justify-between'>
        <div className='w-full mr-[30px]'>
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
           <h2 className='text-subtitle text-Cback mb-7'>Товары дня</h2> 
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
