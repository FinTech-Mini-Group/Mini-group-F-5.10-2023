import React from 'react'
import product1 from '../assets/Product images.png'
import product2 from '../assets/Rectangle 623.png'
import product3 from '../assets/Rectangle 624.png'
import product4 from '../assets/Rectangle 625.png'
import product5 from '../assets/Rectangle 627.png'
function Electronic() {


  return (
     <div className='container m-auto'>
      <h1 className='text-subtitle'>Ноутбук Apple Macbook Air 13 2020 / M1 / 8GB / 256GB / Apple graphics 7-core, серебристый</h1>
      <h2 className='text-Bodybold my-5'>Магазин: <span className='text-Bodybold text-Cmain'>BSB STORE</span></h2>
      <div className='flex'>
        <div className=''>
            <img className='mb-5' src={product1} alt="" />
            <img src={product2} alt="" />
            <img className='my-5'src={product3} alt="" />
            <img className='mb-5' src={product4} alt="" />
            <img src={product4} alt="" />
        </div>
        <div>
          <img src={product5} alt="" />
        </div>
        <div className='py-5 px-8 bg-Crect rounded-[10px] w-[554px]'>
          <h1 className='text-Bodybold mb-5'>Коротко о продукте</h1>
          <h2 className='text-subtitle mb-[10px]'>О продукте</h2>
          <div className='flex justify-between mb-[10px]'>
          <p className='text-Body text-brand '>Бренд</p>
          <p className='text-Body text-subtitles'>Apple</p>
          </div>
          <div className='flex justify-between mb-[10px]'>
          <p className='text-Body text-brand '>Модель</p>
          <p className='text-Body text-subtitles'>Macbook Air 13 2020</p>
          </div>
          <div className='flex justify-between mb-[10px]'>
          <p className='text-Body text-brand '>Сертификат</p>
          <p className='text-Body text-subtitles'>Не подлежит сертификации</p>
          </div>
          <div className='flex justify-between mb-[10px]'>
          <p className='text-Body text-brand '>Операционной системы</p>
          <p className='text-Body text-subtitles'>MacOS</p>
          </div>
          <div className='flex justify-between mb-[10px]'>
          <p className='text-Body text-brand'>Диагональ</p>
          <p className='text-Body text-subtitles'>13.3”</p>
          </div>
          <div className='flex justify-between mb-[10px]'>
          <p className='text-Body text-brand'>Процессор</p>
          <p className='text-Body text-subtitles'>M1</p>
          </div>
          <div className='flex justify-between mb-[10px]'>
          <p className='text-Body text-brand'>Цвет:</p>
          <p className='text-Bodybold text-subtitles'>Синий</p>
          </div>
          <p className='border-[1px] border-solid border-[#00B709] w-[70px] h-[90px] rounded-[5px] mb-[10px] '></p>
          <p className='text-Body text-brand mb-[10px]'>Память</p>
          <div className='flex'>
            <button className='py-[6px] px-[10px] rounded-[5px] border-[1px] bg-[#FFFFFF] text-Body mr-[10px]'>8/128</button>
            <button className='py-[6px] px-[10px] rounded-[5px] border-[1px] border-[#1CC427] bg-[#FFFFFF] text-Body mr-[10px]'>8/256</button>
            <button className='py-[6px] px-[10px] rounded-[5px] border-[1px]  bg-change text-Body text-brand '>16/512</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Electronic