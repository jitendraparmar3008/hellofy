import React from "react";
import Image from "next/image";
import HeroCard from "../Common/HeroCard";
import { HeroCardIcon, InboxHeroVector01 } from "@/constant/icons";
import GateStartedInput from "../Common/GateStartedInput";
import FeatureTitleTag from "../FeatureTitleTag";

const HeroInboxFeature = () => {
  const data = [
    {
      id: 1,
      icon: HeroCardIcon,
      title: "Quicker replies to messages.",
      description:
        "Instantly access and reply to messages with personalized views.",
      borderColor: "border-yellow_600",
      iconColor: "fill-yellow_700",
    },
    {
      id: 2,
      icon: HeroCardIcon,
      title: "Reduce time spent on task distribution.",
      description: "Effortlessly filter and route conversations automatically.",
      borderColor: "border-aero_blue",
      iconColor: "fill-aero_blue",
    },
    {
      id: 3,
      icon: HeroCardIcon,
      title: "Save valuable hours per teammate each month.",
      description:
        "Optimize workflows and free up valuable time for every team member each month.",
      borderColor: "border-pale_cyan",
      iconColor: "fill-pale_cyan",
    },
  ];
  return (
    <>
      <div className="w-full bg-gradient-green h-auto xl:h-[890px] p-10 pt-[130px] lg:pt-[210px] relative">
        <div className="max-w-[1490px] w-full mx-auto h-full">
          <div className="w-full text-center flex flex-col h-full">
            <div className="w-full">
              <FeatureTitleTag text="Conversation Center" />
              <h2 className="3xl:text-64 md:text-5xl text-4xl text-white text-center font-bold 3xl:leading-[80px] font-lexend">
                Boost Productivity and Stay on Top with Advanced
                <span className="text-erin"> WhatsApp</span> Conversation Center
              </h2>
              <p className="text-white text-xl md:text-3xl text-center mt-3">
                Improve oversight and responsiveness with AiInbox.
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
        <span className="absolute bottom-1/2 right-0 w-[10vw]">
          <InboxHeroVector01 />
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

export default HeroInboxFeature;
