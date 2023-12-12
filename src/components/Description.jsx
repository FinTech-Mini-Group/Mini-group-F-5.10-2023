import React from 'react'
import komp from '../assets/Rectangle 672.png'
import Footer from '../landingpages/Footer'
import Products from '../pages/Product'
import { icons } from '../utilits/icons'

function Description(props) {
   
  return (
    <div className={props.title === 'Описание' ? 'block' : 'hidden'}>
      <img src={komp} alt="" />
      <div>
        <h1 className='text-TitleBold py-[10px]'>Двигатель. Производитель. Нарушитель границ.</h1>
        <p className='text-Body text-subtitles mb-[50px]'>MacBook Pro с наддувом от M2Pro или M2 Max повышает свою мощность и эффективность еще больше, чем <br/> когда-либо. Он обеспечивает исключительную производительность независимо от того, подключен он к сети или <br/> нет, и теперь имеет еще более длительное время автономной работы. В сочетании с потрясающим дисплеем <br/> Liquid Retina XDR и всеми необходимыми портами — это профессиональный ноутбук, которому нет равных.</p>
      </div>
      <div className='flex justify-between'>
          <h2 className='text-subtitle '>Похожие товары</h2>
          <div>
          <button className='p-2  rounded-[4px]  bg-[#6EFF75] '>{icons.arrowl}</button>
          <button className='p-2  rounded-[4px]  bg-[#6EFF75] ml-5'>{icons.arrowr}</button>
          </div>
          </div>
          <Products/>
          <Footer/>
    </div>
  )
}

export default Description