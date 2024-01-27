import React from 'react'

function Gifts(props) {
    const Giftsmenu = [
        {Giftsimage:''}
    ]
  return (
    <div className={props.title === 'Подарки' ? 'block' : 'hidden'}>
        <div>
        <h1 className='text-TitleBold mb-[50px]'>Подарки</h1>
             <div>

             </div>
        </div> 
    </div>
  )
}

export default Gifts