import React from 'react';
import oneimg from '../../assets/Favoriteimg.png';
import twoimg from '../../assets/Favo.png';
import { icons } from '../../utilits/icons';

const Favoriteproduct = [
  { img: oneimg, title: 'Macbook Pro 13 inch 2021 M1', price: 5346790 },
  { img: twoimg, title: 'Холодильник Samsung ART RB-31FERNDWW', price: 1060457 },
];

function Favorites(props) {
  return (
    <div className={props.title === 'Избранное' ? 'block' : 'hidden'}>
      <div className='container m-auto lg:flex gap-8 '>
        {Favoriteproduct.map((element, value) => {
          return (
            <div key={value} className='p-5 bg-[#ECECEC] rounded-[5px]'>
              <img src={element.img} alt="" />
              <h1 className='my-3 text-Body'>{element.title.slice(0,20)}</h1>
              <p className='text-subtitless text-Cmain mb-5'>{element.price} <span className='pl-[8px]'>сум</span> </p>
              <button className=" flex p-[8px] rounded-[4px] bg-bgmain"
                    >
                      {icons.shoppingcart}
                      <span className="ml-[10px] text-Bold text-white ">
                        В корзину
                      </span>
                    </button>  
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;