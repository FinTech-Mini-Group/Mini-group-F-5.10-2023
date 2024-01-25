import React from 'react'
import Footer from '../landingpages/Footer'
import Products from '../pages/Product'
import { icons } from '../utilits/icons'

export default function Question(props) {
  return (
    <div className={props.title === 'Вопросы (2)' ? 'block' : 'hidden'}>
      <h1 className='text-Bodybold mb-5'>Если у вас есть какие-нибудь вопросы отправьте, мы ответим</h1>
      <div className='my-[10px] lg:ml-[100px] mr-[30px] '>
        <div className='lg:flex items-start mb-5'>
           <div className=''>
            <p className='text-Bodybold mb-[10px] lg:mr-[250px]'>Gulnoza</p>
            <p className='text-Body text-brand mb-[10px]'>Ташкент</p>
            <p className='text-Bodysmall text-brand '>17.06.2022</p>
            <p className='text-Bodysmall text-brand '>19:30:09</p>
            </div>  
            <div>
                <p className='text-Body text- subtitles'>Здравствуйте а у вас есть доставка до дома?</p>
            </div>  
        </div>    
        <div className='lg:flex items-start'>
           <div className=''>
            <p className='text-Bodybold mb-[10px] lg:mr-[250px]'>Ответ от Milli</p>
            <p className='text-Body text-brand mb-[10px]'>Ташкент</p>
            <p className='text-Bodysmall text-brand '>17.06.2022</p>
            <p className='text-Bodysmall text-brand '>19:30:09</p>
            </div>  
            <div>
                <p className='text-Body text- subtitles'>Здравствуйте <b>Gulnoza</b>, да конечно у нас есть доставка до дома</p>
            </div>  
        </div> 
      </div>
      <p className='border-[1px] border-solid border-[#CCCCCC] lg:w-[1300px] my-5'></p>
      <div className='my-[10px] lg:ml-[100px] mr-[30px] '>
        <div className='flex items-start mb-5'>
           <div className=''>
            <p className='text-Bodybold mb-[10px] llg:mr-[250px]'>Akmal</p>
            <p className='text-Body text-brand mb-[10px]'>Ташкент</p>
            <p className='text-Bodysmall text-brand '>17.06.2022</p>
            <p className='text-Bodysmall text-brand '>19:30:09</p>
            </div>  
            <div>
                <p className='text-Body text- subtitles'>Я бы хотела вернуть товар возможно ли это?</p>
            </div>  
        </div>    
        <div className='flex items-start'>
           <div className=''>
            <p className='text-Bodybold mb-[10px] lg:mr-[250px]'>Ответ от Milli</p>
            <p className='text-Body text-brand mb-[10px]'>Ташкент</p>
            <p className='text-Bodysmall text-brand '>17.06.2022</p>
            <p className='text-Bodysmall text-brand '>19:30:09</p>
            </div>  
            <div>
                <p className='text-Body text- subtitles'>Здравствуйте <b> Akmal</b>,  это возможно если срок возврата не истёк, срок возврата у нас 15 дней</p>
            </div>  
        </div> 
       
      </div> 
      <div className=' gap-6 flex items-center mt-[38px] mb-[50px]'>
            <button className='p-2  rounded-[4px]  bg-[#6EFF75]'>{icons.arrowl}</button>
            <button className='py-2 px-4 border-[1px] text-brand border-solid rounded-[4px] hover:bg-bgmain '>1</button>
            <button className='py-2 px-4 border-[1px] text-brand border-solid rounded-[4px] hover:bg-bgmain '>2</button>
            <button className='py-2 px-4 border-[1px] text-brand border-solid rounded-[4px] hover:bg-bgmain '>3</button>
            <button className='flex py-2 px-4 border-[1px] border-solid rounded-[4px] hover:bg-bgmain '>Следующее <span>{icons.arrowr}</span></button>
          </div>
          <div className='flex justify-between'>
          <h2 className='text-subtitle '>Похожие товары</h2>
          <div>
          <button className='p-2  rounded-[4px]  bg-[#6EFF75] '>{icons.arrowl}</button>
          <button className='p-2  rounded-[4px]  bg-[#6EFF75] ml-5'>{icons.arrowr}</button>
          </div>
          </div>
          <Products/>
       
    </div>
  )
}

