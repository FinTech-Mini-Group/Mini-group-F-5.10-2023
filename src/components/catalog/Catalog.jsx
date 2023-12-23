import React from "react";
import BeautyHealth from "./BeautyHealth";
import ChildrenProducts from "./ChildrenProducts";
import ComputerTechnology from "./ComputerTechnology";
import Electrics from "./Electrics";
import Gaming from "./Gaming";
import HomeAppliances from "./HomeAppliances";
import MobilePhones from "./MobilePhones";
import OfficeEquipment from "./OfficeEquipment";
import PhotoVideo from "./PhotoVideo";
import Sport from "./Sport";
import TVs from "./TVs";
import { useState } from "react";
import rightArrow from "../../assets/icons/arrow-right.svg";
import { icons } from "../../utilits/icons";

function Catalog() {

  const catalogMenu = [
    "Телефоны и гаджеты",
    "Техника для дома",
    "Телевизоры и телекарты",
    "Офисная техника",
    "Компьютерная техника",
    "Товары для детей",
    "Фото и видео",
    "Электроника",
    "Красота и здоровье",
    "Спорт и увлечение",
    "Игровые приставки",
  ];
  const [activeCatalogMenu, setCatalogMenu] = useState("Телефоны и гаджеты");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="">
        <button
          onClick={() => setIsOpen((p) => !p)}
          className="bg-[#00B709] flex text-white gap-2 py-2 px-4 rounded-md items-center "
        >
          {" "}
          {isOpen ? icons.close : icons.menu}Каталог
        </button>
        {isOpen && (
          <div className="w-full m-auto bg-white absolute z-50 rounded-[10px] p-0 left-0">
            <div className="flex mb-[100px] container">
              <div className="">
                <ul className="min-w-[18rem] bg-Crect text-Body font-semibold py-6">
                  {catalogMenu.map((element, value) => {
                    return (
                      <li key={value} onClick={() => setCatalogMenu(element)}>
                        <button
                          className={
                            "w-full flex items-center justify-between list-none py-5 px-4 mr-5 hover:bg-Cmain hover:text-Cwhites "
                          }
                        >
                          {element}{" "}
                          <img className="inline" src={rightArrow} alt="" />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="px-14">
                <MobilePhones title={activeCatalogMenu} />
                <HomeAppliances title={activeCatalogMenu} />
                <TVs title={activeCatalogMenu} />
                <ComputerTechnology title={activeCatalogMenu} />
                <ChildrenProducts title={activeCatalogMenu} />
                <PhotoVideo title={activeCatalogMenu} />
                <Electrics title={activeCatalogMenu} />
                <BeautyHealth title={activeCatalogMenu} />
                <Sport title={activeCatalogMenu} />
                <Gaming title={activeCatalogMenu} />
                <OfficeEquipment title={activeCatalogMenu} />
              </div>
            </div>
          </div>
        )}
      </div>
      ;
    </>
  );
}

export default Catalog;
