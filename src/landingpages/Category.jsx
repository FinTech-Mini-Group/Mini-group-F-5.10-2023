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
  // console.log(categories)

  const [first, setFirst] = useState(1)
    const cardProduct = 6
    const lastProductKey = first * cardProduct
    const firstProductKey = lastProductKey - cardProduct

    const res = categories?.Success?.slice(firstProductKey, lastProductKey)
    // console.log(res);
    const numbers = [...Array(Math.floor(categories?.Success?.length / cardProduct) + 2).keys()].slice(1)
    console.log(numbers)
 
  return (
    <div className='lg:container m-auto my-[50px]'>

      <div className='lg:flex justify-between items-center mb-[35px]'>
        <h1 className='text-TitleBold text-Cback'>Лучшие категории</h1>
        <h2 className='text-Body text-Cmain '>Все категории</h2>
      </div>
      <div className='lg:flex justify-between mb-[35px]'>
        <div className='lg:grid lg:grid-cols-6 gap-6'>
          {
            categories && res.map((element, value) =>
              <div className='' key={value}>
                <img className='w-[262px] h-[262px] rounded-[10px]' src={element.images || Img1} alt="img" />
                <p className=' mb-[50px] lg:text-center mt-[10px] text-subtitle text-[#000000]'>{element.name}</p>
              </div>
            )}
        </div>   
      </div>
               {
                    <ul className='pagenation flex gap-8 '>
                        {
                            numbers?.map((element, value) => <li key={value} className={`${element === first ? 'activePage' : '' } py-2 px-4 border-2 border-solid rounded-[4px] hover:bg-Cmain hover:text-Cwhite `} onClick={() => setFirst(element)}>{element}</li>)
                        }
                    </ul>
                }
    </div>
  )
}

export default Category