import React, { useContext } from "react";
import { zakaz } from "../landingpages/data";
import { Contexts } from "../context/Contexts";
import { BASE_URL } from "../utilits/constant";
import { useNavigate } from "react-router-dom";

function Order() {
  const { basket, count } = useContext(Contexts);
  const navigate = useNavigate()
  return (
    <div className="py-10">
      <div className="lg:flex justify-between">
        <h2 className="text-subtitless text-subtitles">Ваш заказ</h2>
        <button onClick={()=>navigate('/Basket')} className="text-Body text-[#999999]">Изменить</button>
      </div>
      {basket?.map((element, value) => (
        <div className="lg:grid lg:grid-cols-9 items-center mt-5" key={value}>
          <div className="lg:col-span-6 lg:flex items-center">
            <img
              className="mr-5 lg:w-40"
              src={`${BASE_URL}${element?.image_urls}`}
              alt=""
            />
            <p className="text-Bodybold">{element.title}</p>
          </div>
          <div className="lg:col-span-1">
            <p className="py-2 px-4 border-2 border-solid rounded-[4px] text-Bodybold inline-block">
            {count[element.id] || 0}
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-subtitless">
              {element.disc_price} <span className="text-Bodybold">сум</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Order;
