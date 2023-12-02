import React from 'react'

import Decoration from '../pages/Decoration'
import Order from '../pages/Order'
import Oplaty from '../pages/Payments'
import Total from '../pages/Total'

function Zakaz() {
   
  return (

    <div className='flex justify-center px-[100px] '>
       <div className='p-5 border-2 border-solid rounded-[10px]  mr-[30px]'>
             <Decoration/>
             <Order/>
             <Oplaty/>
        </div> 
             <Total/>
    </div>
  )
}

export default Zakaz