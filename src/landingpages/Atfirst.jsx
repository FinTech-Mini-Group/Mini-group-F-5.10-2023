import React, { useState } from 'react'
import { icons } from '../utilits/icons'

function Atfirst() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='relative '>
        <button onClick={()=>setIsOpen((p)=>!p)} className='text-subtit flex items-center ml-[992px]'>По рейтингу <span className='ml-[10px]'>{icons.arrowb}</span></button>
        {isOpen && (
          <div className='absolute left-[1000px] p-8 bg-white rounded-[5px] w-[310px] border-solid border-2'>
                <button className='text-subtit mb-8 underline hover:bg-Cmain hover:text-white '>Сначала популярные</button>
                <button className='text-subtit mb-8 underline hover:bg-Cmain hover:text-white'>Сначала дорогие</button>
                <button className='text-subtit mb-8 underline hover:bg-Cmain hover:text-white'>Сначала дешёвые</button>
                <button className='text-subtit mb-8 underline hover:bg-Cmain hover:text-white'>Сначала популярные</button>
                <button className='text-subtit mb-8 underline hover:bg-Cmain hover:text-white'>Сначала новинки</button>
                <button className='text-subtit underline hover:bg-Cmain hover:text-white'>По размеру скидки</button>
                

          </div>

            
        )}
    </div>
  )
}

export default Atfirst