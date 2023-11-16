import React from 'react'
import noutbuk from '../assets/Mask group.png'

function Instruction() {
  return (
    <div className=' w-[100%] flex justify-between  mb-[50px] bg-instruc bg-no-repeat gap-1'>
          <h1 className='text-Instruct text-white py-[71px] pl-[50px] '>Ноутбуки на любой вкус и цвет</h1>
          <img src={noutbuk} alt="" />
    </div>
  )
}

export default Instruction