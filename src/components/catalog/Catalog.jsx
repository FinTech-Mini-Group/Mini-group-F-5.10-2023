import React, { useEffect } from "react";
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



function Catalog() {

  const {data:categories}=useCategorysQuery()
  console.log(categories)
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

      </div>
    </>
  );
}

export default Catalog;
