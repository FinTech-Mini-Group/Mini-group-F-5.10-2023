import React, { useState } from "react";
import product1 from "../assets/Product images.png";
import product2 from "../assets/Rectangle 623.png";
import product3 from "../assets/Rectangle 624.png";
import product4 from "../assets/Rectangle 625.png";
import product5 from "../assets/Rectangle 627.png";
import { icons } from "../utilits/icons";
import Description from "./Description";
import Question from "./Question";
import Reviews from "./Reviews";
import Share from "./Share";
import Character from "./Сharacter";
import { useParams } from "react-router-dom";

export default function Electronic() {
  const tabsMenu = [
    "Все характеристики товара",
    "Описание",
    "Отзывы покупателей (21)",
    "Вопросы (2)",
  ];
  const [activeTabs, setActiveTabs] = useState("Все характеристики товара");

  const { id } = useParams();
  console.log(id);

  console.log(activeTabs);
  return (
    <div className="container m-auto">
      <h1 className="text-subtitle">
        Ноутбук Apple Macbook Air 13 2020 / M1 / 8GB / 256GB / Apple graphics
        7-core, серебристый
      </h1>
      <h2 className="text-Bodybold my-5">
        Магазин: <span className="text-Bodybold text-Cmain">BSB STORE</span>
      </h2>
      <div className="flex gap-2">
        <div className="">
          <img className="mb-5" src={product1} alt="" />
          <img src={product2} alt="" />
          <img className="my-5" src={product3} alt="" />
          <img className="mb-5" src={product4} alt="" />
          <img src={product4} alt="" />
        </div>
        <div>
          <img src={product5} alt="" />
        </div>
        <div className="py-5 px-8 bg-Crect rounded-[10px] w-[554px]">
          <h1 className="text-Bodybold mb-5">Коротко о продукте</h1>
          <h2 className="text-subtitle mb-[10px]">О продукте</h2>
          <div className="flex justify-between mb-[10px]">
            <p className="text-Body text-brand ">Бренд</p>
            <p className="text-Body text-subtitles">Apple</p>
          </div>
          <div className="flex justify-between mb-[10px]">
            <p className="text-Body text-brand ">Модель</p>
            <p className="text-Body text-subtitles">Macbook Air 13 2020</p>
          </div>
          <div className="flex justify-between mb-[10px]">
            <p className="text-Body text-brand ">Сертификат</p>
            <p className="text-Body text-subtitles">Не подлежит сертификации</p>
          </div>
          <div className="flex justify-between mb-[10px]">
            <p className="text-Body text-brand ">Операционной системы</p>
            <p className="text-Body text-subtitles">MacOS</p>
          </div>
          <div className="flex justify-between mb-[10px]">
            <p className="text-Body text-brand">Диагональ</p>
            <p className="text-Body text-subtitles">13.3”</p>
          </div>
          <div className="flex justify-between mb-[10px]">
            <p className="text-Body text-brand">Процессор</p>
            <p className="text-Body text-subtitles">M1</p>
          </div>
          <div className="flex justify-between mb-[10px]">
            <p className="text-Body text-brand">Цвет:</p>
            <p className="text-Bodybold text-subtitles">Синий</p>
          </div>
          <p className="border-[1px] border-solid border-[#00B709] w-[70px] h-[90px] rounded-[5px] mb-[10px] "></p>
          <p className="text-Body text-brand mb-[10px]">Память</p>
          <div className="flex">
            <button className="py-[6px] px-[10px] rounded-[5px] border-[1px] bg-[#FFFFFF] text-Body mr-[10px]">
              8/128
            </button>
            <button className="py-[6px] px-[10px] rounded-[5px] border-[1px] border-[#1CC427] bg-[#FFFFFF] text-Body mr-[10px]">
              8/256
            </button>
            <button className="py-[6px] px-[10px] rounded-[5px] border-[1px]  bg-change text-Body text-brand ">
              16/512
            </button>
          </div>
          <p className="text-Body text-brand my-[10px]">Количество:</p>
          <div className="flex items-center">
            <button className="py-2 px-4 bg-bgmain rounded-[4px] text-white mr-[10px]">
              -
            </button>
            <button className="py-2 px-4 bg-white rounded-[4px] text-black border-[1px] border-solid text-Bodybold mr-[10px]">
              1
            </button>
            <button className="py-2 px-4 bg-bgmain rounded-[4px] text-white">
              +
            </button>
            <p className="ml-[30px] text-Body text-Cmain">В наличии 10 шт.</p>
          </div>
          <p className="text-Bodybold text-Cmain text-center mt-8">
            Все характеристики
          </p>
        </div>
        <div>
          <div className="p-[20px] border-[1px] border-solid rounded-[4px] w-[407px]">
            <div className="flex items-center">
              <p className="text-subtitle mr-[73px]">25 000 000 сум</p>
              <Share />
              <button className="p-[10px] border-[1px] border-solid rounded-[4px]">
                {icons.heart}
              </button>
            </div>
            <p className="text-Bodystrik line-through">
              30 000 000 <span className="text-Body">сум</span>
            </p>
            <div className="my-5">
              <button className="py-[5px] px-2 border-solid rounded-[4px] bg-Cbadge text-Cwhite mr-[10px]">
                15% chegirma
              </button>
              <button className="py-[5px] px-2 border-solid rounded-[4px] bg-bgblue text-Cwhite text-CTop">
                Top
              </button>
            </div>
            <div className="">
              <button className="flex bg-bgmain rounded-[4px] text-center py-2 px-[90px] text-Body text-Cwhite">
                <span className="mr-[12px]">{icons.shoppingcart}</span>Добавить
                в корзину
              </button>
              <button className="border-[1px] border-solid border-[#00B709] rounded-[4px] py-2 px-[128px] text-Cmain mt-5">
                Купить сейчас
              </button>
            </div>
          </div>
          <div className="w-[407px] flex justify-between mt-5 mb-[13px]">
            <p className="flex items-center text-Body">
              <span className="mr-[10px]">{icons.bag}</span>Магазин
            </p>
            <p className="text-Bodybold">BSB STORE</p>
          </div>
          <div className="w-[407px] flex justify-between mb-[13px]">
            <p className="flex items-center text-Body">
              <span className="mr-[10px]">{icons.car}</span>Доставка
            </p>
            <p className="text-Bodybold">Есть</p>
          </div>
          <div className="w-[407px] flex justify-between mb-[13px]">
            <p className="flex items-center text-Body">
              <span className="mr-[10px]">{icons.recovery}</span>Условия
              возврата
            </p>
            <p className="text-Bodybold">Есть, 10 дней</p>
          </div>
          <div className="w-[407px] flex justify-between mb-[13px]">
            <p className="flex items-center text-Body">
              <span className="mr-[10px]">{icons.payments}</span>Способы оплаты
            </p>
            <p className="text-Bodybold">
              PayMe, Humo, UZCARD,
              <br /> Apelsin, Click
            </p>
          </div>
        </div>
      </div>
      <ul className="flex my-5">
        {tabsMenu.map((element, value) => {
          return (
            <li key={value} onClick={() => setActiveTabs(element)}>
              <button
                className={
                  activeTabs === element
                    ? "list-none py-2 px-4 rounded-[4px] border-[1px] border-solid mr-5 text-Body text-brand hover:bg-bgmain hover:text-Cwhite "
                    : "list-none py-2 px-4 rounded-[4px] border-[1px] border-solid mr-5 text-Body text-brand hover:bg-bgmain hover:text-Cwhite "
                }
              >
                {element}
              </button>
            </li>
          );
        })}
      </ul>
      <Character title={activeTabs} />
      <Description title={activeTabs} />
      <Question title={activeTabs} />
      <Reviews title={activeTabs} />
    </div>
  );
}
