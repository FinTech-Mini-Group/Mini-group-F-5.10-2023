import React from 'react'
import samakat from '../assets/Rectangle 626.png'
import iphone from '../assets/Rectangle 626 (1).png'
import washing from '../assets/Rectangle 626 (2).png'
function Order() {
  return (
    <div className='py-10'>
                  <div className='flex justify-between'>
                    <h2 className='text-subtitle text-subtitles'>Ваш заказ</h2>
                    <h3 className='text-Body text-[#999999]'>Изменить</h3>
                  </div>
                  <div className='flex items-center mt-5'>
                    <img className='pr-5 ' src={samakat} alt="" />
                    <p className='mr-[200px] text-Bodybold'>Xiaomi Mi Electric Scooter 3 до 100 кг</p>
                    <p className='py-2 px-4 border-2 border-solid rounded-[4px] mr-[200px] text-Bodybold'>2</p>
                    <p className='text-subtitle'>9 720 000 <span className='text-Bodybold'>сум</span></p>
                  </div>
                  <div className='flex items-center mt-5'>
                    <img className='pr-5 ' src={iphone} alt="" />
                    <p className='mr-[350px] text-Bodybold'>IPhone 13 Pro Max</p>
                    <p className='py-2 px-4 border-2 border-solid rounded-[4px] mr-[200px] text-Bodybold'>1</p>
                    <p className='text-subtitle'>13 500 000 <span className='text-Bodybold'>сум</span></p>
                  </div>
                  <div className='flex items-center mt-5'>
                    <img className='pr-5 ' src={washing} alt="" />
                    <p className='mr-[140px] text-Bodybold'>Стиральная машина Samsung WW80J6210CS</p>
                    <p className='py-2 px-4 border-2 border-solid rounded-[4px] mr-[200px] text-Bodybold'>2</p>
                    <p className='text-subtitle'>6 560 000 <span className='text-Bodybold'>сум</span></p>
                  </div>
              </div>
  )
}

export default Order