import React, { useState } from 'react'
import Bulkprices from './Bulkprices';
import Discounts from './Discounts';



function Stock() {
    const Stockmenu = [
        "Оптовые цены",
        "Cкидки",
        "Суперцены",
        "Подарки",
        "Скидка за объём",
        "Для бизнеса",
        "3 по 2",
    ]
    const[activeTabs, setActiveTabs] = useState("Оптовые цены");
  return (
    <div className='container m-auto flex'>
        <div className='w-[262px]'>
            <h1 className='text-subtitle mb-8'>Акции</h1>
            <ul className='text-Bodybold '>
                {
                    Stockmenu.map((element,value)=>{
                        return (
                            <li className='mb-5 hover:text-Cmain' key={value} onClick={()=>setActiveTabs(element)}>{element}</li>
                        )
                    })
                }
            </ul>

        </div>
        <div>
           <Bulkprices title = {activeTabs} />   
           <Discounts title = {activeTabs} />   
        </div>

    </div>
  )
}

export default Stock