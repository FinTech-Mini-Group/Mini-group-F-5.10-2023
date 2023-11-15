import React from 'react'
import { icons } from '../utilits/icons'

function Change() {
  return (
    <div className='mb-[50px] bg-change w-[100%]'>
        <div className='container flex justify-between py-[75px]  gap-5 '>
            <div className=' w-[475px] h-[400px]  bg-white  pt-[102px]  pb-[101px] rounded-[10px] '>
                 <span>{icons.medalstar}</span>
                 <h1 className='py-[10px] text-subtitle text-[#161010] text-center'>Качество и экономия</h1>
                 <p className='text-Body text-[#000000] text-center'>Comprehensive quality control <br/> and affordable prices</p>
            </div>
            <div className=' w-[475px] h-[400px] bg-white  pt-[102px] pb-[101px] rounded-[10px] '>
                 <span>{icons.vuesax}</span>
                 <h1 className='py-[10px] text-subtitle text-[#000000] text-center'>Быстрая доставка</h1>
                 <p className='text-Body text-[#000000] text-center'>Быстрая и удобная <br/> доставка от двери до двери</p>
            </div>
            <div className=' w-[480px] h-[400px] bg-white  pt-[102px] pb-[101px] rounded-[10px] '>
                 <span>{icons.shieldtick}</span>
                 <h1 className='py-[10px] text-subtitle text-[#000000] text-center'>Безопасность платежей</h1>
                 <p className='text-Body text-[#000000] text-center'>Более 10 различных безопасных <br/> способов оплаты</p>
            </div>
            <div className=' w-[475px] h-[400px] bg-white pt-[102px] pb-[101px] rounded-[10px] '>
                 <span>{icons.moneys}</span>
                 <h1 className='py-[10px] text-subtitle text-[#000000] text-center'>Выгодные цены</h1>
                 <p className='text-Body text-[#000000] text-center'>Цены пропорциональны <br/> рыночным ценам</p>
            </div>
            <div className=' w-[475px] h-[400px] bg-white  pt-[102px] pb-[101px] rounded-[10px] '>
                 <span>{icons.message}</span>
                 <h1 className='py-[10px] text-subtitle text-[#000000] text-center'>Есть вопросы?</h1>
                 <p className='text-Body text-[#000000] text-center'>Круглосуточное обслуживание <br/> клиентов - мы здесь и рады помочь!</p>
            </div>
        </div>

    </div>
  )
}

export default Change