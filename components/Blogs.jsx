import React from "react";
import SectionHeader from "./SectionHeader";
import person1 from "../public/assets/person1.jpg";
import person2 from "../public/assets/person2.jpg";
import person3 from "../public/assets/person3.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Blog from "./Blog";
import Reval from "./Reval";

const blogData = [
  {
    id: 1,
    image: person1,
    title: "Product Merketing :Creative Market",
    name: "James Carter",
    date: "Oct 20,2022",
  },
  {
    id: 2,
    image: person2,
    title: "Product Merketing :Startup Product sales",
    name: "James Carter",
    date: "Oct 20,2022",
  },
  {
    id: 3,
    image: person3,
    title: "Product Merketing :Creative Market",
    name: "James Carter",
    date: "Oct 20,2022",
  },
];
const Blogs = () => {
  return (
    <section className="mt-10" id="blogs">
      <Reval>
        <SectionHeader
          title="Explore our products for your business solution"
          subTitle="OUR BLOG"
        />
      </Reval>
      <Reval>
        <div className="flex justify-center items-center gap-7 mb-10 flex-wrap">
          {blogData.map((blog) => (
            <Blog key={blog} blog={blog} />
          ))}
        </div>
      </Reval>
      <Reval>
        <div className="flex justify-center items-center gap-10 mb-10">
          <button type="button">
            <AiOutlineArrowLeft
              className="text-gray-500 font-bold "
              size={25}
            />
          </button>

          <button>
            <AiOutlineArrowRight
              className="text-gray-500 font-bold "
              size={25}
            />
          </button>
        </div>
      </Reval>
    </section>
  );
};

export default Blogs;
