import React from 'react'
import Product from '../pages/Product'

function Newsproduct() {

  return (
    <div className='container m-auto'>
        <div className=' lg:flex justify-between   mb-[30px]'>
            <button className='text-subtitle text-Cback ' >Новые товары</button>
            <button className='text-Body text-Cmain '>Все товары</button>
        </div>
          <Product/>  
    </div>
  )
}

export default Newsproduct