"use client";
import React, { useRef } from "react";
import SectionHeader from "./SectionHeader";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const testimonialData = [
  {
    id: 1,
    title: "Modern look & trending design",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    person: people02,
    name: "Sabbir Hossain",
    gmail: "@gmail.com",
    rateing: 4,
  },
  {
    id: 2,
    title: "Modern look & trending design",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    person: people02,
    name: "Sabbir Hossain",
    gmail: "@gmail.com",
    rateing: 5,
  },
  {
    id: 3,
    title: "Modern look & trending design",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    person: people02,
    name: "Sabbir Hossain",
    gmail: "@gmail.com",
    rateing: 5,
  },
  {
    id: 4,
    title: "Modern look & trending design",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    person: people02,
    name: "Sabbir Hossain",
    gmail: "@gmail.com",
    rateing: 4,
  },
  {
    id: 5,
    title: "Modern look & trending design",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    person: people02,
    name: "Sabbir Hossain",
    gmail: "@gmail.com",
    rateing: 5,
  },
  {
    id: 6,
    title: "Modern look & trending design",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    person: people02,
    name: "Sabbir Hossain",
    gmail: "@gmail.com",
    rateing: 5,
  },
];
import { people02 } from "@/public/assets";
import TestimonialItem from "./TestimonialItem";
import Reval from "./Reval";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const Testimonial = () => {
  const sliderRef = useRef(null);

  return (
    <section className="w-full mt-10" id="client">
      <Reval>
        <SectionHeader
          title="Meet Client Satisfaction"
          subTitle="TESTIMONIAL"
        />
      </Reval>

      <Slider
        {...settings}
        ref={sliderRef}
        className="flex justify-center items-center  mb-10 flex-wrap"
      >
        {testimonialData.map((testimonial) => (
          <TestimonialItem key={testimonial.id} testimonial={testimonial} />
        ))}
      </Slider>

      <Reval>
        <div className="flex justify-center items-center gap-10 mb-10 mt-10">
          <button type="button" onClick={() => sliderRef.current.slickPrev()}>
            <AiOutlineArrowLeft
              className="text-gray-500 font-bold "
              size={25}
            />
          </button>

          <button onClick={() => sliderRef.current.slickNext()}>
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

export default Testimonial;
