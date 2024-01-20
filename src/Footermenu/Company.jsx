import React, { useState } from 'react';
import { company } from '../utilits/footermenu';
import { Link } from 'react-router-dom';
import { icons } from '../utilits/icons';

function Company() {
  const [accordionOpen, setAccordionOpen] = useState(null);

  const toggleAccordion = (index) => {
    setAccordionOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='md:hidden lg:block '>
      <h1 className=' py-2 px-4 rounded-[10px] border-2 flex items-center text-subtitle text-subtitles mb-[30px] cursor-pointer' onClick={() => toggleAccordion(0)}>
      Компания <span>{icons.bottom}</span>
      </h1>
      {company.map((element, index) => (
        <div key={index} className={`mb-4 ${accordionOpen === 0 ? '' : 'hidden'}`}>
          <Link to={element.slug} className=' md:hidden lg:block block text-Body text-[#999999] mb-[15px]'>
            {element.linkName}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Company;