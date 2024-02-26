import React from "react";
import { icons } from "../utilits/icons";
import { Partnyor, buyers, company, networks } from "../utilits/footermenu";
import { Link } from "react-router-dom";
import BuyerAccordion from "../Footermenu/BuyerAccordion";
import Partniyor from "../Footermenu/Partniyor";
import Company from "../Footermenu/Company";
import ContactAccordion from "../Footermenu/ContactAccordion";
import Networks from "../Footermenu/Networks";

function Footer() {
  return (
    <div className=" m-auto bg-Cwhite lg:pt-[50px] lg:flex justify-around pb-20">
      <div className="md:hidden block">
        <BuyerAccordion />
        <Partniyor />
        <Company />
        <ContactAccordion />
        <Networks />
      </div>


      <div className="md:block hidden">
        <h1 className="text-subtitless text-subtitles mb-[30px]">Покупателям</h1>
        {buyers.map((element, value) => {
          return (
            <li className="list-none mb-[15px]" key={value}>
              <Link className="  text-Body text-[#999999] hover:text-Cmain">
                {element.linkName}
              </Link>
            </li>
          );
        })}
      </div>
      <div className="md:block hidden">
        <h1 className="text-subtitless text-subtitles mb-[30px]">Партнёрам</h1>
        {Partnyor.map((element, value) => {
          return (
            <li className="list-none mb-[15px]" key={value}>
              <Link className="  text-Body text-[#999999]  hover:text-Cmain">
                {element.linkName}
              </Link>
            </li>
          );
        })}
      </div>

      <div className="md:block hidden">
        <h1 className="text-subtitless text-subtitles mb-[30px]">Компания</h1>
        {company.map((element, value) => {
          return (
            <li className="list-none mb-[15px]" key={value}>
              <Link className="  text-Body text-[#999999]  hover:text-Cmain">
                {element.linkName}
              </Link>
            </li>
          );
        })}
      </div>
      <div className="md:block hidden">
        <h1 className="text-subtitless text-subtitles mb-[30px]">Контакты</h1>
        <p className="text-Body text-[#999999] mb-[15px]  hover:text-Cmain">
          Г. Ташкент, Юнусабадский р.
          <br /> ул.Юнус Раджаби дом а16
        </p>
        <p className="text-Body text-[#999999] mb-[15px]  hover:text-Cmain ">+998 99 123 45 67</p>
        <p className="text-Body text-[#999999] mb-[15px]  hover:text-Cmain">help@mail.uz</p>
      </div>
      <div className="md:block hidden">
        <h1 className="text-subtitless text-subtitles mb-[30px]">
          Социальные сети
        </h1>
        <div className="flex  items-center">
          {networks.map((element, value) => {
            return (
              <li
                className="list-none  mr-[30px] p-[10px] border-2 border-solid rounded-[20px] "
                key={value}
              >
                <a href={element.href} target={"blank"} className=" ">
                  {element.icons}
                </a>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
