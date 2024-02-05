import React from 'react'

function Questionpop({ visible, onClose }) {
if (!visible) return null;
  return (
    <div className='fixed z-50 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center '>
        <div className='bg-[#FFFFFF] lg:p-[30px] rounded-[10px]'>
        <h1 className='text-subtitle mb-5'>Задать вопрос</h1>
           <form className='grid lg:gap-3 ' action="">
           <input className='py-4 px-5 border-[2px] border-solid rounded-[4px] text-Body text-brand lg:w-[440px]' required type="text" placeholder='Ваша имя*'/>
                    <input className='py-4 px-5 border-[2px] border-solid rounded-[4px] text-Body text-brand lg:w-[440px]' required type="text" placeholder='Ваша город*'/>
                    <input className='py-4 px-5 border-[2px] border-solid rounded-[4px] text-Body text-brand lg:w-[440px]' required type="email" placeholder='E-mail*'/>                  
                    <textarea className='py-4 px-5 border-[2px] border-solid rounded-[4px] text-Body text-brand ' name="" id="" cols="30" rows="10">Отзыв*</textarea> 
            </form>   
            <button className='py-2 px-4 border-[2px] border-solid bg-bgmain rounded-[4px] text-Body text-Cwhite w-[100%] mt-[20px]'>Задать вопрос</button>  
            <button onClick={onClose}>CLOSE</button>
        </div>
    </div>
  )
}

export default Questionpop