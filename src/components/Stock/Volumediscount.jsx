import React from 'react'
import knig from '../../assets/Rectangle 683.png'
import cube from '../../assets/Rectangle 684.png'
import bear from '../../assets/Rectangle 685.png'
import { icons } from '../../utilits/icons'
export const Valumemenu = [

     {img:bear, titles:'Скидки до 25% на мягкие игрушки', much:'До 13 сентября' , gift:'Скидка за объём'},
      {img:cube, titles:'Скидки до 12% на все игрушки',  much:'До 13 сентября' , gift:'Скидка за объём'},
    {img:knig, titles:'Скидки до 15% на все книги',  much:'До 13 сентября' , gift:'Скидка за объём'},
   
   
]
function Volumediscount(props) {
  return (
    <div className={props.title === 'Скидка за объём' ? 'block' : 'hidden'}>
        <h1 className='text-TitleBold mb-[50px]'>Скидка за объём</h1>
      <div className='lg:flex gap-6'>
        {
           Valumemenu.map((element,value)=>(
                <div className='bg-[#FAFAFA] rounded-[5px] border-2' key={value}>
                    <img className='mb-[10px]' src={element.img} alt="" /> 
                    <h1 className='mb-[5px] px-5 text-subtitle'>{element.titles}</h1>    
                    <div className='flex mt-[30px] px-5 '>
                                <p className='text-Bodybold'><span className='flex gap-3'>{icons.clock}{element.much}</span></p>
                                <p className='ml-[46px] text-Bodybold pb-3'>{element.gift}</p>
                             </div>
                </div>
           ))         
        }
      </div>
    </div>
  )
}

export default Volumediscount