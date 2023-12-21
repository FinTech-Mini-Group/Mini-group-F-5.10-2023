import React from 'react'
import { zakaz } from '../landingpages/data'
import { useNavigate } from 'react-router-dom'


function Basket() {
  const navigate=useNavigate()
  return (
    <div className='container m-auto'>
        <h1 className='text-TitleBold my-8 '>Корзина</h1>
        <div className='flex gap-8'>
            <div className='p-7 border-[2px] border-solid rounded-[10px]  '>
              
              <div className='flex justify-between'>
                <div className='flex'>
                <input className='mr-[20px] w-6' type="checkbox"  />  
                <p className='text-subtitle'>Выбрать всё</p>
                </div>
                <div>
                    <h2 className='Bodybold'>Удалить</h2>
                </div>
            </div>
            <div className='flex'>
            <div className='flex mt-5'>
            <div className='gap-5 '>
                {
                zakaz.map((element,value)=>
                <div key={value} className='flex mb-[40px]'>
                <input className='mr-[20px] w-6' type="checkbox"  />      
                <img className='mr-5' src={element.img} alt="" />
               <div>
                    <p className='text-Bodybold' >{element.name}</p>
                    <p className='text-Body text-brand'>Цвет: <span className='text-Bodybold'>{element.colour}</span></p>
                    <p className='text-Body text-brand'>Магазин: <span className='text-Bodybold'>{element.shop}</span></p>
                </div>
                </div>
                
                )
                } 
            </div>
              <div className='grid '>
               <div className='flex gap-4'>
                  <p className='border-[1px] border-solid rounded-[4px] bg-Cmain p-2 w-[40px] h-[40px] text-center hover:text-Cwhite'>-</p>
                  <p className='border-[1px] border-solid rounded-[4px] p-2 w-[40px]  h-[40px] text-center'></p>
                  <p className='border-[1px] border-solid rounded-[4px] bg-Cmain p-2 w-[40px] h-[40px] text-center hover:text-Cwhite'>+</p>
                </div>
                <div className='flex gap-4'>
                  <p className='border-[1px] border-solid rounded-[4px] bg-Cmain p-2 w-[40px] h-[40px] text-center hover:text-Cwhite'>-</p>
                  <p className='border-[1px] border-solid rounded-[4px] p-2 w-[40px]  h-[40px] text-center'></p>
                  <p className='border-[1px] border-solid rounded-[4px] bg-Cmain p-2 w-[40px] h-[40px] text-center hover:text-Cwhite'>+</p>
                </div>
                <div className='flex gap-4'>
                  <p className='border-[1px] border-solid rounded-[4px] bg-Cmain p-2 w-[40px] h-[40px] text-center hover:text-Cwhite'>-</p>
                  <p className='border-[1px] border-solid rounded-[4px] p-2 w-[40px]  h-[40px] text-center'></p>
                  <p className='border-[1px] border-solid rounded-[4px] bg-Cmain p-2 w-[40px] h-[40px] text-center hover:text-Cwhite'>+</p>
                </div>
                <div className='flex gap-4'>
                  <p className='border-[1px] border-solid rounded-[4px] bg-Cmain p-2 w-[40px] h-[40px] text-center hover:text-Cwhite'>-</p>
                  <p className='border-[1px] border-solid rounded-[4px] p-2 w-[40px]  h-[40px] text-center'></p>
                  <p className='border-[1px] border-solid rounded-[4px] bg-Cmain p-2 w-[40px] h-[40px] text-center hover:text-Cwhite'>+</p>
                </div>
              </div>
                <div >
                  {
                    zakaz.map((element,value)=>
                    <div className='mb-[100px] ml-[130px]' key={value}>
                      <p className='text-subtitle'>{element.price} <span className='text-Bodybold'>сум</span></p>
                    </div>
                    )
                  }
                </div>
            </div>
            
            </div>
            
        </div>
         <div className='border-[2px] border-solid rounded-[10px] py-5 px-8 w-[400px] h-full'>
              <div className='flex justify-between items-center'>
               <h2 className='text-TitleBold'>Итого:</h2> 
               <p className='text-subtitle !text-Cmain'>29 780 000 <span className='!text-Bodybold text-black'>сум</span></p> 
               </div> 
               <p className='my-8 text-Bodybld text-brand'>Товары 4 шт.</p> 
               <button onClick={()=>navigate('/zakaz')} className='py-2 px-[16px] bg-bgmain rounded-[4px] text-Body  text-Cwhite w-[100%] mb-[30px]'>Оформить заказ</button>  
               <div className='flex items-center'>
               <input className=' mr-[10px] w-6' type="checkbox" /> 
               <p className='text-Bodysmall'>Согласен с условиями правил пользования торговой площадкой и правилами возврата</p> 
               </div>              
            </div>
        </div>
    </div>
  )
}

export default Basket