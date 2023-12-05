import React from 'react'
import { products } from '../landingpages/data'
import { icons } from '../utilits/icons'

function Products() {
  console.log(products)
  return (
    
    <div className='lg:flex gap-8 '>
          {
             products.map((element,value)=>
               <div className='p-[20px] rounded-[5px] bg-[#FAFAFA] ' key={value}>
             <img className='' src={element.img} alt="" />
                <div className=' my-[10px]'>
                    <button className='py-[5px] px-[8px] rounded-[4px] bg-Cbadge text-white mr-[10px]'>{element.discount} % скидка</button>
                    <button className='py-[5px] px-[8px] rounded-[4px] bg-bgblue text-white'>Супер цена</button>
                </div>
                <p className='mb-[10px] text-Body text-Cback'>{element.name}</p>
                <p className='text-Bodystrik text-[#999] line-through '>{element.old} сум</p>
                <p className='text-subtitle !text-[#00B709]'>{element.price}сум</p>
                <p className=' mx-[10px] my-[10px] border-[1px] border-solid w-[260px] bg-change'></p>
                <div className='flex'>
                    <button className=' flex p-[8px] rounded-[4px] bg-bgmain'>{icons.shoppingcart}<span className='ml-[10px] text-Bold text-white '>В корзину</span></button>
                    <button className='p-[8px] rounded-[4px] border-[1px] border-solid ml-[20px]'>{icons.heart}</button>
                </div>
             </div> 
              )
            }
    </div>
  )
}

export default Products