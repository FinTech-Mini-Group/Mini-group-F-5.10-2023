import React from "react";
import { zakaz } from "../landingpages/data";
function Order() {
  return (
    <div className="py-10">
      <div className="flex justify-between">
        <h2 className="text-subtitle text-subtitles">Ваш заказ</h2>
        <h3 className="text-Body text-[#999999]">Изменить</h3>
      </div>
      {zakaz.map((element, value) => (
        <div className="grid grid-cols-9 items-center mt-5" key={value}>
          <div className="col-span-6 flex items-center">
            <img className="pr-5 " src={element.img} alt="" />
            <p className="text-Bodybold">{element.name}</p>
          </div>
          <div className="col-span-1">
            <p className="py-2 px-4 border-2 border-solid rounded-[4px] text-Bodybold inline-block">
              {element.number}
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-subtitle">
              {element.price} <span className="text-Bodybold">сум</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Order;
