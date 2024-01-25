import React from 'react'
import { useState } from 'react'
import { icons } from '../../utilits/icons'
import BankCard from './BankCard'

function PersonalInfo() {
   const [showmodalka , setShowModalka] = useState(false)
   const handleClose = () => setShowModalka(false)
  return (
    <div className='lg:m-[100px]'>
      <div>
      <div className='p-6 border border-change rounded-md   '>
              <div className='flex gap-5 '>
              <button>{icons.profil}</button>
              <p className='pt-10 text-subtitle' >Имя не указано</p>
              </div>
          <div className='flex gap-[200px] m-8'>
              <div className=' flex flex-col gap-3'>
                <div className='flex gap-1 '>
              <p className='text-brand text-Body'>E-mail</p>
              <button> {icons.pen}</button>
              </div>
              <p className='text-Bodybold'>Не указано</p>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='flex gap-1 '>
               
               <p className='text-brand text-Body '>Номер телефона</p>
                <button>{icons.pen}</button>  
               </div>
               <p className='text-Bodybold'>+998 99 123 45 67</p>
              </div>
              <div className='flex flex-col gap-3' >
              <p className='text-brand text-Body'>Пол</p>
              <div class="btn-group flex gap-4" data-bs-toggle="buttons">
                <label
                  class="btn btn-Cmain  active"
                >
                  <input
                    type="radio"
                    class="me-2"
                    name="men"
                    id=""
                    autocomplete="off"
                    checked
                  />
                  Муж.
                </label>
                <label
                  class="btn btn-Cmain"
                >
                  <input type="radio" name="men" id="" autocomplete="off" /> Жен.
                </label>
                
              </div>
              
                
              </div>

          </div>
              
           </div>
          <button onClick={()=>setShowModalka(true)} className='mt-9 border-[2px] border-Cmain rounded-lg p-10 flex flex-col gap-3 items-center '>
            {icons.plus}
            <p className='text-Cmain text-subtitle '>Добавить карту</p>
          </button>
      </div>
      <BankCard onClose={handleClose} visible={showmodalka}/>
    </div>
  )
}

export default PersonalInfo