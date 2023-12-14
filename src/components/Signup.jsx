import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../landingpages/Footer'

function Registrations() {
  const navigate=useNavigate()  
  return (
    <div className='container m-auto '>
        <div className='my-[50px] p-8 border-[2px] border-solid rounded-[10px]  bg-Crect w-[450px] m-auto'>
              <h1 className='text-subtitle mb-[30px]'>Зарегистрируйтесь в системе</h1>
               <form className='grid gap-5 ' action="">
              <input required className='py-4 px-5 text-Body text-brand rounded-[4px]' type="text" placeholder='Ваш номер телефона'/>
              <input required className='py-4 px-5 text-Body text-brand rounded-[4px]'  type="password" placeholder='Пароль'/>
              <input required className='py-4 px-5 text-Body text-brand rounded-[4px]'  type="password" placeholder='Подтвердить пароль'/>
              </form> 
              <div className='flex items-center my-4 '>
                  <input className='mr-[10px] !w-5 !h-5  text-Cmain' type= "checkbox" />
                  <p className='text-Bodysmall' ><span>Я согласен с</span>политикой конфиденциальности и условиями <span>пользование.</span> </p>
              </div>
              <button className='py-2 px-4  rounded-[4px] text-center text-Body text-Cwhite bg-bgmain w-[100%]'>Войти</button>
              <p onClick={()=>navigate('/Signin')} className='mt-8 text-Bodysmall text-Cmain cursor-pointer'>Уже есть аккаунт</p>
        </div>
    
    </div>
  )
}

export default Registrations