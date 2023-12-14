import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../landingpages/Footer'

function Signin() {
    const navigate=useNavigate()
  return (
    <div className='container m-auto '>
    <div className='p-8 border-[2px] border-solid rounded-[10px] mt-[50px] mb-[34px]  bg-Crect w-[500px] m-auto'>
          <h1 className='text-subtitle mb-[30px] text-center'>Войдите в свою учетную запись</h1>
           <form className='grid gap-5 ' action="">
          <input required className='py-4 px-5 text-Body text-brand rounded-[4px]' type="text" placeholder='Ваш номер телефона'/>
          <input required className='py-4 px-5 text-Body text-brand rounded-[4px]'  type="password" placeholder='Пароль'/>
          </form> 
          <div className='flex justify-between my-8'>
            <div className='flex items-center'>
              <input className='mr-[10px] w-[20px] h-[20px] bg-Cmain' type="checkbox" />
              <p className='text-Bodysmall' >Запомнить меня</p>
            </div>
            <div>
                <p className='text-Bodysmall text-Cmain '>Забыли пароль ?</p>
            </div>
          </div>
          <button className='py-2 px-4  rounded-[4px] text-center text-Body text-Cwhite bg-bgmain w-[100%]'>Войти</button>
          
          <p onClick={()=>navigate('/Signup')} className='mt-8 text-Bodysmall text-Cmain cursor-pointer'> <span className='text-Bodysmall text-brand'>У вас нет аккаунта?</span>Зарегистрируйтесь</p>
    </div>

</div>

  )
}

export default Signin