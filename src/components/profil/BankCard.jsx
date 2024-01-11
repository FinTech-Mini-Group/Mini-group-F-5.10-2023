import React from 'react'

function BankCard({visible , onClose}) {
    if(!visible) return null
  return (
    <div className='fixed  z-500 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center '>
        <div className='bg-[#FFFFFF] p-[30px] rounded-[10px]'>
                <h1 className='text-TitleBold mb-5 '>Привязка карты</h1>
                <div className='w-[480px] h-[380px] px-4 flex gap-8 items-start justify-center flex-col shadow-[0px_0px_20px_1px_rgba(0,0,0,0.10)] '>
                  <input className='bg-[#EFEFF4] p-3 w-full flex justify-center' type="number" name="" id="" placeholder='5 5 6 7    7 8 4 4    3 3 4 4    6 7 8 9' />
                  <input className='w-full bg-[#EFEFF4] p-3 flex justify-center' type="date" name="" id="" />
                </div>
                
                <button className=' mt-10 py-2 px-4 border-[2px] border-solid bg-brand rounded-[4px] text-Body text-Cwhite w-[100%] mb-[20px]'>ПРИВЯЗАТЬ</button>
                    <button onClick={onClose}>CLOSE</button>
                    
        </div>
    </div>
  )
}

export default BankCard