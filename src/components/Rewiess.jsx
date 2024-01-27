import React, { useState } from 'react';
import Rating from './Rating';
import stars from "../assets/Stars.png";

function Rewiess({ visible, onClose }) {
  const [reviewRating, setReviewRating] = useState(0);

  const handleRatingChange = (value) => {
    setReviewRating(value);
  };

  if (!visible) return null;

  return (
    <div className='fixed z-50 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center '>
      <div className='bg-[#FFFFFF] lg:p-[30px] rounded-[10px]'>
        <h1 className='text-subtitle mb-5'>Написать отзыв</h1>
        <form className='grid lg:gap-3 ' action="">
                   <input className='py-4 px-5 border-[2px] border-solid rounded-[4px] text-Body text-brand lg:w-[440px]' required type="text" placeholder='Ваша имя*'/>
                    <input className='py-4 px-5 border-[2px] border-solid rounded-[4px] text-Body text-brand lg:w-[440px]' required type="text" placeholder='Ваша город*'/>
                    <input className='py-4 px-5 border-[2px] border-solid rounded-[4px] text-Body text-brand lg:w-[440px]' required type="email" placeholder='E-mail*'/>                  
                    <textarea className='py-4 px-5 border-[2px] border-solid rounded-[4px] text-Body text-brand ' name="" id="" cols="30" rows="10">Отзыв*</textarea> 
                    <input className='py-4 px-5 rounded-[4px] text-Body text-brand' required type="file" placeholder='Добавить фото'/> 
          <div className='lg:flex gap-8 py-5'>
            <h2>Оценка товара:</h2>
            <Rating onRatingChange={handleRatingChange} />
          </div>
        </form>
        <button className='py-2 px-4 border-[2px] border-solid bg-bgmain rounded-[4px] text-Body text-Cwhite w-[100%] mb-[20px]'>Отправить отзыв</button>
        <p onClick={onClose}>CLOSE</p>
      </div>
    </div>
  );
}

export default Rewiess;