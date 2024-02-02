import React, { useState } from "react";
import { BASE_URL } from "../utilits/constant";
import { useContext } from "react";
import { Contexts } from "../context/Contexts";

function BasketCardUi({ element }) {
  // const [count, setCount] = useState(1);
  const { setId, setCount, count } = useContext(Contexts);
  const handleDecreaseCount = () => {
    setCount((prevCounts) => ({
      ...prevCounts,
      [element.id]: Math.max((prevCounts[element.id] || 0) - 1, 0),
    }));
  };

  const handleIncreaseCount = () => {
    setCount((prevCounts) => ({
      ...prevCounts,
      [element.id]: (prevCounts[element.id] || 0) + 1,
    }));
  };
  
  setId(element.id);
  return (
    <>
      <div className="lg:flex mb-[40px]">
        <input className="mr-[20px] w-6" type="checkbox" />
        <img
          className="mr-5 w-40"
          src={`${BASE_URL}${element?.image_urls}`}
          alt=""
        />
        <div className="mr-[200px]">
          <p className="text-Bodybold">{element?.title}</p>
          <p className="text-Body text-brand">
            Цвет: <span className="text-Bodybold">{element?.color}</span>
          </p>
          <p className="text-Body text-brand">
            Магазин: <span className="text-Bodybold">{element?.shop}</span>
          </p>
        </div>
        {/* <div className="flex gap-4 mr-[200px]">
                      <p className="border-[1px] border-solid rounded-[4px] bg-Cmain p-2 w-[40px] h-[40px] text-center hover:text-Cwhite">
                        -
                      </p>
                      <p className="border-[1px] border-solid rounded-[4px] p-2 w-[40px]  h-[40px] text-center"></p>
                      <p className="border-[1px] border-solid rounded-[4px] bg-Cmain p-2 w-[40px] h-[40px] text-center hover:text-Cwhite">
                        +
                      </p>
                    </div> */}
        <div className="flex items-center">
          <button
            onClick={handleDecreaseCount}
            className="py-2 px-4 bg-bgmain rounded-[4px] text-white mr-[10px]"
          >
            -
          </button>
          <button className="py-2 px-4 bg-white rounded-[4px] text-black border-[1px] border-solid text-Bodybold mr-[10px]">
          {count[element.id] || 0}
          </button>
          <button
            onClick={handleIncreaseCount}
            className="py-2 px-4 bg-bgmain rounded-[4px] text-white"
          >
            +
          </button>
          <p className="ml-[30px] text-Body text-Cmain">В наличии 10 шт.</p>
        </div>
        <div className="">
          <h2 className="font-bold text-2xl">{element?.disc_price} сум</h2>
        </div>
      </div>
    </>
  );
}

export default BasketCardUi;
