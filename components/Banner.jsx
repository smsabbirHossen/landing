import Image from "next/image";
import React from "react";
import bannerImg from "../public/assets/banner.png";
const Banner = () => {
  return (
    <div className=" banner overflow-hidden ">
      <Image className="mt-20 overflow-hidden" src={bannerImg} />
    </div>
  );
};

export default Banner;
