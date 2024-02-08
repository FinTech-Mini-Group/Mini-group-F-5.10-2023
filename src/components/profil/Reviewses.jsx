import React from 'react'
import tv from '../../assets/image 9.png'
import Ratinge from './Ratinge'
import { icons } from '../../utilits/icons'

const Rewis = [
  {img:tv, title:'iPhone 12 Pro Max, 128GB, Blue', date : '26 октября 2022б 18:41' , titles:'За эти деньги, думаю норм!)'}, 
  {img:tv, title:'iPhone 12 Pro Max, 128GB, Blue', date : '26 октября 2022б 18:41' , titles:'За эти деньги, думаю норм!)'},  
  {img:tv, title:'iPhone 12 Pro Max, 128GB, Blue', date : '26 октября 2022б 18:41' , titles:'За эти деньги, думаю норм!)'},  
  {img:tv, title:'iPhone 12 Pro Max, 128GB, Blue', date : '26 октября 2022б 18:41' , titles:'За эти деньги, думаю норм!)'},  
  {img:tv, title:'iPhone 12 Pro Max, 128GB, Blue', date : '26 октября 2022б 18:41' , titles:'За эти деньги, думаю норм!)'},   
]
function Reviewses(props) {
  return (
    <div className={props.title === 'Отзывы' ? 'block' : 'hidden'}>
        <div className='container m-auto lg:grid grid-cols-3 gap-8 mb-[124px]'>
            {
                Rewis.map((element,value)=>{
                    return(
                        <div key={value} className='p-8 rounded-[10px] border-2 shadow-xl'>
                                <div className='flex items-center'>
                                    <img className='w-[65px] h-[65px]' src={element.img} alt="" />
                                    <div>
                                        <h1 className='text-subtitless'>{element.title}</h1> 
                                        <p className='text-Body text-[#999999]'>{element.date}</p> 
                                        <Ratinge/>
                                    </div>
                                </div>   
                                <h2 className='text-Rale mb-[80px]'>{element.titles}</h2>
                                <div className="flex gap-6">
                                     <button className='flex gap-3'>{icons.like} <span>12</span></button>
                                     <button className='flex gap-3'>{icons.dislike} <span>3</span></button>       
                                </div>
                        </div>
                    )
                })
            }    
        </div>
    </div>
  )
}

export default Reviewses