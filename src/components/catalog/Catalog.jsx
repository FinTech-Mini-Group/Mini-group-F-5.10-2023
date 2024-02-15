import React, { useContext, useEffect } from "react";
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
import { icons } from "../../utilits/icons";
import { useCategorysQuery } from "../../services/categoryApi";
import axios from "axios";
import { BASE_URL } from "../../utilits/constant";
import { useNavigate } from "react-router-dom";
import { Contexts } from "../../context/Contexts";

function Catalog() {
  const { data: categories } = useCategorysQuery();
  console.log(categories);
  const [ctgId, setCtgId] = useState(1);
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
  const navigate = useNavigate();
  const [activeCatalogMenu, setCatalogMenu] = useState("Телефоны и гаджеты");
  const { openCatalog, setCatalog } = useContext(Contexts);
  const [subCtg, setSubCtg] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/app/ctg/${ctgId}/`)
      .then((res) => setSubCtg(res?.data?.Success?.subctg_set))
      .catch((err) => console.log(err));
  }, [ctgId]);
  console.log(subCtg);

  return (
    <>
      <div className="">
        <button
          onClick={() => setCatalog((p) => !p)}
          className="  bg-[#00B709] text-white gap-2 py-2 px-4 rounded-md items-center md:flex hidden"
        >
          {openCatalog ? icons.close : icons.menu}Каталог
        </button>
        {openCatalog && (
          <div className="w-full m-auto bg-white absolute z-50 rounded-[10px] p-0 left-0">
            <div className="flex mb-[100px] container">
              <div className="">
                <ul className="min-w-[18rem] bg-Crect text-Body font-semibold py-6">
                  {categories?.Success?.map((element, value) => {
                    return (
                      <li key={value} onClick={() => setCatalogMenu(element)}>
                        <button
                          onMouseOver={() => setCtgId(element?.id)}
                          onClick={() => {
                            setCatalog(false);
                            navigate("/Subcategory");
                          }}
                          className={
                            "w-full flex items-center justify-between list-none py-5 px-4 mr-5 hover:bg-Cmain hover:text-Cwhites "
                          }
                        >
                          {element.name}{" "}
                          <span className="fill-inherit ">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-red-gray-500"
                            >
                              <path
                                d="M15.6095 13.5731L15.6095 13.573L15.6061 13.5765L9.09337 20.0892C9.02712 20.1489 8.95821 20.17 8.90961 20.17C8.84506 20.17 8.78445 20.1478 8.73316 20.0965C8.63842 20.0017 8.63842 19.8383 8.73316 19.7436L15.2532 13.2236C15.9284 12.5483 15.9284 11.4517 15.2532 10.7765L8.73316 4.25647C8.63842 4.16173 8.63842 3.99831 8.73316 3.90357C8.8279 3.80884 8.99132 3.80884 9.08606 3.90357L15.6061 10.4236C16.0231 10.8406 16.2596 11.4037 16.2596 12C16.2596 12.6005 16.0303 13.1604 15.6095 13.5731Z"
                                fill="currentColor"
                                stroke="currentColor"
                              />
                            </svg>
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="px-14">
                <ul className="p-10">
                  {/* {subCtg &&
                    subCtg?.map((item, index) => (
                      <li className="my-6 text-Body text-xl">{item.name}</li>
                    ))} */}
                  {subCtg?.map((element, index) => (
                    <li>{element.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Catalog;
