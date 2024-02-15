import React from 'react'

function MobilePhones(props) {
  return (
    <div className={props.title === 'Телефоны и гаджеты' ? 'block' : 'hidden'} >
      <h2 className='text-subtitle my-8'>Телефоны и гаджеты</h2>
      <div className='grid grid-cols-4 gap-24 justify-around '>
      <ul >
        <li className='text-Body font-semibold'>Гаджеты</li>
        <li className='my-6 text-Body'>IP камера</li>
        <li className='my-6 text-Body'>Смарт часы</li>
        <li className='my-6'>Фитнес браслеты</li>
        <li className='my-6'>Очки виртуальной реальности</li>
        <li className='my-6'>Рации и радиостанции</li>
        <li className='my-6 text-[#999]'>Умные весы</li>
      </ul>
      <div>

       <h2 className='text-Body font-semibold'>Аксессуары для телефонов</h2>
       <ul>
        <li className='my-6 text-Body'>Внешние аккумуляторы</li>
        <li className='my-6 text-Body'>Держатели для смартфонов</li>
        <li className='my-6 text-Body'>Зарядные устройства</li>
        <li className='my-6 text-Body'>Игровые аксессуары</li>
        <li className='my-6 text-Body'>USB кабель для телефона</li>
        <li className='my-6 text-Body'>Карты памяти</li>
        <li className='my-6 text-Body'>Моноподы для селфи</li>
        <li className='my-6 text-Body'>Моноподы для селфи</li>
        <li className='my-6 text-Body'>Защитные стекла для телефона</li>
        <li className='my-6 text-Body text-[#999]'>Чехлы для телефонов</li>
       </ul>
      </div>
      <div>

       <h2 className='text-Body font-semibold'>Телефоны</h2>
       <ul>
        <li className='my-6 text-Body'>Смартфоны</li>
        <li className='my-6 text-Body'>Смартфоны Apple</li>
        <li className='my-6 text-Body'>Смартфоны Samsung</li>
        <li className='my-6 text-Body'>Vivo</li>
        <li className='my-6 text-Body'>OPPO</li>
        <li className='my-6 text-Body'>Honor</li>
        <li className='my-6 text-Body'>Xiaomi</li>
        <li className='my-6 text-Body'>Huawei</li>
        <li className='my-6 text-Body'>TECNO</li>
        <li className='my-6 text-Body'>Игровые</li>
       </ul>
      </div>
      <div>
        <h2 className='text-Body font-semibold'>Планшеты</h2>
        <ul>
          <li className='my-6 text-small'>ТОПовые планшеты</li>
        </ul>
        <h2 className='text-Body font-semibold my-8'>Мониторы</h2>
        <h2 className='text-Body font-semibold my-8'>Гарнитуры для PC</h2>
      </div>
      </div>
    </div>
  )
}

export default MobilePhones