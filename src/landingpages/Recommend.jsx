import React from 'react'
import productcard from '../assets/Group 260.png'
import productcard1 from '../assets/Group 260 (1).png'
import productcard2 from '../assets/Group 260 (2).png'
import productcard3 from '../assets/Group 260 (3).png'
import productcard4 from '../assets/Group 260 (4).png'
import { icons } from '../utilits/icons'

function Recommend() {
  return (
    <div className='lg:my-[50px] lg:mx-[100px]'>
        <h1 className=' text-center lg:text-subtitle mb-[20px] lg:text-start '>Рекомендуем вам</h1>
        <div className='lg:flex justify-between'>
            <div className=' mb-[30px] lg:flex '>
                <button className='py-[8px] px-[16px] rounded-[4px] bg-Cmain text-Body text-Cwhite mr-[20px]'>Товары со скидкой</button>
                <button className='py-[8px] px-[16px] rounded-[4px] bg-change text-Body text-[#999]'>Топ продаж</button>
            </div>
            <div>
                 <button className='p-[8px] bg-Clayout rounded-[4px]'>{icons.arrowl}</button>
                 <button className='p-[8px] bg-Clayout rounded-[4px] ml-[20px]'>{icons.arrowr}</button>
            </div>
        </div>
        <div className='lg:flex gap-8 mt-[20px] '>
             <div className='p-[20px] rounded-[5px] bg-[#FAFAFA] '>
                <img className='' src={productcard} alt="" />
                <div className=' my-[10px]'>
                    <button className='py-[5px] px-[8px] rounded-[4px] bg-Cbadge text-white mr-[10px]'>-15% скидка</button>
                    <button className='py-[5px] px-[8px] rounded-[4px] bg-bgblue text-white'>Супер цена</button>
                </div>
                <p className='mb-[10px] text-Body text-Cback'>Macbook Air 13 M1 8gb RAM / 256gb <br/> SSD storage</p>
                <p className='text-Bodystrik text-[#999] line-through '>3 370 927 сум</p>
                <p className='text-subtitle !text-[#00B709]'>1 727 019 сум</p>
                <p className=' mx-[10px] my-[10px] border-[1px] border-solid w-[260px] bg-change'></p>
                <div className='flex'>
                    <button className=' flex p-[8px] rounded-[4px] bg-bgmain'>{icons.shoppingcart}<span className='ml-[10px] text-Bold text-white '>В корзину</span></button>
                    <button className='p-[8px] rounded-[4px] border-[1px] border-solid ml-[20px]'>{icons.heart}</button>
                </div>
             </div>
             <div className='p-[20px] rounded-[5px] bg-[#FAFAFA] '>
                <img className='' src={productcard1} alt="" />
                <div className=' my-[10px]'>
                    <button className='py-[5px] px-[8px] rounded-[4px] bg-Cbadge text-white mr-[10px]'>-15% скидка</button>
                    <button className='py-[5px] px-[8px] rounded-[4px] bg-bgblue text-white'>Супер цена</button>
                </div>
                <p className='mb-[30px]  text-Body text-Cback'>Холодильник Samsung ART <br/> RB-31FERNDWW</p>
                <p className='text-subtitle !text-[#00B709]'>235 464 сум</p>
                <p className=' mx-[10px] my-[10px] border-[1px] border-solid w-[260px] bg-change'></p>
                <div className='flex'>
                    <button className=' flex p-[8px] rounded-[4px] bg-bgmain'>{icons.shoppingcart}<span className='ml-[10px] text-Bold text-white '>В корзину</span></button>
                    <button className='p-[8px] rounded-[4px] border-[1px] border-solid ml-[20px]'>{icons.heart}</button>
                </div>
             </div>
             <div className='p-[20px] rounded-[5px] bg-[#FAFAFA] '>
                <img className='' src={productcard2} alt="" />
                <div className=' my-[10px]'>
                    <button className='py-[5px] px-[8px] rounded-[4px] bg-Cbadge text-white mr-[10px]'>-15% скидка</button>
                    <button className='py-[5px] px-[8px] rounded-[4px] bg-bgblue text-white'>Супер цена</button>
                </div>
                <p className='mb-[10px] text-Body text-Cback'>Macbook Air 13 M1 8gb RAM / 256gb <br/> SSD storage</p>
                <p className='text-Bodystrik text-[#999] line-through '>2 643 982 сум</p>
                <p className='text-subtitle !text-[#00B709]'>796 987 сум</p>
                <p className=' mx-[10px] my-[10px] border-[1px] border-solid w-[260px] bg-change'></p>
                <div className='flex'>
                    <button className=' flex p-[8px] rounded-[4px] bg-bgmain'>{icons.shoppingcart}<span className='ml-[10px] text-Bold text-white '>В корзину</span></button>
                    <button className='p-[8px] rounded-[4px] border-[1px] border-solid ml-[20px]'>{icons.heart}</button>
                </div>
             </div>
             <div className='p-[20px] rounded-[5px] bg-[#FAFAFA] '>
                <img className='' src={productcard3} alt="" />
                <div className=' my-[10px]'>
                    <button className='py-[5px] px-[8px] rounded-[4px] bg-Cbadge text-white mr-[10px]'>-15% скидка</button>
                    <button className='py-[5px] px-[8px] rounded-[4px] bg-bgblue text-white'>Супер цена</button>
                </div>
                <p className='mb-[10px] text-Body text-Cback'>Macbook Air 13 M1 8gb RAM / 256gb <br/> SSD storage</p>
                <p className='text-Bodystrik text-[#999] line-through '>4 990 751 сум</p>
                <p className='text-subtitle !text-[#00B709]'>1 906 625 сум</p>
                <p className=' mx-[10px] my-[10px] border-[1px] border-solid w-[260px] bg-change'></p>
                <div className='flex'>
                    <button className=' flex p-[8px] rounded-[4px] bg-bgmain'>{icons.shoppingcart}<span className='ml-[10px] text-Bold text-white '>В корзину</span></button>
                    <button className='p-[8px] rounded-[4px] border-[1px] border-solid ml-[20px]'>{icons.heart}</button>
                </div>
             </div>
             <div className='p-[20px] rounded-[5px] bg-[#FAFAFA] '>
                <img className='' src={productcard4} alt="" />
                <div className=' my-[10px]'>
                    <button className='py-[5px] px-[8px] rounded-[4px] bg-Cbadge text-white mr-[10px]'>-15% скидка</button>
                    <button className='py-[5px] px-[8px] rounded-[4px] bg-bgblue text-white'>Супер цена</button>
                </div>
                <p className='mb-[10px] text-Body text-Cback'>Macbook Air 13 M1 8gb RAM / 256gb <br/> SSD storage</p>
                <p className='text-Bodystrik text-[#999] line-through '>2 011 941 сум</p>
                <p className='text-subtitle !text-[#00B709] '>856 517 сум</p>
                <p className=' mx-[10px] my-[10px] border-[1px] border-solid w-[260px] bg-change'></p>
                <div className='flex'>
                    <button className=' flex p-[8px] rounded-[4px] bg-bgmain'>{icons.shoppingcart}<span className='ml-[10px] text-Bold text-white '>В корзину</span></button>
                    <button className='p-[8px] rounded-[4px] border-[1px] border-solid ml-[20px]'>{icons.heart}</button>
                </div>
             </div>
        </div>

    </div>
  )
}

export default Recommend