import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Contexts } from "../context/Contexts";
import { useProductInfoQuery } from "../services/productApi";
import BasketCardUi from "./BasketCardUi";

function Basket() {
  const navigate = useNavigate();
  const { basket, Id, count, setBasket } = useContext(Contexts);
  const { data: productInfo } = useProductInfoQuery(Id);
  const discPrice = productInfo?.Success?.disc_price;
  const allPrice = Number(discPrice) * Number(count);

  const handleRemoveFromBasket = (itemId) => {
    const updatedBasket = basket.filter((item) => item.id !== itemId);
    setBasket(updatedBasket);
  };

  return (
    <div className="container m-auto">
      <h1 className="text-TitleBold my-8">Корзина</h1>
      <div className="lg:flex gap-8">
        <div className="p-7 border-[2px] border-solid rounded-[10px]  ">
        <div className="lg:flex justify-between">
  <div className="lg:flex">
    <input className="mr-[20px] w-6" type="checkbox" />
    <p className="text-subtitle">Выбрать всё</p>
  </div>
  <div>
    <button onClick={() => handleRemoveFromBasket(element.id)} className="Bodybold">
      Удалить
    </button>
  </div>
</div>
          <div className="lg:flex ">
            <div className=" justify-arround mt-5">
              <div className="gap-30 ">
                {basket.map((element, value) => (
                  <BasketCardUi element={element} key={value} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-[2px] border-solid rounded-[10px] py-5 px-8 lg:w-[400px] h-full">
          <div className="lg:flex justify-between items-center">
            <h2 className="text-TitleBold">Итого:</h2>
            <p className="text-subtitle !text-Cmain">
              {allPrice} <span className="!text-Bodybold text-black">сум</span>
            </p>
          </div>
          <p className="my-8 text-Bodybld text-brand">Товары {basket.length} шт.</p>
          <button
            onClick={() => navigate("/zakaz")}
            className="py-2 px-[16px] bg-bgmain rounded-[4px] text-Body  text-Cwhite w-[100%] mb-[30px]"
          >
            Оформить заказ
          </button>
          <div className="flex items-center">
            <input className="mr-[10px] w-6" type="checkbox" />
            <p className="text-Bodysmall">
              Согласен с условиями правил пользования торговой площадкой и правилами возврата
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
