"use client";
import React from "react";
import DiscoverCard from "./DiscoverCard";
import {
  PhoneBookIcon,
  TemplateIcon,
  FormBuilderIcon,
  ChatbotIcon,
  InboxIcon,
  BroadcastIcon,
} from "@/constant/icons";
import { useRouter } from "next/navigation";

const cardData = [
  {
    title: "Contact Management",
    subtitle: "Organize customer data for personalized interactions.",
    icon: PhoneBookIcon,
    borderColor: "border-fluorescent_red",
    iconColor: "fill-fluorescent_red",
    iconBg: "bg-fluorescent_red_200",
    url: "/features/contact",
  },
  {
    title: "Template Management",
    subtitle:
      "Create, manage, and track approval statuses for WhatsApp message templates.",
    icon: TemplateIcon,
    borderColor: "border-altdorf_sky_blue",
    iconColor: "fill-altdorf_sky_blue",
    iconBg: "bg-altdorf_sky_blue_200",
    url: "/features/template-management",
  },
  {
    title: "Form Builder",
    subtitle: "Create forms to capture and streamline customer information.",
    icon: FormBuilderIcon,
    borderColor: "border-yellow_800",
    iconColor: "fill-yellow_800",
    iconBg: "bg-yellow_200",
    url: "/features/form-builder",
  },
  {
    title: "Chatbot",
    subtitle:
      "Automate customer interactions with intuitive, no-code chatbots for 24/7 assistance.",
    icon: ChatbotIcon,
    borderColor: "border-sunset_yellow",
    iconColor: "fill-sunset_yellow",
    iconBg: "bg-sunset_yellow_200",
    url: "/features/chatbot",
  },
  {
    title: "Team Inbox",
    subtitle:
      "Collaborate to manage and respond to customer messages seamlessly.",
    icon: InboxIcon,
    borderColor: "border-darkcyan",
    iconColor: "fill-sunset_yellow",
    iconBg: "bg-lightcyan",
    url: "/features/inbox",
  },
  {
    title: "Broadcast",
    subtitle:
      "Send targeted WhatsApp messages to engage and inform your audience at scale.",
    icon: BroadcastIcon,
    borderColor: "border-cornflowerblue",
    iconColor: "fill-sunset_yellow",
    iconBg: "bg-lightcornflowerblue",
    url: "/features/broadcast-management",
  },
];

interface DiscoverAboutAiInboxProps {
  currentPage: string; // Current page identifier
}

const DiscoverAboutAiInbox: React.FC<DiscoverAboutAiInboxProps> = ({
  currentPage,
}) => {
  // Define excluded titles for each page
  const excludedTitles: Record<string, string[]> = {
    contact: ["Contact Management"],
    template: ["Template Management"],
    formBuilder: ["Form Builder"],
    chatbot: ["Chatbot"],
    inbox: ["Team Inbox"],
    broadcast: ["Broadcast"],
    default: [], // No exclusions for other pages
  };

  // Get the list of titles to exclude for the current page
  const titlesToExclude = excludedTitles[currentPage] || excludedTitles.default;

  // Filter items based on the current page exclusions
  const filteredData = cardData.filter(
    (card) => !titlesToExclude.includes(card.title),
  );

  // Limit to 4 items
  const visibleData = filteredData.slice(0, 4);
  const router = useRouter();
  return (
    <div className="w-full px-5 md:px-10 xl:px-0 ">
      <div className="container mx-auto">
        <h2 className="xl:text-[67px] md:text-5xl text-3xl text-dark font-semibold text-center mb-14">
          Discover more about Hellofy
        </h2>

        <div className="grid xl:grid-cols-4 md:grid-cols-2 md:gap-14 gap-16 xl:gap-5 text-center mt-28">
          {visibleData.map((card, index) => (
            <DiscoverCard
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              icon={card.icon}
              borderColor={card.borderColor}
              iconColor={card.iconColor}
              iconBg={card.iconBg}
              onClick={() => router.push(card.url)} // Navigate on click
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverAboutAiInbox;
