import React from 'react'

function HomeAppliances(props) {
  return (
    <div className={props.title === 'Техника для дома' ? 'block' : 'hidden'}>
      <h2 className='text-subtitle my-6'>Техника для дома</h2>
      <div className='grid grid-cols-4 gap-28 justify-around'>
        <div>
        <h2 className='text-Body font-semibold' >Швейный машинки</h2>
        <ul>
          <li className='my-8 text-Body'>Chayka</li>
          <li className='my-8 text-Body'>Aurora</li>
          <li className='my-8 text-Body'>Janome</li>
          <li className='my-8 text-Body'>Bernette</li>
          <li className='my-8 text-Body'>Оверлоки</li>
          <li className='my-6 text-[#999]'>Швейные наборы</li>
        </ul>
        <h2 className='text-Body font-semibold'>Гаджеты</h2>
        <ul>
          <li className='my-8 text-Body'>IP камера</li>
          <li className='my-8 text-Body'>Смарт часы</li>
        </ul>
      </div>
      <div>
        <h2 className='text-Body font-semibold'>Пылесосы</h2>
        <ul>
          <li className='my-8 text-Body'>Все марки пылесосов</li>
          <li className='my-8 text-Body'>Пылесосы Samsung</li>
          <li className='my-8 text-Body'>Пылесосы Gorenje</li>
          <li className='my-8 text-Body'>Пылесосы Sencor</li>
          <li className='my-8 text-Body'>Аквапылесос</li>
          <li className='my-8 text-Body'>Беспроводные пылесосы</li>
          <li className='my-8 text-Body'>Пылесосы с пылесборником</li>
          <li className='my-8 text-Body'>Фильтры для пылесосов</li>
          <li className='my-6 text-[#999]'>Пылесосы Artel</li>
        </ul>
      </div>
      <div>
        <h2 className='text-Body font-semibold'>Стиральная машина</h2>
        <ul>
          <li className='my-8 text-Body' >Все марки стиральных машин</li>
          <li className='my-8 text-Body'>Стиральные машины Whirlpool</li>
          <li className='my-8 text-Body'>Стиральные машины Samsung</li>
          <li className='my-8 text-Body'>Стиральные машины LG</li>
          <li className='my-8 text-Body'>Бесшумные стиральные машинки</li>
          <li className='my-6 text-[#999]'>Премиум класса стиральные <br /> машины</li>
        </ul>
      </div>
      <div>
        <h2 className='text-Body font-semibold'>Газонокосилки</h2>
        <ul>
          <li className='my-8 text-Body'>IP камера</li>
          <li className='my-8 text-Body'>Смарт часы</li>
          <li className='my-8 text-Body'>Фитнес браслеты</li>
          <li className='my-8 text-Body'>Очки виртуальной реальности</li>
          <li className='my-8 text-Body'>Рации и радиостанции</li>
          <li className='my-6 text-[#999]'>Рации и радиостанции</li>
        </ul>
      </div>
     </div>
    </div>
  )
}

export default HomeAppliances