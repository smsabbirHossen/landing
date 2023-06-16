import React from "react";
import Reval from "./Reval";

const SectionHeader = ({ title, subTitle }) => {
  return (
    <div className="container flex flex-col justify-center mb-10 max-w-[500px] m-auto">
      <Reval>
        <p className="text-sm font-medium text-red-400 uppercase text-center tracking-widest">
          {subTitle}
        </p>
      </Reval>
      <Reval>
        <h2 className="text-3xl font-bold text-black text-center ">{title}</h2>
      </Reval>
    </div>
  );
};

export default SectionHeader;
