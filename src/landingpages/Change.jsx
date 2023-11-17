import React from 'react'
import { icons } from '../utilits/icons'

function Change() {
  return (
    <div className='lg:mb-[50px] bg-change w-[100%]'>
        <div className='lg:flex justify-beetween lg:mx-[100px]  lg:py-[75px]  gap-5 '>
            <div className=' lg:justify-center lg:w-[475px] lg:h-[400px]  bg-white  lg:pt-[102px]  lg:pb-[101px] rounded-[10px] '>
                 <span className='flex justify-center'>{icons.medalstar}</span>
                 <h1 className=' py-[10px] text-subtitle text-[#161010] text-center'>Качество и экономия</h1>
                 <p className='text-Body text-[#000000] text-center'>Comprehensive quality control <br/> and affordable prices</p>
            </div>
            <div className=' lg:w-[475px] lg:h-[400px] bg-white  lg:pt-[102px] lg:pb-[101px] rounded-[10px] '>
                 <span className='flex justify-center'>{icons.vuesax}</span>
                 <h1 className='py-[10px] text-subtitle text-[#000000] text-center'>Быстрая доставка</h1>
                 <p className='text-Body text-[#000000] text-center'>Быстрая и удобная <br/> доставка от двери до двери</p>
            </div>
            <div className=' lg:w-[480px] lg:h-[400px] bg-white  lg:pt-[102px] lg:pb-[101px] rounded-[10px] '>
                 <span className='flex justify-center'>{icons.shieldtick}</span>
                 <h1 className='py-[10px] text-subtitle text-[#000000] text-center'>Безопасность платежей</h1>
                 <p className='text-Body text-[#000000] text-center'>Более 10 различных безопасных <br/> способов оплаты</p>
            </div>
            <div className=' lg:w-[475px] lg:h-[400px] bg-white lg:pt-[102px] lg:pb-[101px] rounded-[10px] '>
                 <span className='flex justify-center'>{icons.moneys}</span>
                 <h1 className='py-[10px] text-subtitle text-[#000000] text-center'>Выгодные цены</h1>
                 <p className='text-Body text-[#000000] text-center'>Цены пропорциональны <br/> рыночным ценам</p>
            </div>
            <div className=' lg:w-[475px] lg:h-[400px] bg-white  lg:pt-[102px] lg:pb-[101px] rounded-[10px] '>
                 <span className='flex justify-center'>{icons.message}</span>
                 <h1 className='py-[10px] text-subtitle text-[#000000] text-center'>Есть вопросы?</h1>
                 <p className='text-Body text-[#000000] text-center'>Круглосуточное обслуживание <br/> клиентов - мы здесь и рады помочь!</p>
            </div>
        </div>

    </div>
  )
}

export default Change