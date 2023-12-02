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
import { category } from './data'
import { useNavigate } from 'react-router-dom'

function Category() {

    const navigate=useNavigate()
  return (
    <div className='lg:container m-auto my-[50px]'>

         <div className='flex justify-between items-center mb-[35px]'>
              <h1 className='text-TitleBold text-Cback'>Лучшие категории</h1>
             <h2 className='text-Body text-Cmain '>Все категории</h2>
            </div>
        <div className='lg:flex justify-between mb-[35px]'>
             <div className='lg:grid lg:grid-cols-6 gap-2'>
             {
                category.map((element,value)=>
                    <div className=''>
                        <img src={element.img} alt="" onClick={()=>navigate(`/${element.path}`)} />
                        <p className=' mb-[50px] lg:text-center mt-[10px] text-subtitle text-[#000000]'>{element.name}</p>
                    </div>
            )}
                </div>
        </div>
    </div>
  )
}

export default Category