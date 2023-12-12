import React from 'react'
import Footer from '../landingpages/Footer'
import Products from '../pages/Product'
import { icons } from '../utilits/icons'

function Shop() {
  return (
    <div>
        <h1 className='text-subtitle mt-[60px] mb-[30px]'>Этот товар в других магазинах</h1>
        <div className='flex items-center'>
            <h1 className='text-Bodybold mr-[600px]'>MULTI BRAND</h1>
            <p className='text-Bodybold mr-[50px]'>22 900 000 сум</p>
            <button className='py-2 px-4 bg-bgmain rounded-[4px] text-Body text-Cwhite'>Посмотреть</button>
        </div>
        <p className='border-[1px] border-solid border-[#ECECEC] w-[1000px] my-[18px]'></p>
        <div className='flex items-center'>
            <h1 className='text-Bodybold mr-[620px]'>FILL STORE</h1>
            <p className='text-Bodybold mr-[50px]'>23 600 000 сум</p>
            <button className='py-2 px-4 bg-bgmain rounded-[4px] text-Body text-Cwhite'>Посмотреть</button>
        </div>
        <p className='border-[1px] border-solid border-[#ECECEC] w-[1000px] my-[18px]'></p>
        <div className='flex items-center'>
            <h1 className='text-Bodybold mr-[580px]'>SAROY MARKET</h1>
            <p className='text-Bodybold mr-[50px]'>24 500 000 сум</p>
            <button className='py-2 px-4 bg-bgmain rounded-[4px] text-Body text-Cwhite'>Посмотреть</button>
        </div>
        <p className='border-[1px] border-solid border-[#ECECEC] w-[1000px] my-[18px]'></p>
        <div className='flex items-center'>
            <h1 className='text-Bodybold mr-[680px]'>STS</h1>
            <p className='text-Bodybold mr-[50px]'>27 500 000 сум</p>
            <button className='py-2 px-4 bg-bgmain rounded-[4px] text-Body text-Cwhite'>Посмотреть</button>
        </div>
        <p className='border-[1px] border-solid border-[#ECECEC] w-[1000px] my-[18px]'></p>
        <div className='flex items-center'>
            <h1 className='text-Bodybold mr-[550px]'>TEXNOGEN MARKET</h1>
            <p className='text-Bodybold mr-[50px]'>29 000 000 сум</p>
            <button className='py-2 px-4 bg-bgmain rounded-[4px] text-Body text-Cwhite'>Посмотреть</button>
        </div>
          <div className=' gap-6 flex items-center mt-[38px] mb-[50px]'>
            <button className='p-2  rounded-[4px]  bg-[#6EFF75]'>{icons.arrowl}</button>
            <button className='py-2 px-4 border-[1px] text-brand border-solid rounded-[4px] hover:bg-bgmain '>1</button>
            <button className='py-2 px-4 border-[1px] text-brand border-solid rounded-[4px] hover:bg-bgmain '>2</button>
            <button className='py-2 px-4 border-[1px] text-brand border-solid rounded-[4px] hover:bg-bgmain '>3</button>
            <button className='flex py-2 px-4 border-[1px] border-solid rounded-[4px] hover:bg-bgmain '>Следующее <span>{icons.arrowr}</span></button>
          </div>
          <div className='flex justify-between'>
          <h2 className='text-subtitle '>Похожие товары</h2>
          <div>
          <button className='p-2  rounded-[4px]  bg-[#6EFF75] '>{icons.arrowl}</button>
          <button className='p-2  rounded-[4px]  bg-[#6EFF75] ml-5'>{icons.arrowr}</button>
          </div>
          </div>
          <Products/>
          <Footer/>
    </div>
  )
}

export default Shop