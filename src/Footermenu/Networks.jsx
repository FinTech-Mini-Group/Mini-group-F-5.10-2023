import React, { useState } from 'react';
// import { FaTelegram, FaInstagram, FaFacebook } from 'react-icons/fa'; // Import your social icons
import { Link } from 'react-router-dom';
import { icons } from '../utilits/icons';
import { networks } from '../utilits/footermenu';

const Networks = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <h1 className='text-subtitle text-subtitles mb-[30px]'>Социальные сети</h1>
      <div className='flex items-center'>
        {networks.map((element, index) => (
          <div
            key={index}
            className='list-none mr-[30px] p-[10px] border-2 border-solid rounded-[20px]'
          >
            <div onClick={() => toggleAccordion(index)}>
              {element.icons}
            </div>
            {activeIndex === index && (
              <Link href={element.href} className=''>
                {element.icons}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Networks;