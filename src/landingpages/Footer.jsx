import React from 'react'
import { icons } from '../utilits/icons'
import { Partnyor, buyers, company, networks } from '../utilits/footermenu'
import { Link } from 'react-router-dom'
import BuyerAccordion from '../Footermenu/BuyerAccordion'
import Partniyor from '../Footermenu/Partniyor'
import Company from '../Footermenu/Company'
import ContactAccordion from '../Footermenu/ContactAccordion'
import Networks from '../Footermenu/Networks'


function Footer() {
  return (
    <div className=' m-auto bg-Cwhite lg:pt-[50px] lg:flex justify-around'>
       <BuyerAccordion/>
       <Partniyor/>
       <Company/>
       <ContactAccordion/>
       <Networks/>
       
        {/* <div>
            <h1 className='text-subtitle text-subtitles mb-[30px]'>Партнёрам</h1>
           {
             Partnyor.map((element, value) => {
                return <li className='list-none mb-[15px]' key={value}>
                    <Link className='  text-Body text-[#999999]'>{element.linkName}</Link>
                </li>
            })
           }
        </div> */}
        {/* <div>
            <h1 className='text-subtitle text-subtitles mb-[30px]'>Компания</h1>
            {
             company.map((element, value) => {
                return <li className='list-none mb-[15px]' key={value}>
                    <Link className='  text-Body text-[#999999]'>{element.linkName}</Link>
                </li>
            })
           }

            
        </div> */}
        {/* <div>
            <h1 className='text-subtitle text-subtitles mb-[30px]'>Контакты</h1>
            <p className='text-Body text-[#999999] mb-[15px] '>Г. Ташкент, Юнусабадский р.<br/> ул.Юнус Раджаби дом а16</p>
            <p className='text-Body text-[#999999] mb-[15px] '>+998 99 123 45 67</p>
            <p className='text-Body text-[#999999] mb-[15px] '>help@mail.uz</p>
        </div> */}
        {/* <div>
            <h1 className='text-subtitle text-subtitles mb-[30px]'>Социальные сети</h1>
            <div className='flex  items-center'>
               
            {
             networks.map((element, value) => {
                return <li className='list-none  mr-[30px] p-[10px] border-2 border-solid rounded-[20px]' key={value}>
                   <Link href={element.href} className=' '>{element.icons}</Link>
                </li>
            })
           }
            </div>
        </div> */}
    </div>
  )
}

export default Footer