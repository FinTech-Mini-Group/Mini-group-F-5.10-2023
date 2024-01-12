import React from 'react'

function Oplaty() {
  return (
    <div>
        <h1 className='text-subtitle mb-5'>Способы оплаты</h1>
        <div className='grid grid-cols-2 gap-7 mb-10'>
        <div className='py-4 pl-8 pr-8 flex items-center border-2 border-solid rounded-[5px] w-[360px]'>
        <input className='w-6 h-6' type="radio"  />
        <h1 className='text-Bodybold ml-[10px]'>Оплата через Payme</h1>
        </div>
        <div className='py-4 pl-8 flex items-center border-2 border-solid rounded-[5px] w-[360px]'>
        <input className='w-6 h-6' type="radio"   />
        <h1 className='text-Bodybold ml-[10px]'>Оплата по карте HUMO и UZCARD</h1>
        </div>
        <div className='py-4 pl-8 flex items-center border-2 border-solid rounded-[5px] w-[360px]'>
        <input className='w-6 h-6' type="radio"  />
        <h1 className='text-Bodybold ml-[10px]'>Оплата наличными при получении</h1>
        </div>
        <div className='py-4 pl-8 flex items-center border-2 border-solid rounded-[5px] w-[360px]'>
        <input className='w-6 h-6' type="radio"  />
        <h1 className='text-Bodybold ml-[10px]'>Оплатить картой при получении</h1>
        </div>
        <div className='py-4 pl-8 flex items-center border-2 border-solid rounded-[5px] w-[360px]'>
        <input className='w-6 h-6' type="radio"  />
        <h1 className='text-Bodybold ml-[10px]'>Оплата картой</h1>
        </div>
        </div>
        <div>
            <h2 className='text-subtitle mb-5'>Ваши отзывы</h2>
            <textarea className=' py-2 px-5 border-2 border-solid w-[600px] h-[114px] mb-5' name="" id="" cols="30" rows="10" placeholder='Пишите ваш отзыв'></textarea>
          
        </div>
          <button className='py-2 px-4 bg-bgmain rounded-[4px] text-Body text-white'>Отправить отзыв</button>
    </div>
  )
}

export default Oplaty