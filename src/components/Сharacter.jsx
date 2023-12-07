import React from 'react'
import Shop from './Shop'

export default function Сharacter(props) {
    
  return (
    <div className={props.title === 'Все характеристики товара' ? 'block' : 'hidden'}>
      <h2 className='text-Bodybold mb-5'>Процессор</h2>
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Процессор</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>Apple M1 3200MHz</p>   
      </div>
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Количество ядер в процессоре</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>8</p>   
      </div>
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Объем кэша</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>L2 - 2MB;<br/>L3 - 16MB;</p>   
      </div>
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Чипсет</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>Apple SoC</p>   
      </div>
      <h1 className='text-Bodybold mb-5'>Изображение</h1>
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Экран</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>13.3” ;<br/>2560x1600;<br/>Широкоформатный;</p>   
      </div>  
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Тип покрытия экрана</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>Глянцевый</p>   
      </div>  
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Тип матрицы экрана</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>IPS</p>   
      </div>  
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Частота обновления экрана</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>60 Hz</p>   
      </div>  
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Тип видеокарты</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>Встройная <br/> Дискретное</p>   
      </div>  
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Видео процессор</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>Apple graphics 7-core</p>   
      </div>  
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Тебе видео памяти</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>SMA</p>   
      </div>  
      <h2 className='text-Bodybold mb-5'>Устройство хранения данных</h2>
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Конфигурация накопители</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>SSD</p>   
      </div>  
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Общий объем накопителей</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>256 GB</p>   
      </div>  
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Общий объем накопителей SSD</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>256 GB</p>   
      </div>  
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Оптический привет</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>Нет</p>   
      </div>    
      <h3 className='text-Bodybold mb-5'>Связь</h3> 
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Беспроводная связь</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>Wi-Fi IEEE 802.11ax;<br/>Bluetooth 5.0;</p>   
      </div>   
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Интерфейсы</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>Микрофон/наушники Combo;<br/>Thunderbolt/USB 4x2;</p>   
      </div>     
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Функционал USB Type C</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>Power delivery;<br/>Thunderbolt3;<br/>Thunderbolt4;</p>   
      </div>
      <h1 className='text-Bodybold mb-5'>Питание</h1> 
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Время работы oт аккумулятора</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>18 ч;</p>   
      </div>      
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Ёмкость аккумулятора</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>49.9 watt*h;</p>   
      </div>      
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Типа аккумулятора</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>Li-Pol;</p>   
      </div>  
      <h1 className='text-Bodybold mb-5'>Устройство ввода</h1> 
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Устройство позиционирование</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>Touchpad</p>   
      </div>      
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Количество клавиш клавиатуры</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>79</p>   
      </div>      
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Подсветка клавиатуры</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>Есть</p>   
      </div>  
      <h2 className='text-Bodybold mb-5'>Звук</h2> 
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Встроенные колонки</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>Есть</p>   
      </div>  
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Встроенный микрофон</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>Есть</p>   
      </div>    
      <h2 className='text-Bodybold mb-5'>Дополнительно</h2> 
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Веб камера</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>Есть;<br/>1 МП;</p>   
      </div>  
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Сканер отпечатка пальца</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>Есть</p>   
      </div>  
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Особенности:</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>Металлический корпус;<br/>Пассивное охлаждение;</p>   
      </div>  
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Комплектация</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>Ноутбук;<br/>Адаптер питания USB-C;<br/>Шнур питания 2м;</p>   
      </div>  
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Размер</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>304.1x212.4x16.1 мм</p>   
      </div>  
      <div className='w-[840px] flex justify-between items-end mb-5'>
         <p className='text-Body text-brand'>Вес</p>
         <p className='border-dotted border-[1px] w-[100%] h-0'></p>
         <p className='text-Bodybold'>1.29кг</p>   
      </div>  
      <p className='text-Bodybold text-Cmain'>Показать меньше</p>
         <Shop/>
    </div>
  )
}

