import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Img1 from "../assets/Rectangle 657.png";
import { useCategorysQuery } from '../services/categoryApi';

function Category() {
  const navigate = useNavigate();
  const { data: categories } = useCategorysQuery();

  const [first, setFirst] = useState(1);
  const cardProduct = 6;
  const lastProductKey = Math.max(first * cardProduct, 0);
  const firstProductKey = Math.max(lastProductKey - cardProduct, 0);

  const res = categories?.Success?.slice(firstProductKey, lastProductKey) || [];
  const categoryLength = categories?.Success?.length || 0;
  const numbers = [...Array(Math.max(Math.floor(categoryLength / cardProduct) + 2, 0)).keys()].slice(1);
  console.log(numbers);
  return (
    <div className='lg:container m-auto my-[50px]'>

      <div className='lg:flex justify-between items-center mb-[35px]'>
        <h1 className='text-TitleBold text-Cback'>Лучшие категории</h1>
        <h2 className='text-Body text-Cmain '>Все категории</h2>
      </div>
      <div className='lg:flex justify-between mb-[35px]'>
        <div className='lg:grid lg:grid-cols-6 gap-6'>
          {
            categories && res.map((element, value) =>
              <div className='' key={value}>
                <img className='w-[262px] h-[262px] rounded-[10px]' src={element.images || Img1} alt="img" />
                <p className=' mb-[50px] lg:text-center mt-[10px] text-subtitless text-[#000000]'>{element.name}</p>
              </div>
            )}
        </div>   
      </div>
               {
                    <ul className='pagenation flex gap-8 '>
                        {
                            numbers?.map((element, value) => <li key={value} className={`${element === first ? 'activePage' : '' } py-2 px-4 border-2 border-solid rounded-[4px] hover:bg-Cmain hover:text-Cwhite `} onClick={() => setFirst(element)}>{element}</li>)
                        }
                    </ul>
                }
    </div>
  )
}

export default Category