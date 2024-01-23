import React, { useContext } from "react";
import { zakaz } from "../landingpages/data";
import { Contexts } from "../context/Contexts";
import { BASE_URL } from "../utilits/constant";
function Order() {
  const { basket, count } = useContext(Contexts);
  return (
    <div className="py-10">
      <div className="flex justify-between">
        <h2 className="text-subtitle text-subtitles">Ваш заказ</h2>
        <h3 className="text-Body text-[#999999]">Изменить</h3>
      </div>
      {basket?.map((element, value) => (
        <div className="lg:grid grid-cols-9 items-center mt-5" key={value}>
          <div className="col-span-6 flex items-center">
            <img
              className="mr-5 w-40"
              src={`${BASE_URL}${element?.image_urls}`}
              alt=""
            />
            <p className="text-Bodybold">{element.title}</p>
          </div>
          <div className="col-span-1">
            <p className="py-2 px-4 border-2 border-solid rounded-[4px] text-Bodybold inline-block">
              {count}
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-subtitle">
              {element.disc_price} <span className="text-Bodybold">сум</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Order;
