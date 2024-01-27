import React from 'react'
import Rectang from '../../assets/Rectangle 679.png'
import Categoryone from './Accordion/Categoryone'
function Bulkprices(props) {
  return (
    <div className={props.title === 'Оптовые цены' ? 'block' : 'hidden'}>
        <div className='flex '>
            <div className='mr-[176px]'>
                 <h1 className='text-TitleBold mb-[50px]'>Оптовые цены</h1> 
                 <p className='text-subtitle mb-[10px]'>Только для юридических лиц и ИП</p>
                 <p className='text-Body'>Оптовые цены на товары с пометкой «Опт» действуют при заказе от  5  000 рублей.<br/> На товары конкретных категорий, например<br/> «Автотовары» или «Баня и сауна», действуют отдельные условия.</p>
            </div>
            <div>
                <img src={Rectang} alt="" />  
            </div>
        </div>
        <div>
            <Categoryone/>
        </div>
        </div>
  )
}

export default Bulkprices