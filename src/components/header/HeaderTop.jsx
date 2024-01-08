import { t } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import global from '../../assets/icons/global.svg'
import MyComponent from '../Language/MyComponent';


  
function HeaderTop(){
  return (
    
    <div className='h-[50px] w-full lg:flex items-center justify-between font-rl'>
        <div className='flex lg:px-20 lg:py-2 gap-7 items-center '>
            <MyComponent/>
            <h2 className='text-[#999999]'>{t('dokonlar')}</h2>
            <button className='border-2 border-[#00B709] text-xs lg:py-1 lg:px-2 rounded-md text-[#00B709]'>Стать продавцом</button>
        </div>
        <div className=' ml-[150px] mt-[30px] lg:flex lg:gap-7 lg:px-20  '>
          <h3 className='text-[#999999]'>+99 899 999-99-99</h3>
          <h3 className='text-[#999999]'>Связаться с нами</h3>

        </div>

    </div>
  )
}

export default HeaderTop