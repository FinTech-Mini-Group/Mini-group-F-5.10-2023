import React from 'react'
import { zakaz } from '../landingpages/data'
function Order() {
  return (
    <div className='py-10'>
                  <div className='flex justify-between'>
                    <h2 className='text-subtitle text-subtitles'>Ваш заказ</h2>
                    <h3 className='text-Body text-[#999999]'>Изменить</h3>
                  </div>
                  {
                  zakaz.map((element,value)=>
                  <div className='flex items-center mt-5' key={value}>
                    <img className='pr-5 ' src={element.img} alt="" />
                    <p className='mr-[200px] text-Bodybold'>{element.name}</p>
                    <p className='py-2 px-4 border-2 border-solid rounded-[4px] mr-[200px] text-Bodybold'>{element.number}</p>
                    <p className='text-subtitle'>{element.price} <span className='text-Bodybold'>сум</span></p>
                  </div>
                  )
                  }
              </div>
  )
}

export default Order