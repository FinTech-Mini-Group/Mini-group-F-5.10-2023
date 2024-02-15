import React from "react";

import Decoration from "../pages/Decoration";
import Order from "../pages/Order";
import Oplaty from "../pages/Payments";
import Total from "../pages/Total";

function Zakaz() {


  return (
    <>
      <div className="lg:flex justify-center w-full m-auto container">
        <div className="p-5 border-2 border-solid rounded-[10px]  lg:mr-[30px] lg:w-[70%]">
          <Decoration />
          <Order />
          <Oplaty />
        </div>
        <div className="lg:w-[30%] lg:h-fit">
          <Total />
        </div>
      </div>
    </>
  );
}

export default Zakaz;
