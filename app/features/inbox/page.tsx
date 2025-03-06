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
          title="Personal Touch in Every Interaction"
          points={[
            "Use Contact Profiles in Inbox to create tailored experiences for every customer.",
            "Access full conversation history across all channels in a single view, keeping every employee up-to-date and ready to deliver personalized service.",
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
          title="Advanced Template Management"
          points={[
            "Transform your most effective and repetitive messages into templates you can personalize and share with your team.",
            "Save hours on copy-pasting and editing by inserting templates in seconds.",
            "Utilize advanced features such as variables to include recipients' names or custom variables like the recipient’s business name.",
            "Elevate productivity with sequences by creating smart message workflows and multi-stage campaigns in a few clicks using templates for WhatsApp CRM.",
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
          title="Streamline Your Workflow to Boost Marketing"
          points={[
            "Eliminate the need for spreadsheets and save your team hours with a modern, actionable CRM.",
            "Efficiently search, organize customers by important attributes, and manage conversations or initiate payments from one convenient tool.",
            "Personalizing even one attribute can make your text marketing twice as effective, doubling customer response and revenue with each send.",
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
          title="Clear Ownership and Accountablity"
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
          title="Write Unique Message Through AI Rewrite"
          points={[
            "Craft personalized responses based on actual customer context and edit generated text before sending for a personal touch.",
            "Enjoy grammatically correct, professional messages that include relevant customer information.",
            "Ensure your brand’s tone and voice remain consistent across all responses.",
            "Utilize natural language processing to ensure high-quality, helpful, and accurate communications.",
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
          title="Filtered Views"
          points={[
            "Utilize pre-defined, filtered workspace views to quickly find what you need.",
            "Get a holistic view of all cards assigned to you across all workspaces with a single click, helping you stay on top of your tasks.",
            "Visualize each workspace with the most common filters available such as Assigned to, Me, Drafts, Sent, Unread, Snoozed, Pending, Closed",
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
