import DiscoverAboutAiInbox from "@/components/DiscoverAboutAiInbox";
import PointImgSection from "@/components/Common/PointImgSection";
import { Metadata } from "next";
import HeroFeatureChatbot from "@/components/HeroFeatureChatbot";
export const metadata: Metadata = {
  title: "Chatbot Page",
  description: "This is Chatbot Page",
  // other metadata
};

const ChatbotFeature = () => {
  return (
    <>
      <HeroFeatureChatbot />
      <div className="max-w-[1420px] mx-auto pb-32">
        <PointImgSection
          title="Simplify WhatsApp Customer Engagement"
          points={[
            "Create automated workflows in minutes with Hellofy’s no-code visual builder.",
            "Personalize messages using images, videos for better engagement.",
            "Reach prospects and customers with the right message at the right time.",
            "Save time, enhance productivity, and streamline your customer engagement.",
          ]}
          imgSrc="/images/chatbot-feature/chatbot-feature01.svg"
          imgAlt="InteractionImg"
          imgHeight={565}
          imgWidth={600}
          ordering1="lg:order-1 order-2"
          ordering2="lg:order-2 order-1 flex justify-end"
          className="lg:py-24 py-10 "
          titleClass="lg:whitespace-nowrap whitespace-normal "
        />
        <PointImgSection
          title="Automate Conversations and Serve 24/7"
          points={[
            "Engage customers anytime with drag-and-drop components.",
            "Streamline sales and customer support with automated workflows.",
          ]}
          imgSrc="/images/chatbot-feature/chatbot-feature02.svg"
          imgAlt="TemplateManagementImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="lg:order-2 order-2"
          ordering2="lg:order-1 order-1"
          className="lg:pb-24 pb-10"
          titleClass="lg:whitespace-nowrap whitespace-normal "
        />
        <PointImgSection
          title="Optimize with Chatbot Insights"
          points={[
            "Use data-driven insights to refine your chatbot paths and reduce errors.",
            "Optimize your bot’s effectiveness, ensuring it delivers the best experience.",
            "Track customer interactions, from language choice to drop-off points.",
          ]}
          imgSrc="/images/chatbot-feature/chatbot-feature03.svg"
          imgAlt="BoostMarketingImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="lg:order-1 order-2"
          ordering2="lg:order-2 order-1 flex justify-end"
          className="lg:pb-24 pb-10 whi"
          titleClass="lg:whitespace-nowrap whitespace-normal "
        />

        <DiscoverAboutAiInbox currentPage="chatbot" />
      </div>
    </>
  );
};

export default ChatbotFeature;
