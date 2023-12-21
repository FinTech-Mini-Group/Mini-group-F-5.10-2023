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
import rightArrow from "../../assets/icons/arrow-right.svg"
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
  const [activeCatalogMenu,setCatalogMenu] = useState('Телефоны и гаджеты')

  return <div className="container m-auto">
  <div className="flex items-start">
  <div className="mr-[100px]">
    <aside>

    <ul className=" bg-Crect text-Body font-semibold py-6">
    {
      catalogMenu.map((element, value) => {
        return (
          <li  key={value} onClick={() => setCatalogMenu(element)} ><button className={activeCatalogMenu === element ? ' py-4 px-4 flex items-start    hover:bg-Cmain hover:text-Cwhites ' :
          '  py-4 px-4  flex items-start hover:bg-Cmain hover:text-Cwhites '}>{element} <span>{icons.RightArrow}</span></button></li>
          )
        })
      }
        </ul>
    </aside>
      
  </div>
  <div>
    <MobilePhones title={activeCatalogMenu}/>
    <HomeAppliances title={activeCatalogMenu}/>
    <TVs title={activeCatalogMenu}/>
    <ComputerTechnology title={activeCatalogMenu}/>
    <ChildrenProducts title={activeCatalogMenu}/>
    <PhotoVideo title={activeCatalogMenu}/>
    <Electrics title={activeCatalogMenu}/>
    <BeautyHealth title={activeCatalogMenu}/>
    <Sport title={activeCatalogMenu}/>
    <Gaming title={activeCatalogMenu}/>
    <OfficeEquipment title={activeCatalogMenu}/>  
    </div>
      </div>

      </div>;
}

export default Catalog;
