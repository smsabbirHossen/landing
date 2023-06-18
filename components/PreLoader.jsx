import Image from "next/image";
import React from "react";
import preloadrImg from "../public/assets/preloader.gif";
const PreLoader = () => {
  return (
    <div className="w-[100%] h-screen overflow-hidden flex justify-center items-center ">
      <Image
        alt="preloaderImg"
        src={preloadrImg}
        className=" overflow-hidden"
      />
    </div>
  );
};

export default PreLoader;
