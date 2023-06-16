import React, { useState } from "react";
import Reval from "./Reval";

const PrichingItem = ({ feature }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-[300px] md:w-[350px]  bg-white border border-gray-300  rounded-[30px] p-10 transition ease-in-out hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] duration-300 delay-700 cursor-pointer ">
      <Reval>
        <h3 className="text-[22px] font-medium ">{feature.title}</h3>
      </Reval>
      <Reval>
        <p className="text-[16px] text-gray-500 mb-7">{feature.subTitle}</p>
      </Reval>

      <Reval>
        <ul className="flex flex-col gap-4 mb-10">
          {feature.service.map((item, i) => (
            <Reval>
              <li
                className={`flex items-center gap-2 text-gray-600 text-[16px]`}
                key={item.id}
              >
                <div className="text-[#EA3A60] text-[25px]">{item.icon}</div>
                {item.name}
              </li>
            </Reval>
          ))}
        </ul>
      </Reval>
      <Reval>
        <div className="flex flex-col justify-center items-center">
          <Reval>
            <h3 className="font-bold text-[30px] text-center tracking-[1px] mb-4">
              ${feature.price}
              <span className="text-[18px] font-normal text-gray-500 tracking-normal">
                /monthly
              </span>
            </h3>
          </Reval>

          <Reval>
            <div className="flex justify-center items-center">
              <button
                type="button"
                className="px-6 py-4 rounded-full bg-[#EA3A60] text-white text-[18px] font-medium "
              >
                {feature.text}
              </button>
            </div>
          </Reval>
        </div>
      </Reval>
    </div>
  );
};

export default PrichingItem;
