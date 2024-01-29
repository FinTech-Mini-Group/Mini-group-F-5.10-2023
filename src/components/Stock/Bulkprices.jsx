import React from 'react'
import Rectang from '../../assets/Rectangle 679.png'
import Categoryfive from './Accordion/Categoryfive'
import Categoryfour from './Accordion/Categoryfour'
import CategoryN from './Accordion/CategoryN'
import Categoryone from './Accordion/Categoryone'
import Categoryseven from './Accordion/Categoryseven'
import Categorysex from './Accordion/Categorysex'
import Categorthree from './Accordion/Categorythree'
import Categorytwo from './Accordion/Categorytwo'
function Bulkprices(props) {
  return (
    <div className={props.title === 'Оптовые цены' ? 'block' : 'hidden'}>
        <div className='flex '>
            <div className='mr-[176px]'>
                 <h1 className='md:text-center lg:text-TitleBold mb-[50px]'>Оптовые цены</h1> 
                 <p className='text-subtitle mb-[10px] md:text-center'>Только для юридических лиц и ИП</p>
                 <p className='  text-Body'>Оптовые цены на товары с пометкой «Опт» действуют при заказе от  5  000 рублей.<br/> На товары конкретных категорий, например<br/> «Автотовары» или «Баня и сауна», действуют отдельные условия.</p>
            </div>
            <div>
                <img src={Rectang} alt="" />  
            </div>
        </div>
        <div>
            <Categoryone/>
            <Categorytwo/>
            <Categorthree/>
            <Categoryfour/>
            <Categoryfive/>
            <Categorysex/>
            <Categoryseven/>  
            <CategoryN/>  
        </div>
        </div>
  )
}

export default Bulkprices