import React from "react";
import Image from "next/image";
import HeroCard from "../Common/HeroCard";
import { HeroCardIcon, ContactFeatureVector01 } from "@/constant/icons";
import GateStartedInput from "../Common/GateStartedInput";
import FeatureTitleTag from "../FeatureTitleTag";

const HeroFeatureContact = () => {
  const data = [
    {
      id: 1,
      icon: HeroCardIcon,
      title: "Seamless Organization",
      description: "Effortlessly manage and categorize customer data.",
      borderColor: "border-yellow_600",
      iconColor: "fill-yellow_700",
    },
    {
      id: 2,
      icon: HeroCardIcon,
      title: "Centralized View",
      description:
        "Access complete contact history for personalized interactions.",
      borderColor: "border-aero_blue",
      iconColor: "fill-aero_blue",
    },
    {
      id: 3,
      icon: HeroCardIcon,
      title: "Streamlined Workflow",
      description:
        "Easily update, filter, and assign contacts for better management.",
      borderColor: "border-pale_cyan",
      iconColor: "fill-pale_cyan",
    },
  ];
  return (
    <>
      <div className="w-full bg-gradient-light-red h-auto xl:h-[890px] p-10 pt-[130px] lg:pt-[210px] relative">
        <div className="max-w-[1490px] w-full mx-auto h-full">
          <div className="w-full text-center flex flex-col h-full">
            <div className="w-full">
              <FeatureTitleTag text="Contact Management" />
              <h2 className="3xl:text-64 md:text-5xl text-4xl text-dark text-center font-bold 3xl:leading-[80px] font-lexend">
                Optimize
                <span className="text-transparent bg-clip-text bg-gradient-text-stremline">
                  Customer Engagement
                </span>{" "}
                and Enhance Productivity
              </h2>
              <p className="text-dark text-xl md:text-3xl text-center mt-3">
                Boost Conversions by Leveraging Customer Insights
              </p>
            </div>
            <GateStartedInput />
            <div className="inline-flex border px-3 py-2.5 rounded-md bg-white mt-5 mx-auto">
              <Image
                src="/images/logo/meta_tech_provider_logo.svg"
                alt="logo"
                width={92}
                height={36}
              />
            </div>
          </div>
        </div>
        <span className="absolute top-20 md:top-0 right-0 w-[10vw]">
          <ContactFeatureVector01 />
        </span>
      </div>
      <div className="w-full xl:-mt-[185px] relative pt-10 p-5 md:px-0 xl:pt-0">
        <div className="flex flex-row 3xl:flex-nowrap flex-wrap items-center justify-center gap-10 3xl:gap-[71px] ">
          {data.map((card) => (
            <HeroCard
              key={card.id}
              title={card.title}
              icon={card.icon}
              iconColor={card.iconColor}
              description={card.description}
              borderColor={card.borderColor}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroFeatureContact;
