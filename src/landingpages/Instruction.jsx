import React from 'react'
import noutbuk from '../assets/Mask group.png'

function Instruction() {
  return (
    <div className=' lg:w-[100%] lg:flex justify-between  mb-[50px] bg-instruc bg-no-repeat gap-1'>
          <h1 className='lg:text-Instruct text-white py-[71px] lg:pl-[50px] '>Ноутбуки на любой вкус и цвет</h1>
          <img src={noutbuk} alt="" />
    </div>
  )
}

export default Instruction