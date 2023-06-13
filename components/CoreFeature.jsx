import Image from "next/image";
import React from "react";
import coreImg from "../public/assets/core.png";
import icon2 from "../public/assets/job.svg";
import icon1 from "../public/assets/subscription.svg";
import { FaPlay } from "react-icons/fa";
import PlayButton from "../public/assets/playButton.gif";
import FeatureItem from "./FeatureItem";
const data = [
  {
    id: 1,
    title: "Smart Features",
    desc: "Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.",
    image: icon1,
  },
  {
    id: 2,
    title: "Secure Contents",
    desc: "Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.",
    image: icon2,
  },
];
const CoreFeature = () => {
  return (
    <section className=" md:flex    justify-between items-center mt-10 mb-10 overflow-hidden">
      <div className=" w-[100%] md:w-[80%] h-[100%] p-4 ">
        <div>
          <p className="text-sm text-center font-medium text-red-400 uppercase  tracking-widest md:text-left">
            CORE FEATURES
          </p>
          <h2 className="text-3xl font-semibold text-black mb-5 text-center md:text-left xl:text-4xl xl:font-bold tracking-[1.1px] ">
            Smart Jackpots that you may love this anytime & anywhere
          </h2>
          <p className=" text-[18px] leading-7 tracking-normal mb-5 text-center md:text-left">
            Get your tests delivered at let home collect sample from the victory
            of the managements that supplies best design system guidelines ever.
          </p>
          <button type="button" className="black_btn m-auto md:m-0">
            Get Started
          </button>
        </div>
      </div>
      <div className="coreImg w-[100%] h-[100%] relative">
        <Image className="w-[100%] h-[100%] " src={coreImg} />
      </div>
    </section>
  );
};

export default CoreFeature;
