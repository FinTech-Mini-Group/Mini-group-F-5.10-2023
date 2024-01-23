import React from 'react'

function Decoration() {
  return (
    <div>
        <h1 className='text-TitleBold mb-[40px]'>Оформления покупки</h1>
            <div className='lg:flex flex-col gap-5'>
             <h2 className='text-subtitle mb-[20px]'>Ваши данные</h2> 
             <input className='px-5 py-2 lg:w-[440px] border-2 border-solid rounded-[4px] text-Body text-Cbadge ' required type="text" placeholder='Ваш телефон*' />
              <div className='flex gap-5'>
               <input className='px-5 py-2 w-[440px] border-2 border-solid rounded-[4px] text-Body text-Cbadge ' required type="text" placeholder='Ваш имя*' />
               <input className='px-5 py-2 w-[440px] border-2 border-solid rounded-[4px] text-Body text-Cbadge ' required type="text" placeholder='Ваша фамилия*' />
             </div>
        </div>
    </div>
  )
}

export default Decoration