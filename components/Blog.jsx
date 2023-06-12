import Image from "next/image";
import React from "react";

const Blog = ({ blog }) => {
  const { title, image, name, date } = blog;
  return (
    <div className="border border-gray-100   rounded-[20px] bg-white max-w-[350px] transition ease-in-out hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] duration-300">
      <div>
        <Image src={image} className="rounded-t-[20px]" />
      </div>

      <div className="p-5">
        <h3 className="text-[#343D48] font-bold text-[19px] mb-5 capitalize">
          {title}
        </h3>

        <div className="flex justify-between items-center gap-5 ">
          <h3 className="font-semibold text-[16px] text-[#EA3A60]">{name}</h3>
          <p className=" font-medium">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
