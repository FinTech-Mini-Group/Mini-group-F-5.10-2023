import React from "react";
import HeaderTop from "./HeaderTop";
import logo from "../../assets/logo/LOGO.svg";
import menu from "../../assets/icons/menu.svg";
import search from "../../assets/icons/search-normal.svg";
import percent from "../../assets/icons/percentage-square.svg";
import heart from "../../assets/icons/heart.svg";
import cart from "../../assets/icons/shopping-cart.svg";
import profile from "../../assets/icons/profile-circle.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate=useNavigate();
  
  return (
    <div>
      <HeaderTop />
      <div className="border-t-2 font-rl border-[#999999] flex items-center justify-between px-10 py-1 ">
        <img onClick={()=>navigate("/")} src={logo} alt="" />
        <button onClick={()=>navigate("/Catalog")} className="bg-[#00B709] flex text-white gap-2 py-2 px-4 rounded-md items-center">
          <img src={menu} alt="" /> Каталог
        </button>
        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <input
              type="search"
              id="default-search"
              class="block w-[574px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:placeholder-gray-400 dark:text-white outline-none"
              placeholder="Поиск товаров"
              required
            />
            <div class="absolute inset-y-0 right-0  flex items-center pr-3 pointer-events-none">
              <img src={search} alt="" />
            </div>
          </div>
        </form>
        <div className="flex gap-5">
          <div className="flex gap-2 px-2 py-4 list-none">
            <img src={percent} />
            <li>Акции</li>
          </div>
          <div className="flex gap-2 px-2 py-4 list-none">
            <img src={heart} />
            <li>Избранные</li>
          </div>
          <div className="flex gap-2 px-2 py-4 list-none">
            <img src={cart} />
            <li>Корзинка</li>
          </div>
          <button className="border-2 border-[#00B709] p-1 rounded-md text-[#00B709] flex gap-2  items-center">
            <img src={profile} alt="" />
            Профиль
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
