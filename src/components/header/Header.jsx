import React, { useState } from "react";
import HeaderTop from "./HeaderTop";
import logo from "../../assets/logo/LOGO.svg";
import menu from "../../assets/icons/menu.svg";
import search from "../../assets/icons/search-normal.svg";
import percent from "../../assets/icons/percentage-square.svg";
import heart from "../../assets/icons/heart.svg";
import cart from "../../assets/icons/shopping-cart.svg";
import profile from "../../assets/icons/profile-circle.svg";
import { useNavigate } from "react-router-dom";
import Catalog from "../catalog/Catalog";
import { icons } from "../../utilits/icons";

function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <div>
      <HeaderTop />
      <div className="border-t-2  border-[#999999] lg:flex items-center justify-between lg:px-10 py-1 ">
        <img
          className="mb-[50px] sm:mt-[60px]"
          onClick={() => navigate("/")}
          src={logo}
          alt=""
        />
        <Catalog />
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block lg:w-[574px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:placeholder-gray-400 dark:text-black outline-none"
              placeholder="Поиск товаров"
              required
            />
            <div className="absolute inset-y-0 lg:right-0 right-[90px] flex items-center pr-3 pointer-events-none ">
              <img src={search} alt="" />
            </div>
          </div>
        </form>
        <div className="lg:flex gap-5">
          <div className="flex gap-2 px-2 py-4 list-none">
            <img src={percent} />
            <li className="cursor-pointer">Акции</li>
          </div>
          <div className="flex gap-2 px-2 py-4 list-none">
            <img src={heart} />
            <li className="cursor-pointer">Избранные</li>
          </div>
          <div className="flex gap-2 px-2 py-4 list-none">
            {/* <img src={cart} /> */}
            <li className="" onClick={() => navigate("/Basket")}>
              Корзинка
            </li>
          </div>
          <button
            onClick={() => {
              navigate(token ? "/profil" : "/signin");
            }}
            className="border-2 border-[#00B709] py-2 px-4 rounded-md text-[#00B709] flex gap-2  items-center"
          >
            <img src={profile} alt="" />
            {token ? "Профиль" : "Войти"}
          </button>
        </div>
      </div>
      <div class="md:hidden w-full px-6 flex justify-between items-center fixed bottom-0 bg-white shadow-md z-50 py-3">
        <button onClick={()=>navigate('/')} class='flex cursor-pointer flex-col gap-y-1 items-center '>{icons.glav}<span class="text-xs">Главная</span></button>
        <button class="flex cursor-pointer flex-col gap-y-1 items-center ">{icons.katalog}<span class="text-xs ">Каталог</span></button>
        <button onClick={()=>navigate('/Basket')} class="flex cursor-pointer flex-col gap-y-1 items-center ">{icons.korzina}<span class="text-xs ">Корзина</span></button>
        <button class="flex cursor-pointer flex-col gap-y-1 items-center ">{icons.izbran}<span class="text-xs ">Избранные</span></button>
        <button onClick={()=>navigate('/Signin')} class="flex cursor-pointer flex-col gap-y-1 items-center ">{icons.voyte}<span class="text-xs ">Войти</span></button>
      </div>

    </div>
  );
}

export default Header;
