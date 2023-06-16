import React from "react";
import Reval from "./Reval";

const Subscribe = () => {
  return (
    <section
      id="contact"
      className="bg-[#EA3A60] rounded-[20px] p-10 w-full overflow-hidden"
    >
      <div className="max-w-[500px] m-auto">
        <Reval>
          <h2 className="font-bold text-[25px] text-white text-center mb-5">
            Subscribe to our Blog
          </h2>
        </Reval>
        <Reval>
          <p className="text-white text-[18px] text-center leading-[25px] mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod
            tempor incididunt labore dolore.
          </p>
        </Reval>

        <Reval>
          <div className=" flex flex-col gap-5 md:flex-row justify-between items-center md:bg-white rounded-[30px] p-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-10  focus:outline-none border-0  p-3 placeholder:text-[#EA3A60] font-medium bg-white rounded-[30px]"
            />

            <button className="bg-black md:bg-[#EA3A60] text-white px-7 py-3 rounded-[25px] text-[16px] font-medium  ">
              Subscribe
            </button>
          </div>
        </Reval>
      </div>
    </section>
  );
};

export default Subscribe;
