import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../landingpages/data";
import { icons } from "../utilits/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Products.css";
import axios from "axios";
import { BASE_URL } from "../utilits/constant";
import { useProductsQuery } from "../services/productApi";
import { Contexts } from "../context/Contexts";
import love from '../../src/assets/lovess.png'
function Products() {
  const navigate = useNavigate();
  const { basket, setBasket } = useContext(Contexts);
  const { data: productes } = useProductsQuery();
  const [isBasketVisible, setIsBasketVisible] = useState(true);

  const handleAddBasket = (item) => {
    const isItemInBasket = basket.some((basketItem) => basketItem.id === item.id);

    if (isItemInBasket) {
      alert('bu mahsulot bor');
    } else {
      setBasket([...basket, item]);
      setIsBasketVisible(false); // Hide the basket photo when item is added to the basket
    }
  };
  
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenArray, setIsOpenArray] = useState(Array(productes?.Success.length).fill(false));
  return (
    <div className="Products">
      <Swiper spaceBetween={30} slidesPerView={4} className="mySwiper">
        {productes &&
          productes?.Success.map((element,value) => (
            <>
              <SwiperSlide>
                <div
                  className="p-[20px] rounded-[5px] bg-[#FAFAFA] cursor-pointer "
                  key={value}
                >
                  <img
                    onClick={() => navigate(`/electronic/${element.id}`)}
                    className="w-[280px] h-[280px] rounded-[5px]"
                    src={`${BASE_URL}${element?.image_urls[0]}`}
                    alt=""
                  />
                   
                  <div className=" my-[10px]">
                    <button className="py-[5px] px-[8px] rounded-[4px] bg-Cbadge text-white mr-[10px]">
                      {element.discount} % скидка
                    </button>
                    <button className="py-[5px] px-[8px] rounded-[4px] bg-bgblue text-white">
                      Супер цена
                    </button>
                  </div>
                  <p className="mb-[10px] text-Body text-Cback">
                    {element.title}
                  </p>
                  <p className="text-Bodystrik text-[#999] line-through ">
                    {element.price} сум
                  </p>
                  <p className="text-subtitless !text-[#00B709]">
                    {element.disc_price}сум
                  </p>
                  <p className=" mx-[10px] my-[10px] border-b-[1px]  w-[248px] bg-change"></p>
                  <div className="flex">
                   <button
                      onClick={() => handleAddBasket(element)}
                      className=" flex p-[8px] rounded-[4px] bg-bgmain"
                    >
                      {icons.shoppingcart}
                      <span className="ml-[10px] text-Bold text-white ">
                        В корзину
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        setIsOpenArray((prev) => {
                          const newArray = [...prev];
                          newArray[value] = !newArray[value];
                          return newArray;
                        });
                      }}
                      className="p-[8px] rounded-[4px] border-[1px] border-solid ml-[20px]"
                    >
                      {isOpenArray[value] ?   <img className="w-[24px] h-[24px]" src={love} alt="" />:icons.heart}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
      </Swiper>
    </div>
  );
}

export default Products;
