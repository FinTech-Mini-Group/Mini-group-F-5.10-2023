import React from 'react'
import karopka from '../assets/image 16.png'
import man from '../assets/Group 275.png'

function Supplier() {
  return (
    <div className='lg:flex justify-center items-center mb-[50px] bg-Crect rounded-[10px]'>
        <div className='lg:flex lg:mr-[187px]'>
           <img src={karopka} alt="" />
           <img className='mt-[40px] ml-[-50px]' src={man} alt="" />
        </div>
        <div>
             <h1 className='mt-[25px] text-center text-Headingbig text-subtitles mb-[20px] lg:text-start '>Стать поставщиком на Milli</h1>
             <p className=' text-subtitle text-subtitles text-center lg:text-subtitle lg:text-subtitles mb-[40px] lg:text-start'>Продавайте свои товары и продукты удобно и <br/> легко на нашей оптовой платформе.</p>
             <button className='py-[8px] px-[16px] bg-bgmain rounded-[4px] text-Cwhite'>Стать поставщиком</button>
        </div>
    </div>
  )
}

export default Supplier