import React from 'react'
import { products } from '../landingpages/data'

function Electronic() {


  return (
     <div className='container m-auto'>
      {
        products.map((element,value)=>
        <div className='' key={value}>
            <h1 className='text-subtitle'>{element.name}</h1>
        </div>
        )
      }
        
    </div>
  )
}

export default Electronic