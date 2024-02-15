import React from 'react'
import samakat from '../../assets/Rectangle 626.png'
import iphone from '../../assets/Rectangle 626 (1).png'


const Purchaseproduct = [
  { img: samakat, title: 'Xiaomi Mi Electric Scooter 3 до 100 кг', price: '9 720 000', date: '12.08.2022', buy: 'Продано' },
  { img: iphone, title: 'iPhone 13 Pro Max, 256GB, Blue', price: '9 720 000', date: '12.08.2022', buy: 'Отменено' },
]
function Purchases(props) {
  return (
    <div className={props.title === 'Покупки' ? 'block' : 'hidden'}>
       <div className='container m-auto'>
           {
            Purchaseproduct.map((element,value)=>{
                return (
                <div key={value} className='lg:flex items-center gap-16 mb-8'>
                      <img src={element.img} alt="" />
                      <p className='text-Bodybold'>{element.title}</p>
                      <p className='text-subtitless'>{element.price} <span>сум</span> </p>
                      <p className='text-Bodybold'>{element.date}</p>
                      <p className='text-Bodybold text-Cmain'>{element.buy}</p>
                </div>
                )
            })
           } 
       </div>
    </div>
  )
}

export default Purchases