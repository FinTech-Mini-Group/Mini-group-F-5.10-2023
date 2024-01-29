import React from 'react'
import { useNavigate } from 'react-router-dom'

function Discounts(props) {
  const Discountmenu = [
    {productName: "Название товара" , discount: "131"},
    {productName: "Название товара" , discount: "131"},
    {productName: "Название товара" , discount: "131"},
    {productName: "Название товара" , discount: "131"},
    {productName: "Название товара" , discount: "131"},
    {productName: "Название товара" , discount: "131"},
    {productName: "Название товара" , discount: "131"},
    {productName: "Название товара" , discount: "131"},
    {productName: "Название товара" , discount: "131"},
    {productName: "Название товара" , discount: "131"},
    {productName: "Название товара" , discount: "131"},
    {productName: "Название товара" , discount: "131"},
    {productName: "Название товара" , discount: "131"},
    {productName: "Название товара" , discount: "131"},
    
  ]
  const navigate = useNavigate()
  return (
    <div className={props.title === 'Cкидки' ? 'block' : 'hidden'}>
        <div>
          <h1 className='text-TitleBold mb-[30px]'>Скидки</h1>
          <p className='text-Bodybold mb-[50px]'>На товары со значком
            <button onClick={()=>navigate('/Subcategory')} className='py-[5px] px-[8px] bg-Cmain rounded-[4px] text-Cwhite mx-[10px]'>-15% скидка</button>  
            мы снизили цены. Просто потому что мы можем, а вам это нравится.</p>
            <div className='lg:flex justify-between mb-[50px]'>
              <div>
                <h2 className='text-subtitle mb-5'>Название категории</h2>
                {
                  Discountmenu.map((item,index)=>{
                    return (
                        <li className='list-none text-Body' key={index}>{item.productName}<span className='text-Body text-brand ml-[10px]'>{item.discount}</span></li>
                        )
                    } 
                  )
                }
              </div>
              <div>
                <h2 className='text-subtitle mb-5'>Название категории</h2>
                {
                  Discountmenu.map((item,index)=>{
                    return (
                        <li className='list-none text-Body' key={index}>{item.productName}<span className='text-Body text-brand ml-[10px]'>{item.discount}</span></li>
                        )
                    } 
                  )
                }
              </div>
              <div>
                <h2 className='text-subtitle mb-5'>Название категории</h2>
                {
                  Discountmenu.map((item,index)=>{
                    return (
                        <li className='list-none text-Body' key={index}>{item.productName}<span className='text-Body text-brand ml-[10px]'>{item.discount}</span></li>
                        )
                    } 
                  )
                }
              </div>
            </div>
            <div className='lg:flex justify-between mb-[50px]'>
              <div>
                <h2 className='text-subtitle mb-5'>Название категории</h2>
                {
                  Discountmenu.map((item,index)=>{
                    return (
                        <li className='list-none text-Body' key={index}>{item.productName}<span className='text-Body text-brand ml-[10px]'>{item.discount}</span></li>
                        )
                    } 
                  )
                }
              </div>
              <div>
                <h2 className='text-subtitle mb-5'>Название категории</h2>
                {
                  Discountmenu.map((item,index)=>{
                    return (
                        <li className='list-none text-Body' key={index}>{item.productName}<span className='text-Body text-brand ml-[10px]'>{item.discount}</span></li>
                        )
                    } 
                  )
                }
              </div>
              <div>
                <h2 className='text-subtitle mb-5'>Название категории</h2>
                {
                  Discountmenu.map((item,index)=>{
                    return (
                        <li className='list-none text-Body' key={index}>{item.productName}<span className='text-Body text-brand ml-[10px]'>{item.discount}</span></li>
                        )
                    } 
                  )
                }
              </div>
            </div>
            <div className='lg:flex justify-between mb-[50px]'>
              <div>
                <h2 className='text-subtitle mb-5'>Название категории</h2>
                {
                  Discountmenu.map((item,index)=>{
                    return (
                        <li className='list-none text-Body' key={index}>{item.productName}<span className='text-Body text-brand ml-[10px]'>{item.discount}</span></li>
                        )
                    } 
                  )
                }
              </div>
              <div>
                <h2 className='text-subtitle mb-5'>Название категории</h2>
                {
                  Discountmenu.map((item,index)=>{
                    return (
                        <li className='list-none text-Body' key={index}>{item.productName}<span className='text-Body text-brand ml-[10px]'>{item.discount}</span></li>
                        )
                    } 
                  )
                }
              </div>
              <div>
                <h2 className='text-subtitle mb-5'>Название категории</h2>
                {
                  Discountmenu.map((item,index)=>{
                    return (
                        <li className='list-none text-Body' key={index}>{item.productName}<span className='text-Body text-brand ml-[10px]'>{item.discount}</span></li>
                        )
                    } 
                  )
                }
              </div>
            </div>
        </div>
        </div>
  )
}

export default Discounts