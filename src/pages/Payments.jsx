import React, { useState } from 'react';

function Oplaty() {
  const [radioStates, setRadioStates] = useState([false, false, false, false, false]);

  const handleRadioClick = (index) => {
    const newRadioStates = [...radioStates];
    newRadioStates[index] = !newRadioStates[index];
    setRadioStates(newRadioStates);
  };
  // console.log(radioOptions);
  return (
    <div>
      <h1 className='text-subtitle mb-5'>Способы оплаты</h1>
      <div className='lg:grid grid-cols-2 gap-7 mb-10'>
        {radioOptions.map((option, index) => (
          <div key={index} className='py-4 pl-8 pr-8 flex items-center border-2 border-solid rounded-[5px] lg:w-[360px]'>
            <input className='w-6 h-6' type="radio" checked={radioStates[index]} onClick={() => handleRadioClick(index)} />
            <h1 className='text-Bodybold ml-[10px]'>{option}</h1>
          </div>
        ))}
      </div>
      <div>
        <h2 className='text-subtitle mb-5'>Ваши отзывы</h2>
        <textarea className='py-2 px-5 border-2 border-solid w-full h-full lg:w-[600px] lg:h-[114px] mb-5' name="" id="" cols="30" rows="10" placeholder='Пишите ваш отзыв'></textarea>
      </div>
      <button className='py-2 px-4 bg-bgmain rounded-[4px] text-Body text-white'>Отправить отзыв</button>
    </div>
  );
}

const radioOptions = [
  'Оплата через Payme',
  'Оплата по карте HUMO и UZCARD',
  'Оплата наличными при получении',
  'Оплатить картой при получении',
  'Оплата картой',
];

export default Oplaty;