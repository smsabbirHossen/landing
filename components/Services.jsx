"use client";
import Image from "next/image";
import React, { useState } from "react";
import serviceImg from "../public/assets/services.png";
import icon2 from "../public/assets/job.svg";
import icon1 from "../public/assets/subscription.svg";
import { FaPlay } from "react-icons/fa";
import PlayButton from "../public/assets/playButton.gif";
import FeatureItem from "./FeatureItem";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Reval from "./Reval";

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
const Services = () => {
  const [play, setPlay] = useState(false);
  return (
    <section
      id="services"
      className=" md:flex md:flex-row-reverse   justify-between items-center mt-10 mb-10 relative"
    >
      <div className="w-[100%] h-{100%] p-3 xl:p-20">
        <div>
          <Reval>
            <p className="text-sm text-center font-medium text-red-400 uppercase  tracking-widest md:text-left">
              Our Services
            </p>
          </Reval>
          <Reval>
            <h2 className="text-3xl font-semibold text-black mb-5 text-center md:text-left xl:text-4xl xl:font-bold">
              Business Goals Achieved with Design
            </h2>
          </Reval>
        </div>
        <div>
          {data.map((feature) => (
            <Reval>
              <div
                className="max-w-[450px] py-4 xl:p-4 flex gap-3"
                key={feature.id}
              >
                <Reval>
                  <Image
                    src={feature.image}
                    className="m-auto md:m-0 w-[100px] h-[100px]"
                  />
                </Reval>
                <div>
                  <Reval>
                    <h3 className="font-semibold text-[21px] mb-3text-left">
                      {feature.title}
                    </h3>
                  </Reval>
                  <Reval>
                    <p className="text-[12px]  text-left font-medium xl:text-[14px]">
                      {feature.desc}
                    </p>
                  </Reval>
                </div>
              </div>
            </Reval>
          ))}
        </div>
      </div>
      <Reval>
        <div className="serviceImg w-[100%] h-[100%] relative">
          <div className="absolute flex w-[80px] h-[80px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
            <button class="animate-ping relative inline-flex h-full w-full rounded-full bg-[#EA3A60] opacity-75"></button>
            <button
              className=" absolute   inline-flex justify-center items-center  h-[80px] w-[80px] rounded-full bg-white opacity-60 text-[#EA3A60]"
              onClick={() => setPlay((prev) => !prev)}
            >
              <FaPlay size={35} />
            </button>
          </div>
          <Image className="w-[100%] h-[100%] " src={serviceImg} />
        </div>
      </Reval>
      {play && (
        <Reval>
          <div className="  w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:w-[900px] p-5 mt-3  fixed  z-10 overflow-hidden">
            <button
              type="button "
              className="w-[50px] h-[50px] bg-[#EA3A60] rounded-full z-10 absoluet top-0 right-0 text-white font-bold text-[30px]  flex justify-center items-center "
              onClick={() => setPlay((prev) => !prev)}
            >
              <AiOutlineCloseCircle />
            </button>
            <iframe
              width="100%"
              class="aspect-video overflow-hidden "
              src="https://www.youtube-nocookie.com/embed/6O4s7v28nlw"
              title="Some video title"
              frameborder=""
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Reval>
      )}
    </section>
  );
};

export default Services;
