import React, { useState } from 'react'

function BankCard({visible , onClose}) {
    if(!visible) return null
    const [cardNumber, setCardNumber] = useState('');

  const handleChange = (e) => {
    const inputText = e.target.value;
    // Faqat raqamlarni qabul qilish va bo'shliqlarni olib tashlash
    const sanitizedInput = inputText.replace(/\D/g, '').slice(0, 16);
    // Har 4 ta raqamdan so'ng bo'shlik qo'ysa
    const formattedInput = sanitizedInput.replace(/(\d{4})/g, '$1 ').trim();
    setCardNumber(formattedInput);
  };

    // // Oy va yil ma'lumotlarini saqlash uchun useState
    // const [month, setMonth] = useState('');
    // const [year, setYear] = useState('');
  
    // // Input o'zgarishlari bo'yicha holatni saqlash
    // const handleMonthChange = (e) => {
    //   setMonth(e.target.value);
    //    const sanitizedInput = inputText.replace(/\D/g, '').slice(0, 2);
       
    // };
  
    // const handleYearChange = (e) => {
    //   setYear(e.target.value);
    // };
  
    // // Forma o'zgarishlarga bo'yicha ishlov berish
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   // Bu yerdagi ma'lumotlarni kerakli ishlov uchun yozishingiz mumkin
    //   console.log('Oy:', month, 'Yil:', year);
    // };


  return (
    <div className='fixed  z-500 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center '>
        <div className='bg-[#FFFFFF] p-[30px] rounded-[10px]'>
                <h1 className='text-TitleBold mb-5 '>Привязка карты</h1>
                <div className='w-[480px] h-[380px] px-4 flex gap-8 items-start justify-center flex-col shadow-[0px_0px_20px_1px_rgba(0,0,0,0.10)] '>
                  <input onChange={handleChange}   maxLength={19} className='bg-[#EFEFF4] p-3 w-full flex justify-center' type="text" id="cardNumber" name="cardNumber" value={cardNumber} placeholder='XXXX XXXX XXXX XXXX' />
                  <div className='flex items-center'>
                    <form className='flex items-center' action="">
                      <label htmlFor="">
                      <select className='py-[22px] pl-[40px] pr-[22px] rounded-[5px] bg-[#EFEFF4] w-[110px]' name="" id="">
                  <option value="1900">01</option>
                  <option value="1900">02</option>
                  <option value="1900">03</option>
                  <option value="1900">04</option>
                  <option value="1900">06</option>
                  <option value="1900">07</option>
                  <option value="1900">08</option>
                  <option value="1900">09</option>
                  <option value="1900">10</option>
                  <option value="1900">11</option>
                  <option value="1900">12</option>
                  </select>
                  {/* <input  className='py-[22px] pr-[33px] pl-[22px] rounded-[5px] bg-[#EFEFF4] w-[110px]' type="text" placeholder='M M'/> */}
                  </label>
                  <p className='mx-[22px]'>/</p>
                  <select className='py-[22px] pl-[40px] pr-[22px] rounded-[5px] bg-[#EFEFF4] w-[110px]' name="" id="">
                  <option value="1900">24</option>
                  <option value="1900">25</option>
                  <option value="1900">26</option>
                  <option value="1900">27</option>
                  <option value="1900">28</option>
                  <option value="1900">29</option>
                  <option value="1900">30</option>
                  </select>
                  {/* <input onChange={handleYearChange} value={year} className='py-[22px] pl-[40px] pr-[22px] rounded-[5px] bg-[#EFEFF4] w-[110px]' type="text" placeholder='Y Y'/> */}
                  </form>
                  </div>
                </div>
                
                <button className=' mt-10 py-2 px-4 border-[2px] border-solid bg-brand rounded-[4px] text-Body text-Cwhite w-[100%] mb-[20px]'>ПРИВЯЗАТЬ</button>
                    <button onClick={onClose}>CLOSE</button>
                    
        </div>
    </div>

  )
  }


export default BankCard