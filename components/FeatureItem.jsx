import React from "react";
import Image from "next/image";
import Reval from "./Reval";
const FeatureItem = ({ feature }) => {
  return (
    <Reval>
      <div className="max-w-[350px] p-4">
        <Reval>
          <Image src={feature.image} className="m-auto md:m-0 " />
        </Reval>
        <Reval>
          <h3 className="font-semibold text-[21px] mb-3 text-center md:text-left">
            {feature.title}
          </h3>
        </Reval>
        <Reval>
          <p className="text-[15px] text-center md:text-left font-medium">
            {feature.desc}
          </p>
        </Reval>
      </div>
    </Reval>
  );
};

export default FeatureItem;
