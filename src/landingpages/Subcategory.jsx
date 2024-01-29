import React from 'react'
import ulchagich from "../assets/Group 262.png"
import Atfirst from './Atfirst'
import Products from '../pages/Product'
import { Giftsmenu } from '../components/Stock/Gifts'


function Subcategory() {
  return (
    <div className='container m-auto'>
        <div className='lg:flex'>
        <div>
            <h1 className='text-subtitle text-subtitles mb-[5px] '>Смартфоны Apple</h1>
            <p className='text-Body text-brand'>159 товаров</p>
            <div className='flex my-[30px]' >
            <div>
            <div className='flex mb-[30px] justify-between ' >
              <p className='text-Bodybold'>Цена</p>
              <p className='text-Body text-brand'>Сбросить</p>
            </div>
            <div className='flex gap-5'>
              <button className='py-[10px] px-6 border-solid border-2 rounded-[4px] text-Body'>330 000</button>
              <button className='py-[10px] px-6 border-solid border-2 rounded-[4px] text-Body'>33 330 000</button>
              </div>
                <img className='my-[30px]' src={ulchagich} alt="" />

            </div>
          </div>
          <div >
            <div className='flex gap-20 ' >
              <p className='text-Bodybold'>Бренды</p>
              <p className='text-Body text-brand'>Сбросить</p>
            </div>
            <div className='flex gap-3 my-[30px]'>
            <input className='w-6 h-6' type="checkbox" />
            <p className='text-Body'>iPhone XR</p>
            </div>
            <div className='flex gap-3 my-[30px]'>
            <input className='w-6 h-6' type="checkbox" />
            <p className='text-Body'>Линейка iPhone 11</p>
            </div>
            <div className='flex gap-3 my-[30px]'>
            <input className='w-6 h-6' type="checkbox" />
            <p className='text-Body'>Линейка iPhone 12</p>
            </div>
            <div className='flex gap-3 my-[30px]'>
            <input className='w-6 h-6' type="checkbox" />
            <p className='text-Body'>Линейка iPhone 13</p>
            </div>
            <div className='flex gap-3 my-[30px]'>
            <input className='w-6 h-6' type="checkbox" />
            <p className='text-Body'>Линейка iPhone 14</p>
            </div>
            <div className='flex gap-3 my-[30px]'>
            <input className='w-6 h-6' type="checkbox" />
            <p className='text-Body'>Старые модели iPhone</p>
            </div>
          </div>
          <button className='Bodybold text-Cmain mb-8 '>Показать больше</button>
          <div>
          <div >
            <div className='flex gap-20 ' >
              <p className='text-Bodybold'>Накопитель</p>
              <p className='text-Body text-brand'>Сбросить</p>
            </div>
            <div className='flex gap-3 my-[30px]'>
            <input className='w-6 h-6' type="checkbox" />
            <p className='text-Body'>64 ГБ</p>
            </div>
            <div className='flex gap-3 my-[30px]'>
            <input className='w-6 h-6' type="checkbox" />
            <p className='text-Body'>128 ГБ</p>
            </div>
            <div className='flex gap-3 my-[30px]'>
            <input className='w-6 h-6' type="checkbox" />
            <p className='text-Body'>256 ГБ</p>
            </div>
            <div className='flex gap-3 my-[30px]'>
            <input className='w-6 h-6' type="checkbox" />
            <p className='text-Body'>512 ГБ</p>
            </div>
            <div className='flex gap-3 my-[30px]'>
            <input className='w-6 h-6' type="checkbox" />
            <p className='text-Body'>1 ТБ</p>
            </div>
          </div>
          </div>
          <div >
            <div className='flex gap-20 ' >
              <p className='text-Bodybold'>Цвет</p>
              <p className='text-Body text-brand'>Сбросить</p>
            </div>
            <div className='flex gap-3 my-[30px]'>
            <input className='w-6 h-6' type="checkbox" />
            <p className='text-Body'>Белый</p>
            </div>
            <div className='flex gap-3 my-[30px]'>
            <input className='w-6 h-6' type="checkbox" />
            <p className='text-Body'>Чёрный</p>
            </div>
            <div className='flex gap-3 my-[30px]'>
            <input className='w-6 h-6' type="checkbox" />
            <p className='text-Body'>Фиолетовый</p>
            </div>
            <div className='flex gap-3 my-[30px]'>
            <input className='w-6 h-6' type="checkbox" />
            <p className='text-Body'>Голубой</p>
            </div>
            <div className='flex gap-3 my-[30px]'>
            <input className='w-6 h-6' type="checkbox" />
            <p className='text-Body'>Серый</p>
            </div>
            <button className='Bodybold text-Cmain mb-8 '>Показать больше</button>
          </div>
        </div>
        <div>
          <div className=''>
          <Atfirst />
          </div>
    
          <Products/>
        </div>
        </div>
    </div>
  )
}

export default Subcategory