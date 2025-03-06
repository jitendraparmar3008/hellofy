"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import TabsList from "./TabData";
import { ArrowWithArrow } from "@/constant/icons";

const OrderInfoandForm = () => {
  const [activeTab, setActiveTab] = useState("registration");
  const [isClient, setIsClient] = useState(false);
  const tabContainerRef = useRef(null);

  useEffect(() => {
    setIsClient(typeof window !== "undefined");
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleScroll = (direction) => {
    if (tabContainerRef.current && isClient) {
      const scrollAmount = window.innerWidth < 1300 ? 150 : 200;
      tabContainerRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-seasalt relative h-auto pb-9">
      <div className="hidden md:blockabsolute top-0 left-0 w-full h-full pl-[88px] pt-[110px]">
        <Image
          src="/images/order/order_form_vector.svg"
          alt="hero_left"
          width={1920}
          height={930}
          className="h-full max-h-[930px] w-full max-w-[1920px]"
        />
      </div>
      <div className="p-2 xl:px-[89px] relative z-10 lg:pt-[58px]">
        <h2 className="text-dark font-bold text-2xl lg:text-52 lg:leading-[60px] text-center">
          Get orders placed and generate invoices more quickly!!
        </h2>
        <div className="flex items-center justify-center gap-2 md:gap-6 pt-11 pb-11 md:pb-[85px] relative">
          {isClient && TabsList.length > (window.innerWidth < 1300 ? 2 : 4) && (
            <button
              onClick={() => handleScroll("previous")}
              className="scale-75 md:scale-100"
            >
              <ArrowWithArrow />
            </button>
          )}

          <div
            ref={tabContainerRef}
            className="flex justify-center overflow-hidden space-x-4 gap-2 lg:gap-6 max-w-full lg:max-w-[280px] sm:max-w-full 2xl:min-w-[1282px]"
          >
            {TabsList.map((tab) => (
              <button
                key={tab.id}
                className={`lg:text-sm text-xs md:text-xl md:leading-[30px] font-normal py-1 lg:px-4 px-2 md:py-3 md:px-20 rounded md:rounded-xl text-nowrap min-w-fit max-w-fit md:max-w-[301px] md:min-w-[301px] !m-0 ${
                  activeTab === tab.tab
                    ? "text-white bg-primary"
                    : "text-dark bg-white"
                }`}
                onClick={() => handleTabClick(tab.tab)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {isClient && TabsList.length > (window.innerWidth < 1300 ? 2 : 4) && (
            <button
              onClick={() => handleScroll("next")}
              className="scale-75 md:scale-100"
            >
              <ArrowWithArrow className="rotate-180" />
            </button>
          )}
        </div>

        <div className="tab-content">
          {TabsList.map(
            (tab) =>
              activeTab === tab.tab && (
                <div
                  key={tab.id}
                  className="flex flex-col lg:flex-row items-center gap-10 xl:gap-20 w-full"
                >
                  <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-2.5 xl:gap-20">
                    {tab.mobileView && (
                      <Image
                        src={tab.mobileView}
                        alt={tab.title}
                        width={312}
                        height={610}
                        className="h-full w-auto max-h-[300px] lg:max-h-[200px] max-w-full xl:max-h-[400px] 3xl:max-h-[610px] xl:w-full xl:max-w-[312px]"
                      />
                    )}
                    <Image
                      src={tab.image}
                      alt={tab.title}
                      width={656}
                      height={505}
                      className="h-full max-h-[505px] xl:max-h-[505px] md:max-h-[250px] w-full md:max-w-[300px] max-w-[656px] xl:max-w-[400px] 3xl:max-w-[656px] mt-auto"
                    />
                  </div>
                  <div className="max-w-[613px] lg:max-w-[400px] 2xl:max-w-[460px] 3xl:max-w-[613px] xl:ml-auto">
                    {tab.description}
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderInfoandForm;
