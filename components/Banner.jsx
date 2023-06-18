import Image from "next/image";
import React from "react";
import bannerImg from "../public/assets/banner.png";
import Reval from "./Reval";
const Banner = () => {
  return (
    <Reval>
      <div className=" banner w-full  flex flex-col justify-center items-center   ">
        <Image
          className="mt-10  w-[100%] h-auto max-w-[1000px]   md:mt-20"
          src={bannerImg}
          alt="banner"
        />
      </div>
    </Reval>
  );
};

export default Banner;
