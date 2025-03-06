import React from "react";
import Image from "next/image";
import HeroCard from "../Common/HeroCard";
import {
  HeroCardIcon,
  TemplateVector01,
  TemplateVector02,
} from "@/constant/icons";
import GateStartedInput from "../Common/GateStartedInput";
import FeatureTitleTag from "../FeatureTitleTag";

const HeroTemplateManagement = () => {
  const data = [
    {
      id: 1,
      icon: HeroCardIcon,
      title: "Template Builder",
      description: "Create and edit templates using an intuitive interface.",
      borderColor: "border-yellow_600",
      iconColor: "fill-yellow_700",
    },
    {
      id: 2,
      icon: HeroCardIcon,
      title: "Approval Workflow",
      description:
        "Submit templates for WhatsApp approval directly from the CRM.",
      borderColor: "border-aero_blue",
      iconColor: "fill-aero_blue",
    },
    {
      id: 3,
      icon: HeroCardIcon,
      title: "Template Categories",
      description: "Categorize templates for easy navigation and access.",
      borderColor: "border-pale_cyan",
      iconColor: "fill-pale_cyan",
    },
  ];
  return (
    <>
      <div className="w-full bg-gradient-feature-1 h-auto xl:h-[calc(100vh-45px)] 2xl:h-[calc(100vh-45px)] p-10 pt-[130px] lg:pt-[210px] relative">
        <div className="max-w-[1490px] w-full mx-auto h-full">
          <div className="w-full text-center flex flex-col h-full">
            <div className="w-full">
              <FeatureTitleTag text="Template Management" />
              <h2 className="3xl:text-64 md:text-5xl text-4xl text-dark text-center font-bold 3xl:leading-[80px] font-lexend relative">
                Create, Customize, and Communicate Seamlessly with Hellofy
                <span className="absolute -top-28 -right-16 2xl:block hidden">
                  <TemplateVector02 />
                </span>
              </h2>
              <p className="text-dark text-xl md:text-3xl text-center mt-3">
                Effortlessly create, edit, and manage message templates to
                streamline your communication.
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
        <span className="absolute m-auto md:top-1/2 left-0 top-1/3 w-[5vw] scale-50 xl:scale-100 2xl:block hidden">
          <TemplateVector01 />
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

export default HeroTemplateManagement;
