import React from 'react'
import { zakaz } from '../landingpages/data'


function Basket() {
  return (
    <div className='container m-auto'>
        <h1 className='text-TitleBold my-8 '>Корзина</h1>
        <div>
            <div className='p-7 border-[2px] border-solid rounded-[10px]'>
              <div className='flex justify-between'>
                <div className='flex'>
                <input className='mr-[20px] w-6' type="checkbox"  />  
                <p className='text-subtitle'>Выбрать всё</p>
                </div>
                <div>
                    <h2 className='Bodybold'>Удалить</h2>
                </div>
            </div>
            <div className='gap-5'>
                {
                zakaz.map((element,value)=>
                <div key={value} className='flex'>
                <input className='mr-[20px] w-6' type="checkbox"  />      
                <img className='mr-5' src={element.img} alt="" />
               <div>
                    <p>{element.name}</p>
                    <p className=''>Цвет: {element.colour}</p>
                    <p className=''>Магазин: MacBro</p>
                </div>
                </div>
                
                )
                }
                
                <div></div>
                <div></div>
            </div>


            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Basket