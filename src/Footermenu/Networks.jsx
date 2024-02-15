import React, { useState } from "react";
import { Link } from "react-router-dom";
import { icons } from "../utilits/icons";
import { networks } from "../utilits/footermenu";

const Networks = () => {
  return (
    <div>
      <h1 className="text-subtitle text-subtitles mb-[30px]">
        Социальные сети
      </h1>
      <div className="flex items-center">
        {networks.map((element, index) => (
          <div
            key={index}
            className={`list-none mr-[30px] p-[10px] border-2 border-solid rounded-[20px]`}
          >
            <div>
              <a
                href={element.href}
                rel="noopener noreferrer"
                target="_blank"
                className=""
              >
                {element.icons}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Networks;
