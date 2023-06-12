import React from "react";
import SectionHeader from "./SectionHeader";
import icon1 from "../public/assets/power.svg";
import icon2 from "../public/assets/job.svg";
import icon3 from "../public/assets/subscription.svg";
import icon4 from "../public/assets/support.svg";
import Image from "next/image";
import FeatureItem from "./FeatureItem";
const data = [
  {
    id: 1,
    title: "Fast Performance",
    desc: "Get your blood tests delivered at home collect a sample from the your blood tests.",
    image: icon1,
  },
  {
    id: 2,
    title: "Partnership deal",
    desc: "Get your blood tests delivered at home collect a sample from the your blood tests.",
    image: icon2,
  },
  {
    id: 3,
    title: "Pro Subscription",
    desc: "Get your blood tests delivered at home collect a sample from the your blood tests.",
    image: icon3,
  },
  {
    id: 4,
    title: "Customer Support",
    desc: "Get your blood tests delivered at home collect a sample from the your blood tests.",
    image: icon4,
  },
];
const KeyFeature = () => {
  return (
    <div className="mt-10 mb-10">
      <SectionHeader
        title="Meet the feature of product"
        subTitle="WHATS THE FUNCTION"
      />
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {data.map((feature) => (
          <FeatureItem key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default KeyFeature;
