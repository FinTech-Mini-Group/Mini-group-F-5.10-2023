import React from 'react'
import { icons } from '../utilits/icons'
import Products from '../pages/Product'

function Recommend() {
    return (
        <div className='container lg:my-[50px] m-auto'>
            <h1 className=' text-center lg:text-subtitle mb-[20px] lg:text-start '>Рекомендуем вам</h1>
            <div className='lg:flex justify-between'>
                <div className=' mb-[30px] lg:flex '>
                    <button className='py-[8px] px-[16px] rounded-[4px] bg-Cmain text-Body text-Cwhite mr-[20px]'>Товары со скидкой</button>
                    <button className='py-[8px] px-[16px] rounded-[4px] bg-change text-Body text-[#999]'>Топ продаж</button>
                </div>
                <div>
                    <button className='p-[8px] bg-Clayout rounded-[4px]'>{icons.arrowl}</button>
                    <button className='p-[8px] bg-Clayout rounded-[4px] ml-[20px]'>{icons.arrowr}</button>
                </div>
            </div>
             <Products/>
        </div>
    )
}

export default Recommend