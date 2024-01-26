import React, { useState } from 'react'
import { icons } from '../utilits/icons'
import Rating from '../assets/Frame 648.png'
import Shop from './Shop'
import Rewiess from './Rewiess'
function Reviews(props) {
  const [showmodal , setShowModal] = useState(false)
  const handleOnclose = () => setShowModal(false)
  return (

    <div className={props.title === 'Отзывы покупателей (21)' ? 'block' : 'hidden'}>
       <div className='lg:flex'>
        <h1 className='text-Bodybold lg:mr-[700px]'>Здесь пока нет комментарий, будьте первыми!</h1>
        <button onClick={()=>setShowModal(true)} className='flex py-2 px-4 bg-bgmain rounded-[4px] text-Body text-Cwhite'><span className='mr-[10px]'>{icons.magicpen}</span>Оставить</button>
       </div>
       <div className='lg:flex mt-[40px]'>
        <div className='mr-[200px]'>
            <h1 className='text-Bodybold mb-[20px]'>Gulnoza</h1>
            <p className='text-Bold text-brand mb-[20px]'>Ташкент</p>
            <p className='text-Bodysmall text-brand'>17.06.2022</p>
            <p className='text-Bodysmall text-brand'>19:30:09</p>
        </div>
        <div>
            <img  className='mb-5' src={Rating} alt="" />
            <p className='text-Bold mb-5'>Прежде всего, перспективное планирование предоставляет широкие возможности для системы обучения кадров, <br/> соответствующей насущным потребностям. Приятно, граждане, наблюдать, как интерактивные прототипы, вне зависимости <br/> от их уровня, должны быть представлены в исключительно положительном свете.</p>
            <div className='flex gap-2'>
                <p className='border-[2px] border-solid w-[100px] h-[100px] bg-[#D9D9D9] rounded-[5px]'></p>
                <p className='border-[2px] border-solid w-[100px] h-[100px] bg-[#D9D9D9] rounded-[5px]'></p>
                <p className='border-[2px] border-solid w-[100px] h-[100px] bg-[#D9D9D9] rounded-[5px]'></p>
                <p className='border-[2px] border-solid w-[100px] h-[100px] bg-[#D9D9D9] rounded-[5px]'></p>
            </div>
        </div>
       </div>
       <div className='lg:flex mt-[40px]'>
        <div className='lg:mr-[200px]'>
            <h1 className='text-Bodybold mb-[20px]'>Артур</h1>
            <p className='text-Bold text-brand mb-[20px]'>Ташкент</p>
            <p className='text-Bodysmall text-brand'>08.07.2022</p>
            <p className='text-Bodysmall text-brand'>09:04:55</p>
        </div>
        <div>
            <img  className='mb-5' src={Rating} alt="" />
            <p className='text-Bold mb-5'>Вася не нравится дорого и неэффективно. И за эти деньги можно собрать крутой ПК Даже игровые компьютеры стоит меньше <br/> кто такой же производительностью. Короче отстой Я верну MacBook</p>
            <div className='flex gap-2'>
                <p className='border-[2px] border-solid w-[100px] h-[100px] bg-[#D9D9D9] rounded-[5px]'></p>
                <p className='border-[2px] border-solid w-[100px] h-[100px] bg-[#D9D9D9] rounded-[5px]'></p>
                <p className='border-[2px] border-solid w-[100px] h-[100px] bg-[#D9D9D9] rounded-[5px]'></p>
                <p className='border-[2px] border-solid w-[100px] h-[100px] bg-[#D9D9D9] rounded-[5px]'></p>
            </div>
        </div>
       </div>
       {/* <div className=' gap-6 flex items-center mt-[38px] mb-[50px]'>
            <button className='p-2  rounded-[4px]  bg-[#6EFF75]'>{icons.arrowl}</button>
            <button className='py-2 px-4 border-[1px] text-brand border-solid rounded-[4px] hover:bg-bgmain '>1</button>
            <button className='py-2 px-4 border-[1px] text-brand border-solid rounded-[4px] hover:bg-bgmain '>2</button>
            <button className='py-2 px-4 border-[1px] text-brand border-solid rounded-[4px] hover:bg-bgmain '>3</button>
            <button className='flex py-2 px-4 border-[1px] border-solid rounded-[4px] hover:bg-bgmain '>Следующее <span>{icons.arrowr}</span></button>
          </div> */}
       <Shop/>
       <Rewiess onClose={handleOnclose} visible={showmodal}/>
    </div>
  )
}

export default Reviews