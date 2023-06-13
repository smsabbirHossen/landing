"use client";
import React from "react";
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
];
import { people02 } from "@/public/assets";
import TestimonialItem from "./TestimonialItem";
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
};
const Testimonial = () => {
  return (
    <section className="w-full mt-10" id="client">
      <SectionHeader title="Meet Client Satisfaction" subTitle="TESTIMONIAL" />

      <div className="w-full flex justify-center items-center gap-10 mb-10 flex-wrap  ">
        {testimonialData.map((testimonial) => (
          <TestimonialItem key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-10 mb-10">
        <button type="button">
          <AiOutlineArrowLeft className="text-gray-500 font-bold " size={25} />
        </button>
        <button>
          <AiOutlineArrowRight className="text-gray-500 font-bold " size={25} />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
