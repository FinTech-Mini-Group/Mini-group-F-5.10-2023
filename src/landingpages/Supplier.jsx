import React from 'react'
import karopka from '../assets/image 16.png'
import man from '../assets/Group 275.png'

function Supplier() {
  return (
    <div className='flex items-center  mx-[100px] mb-[50px] bg-Crect rounded-[10px]'>
        <div className='flex mr-[187px]'>
           <img src={karopka} alt="" />
           <img className='mt-[40px] ml-[-50px]' src={man} alt="" />
        </div>
        <div>
             <h1 className='text-Headingbig text-subtitles mb-[20px]'>Стать поставщиком на Milli</h1>
             <p className='text-subtitle text-subtitles mb-[40px]'>Продавайте свои товары и продукты удобно и <br/> легко на нашей оптовой платформе.</p>
             <button className='py-[8px] px-[16px] bg-bgmain rounded-[4px] text-Cwhite'>Стать поставщиком</button>
        </div>
    </div>
  )
}

export default Supplier