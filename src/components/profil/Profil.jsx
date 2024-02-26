import React from 'react'
import { useNavigate } from 'react-router-dom'
import { icons } from '../../utilits/icons'

function Profil(props) {
  const navigate=useNavigate();

  const handleLogout = () => {
    // Удалить токен из localStorage
    localStorage.removeItem('token');
    // Перенаправить пользователя на страницу выхода
    navigate('/');
  };
  return (
    <div className={props.title === 'Главное' ? 'block' : 'hidden'}>
    <div className='container m-auto'>
        <div className='lg:flex gap-8 justify-between'>
            <div className='p-6 border border-change rounded-md lg:w-[600px] '>
              <div className='flex gap-5'>
              <button>{icons.profil}</button> 
              <p className='pt-10 text-subtitless' >Имя не указано</p>
              <button onClick={()=>navigate("/personalinfo:id")}>{icons.pen}</button> 
              </div>
              <div className='m-4 flex flex-col gap-2'>
              <p className='text-brand text-Body'>Номер телефона</p>
              <p className='text-Bodybold'>+998 99 123 45 67</p>
              </div>
            </div>
            <div className='bg-Crect p-6 border-change rounded-md lg:w-[600px]'>
              <div className='flex  gap-3'>
                <button>{icons.check}</button>
                <p className='pt-10 text-subtitless'>Чеки</p>
              </div>
               <p className='text-brand text-Body pt-5'>Посмотреть</p>
            </div>
            <div className='bg-gradient-to-r from-blue-100 via-pink-300 to-red-500 p-10 rounded-md lg:w-[600px]'>
            <div className='flex  gap-3'>
                <button>{icons.star}</button>
                <p className='pt-10 text-subtitless'>Чеки</p>
              </div>
               <p className='text-brand text-Body pt-5'>Посмотреть</p>


            </div>
        </div>
        <div className='lg:flex justify-between mt-9'>
          <div className=' bg-button p-3 rounded-md px-10 py-2 lg:w-[400px] flex flex-col gap-2 ' >
            <p className='text-subtitless'>Мои карты</p>
            <p className='text-brand'>Добавить карту</p>
          </div>
          <div className='border border-change rounded-md px-10 py-2 lg:w-[400px] flex flex-col gap-2'>
          <p className='text-subtitless'>Уведомление</p>
            <p className='text-brand'>Не удалось загрузить</p>
          </div>
          <div className='border border-change rounded-md px-10 py-2 lg:w-[400px] flex flex-col gap-2'>
           <p className='text-subtitless'>Покупки</p>
           <p className='text-brand'>Тут пусто</p>

          </div>
          <div className='border border-change rounded-md px-10 py-2 lg:w-[400px] flex flex-col gap-2'>
            <p className='text-subtitless'>Избранное</p>
            <p className='text-brand'>Посмотреть</p>

          </div>

        </div>
        <div className='lg:flex justify-between mt-9'>
          <button onClick={handleLogout} className='text-subtitless bg-Crect border border-[#CCC] rounded-lg px-8 py-4'>Выйти из системы</button>
          <button className=' !text-Cwhite text-subtitless bg-bgmain border border-[#CCC] rounded-lg px-8 py-4'>Сохранить изменение</button>
        </div>
    </div>
    </div>
  )
}

export default Profil