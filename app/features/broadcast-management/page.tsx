import DiscoverAboutAiInbox from "@/components/DiscoverAboutAiInbox";
import PointImgSection from "@/components/Common/PointImgSection";
import { Metadata } from "next";
import HeroBroadcastManagement from "@/components/HeroBroadcastManagement";
export const metadata: Metadata = {
  title: "Broadcast Management Page",
  description: "This is Broadcast Management Page",
  // other metadata
};

const BroadcastManagement = () => {
  return (
    <>
      <HeroBroadcastManagement />
      <div className="max-w-[1420px] mx-auto pb-32">
        <PointImgSection
          title="Comprehensive Broadcast Overview"
          points={[
            "Get a complete view of all your broadcasts and manage them efficiently.",
            "Access a detailed broadcast listing with statuses for easy tracking.",
            "Filter broadcasts using categories such as status, template, name, or date.",
            `Keep track of daily limits with a real-time "Today's Limit" tag for sent and remaining broadcasts.`,
          ]}
          imgSrc="/images/broadcast-feature/broadcast-feature01.svg"
          imgAlt="InteractionImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="lg:order-1 order-2"
          ordering2="lg:order-2 order-1"
          className="lg:py-24 py-10 "
          titleClass="lg:whitespace-nowrap whitespace-normal "
        />
        <PointImgSection
          title="Targeted Audience Selection"
          points={[
            "Send tailored messages to the right audience for improved engagement.",
            "Choose specific contact groups based on your broadcast requirements.",
            "Leverage intuitive group selection tools to streamline audience targeting.",
            "Ensure maximum relevance by aligning your messages with the right recipients.",
          ]}
          imgSrc="/images/broadcast-feature/broadcast-feature02.svg"
          imgAlt="TemplateManagementImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="lg:order-2 order-2"
          ordering2="lg:order-1 order-1"
          className="lg:pb-24 pb-10"
          titleClass="lg:whitespace-nowrap whitespace-normal "
        />
        <PointImgSection
          title="Detailed Review & Message Preview"
          points={[
            "Ensure accuracy and impact before sending your broadcast.",
            "Review all broadcast details on a dedicated confirmation page.",
            "Use the preview pane to see how the message will appear to recipients.",
            "Make last-minute adjustments with ease to perfect your broadcast.",
          ]}
          imgSrc="/images/broadcast-feature/broadcast-feature03.svg"
          imgAlt="BoostMarketingImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="lg:order-1 order-2"
          ordering2="lg:order-2 order-1"
          className="lg:pb-24 pb-10"
          titleClass="lg:whitespace-nowrap whitespace-normal "
        />
        <PointImgSection
          title="Data-Driven Insights with Analytics"
          points={[
            "Optimize your campaigns with actionable insights.",
            "Access the Analytics button for a comprehensive performance overview of all broadcasts.",
            "Monitor key metrics such as delivery rates, engagement levels, and success rates.",
            "Use analytics to refine strategies and enhance future campaign outcomes.",
          ]}
          imgSrc="/images/broadcast-feature/broadcast-feature04.svg"
          imgAlt="AccountablityImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="lg:order-2 order-2"
          ordering2="lg:order-1 order-1"
          className="lg:pb-24 pb-10"
        />

        <DiscoverAboutAiInbox currentPage="broadcast" />
      </div>
    </>
  );
};

export default BroadcastManagement;
