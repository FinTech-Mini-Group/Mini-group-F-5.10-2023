import React, { useContext } from 'react';
import { Contexts } from '../context/Contexts';
import { useProductInfoQuery } from '../services/productApi';

function Total() {
  const { basket, Id, count, setBasket } = useContext(Contexts);
  const { data: productInfo } = useProductInfoQuery(Id);
  const discPrice = productInfo?.Success?.disc_price || 0; // You may need to adjust this based on your data structure
  const allPrice = Number(discPrice) * Number(count);
  const calculateTotalPrice = () => {
    return Number(discPrice) * Object.values(count).reduce((acc, curr) => acc + curr, 0);
  };

  return (
    <div className='py-5 px-[30px] border-2 border-solid rounded-[10px] w-full lg:h-full'>
      <div className='lg:flex items-center'>
        <h1 className='text-TitleBold lg:mr-8'>Итого:</h1>
        <p className='text-subtitle !text-Cmain mr-[5px]'>
        {calculateTotalPrice()} <span className='text-Bodybold text-black'>сум</span>
        </p>
      </div>
      <div className=''>
        <p className=' my-8 text-Bodybold text-[#999999] '>Товары {basket.length} шт.</p>
        <button className='py-2 w-full text-Body text-Cwhite text-center bg-Cmain rounded-[4px]'>
          Оформить заказ
        </button>
      </div>
      <div className='flex items-center mt-8'>
        <input className='  w-6 h-6 rounded-[4px] mr-3' type='checkbox' />
        <p className='text-Bodysmall'>
          Согласен с условиями правил пользования торговой <br /> площадкой и правилами возврата
        </p>
      </div>
    </div>
  );
}

export default Total;