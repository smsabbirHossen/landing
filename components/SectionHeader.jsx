import React from "react";

const SectionHeader = ({ title, subTitle }) => {
  return (
    <div className="container flex flex-col justify-center mb-10 max-w-[500px] m-auto">
      <p className="text-sm font-medium text-red-400 uppercase text-center tracking-widest">
        {subTitle}
      </p>
      <h2 className="text-3xl font-bold text-black text-center ">{title}</h2>
    </div>
  );
};

export default SectionHeader;
