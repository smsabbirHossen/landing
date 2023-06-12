import React from "react";
import Image from "next/image";
const FeatureItem = ({ feature }) => {
  return (
    <div className="max-w-[350px] p-4">
      <Image src={feature.image} className="m-auto md:m-0 " />
      <h3 className="font-semibold text-[21px] mb-3 text-center md:text-left">
        {feature.title}
      </h3>
      <p className="text-[15px] text-center md:text-left font-medium">
        {feature.desc}
      </p>
    </div>
  );
};

export default FeatureItem;
