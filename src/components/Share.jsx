import React, { useState } from 'react'
import Modal from 'react-modal'
import { icons } from '../utilits/icons';

function Share() {
  const [isOpen, setIsOpen] = useState(false)
 
  return (
    <div className='relative'>
      <button onClick={() => setIsOpen(true)} className='p-[10px] border-[1px] border-solid rounded-[4px] mr-5'>{icons.share}</button>
      {isOpen && (
        <div className="absolute left-[-60px] shadow-2xl">
          <div className='bg-white p-5 rounded-[10px]'>
            <h2 className='text-Body mb-5'>Поделиться с друзьями:</h2>
            <div className='flex items-center'>
              <div>
                <p className='mb-[10px] mr-[10px]'>{icons.square}</p>
                <p className='mb-[10px] mr-[10px]'>{icons.telegram2}</p>
                <p className='mb-[10px] mr-[10px]'>{icons.facebook2}</p>
                <p className='mr-[10px]'>{icons.Instagram2}</p>
              </div>
              <div>
                <p className='text-Body mb-[10px]'>Скопировать ссылку</p>
                <p className='text-Body mb-[10px]'>Telegram</p>
                <p className='text-Body mb-[10px]'>Facebook</p>
                <p className='text-Body'>Instagram</p>
              </div>
            </div>
          
          </div>
        </div>
      )}

    </div>
  );
}


export default Share