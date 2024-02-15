import React from 'react'
import { useNavigate } from 'react-router-dom'
import knig from '../../assets/Rectangle 683.png'
import cube from '../../assets/Rectangle 684.png'
import bear from '../../assets/Rectangle 685.png'
import { icons } from '../../utilits/icons'
export const Giftsmenu = [
        {img:knig, titles:'Книга подарок', info:'За покупка спортивной одежды', much:'До 13 сентября' , gift:'Подарок'},
        {img:cube, titles:'Что-нибудь в подарок', info:'За покупка школьной одежды', much:'До 13 сентября' , gift:'Подарок'},
        {img:bear, titles:'Что-нибудь в подарок', info:'За покупка школьной одежды', much:'До 13 сентября' , gift:'Подарок'},
    ]
    
function Gifts(props) {
    const navigate = useNavigate()
  return (
    <div className={props.title === 'Подарки' ? 'block' : 'hidden'}>
        <div>
        <h1 className='text-TitleBold mb-[50px]'>Подарки</h1>
             <div className='lg:flex gap-8 '>
                 {
                    Giftsmenu.map((element,value)=>(
                        <div key={value} className='bg-[#FAFAFA] rounded-[5px] border-2'>
                            <img onClick={()=>navigate('/Subcategory')} className='mb-[10px] ' src={element.img} alt="" />
                             <h1 className='mb-[5px] px-5 text-subtitle'>{element.titles}</h1> 
                             <p className='text-Body text-brand px-5'>{element.info}</p> 
                             <div className='flex mt-[30px] px-5 '>
                                <p className='text-Bodybold'><span className='flex gap-3'>{icons.clock}{element.much}</span></p>
                                <p className='ml-[77px] text-Bodybold pb-3'>{element.gift}</p>
                             </div>
                        </div>
                    ))
                 }
             </div>
        </div> 
    </div>
  )
}

export default Gifts