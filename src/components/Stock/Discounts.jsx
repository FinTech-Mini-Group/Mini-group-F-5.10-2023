import React from 'react'

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

  return (
    <div className={props.title === 'Cкидки' ? 'block' : 'hidden'}>
        <div>
          <h1 className='text-TitleBold mb-[30px]'>Скидки</h1>
          <p className='text-Bodybold mb-[50px]'>На товары со значком
            -15% скидка
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