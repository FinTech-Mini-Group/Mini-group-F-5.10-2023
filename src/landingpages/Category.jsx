import React, { useEffect, useState } from 'react'
import axios from "axios"
import { category } from './data'
import { useNavigate } from 'react-router-dom'
import Img1 from "../assets/Rectangle 657.png"
import { BASE_URL } from '../utilits/constant'

function Category() {
  const navigate = useNavigate()
  const [categories, setCategories] = useState()

  useEffect(() => {
    axios.get(`${BASE_URL}/app/ctg/`)
      .then(res => setCategories(res?.data?.Success))
      .catch(err => console.log(err))
  }, [])

  console.log(categories)

  return (
    <div className='lg:container m-auto my-[50px]'>

      <div className='flex justify-between items-center mb-[35px]'>
        <h1 className='text-TitleBold text-Cback'>Лучшие категории</h1>
        <h2 className='text-Body text-Cmain '>Все категории</h2>
      </div>
      <div className='lg:flex justify-between mb-[35px]'>
        <div className='lg:grid lg:grid-cols-6 gap-2'>
          {
            categories && categories.map((element, value) =>
              <div className='' key={value}>
                <img src={element.images || Img1} alt="img" />
                <p className=' mb-[50px] lg:text-center mt-[10px] text-subtitle text-[#000000]'>{element.name}</p>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default Category