import React, { useState } from 'react';
import { icons } from '../utilits/icons';

const ContactAccordion = () => {
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  return (
    <div>
      <h1 className=' py-2 px-4 rounded-[10px] border-2  flex items-center text-subtitle text-subtitles mb-[30px]' onClick={toggleAccordion}>
        Контакты <span>{icons.bottom}</span>
      </h1>
      {isAccordionOpen && (
        <div>
          <p className='text-Body text-[#999999] mb-[15px] '>Г. Ташкент, Юнусабадский р.<br/> ул.Юнус Раджаби дом а16</p>
          <p className='text-Body text-[#999999] mb-[15px] '>+998 99 123 45 67</p>
          <p className='text-Body text-[#999999] mb-[15px] '>help@mail.uz</p>
        </div>
      )}
    </div>
  );
};

export default ContactAccordion;