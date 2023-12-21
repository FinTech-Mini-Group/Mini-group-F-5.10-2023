import React from 'react';
import global from '../../assets/icons/global.svg'

function HeaderTop() {
  return (
    
    <div className='h-[50px] w-full flex items-center justify-between font-rl'>
        <div className='flex px-20 py-2 gap-7 items-center '>
            <label htmlFor="">
                <select name="" id="" className='bg-transparent border-none outline-none' >
                    <option value=""><img src={global}/> Русский </option>
                </select>
            </label>
            <h2 className='text-[#999999]'>Магазины</h2>
            <button className='border-2 border-[#00B709] py-1 px-2 rounded-md text-[#00B709]'>Стать продавцом</button>
        </div>
        <div className='flex gap-7 px-20'>
          <h3 className='text-[#999999]'>+99 899 999-99-99</h3>
          <h3 className='text-[#999999]'>Связаться с нами</h3>

        </div>

    </div>
  )
}

export default HeaderTop