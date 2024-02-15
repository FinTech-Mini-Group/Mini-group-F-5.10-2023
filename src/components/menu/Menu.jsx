import React, { useContext } from "react";
import { icons } from "../../utilits/icons";
import { useNavigate } from "react-router-dom";
import { Contexts } from "../../context/Contexts";

function Menu() {
  const navigate = useNavigate();
  const { openCatalog, setCatalog } = useContext(Contexts);

  return (
    <div className="md:hidden w-full px-6 flex justify-between items-center fixed bottom-0 bg-white shadow-md z-50 py-3">
      <button
        onClick={() => navigate("/")}
        className="flex cursor-pointer flex-col gap-y-1 items-center "
      >
        {icons.glav}
        <span className="text-xs">Главная</span>
      </button>
      <button
        onClick={() => setCatalog((p) => !p)}
        className="flex cursor-pointer flex-col gap-y-1 items-center "
      >
        {icons.katalog}
        <span className="text-xs ">Каталог</span>
      </button>
      <button
        onClick={() => navigate("/Basket")}
        className="flex cursor-pointer flex-col gap-y-1 items-center "
      >
        {icons.korzina}
        <span className="text-xs ">Корзина</span>
      </button>
      <button className="flex cursor-pointer flex-col gap-y-1 items-center ">
        {icons.izbran}
        <span className="text-xs ">Избранные</span>
      </button>
      <button
        onClick={() => navigate("/Signin")}
        className="flex cursor-pointer flex-col gap-y-1 items-center "
      >
        {icons.voyte}
        <span className="text-xs ">Войти</span>
      </button>
    </div>
  );
}

export default Menu;
