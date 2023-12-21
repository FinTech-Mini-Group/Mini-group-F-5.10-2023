import React from 'react'

function Total() {
  return (
    <div className='py-5 px-[30px] border-2 border-solid rounded-[10px] h-full'>
            <div className='flex items-center'>
             <h1 className='text-TitleBold mr-8'>Итого:</h1>
             <p className='text-subtitle !text-Cmain mr-[5px]'>29 780 000 <span className='text-Bodybold text-black'>сум</span></p>
             
             </div>
             <div className=''>
                <p className=' my-8 text-Bodybold text-[#999999] '>Товары 4 шт.</p>
                 <button className='py-2 px-[150px] text-Body text-Cwhite text-center bg-Cmain rounded-[4px]'>Оформить заказ</button>
             </div>
             <div className='flex items-center mt-8'>
                <input className='  w-6 h-6 rounded-[4px] mr-3' type="checkbox" />
                 <p className='text-Bodysmall'>Согласен с условиями правил пользования торговой <br/> площадкой и правилами возврата</p>
             </div>
             
        </div>
  )
}

export default Total