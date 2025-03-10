import DiscoverAboutAiInbox from "@/components/DiscoverAboutAiInbox";
import HeroInboxFeature from "@/components/HeroInboxFeature";
import PointImgSection from "@/components/Common/PointImgSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Inbox Features Page",
  description: "This is InboxFeatures Page",
  // other metadata
};

const InboxFeatures = () => {
  return (
    <>
      <HeroInboxFeature />
      <div className="max-w-[1420px] mx-auto pb-32">
        <PointImgSection
          title="Authentic Engagement in Every Interaction"
          points={[
            "Utilize Contact Profiles in the Inbox to deliver customized experiences for each customer.",
            "Access a unified conversation history across all channels, keeping your team informed and prepared to offer top-notch service.",
          ]}
          imgSrc="/images/inbox-feature/InteractionImg.svg"
          imgAlt="InteractionImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="lg:order-1 order-2"
          ordering2="lg:order-2 order-1 flex justify-end"
          className="lg:py-24 py-10"
        />
        <PointImgSection
          title="Smart Template Builder"
          points={[
            "Turn your most impactful and frequently used messages into customizable templates for easy team sharing.",
            "Eliminate time-consuming copy-pasting by inserting templates instantly.",
            "Leverage advanced features like variables to personalize messages with recipient names or business details.",
            "Boost efficiency with sequences by designing smart message workflows and multi-stage campaigns in just a few clicks using WhatsApp CRM templates.",
          ]}
          imgSrc="/images/inbox-feature/TemplateManagementImg.svg"
          imgAlt="TemplateManagementImg"
          imgHeight={562}
          imgWidth={705}
          ordering1="order-2"
          ordering2="order-1"
          className="lg:pb-24 pb-10"
        />
        <PointImgSection
          title="Simplify Your Process to Enhance Marketing"
          points={[
            "Say goodbye to spreadsheets and save hours with a smart, action-driven CRM.",
            "Quickly search, categorize customers by key attributes, manage conversations, and process payments—all from one powerful tool.",
            "Personalizing just one attribute can significantly boost your text marketing, doubling customer engagement and revenue with every send.",
          ]}
          imgSrc="/images/inbox-feature/BoostMarketingImg.png"
          imgAlt="BoostMarketingImg"
          imgHeight={561}
          imgWidth={618}
          ordering1="lg:order-1 order-2"
          ordering2="lg:order-2 order-1 flex justify-end"
          className="lg:pb-24 pb-10"
        />
        <PointImgSection
          title="Defined Responsibility and Transparency"
          points={[
            "Automatically route messages to the right team and person, ensuring nothing is missed and customers receive prompt answers.",
            "Assign incoming messages to your teammates with a single click or through simple @mentions.",
          ]}
          imgSrc="/images/inbox-feature/AccountablityImg.gif"
          imgAlt="AccountablityImg"
          imgHeight={596}
          imgWidth={594}
          ordering1="order-2"
          ordering2="order-1"
          className="lg:pb-24 pb-10"
        />
        <PointImgSection
          title="Generate Distinctive Messages with AI-Powered Rewriting"
          points={[
            "Create tailored responses using real customer context, with the flexibility to edit before sending for a personal touch.",
            "Send professional, grammatically flawless messages enriched with relevant customer details.",
            "Maintain a consistent brand tone and voice across all communications.",
            "Leverage natural language processing for precise, high-quality, and engaging interactions.",
          ]}
          imgSrc="/images/inbox-feature/AIRewriteImg.gif"
          imgAlt="AIRewriteImg"
          imgHeight={442}
          imgWidth={672}
          ordering1="lg:order-1 order-2"
          ordering2="lg:order-2 order-1 flex justify-end"
          className="lg:pb-24 pb-10"
        />
        <PointImgSection
          title="Smart Views"
          points={[
            "Access pre-defined, filtered workspace views for quick and easy navigation.",
            "Stay organized with a single-click overview of all cards assigned to you across multiple workspaces.",
            "Easily visualize each workspace using common filters like Assigned to Me, Drafts, Sent, Unread, Snoozed, Pending, and Closed.",
          ]}
          imgSrc="/images/inbox-feature/FilteredImg.svg"
          imgAlt="FilteredImg"
          imgHeight={609}
          imgWidth={570}
          ordering1="order-2"
          ordering2="order-1 "
          className="lg:pb-24 pb-10"
        />
        <DiscoverAboutAiInbox currentPage="inbox" />
      </div>
    </>
  );
};

export default InboxFeatures;
