import React from "react";
import SectionHeader from "./SectionHeader";
import icon1 from "../public/assets/power.svg";
import icon2 from "../public/assets/job.svg";
import icon3 from "../public/assets/subscription.svg";
import icon4 from "../public/assets/support.svg";
import Image from "next/image";
import Reval from "./Reval";
const data = [
  {
    id: 1,
    title: "Fast Performance",
    desc: "Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.",
    image: icon1,
  },
  {
    id: 2,
    title: "Partnership deal",
    desc: "Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.",
    image: icon2,
  },
  {
    id: 3,
    title: "Pro Subscription",
    desc: "Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.",
    image: icon3,
  },
  {
    id: 4,
    title: "Customer Support",
    desc: "Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.",
    image: icon4,
  },
];
const Qualitys = () => {
  return (
    <section className="mt-10">
      <Reval>
        <SectionHeader
          title="Amazing useful features"
          subTitle="QUALITY FEATURES"
        />
      </Reval>
      <Reval>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((feature) => (
            <Reval>
              <div
                className="max-w-[550px] py-4 xl:p-4 flex gap-3"
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
                    <h3 className="font-semibold text-[21px] mb-3 text-left">
                      {feature.title}
                    </h3>
                  </Reval>
                  <Reval>
                    <p className="text-left font-medium text-[15px]">
                      {feature.desc}
                    </p>
                  </Reval>
                </div>
              </div>
            </Reval>
          ))}
        </div>
      </Reval>
    </section>
  );
};

export default Qualitys;
