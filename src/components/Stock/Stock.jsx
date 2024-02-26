import React, { useState } from 'react'
import Bulkprices from './Bulkprices';
import Discounts from './Discounts';
import Forbusiness from './Forbusiness';
import Gifts from './Gifts';
import Superprices from './Superprices';
import Threebytwo from './threebytwo';
import Volumediscount from './Volumediscount';



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
    <div className='container m-auto lg:flex'>
        <div className='lg:w-[262px]'>
            <h1 className='lg:text-subtitless mb-8'>Акции</h1>
            <ul className='text-Bodybold '>
                {
                    Stockmenu.map((element,value)=>{
                        return (
                            <li  className='mb-5 hover:text-Cmain' key={value} onMouseEnter={()=>setActiveTabs(element)}>{element}</li>
                        )
                    })
                }
            </ul>

        </div>
        <div>
           <Bulkprices title = {activeTabs} />   
           <Discounts title = {activeTabs} /> 
           <Superprices title = {activeTabs}/> 
           <Gifts title = {activeTabs}/>
           <Volumediscount title = {activeTabs}/>
           <Forbusiness title = {activeTabs}/>
           <Threebytwo title = {activeTabs}/> 
        </div>

    </div>
  )
}

export default Stock