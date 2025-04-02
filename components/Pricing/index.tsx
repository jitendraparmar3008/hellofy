"use client";
import { useEffect, useState } from "react";
import PricingBox from "./PricingBox";
import Image from "next/image";
import {
  //UnderlineVector,
  PriceArrowVector,
  CurrveVector01,
} from "@/constant/icons";
//import planData from "./planData.json";
import OfferList from "./OfferList";
import Button from "../UI/Button";
import CostPerConversationModal from "../CostPerConversationModal";
import { useSearchParams } from "next/navigation";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const searchParams = useSearchParams();

  const startonPrice = 9;
  const basicPrice = 39;
  const growthPrice = 99;
  const businessPrice = 199;

  const calculateYearlyPrice = (monthlyPrice) => {
    const yearlyPrice = monthlyPrice * 12;
    const discountedPrice = yearlyPrice * 0.8; // Applying 20% discount
    return discountedPrice.toFixed(2);
  };

  useEffect(() => {
    if (searchParams.get("viewconversationrates") === "open") {
      setModalOpen(true);
    }
  }, [searchParams]);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="pricing" className="relative">
      <div className="bg-mintcream bg-cover bg-center px-5 md:px-[58px] lg:px-0 bg-no-repeat absolute h-[900px] w-full overflow-hidden">
        <Image
          src="/images/price/price_vector1.svg"
          height={76}
          width={76}
          alt="contact_vector_3"
          className="absolute 2xl:block hidden left-0 bottom-0 w-[4vw]"
        />
        <Image
          src="/images/price/price_vector2.svg"
          height={480}
          width={532}
          alt="contact_vector_3"
          className="absolute 2xl:block hidden w-[532px] h-[480px] -right-28 bottom-1/3"
        />
      </div>
      <div className="container pt-[150px] pb-[110px]">
        <div className="relative">
          <h2 className="text-dark text-center font-medium text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-64 3xl:leading-[75px]">
            Boost Your Business with WhatsApp Automation
            <br />
            and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-text-pricing">
              Flexible Pricing
            </span>{" "}
            Plans.
          </h2>
          <p className="text-dark xl:text-3xl text-center text-base xl:w-[900px] w-full mx-auto mt-3">
            Choose a plan that’s right for you
          </p>
        </div>

        <div className="w-full relative mt-[73px] md:mb-12 lg:mb-[50px]">
          <div className="relative flex items-center justify-center ">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-light`}
            >
              Pay Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-battleship_gray shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-light`}
            >
              <span>Pay Yearly</span>
              {/* <UnderlineVector /> */}
            </span>
            <div className="flex items-center text-primary font-medium text-lg leading-5 ml-2.5">
              <PriceArrowVector />
              <span className="mt-8">Save 20%</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          {/* {planData?.map((item: any, index: number) => (
            <PricingBox
              key={index}
              title={item.title}
              description={item.description}
              currency={item.currency}
              pirce={item.pirce}
              validity={isMonthly ? "Monthly" : "Yearly"}
              features={item.features}
              selectedPlan={item.status}
              buttonName={item.status ? "Active Plan" : "Select Plan"}
            />
          ))}
          <PricingBox
            title={"Custom"}
            description={
              "For large companies looking for top-tier WhatsApp automation to ensure seamless customer interactions at every touchpoint."
            }
            buttonName={"Contact Us"}
            planType="custom"
            wrapclassName="bg-purple_light"
          /> */}
          <PricingBox
            packageName="Start on"
            price={
              isMonthly ? (
                <>${startonPrice}</>
              ) : (
                <>
                  {`$${calculateYearlyPrice(startonPrice)} `}
                  <span className="line-through hidden">
                    ${startonPrice * 12}
                  </span>
                </>
              )
            }
            duration={isMonthly ? "/mo" : "/mo"}
            subtitle="Users (Upto) - 1"
            subtitle1="Role Management Admin +1"
          >
            <OfferList text="Only broadcast" status="active" />
            <OfferList text="Team inbox" status="active" />
            <OfferList text="Shopify automation (+ $5)" status="active" />
            <OfferList text="5K broadcast per month" status="active" />
            <OfferList text="Campaign analytics" status="active" />
            <OfferList text="Email support" status="active" />
            {/* <OfferList text="Import unlimited contacts" status="active" />
            <OfferList
              text="Broadcast to unlimited contacts including media"
              status="active"
            />
            <OfferList
              text="Inbox view- Access conversations and reply"
              status="active"
            />
            <OfferList text="1 channel" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="Unlimited tags" status="active" />
            <OfferList text="1 custom attribute" status="active" /> */}
            {/* <OfferList text="Free Chatbots Sessions - 1000" status="active" />
            <OfferList text="Multiple Channels" status="inactive" />
            <OfferList text="Tags - 3" status="active" />
            <OfferList text="Attributes - 3" status="active" />
            <OfferList
              text="Training on Video calls/emails/whatsapp"
              status="active"
            />
            <OfferList text="Broardcast Management" status="active" />
            <OfferList text="Template Management" status="active" />
            <OfferList text="Product Cateloge" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="Whatsapp Support" status="inactive" />
            <OfferList text="Call Support" status="inactive" />
            <OfferList
              text="Relationship Manager (to be charged extra)"
              status="inactive"
            />
            <OfferList text="Reports and Annalytics basic" status="inactive" />
            <OfferList
              text="Reports and Annalytics Detailed"
              status="inactive"
            />
            <OfferList text="Appointment System" status="inactive" />
            <OfferList text="Ticket Management" status="inactive" />
            <OfferList text="Whatsapp Add Manager" status="active" />
            <OfferList text="Mobile App" status="active" />
            <OfferList text="Chat app - coming soon" status="active" />
            <OfferList text="Widgets - paid extra" status="active" />
            <OfferList text="OCR - paid extra" status="active" />
            <OfferList text="Nested Domain - paid extra" status="active" />
            <OfferList text="Number Managerment" status="active" />
            <OfferList text="On Site Support " status="active" /> */}
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price={
              isMonthly ? (
                <>${basicPrice}</>
              ) : (
                <>
                  {`$${calculateYearlyPrice(basicPrice)} `}
                  <span className="line-through hidden">
                    ${basicPrice * 12}
                  </span>
                </>
              )
            }
            duration={isMonthly ? "/mo" : "/mo"}
            subtitle="Users (Upto) - 3"
            subtitle1="Role Management Admin +4"
          >
            <OfferList text="Everything in Start on +" status="active" />
            <OfferList text="No-code Chatbot" status="active" />
            <OfferList text="Form builder" status="active" />
            <OfferList text="Chatbot logs and sessions" status="active" />
            <OfferList text="15k total broadcast p.m" status="active" />

            {/* <OfferList text="Everything in Lets Try +" status="active" />
            <OfferList text="Shared Team Inbox" status="active" />
            <OfferList text="API secret and access tokens" status="active" />
            <OfferList
              text="Create and share forms on WhatApp (98 paise for each form)"
              status="active"
            />
            <OfferList
              text="No code chatbot (0.5 paise per chatbot message)"
              status="active"
            />
            <OfferList text="Chatbot logs and analytics" status="active" />
            <OfferList text="Roles and Permissions" status="active" />
            <OfferList text="Email + WhatsApp support" status="active" />
            <OfferList text="Multiple Channels" status="active" />
            <OfferList text="Upto 5 custom attributes" status="active" />
            <OfferList text="Bluetick verification on demand" status="active" />
            <OfferList text="Shopify integration" status="active" />
            <OfferList text="Download all conversations" status="active" />
            <OfferList text="CTWA" status="active" /> */}
            {/* <OfferList text="Product Cateloge" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="Whatsapp Support" status="inactive" />
            <OfferList text="Call Support" status="inactive" />
            <OfferList
              text="Relationship Manager (to be charged extra)"
              status="inactive"
            />
            <OfferList text="Reports and Annalytics basic" status="inactive" />
            <OfferList
              text="Reports and Annalytics Detailed"
              status="inactive"
            />
            <OfferList text="Appointment System" status="inactive" />
            <OfferList text="Ticket Management" status="inactive" />
            <OfferList text="Whatsapp Add Manager" status="active" />
            <OfferList text="Mobile App" status="active" />
            <OfferList text="Chat app - coming soon" status="active" />
            <OfferList text="Widgets - paid extra" status="active" />
            <OfferList text="OCR - paid extra" status="active" />
            <OfferList text="Nested Domain - paid extra" status="active" />
            <OfferList text="Number Managerment" status="active" />
            <OfferList text="On Site Support " status="active" /> */}
          </PricingBox>
          <PricingBox
            packageName="Growth"
            price={
              isMonthly ? (
                <>${growthPrice}</>
              ) : (
                <>
                  {`$${calculateYearlyPrice(growthPrice)} `}
                  <span className="line-through hidden">
                    ${growthPrice * 12}
                  </span>
                </>
              )
            }
            duration={isMonthly ? "/mo" : "/mo"}
            subtitle="Users (Upto) - 7"
            subtitle1="Role Management Admin +4"
          >
            <OfferList text="Everything in Basic +" status="active" />
            <OfferList text="Chatbot connector" status="active" />
            <OfferList text="API keys" status="active" />
            <OfferList text="Role and user management" status="active" />
            <OfferList text="Ticket management manual" status="active" />
            <OfferList text="Basic AI features" status="active" />
            <OfferList text="25k total broadcast p.m" status="active" />
            <OfferList text="Call support" status="active" />
            {/* <OfferList text="Everything in Growth +" status="active" />
            <OfferList
              text="Chatbot connections(integration with client system)"
              status="active"
            />
            <OfferList text="Schedule broadcast" status="active" />
            <OfferList text="Unlimited custom attributes" status="active" />
            <OfferList text="Dedicated account manager" status="active" />
            <OfferList text="Instant call support" status="active" /> */}
            {/* <OfferList text="AI Chatbot Flows" status="active" />
            <OfferList text="Free Chatbots Sessions - 3000" status="active" />
            <OfferList text="Multiple Channels" status="active" />
            <OfferList text="Tags - 10" status="active" />
            <OfferList text="Attributes - 10" status="active" />
            <OfferList
              text="Training on Video calls/emails/whatsapp"
              status="active"
            />
            <OfferList text="Broardcast Management" status="active" />
            <OfferList text="Template Management" status="active" />
            <OfferList text="Product Cateloge" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="Whatsapp Support" status="active" />
            <OfferList text="Call Support" status="active" />
            <OfferList
              text="Relationship Manager (to be charged extra)"
              status="inactive"
            />
            <OfferList text="Reports and Annalytics basic" status="active" />
            <OfferList text="Reports and Annalytics Detailed" status="active" />
            <OfferList text="Appointment System" status="active" />
            <OfferList text="Ticket Management" status="active" />
            <OfferList text="Whatsapp Add Manager" status="active" />
            <OfferList text="Mobile App" status="active" />
            <OfferList text="Chat app - coming soon" status="active" />
            <OfferList text="Widgets - paid extra" status="active" />
            <OfferList text="OCR - paid extra" status="active" />
            <OfferList text="Nested Domain - paid extra" status="active" />
            <OfferList text="Number Managerment" status="active" />
            <OfferList text="On Site Support " status="active" /> */}
          </PricingBox>
          <PricingBox
            packageName="Business"
            price={
              isMonthly ? (
                <>${businessPrice}</>
              ) : (
                <>
                  {`$${calculateYearlyPrice(businessPrice)} `}
                  <span className="line-through hidden">
                    ${businessPrice * 12}
                  </span>
                </>
              )
            }
            duration={isMonthly ? "/mo" : "/mo"}
            subtitle="Users (Upto) - 15"
            subtitle1="Role Management Custom"
            //planType="custom"
          >
            <OfferList text="Everything in Growth +" status="active" />
            <OfferList text="Widget" status="active" />
            <OfferList
              text="Ticket management round robin and connect respective sales person"
              status="active"
            />
            <OfferList text="Schedule broadcast" status="active" />
            <OfferList text="Enhanced AI features" status="active" />
            <OfferList text="Unlimited broadcast" status="active" />
            <OfferList text="Drip campaigns" status="active" />
            <OfferList text="WhatsApp support" status="active" />

            {/* <OfferList text="1000 Free Conversations" status="active" />
            <OfferList text="Shared Inbox" status="active" />
            <OfferList text="Free Integrations" status="active" />
            <OfferList text="Free Contact Imports - Custom " status="active" />
            <OfferList text="Form Builder - Custom  " status="active" />
            <OfferList
              text="Order Communication - \n Custom"
              status="active"
              allowLineBreak
            />
            <OfferList text="AI Chatbot Flows" status="active" />
            <OfferList text="Free Chatbots Sessions - Custom" status="active" />
            <OfferList text="Multiple Channels" status="active" />
            <OfferList text="Tags - Unlimited" status="active" />
            <OfferList text="Attributes - Unlimited" status="active" />
            <OfferList
              text="Training on Video calls/emails/whatsapp"
              status="active"
            />
            <OfferList text="Broardcast Management" status="active" />
            <OfferList text="Template Management" status="active" />
            <OfferList text="Product Cateloge" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="Whatsapp Support" status="active" />
            <OfferList text="Call Support" status="active" />
            <OfferList
              text="Relationship Manager (to be charged extra)"
              status="active"
            />
            <OfferList text="Reports and Annalytics basic" status="active" />
            <OfferList text="Reports and Annalytics Detailed" status="active" />
            <OfferList text="Appointment System" status="active" />
            <OfferList text="Ticket Management" status="active" />
            <OfferList text="Whatsapp Add Manager" status="active" />
            <OfferList text="Mobile App" status="active" />
            <OfferList text="Chat app - coming soon" status="active" />
            <OfferList text="Widgets - paid extra" status="active" />
            <OfferList text="OCR - paid extra" status="active" />
            <OfferList
              text="Nested Domain - paid extra - included"
              status="active"
            />
            <OfferList text="Number Managerment - included" status="active" />
            <OfferList text="On Site Support - Custom" status="active" /> */}
          </PricingBox>
          <PricingBox
            packageName="Custom"
            //price={isMonthly ? "$199" : "$2388"}
            //duration={isMonthly ? "/mo" : "/mo"}
            subtitle="Users (Upto) - 15"
            subtitle1="Role Management Custom"
            planType="custom"
          >
            <OfferList
              text="Dedicated Relationship Manager - $89 (for queries, issue handling, users training)"
              status="active"
            />
            <OfferList
              text="Designing service - $119 (weekly 2 templates, 1 chatbot)"
              status="active"
            />
            <OfferList
              text="Marketing service - $179 (weekly 2 posts, 3 stories on all social media platforms)"
              status="active"
            />
          </PricingBox>
        </div>
        <div className="w-full pt-[110px]">
          <h3 className="lg:text-4xl text-2xl font-semibold text-dark max-w-fit">
            <p className="justify-end flex">
              <CurrveVector01 />{" "}
            </p>
            Conversation-Based Billing: No Per-Message Charges
          </h3>
          <p className="lg:text-3xl text-base font-normal text-dark my-5">
            Pay only for what you use with conversation-based charges, varying
            by country. Each session lasts 24 hours with unlimited messaging. If
            a user messages first and the business replies, the session starts.
            If the business initiates, the 24-hour window begins immediately.
          </p>
          <Button
            name="View Conversation Rates"
            size="medium"
            onClick={handleOpenModal}
          />

          <CostPerConversationModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1] hidden">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#009a73" />
              <stop offset="1" stopColor="#009a73" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#009a73" />
              <stop offset="1" stopColor="#009a73" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
