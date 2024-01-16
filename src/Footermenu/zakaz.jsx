import React from "react";

import Decoration from "../pages/Decoration";
import Order from "../pages/Order";
import Oplaty from "../pages/Payments";
import Total from "../pages/Total";

function Zakaz() {


  return (
    <>
      <div className="flex justify-center w-full m-auto container">
        <div className="p-5 border-2 border-solid rounded-[10px]  mr-[30px] w-[70%]">
          <Decoration />
          <Order />
          <Oplaty />
        </div>
        <div className="w-[30%] h-fit">
          <Total />
        </div>
      </div>
    </>
  );
}

export default Zakaz;
