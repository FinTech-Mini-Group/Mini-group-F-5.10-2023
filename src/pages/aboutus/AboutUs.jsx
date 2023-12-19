import React from "react";
import Google from "../../assets/logo/Google.svg";
import amazon from "../../assets/logo/amazon.svg";
import alibaba from "../../assets/logo/alibaba.svg";
import wildb from "../../assets/logo/wb.svg";
import mediap from "../../assets/logo/mp.svg";
import zara from "../../assets/logo/zara.svg";
import telgram from "../../assets/newsicon/image 23.svg";
import delivery from "../../assets/newsicon/image 24.svg";
import adidas from "../../assets/newsicon/image 25.svg";
import pens from "../../assets/newsicon/Rectangle 661.svg";
import instagram from "../../assets/newsicon/image 26.svg";


function AboutUs() {
  return (
    <div className="container m-auto">
      <div className="mx-[60px] my-[50px] ">
        <h1 className="py-2 pl-10 font-rl text-subtitle">О нас</h1>
        <div className="px-[100px]">
          <div className="bg-computer-image bg-cover  h-[680px] pt-25 mt-[30px]">
            <h2 className="text-white font-rl pt-[100px] pl-[100px] text-[24px]  ">
              Мы продаём товары для дома, работы и отдыха. <br />
              Наши клиенты: мелкие и крупные оптовики, <br />
              торговые сети и простые розничные покупатели.
            </h2>
          </div>
        </div>
        <div className=" grid grid-cols-3 gap-[110px] mt-[100px]">
          <div>
            <h1 className="text-TitleBold">Выгодные цены</h1>
            <p  className="text-Body">
              Возможность покупать товары и продукты по <br />
              доступным и популярным ценам. Вы можете делать <br />
              покупки еще дешевле через систему скидок
            </p>
          </div>
          <div>
            <h1 className="text-TitleBold">Поддержка 24/7 </h1>
            <p className="text-Body">
              Быстро отвечаем на звонки в любое время, <br />
              помогаем решать экстренные проблемы с <br />
              оформлением заказа и получением товара.
            </p>
          </div>
          <div>
            <h1 className="text-TitleBold">Большой ассортимент</h1>
            <p className="text-Body">
              Вы можете найти и заказать более 1000 видов <br />
              товаров и продуктов и десятки тысяч довольных <br />
              клиентов на нашей торговой площадке Milli
            </p>
          </div>
        </div>
      </div>
      <div className="mx-[100px]">
        <h1 className="text-TitleBold">Наши партнеры</h1>
        <div className=" mt-[35px] grid grid-cols-6 gap-[30px] ">
          <div className="bg-white flex items-center justify-center py-[93px] border border-bggrey rounded-[10px]">
            <img src={Google} alt="" />
          </div>
          <div className="bg-white flex items-center justify-center border border-bggrey rounded-[10px]">
            <img src={amazon} alt="" />
          </div>
          <div className="bg-white flex items-center justify-center border border-bggrey rounded-[10px]">
            <img src={alibaba} alt="" />
          </div>
          <div className="bg-white flex items-center justify-center border border-bggrey rounded-[10px]">
            <img src={wildb} alt="" />
          </div>
          <div className="bg-white flex items-center justify-center border border-bggrey rounded-[10px]">
            <img src={mediap} alt="" />
          </div>
          <div className="bg-white flex items-center justify-center border border-bggrey rounded-[10px]">
            <img src={zara} alt="" />
          </div>
        </div>
      </div>
      <div></div>
      <div className="m-[100px]">
        <h1 className="text-TitleBold">Новости</h1>
        
        <div className=" mt-[35px] grid grid-cols-5 gap-[30px] ">
          <div>
            <div className="bg-white flex items-center justify-center py-[41px] border border-bggrey rounded-[10px]">
               <img src={telgram} alt="" />
            </div>
            <p className="text-subtitle text-center">Мы запустили <br /> телеграм канал</p>
            
            </div>
            <div>
            <div className="bg-white flex items-center justify-center py-[41px] border border-bggrey rounded-[10px]">
               <img src={delivery} alt="" />
            </div>
            <p className="text-subtitle text-center">Доставка по всему <br /> Узбекистану</p>
            </div>
            <div>
             <div className="bg-white flex items-center justify-center py-[70px] border border-bggrey rounded-[10px]">
               <img src={adidas} alt="" />
             </div>
             <p className="text-subtitle text-center">Меморандум с ADIDAS</p>
            </div>
            <div>
            <div className="bg-white flex items-center justify-center border border-bggrey rounded-[10px]">
               <img src={pens} alt="" />
            </div>
            <p className="text-subtitle text-center">Школьный сесон открыт</p>
            </div>
            <div>
            <div className="bg-white flex items-center justify-center py-[41px] border border-bggrey rounded-[10px]">
               <img src={instagram} alt="" />
            </div>
            <p className="text-subtitle text-center">Мы теперь в инстаграм</p>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
