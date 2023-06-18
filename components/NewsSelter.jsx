import React from "react";
import join from "../public/assets/join.svg";
import github from "../public/assets/github.svg";
import chat from "../public/assets/chat.svg";
import Image from "next/image";
import Reval from "./Reval";
const newsSelterData = [
  {
    id: 1,
    title: "Join the Community",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.",
    image: join,
  },
  {
    id: 2,
    title: "Chat communication",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.",
    image: chat,
  },
  {
    id: 3,
    title: "Github Acess",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.",
    image: github,
  },
];
const NewsSelter = () => {
  return (
    <section className="mt-20">
      <Reval>
        <div className="flex justify-center items-center gap-7 mb-10 flex-wrap ">
          {newsSelterData.map((news) => (
            <div
              className="flex flex-col justify-center items-center max-w-[300px] p-5"
              key={news.id}
            >
              <Reval>
                <Image
                  src={news.image}
                  className="w-[50px] h-[50px] mb-7 m-auto"
                  alt="newsImg"
                />
              </Reval>
              <Reval>
                <h3 className="font-bold text-[18px] text-[#0F2137] mb-3 text-center">
                  {news.title}
                </h3>
              </Reval>
              <Reval>
                <p className="text-[16px] leading-[25px] text-gray-600 text-center">
                  {news.desc}
                </p>
              </Reval>
            </div>
          ))}
        </div>
      </Reval>
    </section>
  );
};

export default NewsSelter;
