import React from 'react'
import elektronica from '../assets/Rectangle 657.png'
import yuviler from '../assets/Rectangle 659.png'
import knigi from '../assets/Rectangle 658.png'
import kanstovar from '../assets/Rectangle 661.png'
import shkola from '../assets/Rectangle 660.png'
import avtotovar from '../assets/Rectangle 662.png'
import sport from '../assets/Rectangle 651.png'
import zootovar from '../assets/Rectangle 652.png'
import mebel from '../assets/Rectangle 653.png'
import mujchinam from '../assets/Rectangle 654.png'
import jenshinam from '../assets/Rectangle 655.png'
import obuv from '../assets/Rectangle 656.png'

function Category() {
  return (
    <div className='lg:container lg:mx-[100px] my-[50px]'>
        <div className='lg:flex justify-between mb-[35px]'>
            <h1 className='text-TitleBold text-Cback'>Лучшие категории</h1>
             <h2 className='text-Body text-Cmain '>Все категории</h2>
        </div>
        <div className='lg:grid lg:grid-cols-6 gap-4'>
            <div>
                <img src={elektronica} alt="" />
                <p className=' mb-[50px] lg:text-center mt-[10px] text-subtitle text-[#000000]'>Электроника</p>
            </div>
            <div>
                <img src={yuviler} alt="" />
                <p className=' mb-[50px] lg:text-center mt-[10px] text-subtitle text-[#000000]'>Ювелирные изделия</p>
            </div>
            <div>
                <img src={knigi} alt="" />
                <p className=' mb-[50px] lg:text-center mt-[10px] text-subtitle text-[#000000]'>Книги</p>
            </div>
            <div>
                <img src={kanstovar} alt="" />
                <p className=' mb-[50px] lg:text-center mt-[10px] text-subtitle text-[#000000]'>Канцтовары</p>
            </div>
            <div>
                <img src={shkola} alt="" />
                <p className=' mb-[50px] lg:text-center mt-[10px] text-subtitle text-[#000000]'>Школа</p>
            </div>
            <div>
                <img src={avtotovar} alt="" />
                <p className=' mb-[50px] lg:text-center mt-[10px] text-subtitle text-[#000000]'>Автотовары</p>
            </div>
            <div>
                <img src={sport} alt="" />
                <p className=' mb-[50px] lg:text-center mt-[10px] text-subtitle text-[#000000]'>Спорт</p>
            </div>
            <div>
                <img src={zootovar} alt="" />
                <p className=' mb-[50px] lg:text-center mt-[10px] text-subtitle text-[#000000]'>Зоотовары</p>
            </div>
            <div>
                <img src={mebel} alt="" />
                <p className=' mb-[50px] lg:text-center mt-[10px] text-subtitle text-[#000000]'>Мебель</p>
            </div>
            <div>
                <img src={mujchinam} alt="" />
                <p className=' mb-[50px] lg:text-center mt-[10px] text-subtitle text-[#000000]'>Мужчинам</p>
            </div>
            <div>
                <img src={jenshinam} alt="" />
                <p className=' mb-[50px] lg:text-center mt-[10px] text-subtitle text-[#000000]'>Женщинам</p>
            </div>
            <div>
                <img src={obuv} alt="" />
                <p className=' mb-[50px] lg:text-center mt-[10px] text-subtitle text-[#000000]'>Обувь</p>
            </div>

        </div>
    </div>
  )
}

export default Category