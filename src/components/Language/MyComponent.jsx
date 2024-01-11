import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import uzb from '../../assets/pngtree-uzbekistan-flag-png-with-transparent-background-png-image_3918398.jpg'
import rus from '../../assets/russia-flag-circular-17765.png'
import mir from '../../assets/global-9350.png'
const MyComponent = () => {
const { t, i18n } = useTranslation();
const changeLanguage = (lng) => {
    i18n.
changeLanguage(lng);
  };
  const [isOpen, setIsOpen] = useState(false)
  return (
   <>
   <div className='relative'>
   <img onClick={()=>setIsOpen((p)=>!p)} className='w-8' src={mir} alt="" />
   {(isOpen &&
    <div className=' absolute top-30 right-[-157px] bg-black p-2 rounded-[8px] pb-6'>
      {/* <h1 className='text-white'>{t('welcome.title')}</h1>
      <p className='text-white'>{t('welcome.message')}</p> */}
      <p onClick={() => changeLanguage('uz')} src={uzb} className='text-white text-Bodystrik flex items-center mb-3 gap-3 cursor-pointer'><img className='w-8 rounded-[50%]' onClick={() => changeLanguage('ru')}  src={uzb} alt="" />UZBEK</p>
      <p className='border-2 border-solid mb-3 '></p>
      <p onClick={() => changeLanguage('ru')} className='text-white text-Bodystrik flex items-center gap-3 cursor-pointer ' ><img className='w-8' onClick={() => changeLanguage('ru')} src={rus} alt="" />RUSSIAN</p>
       </div>
       )}
    </div>
   </> 
  );
};

export default MyComponent;