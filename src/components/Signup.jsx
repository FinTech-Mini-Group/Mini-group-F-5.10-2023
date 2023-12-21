import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../landingpages/Footer'
import { icons } from '../utilits/icons'

function Registrations() {
  const navigate=useNavigate()  
  const[showPass1, setShowPass1]=useState(false)
  const[showPass2, setShowPass2]=useState(false)
  const handleShowpass1 = () =>{
    setShowPass1(p=>!p)
  }
  const handleShowpass2 = () =>{
    setShowPass2(p=>!p)
  }
  return (
    <div className='container m-auto '>
        <div className='my-[50px] p-8 border-[2px] border-solid rounded-[10px]  bg-Crect w-[450px] m-auto'>
              <h1 className='text-subtitle mb-[30px]'>Зарегистрируйтесь в системе</h1>
               <form className='grid gap-5 ' action="">
              <input required className='py-4 px-5 text-Body text-brand rounded-[4px]' type="text" placeholder='Ваш номер телефона'/>
              <div className=' relative bg-white py-4 px-5 text-Body text-brand rounded-[4px] '>
              <input required className='w-[100%] outline-none'  type={showPass1 ? 'text' : 'password'}placeholder='Пароль'/>
              <button type='button' className='absolute right-0' onClick={handleShowpass1} >{showPass1 ? icons.paroll : icons.par}</button>
              </div>
              <div className=' relative bg-white py-4 px-5 text-Body text-brand rounded-[4px] '>
              <input required className='w-[100%] outline-none'  type={showPass2 ? 'text' : 'password'}placeholder='Подтвердит Пароль'/>
              <button type='button' className='absolute right-0' onClick={handleShowpass2} >{showPass2 ? icons.paroll : icons.par}</button>
              </div>
              <div className='flex items-center my-4 '>
                  <input className='mr-[10px] w-[30px] h-[30px] text-Cmain' type= "checkbox" />
                  <p className='text-Bodysmall' ><span>Я согласен с</span>политикой конфиденциальности и условиями <span>пользование.</span> </p>
              </div>
              <button className='py-2 px-4  rounded-[4px] text-center text-Body text-Cwhite bg-bgmain w-[100%]'>Войти</button>
               </form>
              <p onClick={()=>navigate('/Signin')} className='mt-8 text-Bodysmall text-Cmain cursor-pointer'>Уже есть аккаунт</p>
        </div>
    
    </div>
  )
}

export default Registrations