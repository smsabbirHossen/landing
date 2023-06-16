"use client";
import React, { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import SectionHeader from "./SectionHeader";
import PrichingItem from "./PrichingItem";
import Reval from "./Reval";
const monthlyData = [
  {
    id: "1",
    title: "Free Plan",
    subTitle: "For Small teams or office",
    service: [
      { id: 1, name: "Drag & Drop Builder", icon: <IoIosCheckmarkCircle /> },
      { id: 2, name: " 1,000's of Templates", icon: <IoIosCheckmarkCircle /> },
      { id: 3, name: "Blog Support Tools", icon: <IoIosCheckmarkCircle /> },
      { id: 4, name: "Ecommerce store", icon: <IoIosCheckmarkCircle /> },
    ],
    price: 0,
    text: " Start Free Trial",
  },
  {
    id: "2",
    title: "Free Plan",
    subTitle: "For Small teams or office",
    service: [
      { id: 1, name: "Drag & Drop Builder", icon: <IoIosCheckmarkCircle /> },
      { id: 2, name: " 1,000's of Templates", icon: <IoIosCheckmarkCircle /> },
      { id: 3, name: "Blog Support Tools", icon: <IoIosCheckmarkCircle /> },
      { id: 4, name: "Ecommerce store", icon: <IoIosCheckmarkCircle /> },
    ],
    price: 15,
    text: "Create Account",
  },
  {
    id: "3",
    title: "Free Plan",
    subTitle: "For Small teams or office",
    service: [
      { id: 1, name: "Drag & Drop Builder", icon: <IoIosCheckmarkCircle /> },
      { id: 2, name: " 1,000's of Templates", icon: <IoIosCheckmarkCircle /> },
      { id: 3, name: "Blog Support Tools", icon: <IoIosCheckmarkCircle /> },
      { id: 4, name: "Ecommerce store", icon: <IoIosCheckmarkCircle /> },
    ],
    price: 24,
    text: "Create Account",
  },
];
const annualData = [
  {
    id: "1",
    title: "Business king",
    subTitle: "For Enterprise business  ",
    service: [
      { id: 1, name: "Drag & Drop Builder", icon: <IoIosCheckmarkCircle /> },
      { id: 2, name: " 1,000's of Templates", icon: <IoIosCheckmarkCircle /> },
      { id: 3, name: "Blog Support Tools", icon: <IoIosCheckmarkCircle /> },
      { id: 4, name: "Ecommerce store", icon: <IoIosCheckmarkCircle /> },
    ],
    price: 0,
    text: " Start Free Trial",
  },
  {
    id: "2",
    title: "Pro Master",
    subTitle: "For pro level developers",
    service: [
      { id: 1, name: "Drag & Drop Builder", icon: <IoIosCheckmarkCircle /> },
      { id: 2, name: " 1,000's of Templates", icon: <IoIosCheckmarkCircle /> },
      { id: 3, name: "Blog Support Tools", icon: <IoIosCheckmarkCircle /> },
      { id: 4, name: "Ecommerce store", icon: <IoIosCheckmarkCircle /> },
    ],
    price: 15,
    text: "Create Account",
  },
];
const PrichingFeature = () => {
  const [toggle, setToggle] = useState("monthly");
  const handelTab = (tabs) => {
    setToggle(tabs);
  };
  return (
    <section className="mt-10 overflow-hidden md:mb-10  " id="priceing">
      <Reval>
        <SectionHeader
          title="Choose your pricing policy"
          subTitle="PRICING PLAN"
        />
      </Reval>

      <div className="w-[300px] h-[60px] bg-gray-200 flex justify-center items-center gap-5 mb-10  rounded-md m-auto  ">
        <button
          type="button"
          className={
            toggle === "monthly"
              ? "font-medium text-[16px] px-5 py-3 rounded-md activeBtn"
              : "font-medium text-[16px] px-5 py-3 rounded-md "
          }
          onClick={() => handelTab("monthly")}
        >
          Monthly Plan
        </button>

        <button
          type="button"
          className={
            toggle === "annual"
              ? "font-medium text-[16px] px-5 py-3 rounded-md activeBtn"
              : "font-medium text-[16px] px-5 py-3 rounded-md "
          }
          onClick={() => handelTab("annual")}
        >
          Anual Plan
        </button>
      </div>

      <Reval>
        <div className="w-full flex justify-center items-center gap-8 mb-10 flex-wrap delay-700 ease-in-out duration-300 transition-all ">
          {toggle === "monthly"
            ? monthlyData.map((feature) => (
                <PrichingItem feature={feature} key={feature.id} />
              ))
            : annualData.map((feature) => (
                <PrichingItem feature={feature} key={feature.id} />
              ))}
        </div>
      </Reval>
    </section>
  );
};

export default PrichingFeature;
