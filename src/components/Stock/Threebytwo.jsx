import React from 'react'
import cube from '../../assets/Rectangle 684.png'
import { icons } from '../../utilits/icons'
export const Threemenu = [
  {img:cube, titles:'Акция «3 по цене 2» на товары', much:'До 13 сентября' , gift:'3 по 2'},
]

function Threebytwo(props) {
  return (
    <div className={props.title === '3 по 2' ? 'block' : 'hidden'}>
         <h1 className='text-TitleBold mb-[50px]'>3 по 2</h1>
         <div>
          {
              Threemenu.map((element,value)=>(
                <div className='bg-[#FAFAFA] rounded-[5px] border-2' key={value}>
                  <img className='mb-[10px]' src={element.img} alt="" />
                  <h1 className='mb-[5px] px-5 text-subtitle'>{element.titles}</h1> 
                  <div className='flex mt-[30px] px-5 '>
                      <p className='text-Bodybold'><span className='flex gap-3'>{icons.clock}{element.much}</span></p>
                       <p className='ml-[77px] text-Bodybold pb-3'>{element.gift}</p>
                  </div>
                </div>
              )) 
          }
         </div>
    </div>
  )
}

export default Threebytwo