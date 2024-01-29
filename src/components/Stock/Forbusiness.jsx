import React from 'react'
import { useNavigate } from 'react-router-dom'
import knig from '../../assets/Rectangle 683.png'
import cube from '../../assets/Rectangle 684.png'
import bear from '../../assets/Rectangle 685.png'
import { icons } from '../../utilits/icons'
export const Forbusmenu = [
    {img:cube, titles:'Скидки до 12% на все игрушки', info:'За покупку товаров из подборки на сумму не менее 15 000 000 сум', much:'До 13 сентября' , gift:'Для бизнеса'},
    {img:knig, titles:'Скидки до 15% на все книги', info:'За покупку товаров из подборки на сумму не менее 15 000 000 сум', much:'До 13 сентября' , gift:'Для бизнеса'},
    {img:bear, titles:'Скидки до 25% на мягкие игрушки', info:'За покупка спортивной одежды', much:'До 13 сентября' , gift:'Для бизнеса'},
]
function Forbusiness(props) {
   const navigate = useNavigate() 
  return (
    <div className={props.title === 'Для бизнеса' ? 'block' : 'hidden'}>
           <h1 className='text-TitleBold mb-[50px]'>Для бизнеса</h1>  
           <div className='lg:flex gap-5 '>
            {
                   Forbusmenu.map((element,value)=>(
                    <div className='bg-[#FAFAFA] rounded-[5px] border-2'>
                        <img onClick={()=>navigate('Subcategory')} className='mb-[10px]' src={element.img} alt="" />
                        <h1 className='mb-[5px] px-5 text-subtitle'>{element.titles}</h1> 
                        <p className='text-Body text-brand px-5'>{element.info}</p> 
                        <div className='flex mt-[30px] px-5 '>
                                <p className='text-Bodybold'><span className='flex gap-3'>{icons.clock}{element.much}</span></p>
                                <p className='ml-[45px] text-Bodybold pb-3'>{element.gift}</p>
                             </div>
                    </div>
                   )) 
            }
            </div>  
    </div>
  )
}

export default Forbusiness