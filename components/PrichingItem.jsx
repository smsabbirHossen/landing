import React from "react";

const PrichingItem = ({ feature }) => {
  return (
    <div className="w-[350px]  bg-white border border-gray-300 max-w-[500px] rounded-[30px] p-10 hover:drop-shadow-2xl ">
      <h3 className="text-[22px] font-medium ">{feature.title}</h3>
      <p className="text-[16px] text-gray-500 mb-7">{feature.subTitle}</p>

      <ul className="flex flex-col gap-4 mb-10">
        {feature.service.map((item) => (
          <li
            className="flex items-center gap-2 text-gray-600 text-[16px] "
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
