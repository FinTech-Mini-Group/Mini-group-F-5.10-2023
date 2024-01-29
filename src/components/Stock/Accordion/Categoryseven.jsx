import React, { useState } from 'react'
import { icons } from '../../../utilits/icons';

export const price = [
    'От 3 000 000 сум',
    'От 7 000 000 сум',
    'От 11 000 000 сум',
    'От 20 000 000 сум',
    'От 27 000 000 сум',
]
export const Stock = [
    'До 5%',
    'До 8%',
    'До 12%',
    'До 15%',
    'До 18%',
]
function Categoryseven() {
    const [accordionOpen, setAccordionOpen] = useState(null);
    const toggleAccordion = (index) => {
        setAccordionOpen((prevIndex) => (prevIndex === index ? null : index));
      };
    
  return (
    <>
    <div className=''>
        <h1 className='flex items-center text-TitleBold mb-[50px]' onClick={()=>toggleAccordion(0)}>Название категории 7 <span className='ml-[10px]'>{icons.bottom}</span></h1>
        <div className={`${accordionOpen === 0 ? '' : 'hidden'}`}>
        <p className='text-subtitle mb-[10px]'>Только для юридических лиц и ИП</p>
        <p className='text-Body mb-[50px]'>Оптовая цена вступает в силу, когда в «Корзине» стоимость товаров с пометкой «Опт «Название категории»» превышает ??? ??? ??? сумов, дополнительная скидка при покупке:</p>
        <div className='lg:flex'>
            <div className='lg:mr-[600px]' >
               <p className='text-Bodybold'>Сумма товаров</p>
                {
                    price.map((element,index)=>(
                       <div className='text-subtitle my-[60px]' key={index}>{element}</div>
                    ))
                }
            </div>
            <div>
                <p className='text-Bodybold'>Скидка от оптовой цены</p> 
               {
                Stock.map((element,index)=>(
                    <div className='text-subtitle my-[60px]' key={index}>
                    {element}
                   </div>   
                ))
               }

            </div>
        </div>
      </div>   
    </div>
    </>
  )
}

export default Categoryseven