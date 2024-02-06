import React, { useState } from "react";
import ulchagich from "../assets/Group 262.png";
import Atfirst from "./Atfirst";
import Products from "../pages/Product";

function Subcategory() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  const handleRangeChange = (event) => {
    const newValue = parseInt(event.target.value);

    if (newValue <= minValue) {
      setMinValue(newValue);
    } else if (newValue >= maxValue) {
      setMaxValue(newValue);
    } else {
      const distToMin = Math.abs(newValue - minValue);
      const distToMax = Math.abs(newValue - maxValue);

      if (distToMin < distToMax) {
        setMinValue(newValue);
      } else {
        setMaxValue(newValue);
      }
    }
  };

  return (
    <div className="container m-auto">
      <div className="lg:flex">
        <div>
          <h1 className="text-subtitle text-subtitles mb-[5px] ">
            Смартфоны Apple
          </h1>
          <p className="text-Body text-brand">159 товаров</p>
          <div className="flex my-[30px]">
            <div>
              <div className="flex mb-[30px] justify-between ">
                <p className="text-Bodybold">Цена</p>
                <p className="text-Body text-brand">Сбросить</p>
              </div>
              <div className="flex justify-between">
                <input
                  value={minValue}
                  className="py-[10px] w-32 px-6 border-solid border-2 rounded-[4px] text-Body"
                />
                <input
                  value={maxValue}
                  className="py-[10px] w-32 px-6 border-solid border-2 rounded-[4px] text-Body"
                />
              </div>
              {/* <img className="my-[30px]" src={ulchagich} alt="" /> */}
              <div className="w-72 mt-5">
                <div className=" flex">
                  <input
                    id="fromSlider"
                    type="range"
                    value={minValue}
                    min={0}
                    max={100}
                    onChange={handleRangeChange}
                    className="w-full h-2 appearance-none bg-gray-300"
                  />
                  <input
                    id="toSlider"
                    type="range"
                    value={maxValue}
                    min={0}
                    max={100}
                    onChange={handleRangeChange}
                    className="w-full h-2 appearance-none bg-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-20 ">
              <p className="text-Bodybold">Бренды</p>
              <p className="text-Body text-brand">Сбросить</p>
            </div>
            <div className="flex gap-3 my-[30px]">
              <input className="w-6 h-6" type="checkbox" />
              <p className="text-Body">iPhone XR</p>
            </div>
            <div className="flex gap-3 my-[30px]">
              <input className="w-6 h-6" type="checkbox" />
              <p className="text-Body">Линейка iPhone 11</p>
            </div>
            <div className="flex gap-3 my-[30px]">
              <input className="w-6 h-6" type="checkbox" />
              <p className="text-Body">Линейка iPhone 12</p>
            </div>
            <div className="flex gap-3 my-[30px]">
              <input className="w-6 h-6" type="checkbox" />
              <p className="text-Body">Линейка iPhone 13</p>
            </div>
            <div className="flex gap-3 my-[30px]">
              <input className="w-6 h-6" type="checkbox" />
              <p className="text-Body">Линейка iPhone 14</p>
            </div>
            <div className="flex gap-3 my-[30px]">
              <input className="w-6 h-6" type="checkbox" />
              <p className="text-Body">Старые модели iPhone</p>
            </div>
          </div>
          <button className="Bodybold text-Cmain mb-8 ">Показать больше</button>
          <div>
            <div>
              <div className="flex gap-20 ">
                <p className="text-Bodybold">Накопитель</p>
                <p className="text-Body text-brand">Сбросить</p>
              </div>
              <div className="flex gap-3 my-[30px]">
                <input className="w-6 h-6" type="checkbox" />
                <p className="text-Body">64 ГБ</p>
              </div>
              <div className="flex gap-3 my-[30px]">
                <input className="w-6 h-6" type="checkbox" />
                <p className="text-Body">128 ГБ</p>
              </div>
              <div className="flex gap-3 my-[30px]">
                <input className="w-6 h-6" type="checkbox" />
                <p className="text-Body">256 ГБ</p>
              </div>
              <div className="flex gap-3 my-[30px]">
                <input className="w-6 h-6" type="checkbox" />
                <p className="text-Body">512 ГБ</p>
              </div>
              <div className="flex gap-3 my-[30px]">
                <input className="w-6 h-6" type="checkbox" />
                <p className="text-Body">1 ТБ</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-20 ">
              <p className="text-Bodybold">Цвет</p>
              <p className="text-Body text-brand">Сбросить</p>
            </div>
            <div className="flex gap-3 my-[30px]">
              <input className="w-6 h-6" type="checkbox" />
              <p className="text-Body">Белый</p>
            </div>
            <div className="flex gap-3 my-[30px]">
              <input className="w-6 h-6" type="checkbox" />
              <p className="text-Body">Чёрный</p>
            </div>
            <div className="flex gap-3 my-[30px]">
              <input className="w-6 h-6" type="checkbox" />
              <p className="text-Body">Фиолетовый</p>
            </div>
            <div className="flex gap-3 my-[30px]">
              <input className="w-6 h-6" type="checkbox" />
              <p className="text-Body">Голубой</p>
            </div>
            <div className="flex gap-3 my-[30px]">
              <input className="w-6 h-6" type="checkbox" />
              <p className="text-Body">Серый</p>
            </div>
            <button className="Bodybold text-Cmain mb-8 ">
              Показать больше
            </button>
          </div>
        </div>
        <div>
          <div className="">
            <Atfirst />
          </div>

          <Products />
        </div>
      </div>
    </div>
  );
}

export default Subcategory;
