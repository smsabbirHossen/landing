import React from "react";
import { AiFillStar } from "react-icons/ai";
const start = [1, 2, 3, 4, 5];
import Image from "next/image";
import Reval from "./Reval";
const TestimonialItem = ({ testimonial }) => {
  const { title, description, person, name, gmail } = testimonial;
  return (
    <div className="border border-gray-100 p-12 m-auto  rounded-[20px] bg-white max-w-[320px] lg:max-w-[350px] transition ease-in-out hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] duration-300 ">
      <Reval>
        <div className="flex gap-2  items-center mb-5">
          {start.map((item) => (
            <AiFillStar size={20} className="text-[#EA3A60]" key={item} />
          ))}
        </div>
      </Reval>
      <div className="mb-5">
        <Reval>
          <h3 className="text-[#343D48] font-bold text-[16px]">{title}</h3>
        </Reval>
        <Reval>
          <p className="text-gray-500  text-[15px] leading-[30px]">
            {description}
          </p>
        </Reval>
      </div>
      <Reval>
        <div className="flex justify-start items-center gap-5">
          <Image
            src={person}
            className="w-[50px] h-[50px]"
            alt="testominalImg"
          />

          <div>
            <Reval>
              <h3 className="font-semibold text-[16px]">{name}</h3>

              <p className="text-[#EA3A60] font-medium">{gmail}</p>
            </Reval>
          </div>
        </div>
      </Reval>
    </div>
  );
};

export default TestimonialItem;
