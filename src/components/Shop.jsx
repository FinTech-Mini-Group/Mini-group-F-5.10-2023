import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utilits/constant";
import Products from "../pages/Product";
import { icons } from "../utilits/icons";

function Shop() {
  const [shop, setShop] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    axios
      .get(`${BASE_URL}/app/part/`)
      .then((res) => {
        setShop(res?.data?.Success || []);
        setIsLoading(false);
        console.log(res.data)
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const displayedItems = shop.slice(firstItemIndex, lastItemIndex);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1 className="text-subtitle mt-[60px] mb-[30px]">
        Этот товар в других магазинах
      </h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        displayedItems.map((element, index) => (
          <div key={index} className="flex items-start gap-6 mb-5 ">
            <h1 className="text-Bodybold w-[500px] ">{element.title}</h1>
            <p className="text-Bodybold mr-[50px] ">22 900 000 сум</p>
            <button className="py-2 px-4 bg-bgmain rounded-[4px] text-Body text-Cwhite ">
              Посмотреть
            </button>
            
          </div>
        ))}
      <p className="border-[1px] border-solid border-[#ECECEC] w-[1000px] my-[18px]"></p>

      <ul className="flex gap-6 justify-start">
        {[...Array(Math.ceil(shop.length / itemsPerPage)).keys()].map(
          (pageNumber) => (
            <li className=" py-2 px-4 border-2  rounded-[4px] hover:bg-Cmain hover:text-Cwhite" key={pageNumber} onClick={() => handlePageClick(pageNumber + 1)}>
              {pageNumber + 1}
            </li>
          )
        )}
      </ul>

      <div className="flex justify-between">
        <h2 className="text-subtitle ">Похожие товары</h2>
        <div>
        <button className="p-2  rounded-[4px]  bg-[#6EFF75] ">
            {icons.arrowl}
          </button>
          <button className="p-2  rounded-[4px]  bg-[#6EFF75] ml-5">
            {icons.arrowr}
          </button>
        </div>
      </div>
      <Products/>
    </div>
  );
}

export default Shop;