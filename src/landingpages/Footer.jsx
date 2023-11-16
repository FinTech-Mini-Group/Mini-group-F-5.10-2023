import React from 'react'
import { icons } from '../utilits/icons'


function Footer() {
  return (
    <div className=' px-[100px] bg-Cwhite pt-[50px] flex justify-between'>
        <div>
            <h1 className='text-subtitle text-subtitles mb-[30px]'>Покупателям</h1>
            <p className='text-Body text-[#999999] mb-[15px] cursor-pointer '>Как сделать заказ</p>
            <p className='text-Body text-[#999999] mb-[15px] cursor-pointer '>Способы оплаты</p>
            <p className='text-Body text-[#999999] mb-[15px] cursor-pointer'>Доставка</p>
            <p className='text-Body text-[#999999] mb-[15px] cursor-pointer'>Возврат товара</p>
            <p className='text-Body text-[#999999] mb-[15px] cursor-pointer'>Возврат денежных средств</p>
        </div>
        <div>
            <h1 className='text-subtitle text-subtitles mb-[30px]'>Партнёрам</h1>
            <p className='text-Body text-[#999999] mb-[15px] cursor-pointer '>Продать на маркетплейсе</p>
            <p className='text-Body text-[#999999] mb-[15px] cursor-pointer '>Наши магазины</p>
            <p className='text-Body text-[#999999] mb-[15px] cursor-pointer'>Перевозчикам</p>
            <p className='text-Body text-[#999999] mb-[15px] cursor-pointer'>Партнерский пункт выдачи</p>
        </div>
        <div>
            <h1 className='text-subtitle text-subtitles mb-[30px]'>Компания</h1>
            <p className='text-Body text-[#999999] mb-[15px] cursor-pointer '>О нас</p>
            <p className='text-Body text-[#999999] mb-[15px] cursor-pointer '>Реквизиты</p>
            <p className='text-Body text-[#999999] mb-[15px] cursor-pointer'>Пресс-центр</p>
        </div>
        <div>
            <h1 className='text-subtitle text-subtitles mb-[30px]'>Контакты</h1>
            <p className='text-Body text-[#999999] mb-[15px] cursor-pointer '>Г. Ташкент, Юнусабадский р.<br/> ул.Юнус Раджаби дом а16</p>
            <p className='text-Body text-[#999999] mb-[15px] cursor-pointer '>Реквизиты</p>
            <p className='text-Body text-[#999999] mb-[15px] cursor-pointer'>Пресс-центр</p>
        </div>
        <div>
            <h1 className='text-subtitle text-subtitles mb-[30px]'>Социальные сети</h1>
            <div className='flex items-center'>
                <span className='mr-[30px] p-[10px] border-2 border-solid rounded-[20px] cursor-pointer'>{icons.telegram}</span>
                <span className='mr-[30px] p-[10px] border-2 border-solid rounded-[20px] cursor-pointer'>{icons.Instagram}</span>
                <span className='p-[10px] border-2 border-solid rounded-[20px] cursor-pointer'>{icons.Facebook}</span>
            </div>
        </div>
    </div>
  )
}

export default Footer