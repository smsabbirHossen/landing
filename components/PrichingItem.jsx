import React, { useState } from "react";

const PrichingItem = ({ feature }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-[300px] md:w-[350px]  bg-white border border-gray-300  rounded-[30px] p-10 transition ease-in-out hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] duration-300 delay-700 cursor-pointer ">
      <h3 className="text-[22px] font-medium ">{feature.title}</h3>
      <p className="text-[16px] text-gray-500 mb-7">{feature.subTitle}</p>

      <ul className="flex flex-col gap-4 mb-10">
        {feature.service.map((item, i) => (
          <li
            className={`flex items-center gap-2 text-gray-600 text-[16px] duration-500 delay-${
              i + 3
            }00ms`}
            key={item.id}
          >
            <div className="text-[#EA3A60] text-[25px]">{item.icon}</div>
            {item.name}
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-bold text-[30px] text-center tracking-[1px] mb-4">
          ${feature.price}
          <span className="text-[18px] font-normal text-gray-500 tracking-normal">
            /monthly
          </span>
        </h3>
        <button
          type="button"
          className="px-6 py-4 rounded-full bg-[#EA3A60] text-white text-[18px] font-medium m-auto"
        >
          {feature.text}
        </button>
      </div>
    </div>
  );
};

export default PrichingItem;
