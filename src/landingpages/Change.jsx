import React from 'react'
import { icons } from '../utilits/icons'
import { ekonom } from './data'

function Change() {
  return (
    <div className='  lg:mb-[50px] m-auto lg:px-[100px] bg-change '>
        <div className='lg:flex justify-center  lg:py-[75px]  gap-5 '>
           
           {
              ekonom.map((element,value)=>
               <div className=' lg:justify-center lg:w-full lg:h-[400px]  bg-white  lg:pt-[102px]  lg:pb-[101px] rounded-[10px]' key={value}>
                 <span className='flex justify-center'>{element.icons}</span>
                 <h1 className=' py-[10px] text-subtitle text-[#161010] text-center'>{element.name}</h1>
                 <p className='text-Body text-[#000000] text-center'>{element.names}</p>
            </div>
              )      
           }
        </div>

    </div>
  )
}

export default Change