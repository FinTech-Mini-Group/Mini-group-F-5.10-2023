import React, { useEffect, useState } from 'react'
import axios from "axios"
import { category } from './data'
import { useNavigate } from 'react-router-dom'
import Img1 from "../assets/Rectangle 657.png"
import { BASE_URL } from '../utilits/constant'
import { useCategorysQuery } from '../services/categoryApi'

function Category() {
  const navigate = useNavigate()
  const {data:categories}=useCategorysQuery()
  console.log(categories)

  return (
    <div className='lg:container m-auto my-[50px]'>

      <div className='lg:flex justify-between items-center mb-[35px]'>
        <h1 className='text-TitleBold text-Cback'>Лучшие категории</h1>
        <h2 className='text-Body text-Cmain '>Все категории</h2>
      </div>
      <div className='lg:flex justify-between mb-[35px]'>
        <div className='lg:grid lg:grid-cols-6 gap-6'>
          {
            categories && categories.Success.map((element, value) =>
              <div className='' key={value}>
                <img className='w-[262px] h-[262px] rounded-[10px]' src={element.images || Img1} alt="img" />
                <p className=' mb-[50px] lg:text-center mt-[10px] text-subtitle text-[#000000]'>{element.name}</p>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default Category