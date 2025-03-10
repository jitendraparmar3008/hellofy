import DiscoverAboutAiInbox from "@/components/DiscoverAboutAiInbox";
import HeroFeatureContact from "@/components/HeroFeatureContact";
import PointImgSection from "@/components/Common/PointImgSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Feature Page",
  description: "This is ContactFeature Page",
  // other metadata
};

const ContactFeature = () => {
  return (
    <>
      <HeroFeatureContact />
      <div className="max-w-[1420px] mx-auto pb-32">
        <PointImgSection
          title="Unified Contact Dashboard"
          points={[
            <>
              <strong>Complete View:</strong> Quickly access contact details,
              notes, tasks, and appointments in one seamless interface.
            </>,
            <>
              <strong>Increased Efficiency:</strong> No more toggling between
              multiple screens—everything is centralized for easy access.
            </>,
            <>
              <strong>Better Organization:</strong> Effortlessly manage tasks,
              track interactions, and review past conversations.
            </>,
            <>
              <strong>Enhanced Productivity:</strong> Keep all essential
              information at your fingertips to improve response times and
              customer satisfaction.
            </>,
          ]}
          imgSrc="/images/contact-feature/contact-feature01.svg"
          imgAlt="InteractionImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="lg:order-1 order-2"
          ordering2="lg:order-2 order-1"
          className="lg:py-24 py-10"
          titleClass="whitespace-nowrap"
        />
        <PointImgSection
          title="Seamless Contact Filtering"
          points={[
            <>
              <strong>Instant Filtering:</strong> Quickly sort contacts by
              custom categories like location, industry, or relationship status.
            </>,
            <>
              <strong>Tailored Fields</strong> Personalize your contact list
              with custom fields that match your business needs.
            </>,
            <>
              <strong>Advanced Search:</strong> Locate the right contacts in
              seconds using multiple filters—no more endless scrolling.
            </>,
            <>
              <strong>Smart Organization:</strong> Categorize contacts by
              interactions, tags, or key data points for efficient follow-ups.
            </>,
            <>
              <strong>Saved Filters:</strong> Store frequently used filters for
              fast access, streamlining future searches and boosting
              productivity.
            </>,
          ]}
          imgSrc="/images/contact-feature/contact-feature02.svg"
          imgAlt="TemplateManagementImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="order-2"
          ordering2="order-1"
          className="lg:pb-24 pb-10"
        />
        <PointImgSection
          title="Bulk Actions"
          points={[
            <>
              <strong>Efficient Bulk Actions:</strong> Save time by tagging,
              updating, or deleting multiple contacts at once within your
              filtered lists.
            </>,
            <>
              <strong>Seamless Outreach:</strong> Send personalized messages and
              update contact details to keep your database accurate and current.
            </>,
            <>
              <strong>Streamlined Task Delegation:</strong> Easily assign
              responsibilities to team members, promoting smooth collaboration
              and enhanced productivity.
            </>,
          ]}
          imgSrc="/images/contact-feature/contact-feature03.gif"
          imgAlt="BoostMarketingImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="lg:order-1 order-2"
          ordering2="lg:order-2 order-1 flex justify-end"
          className="lg:pb-24 pb-10 "
          titleClass="whitespace-nowrap"
          imgClass="shadow-dim_grey_shadow rounded-2xl p-4"
        />
        <PointImgSection
          title="Effortless Data Migration"
          points={[
            <>
              <strong>Duplicate Detection & Cleanup:</strong> Identify and merge
              duplicate entries to keep your database accurate and organized.
            </>,
            <>
              <strong>Effortless Data Upload: </strong> Import customer and lead
              information from spreadsheets, ensuring centralized and efficient
              management.
            </>,
          ]}
          imgSrc="/images/contact-feature/contact-feature04.svg"
          imgAlt="AccountablityImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="order-2"
          ordering2="order-1"
          className="lg:pb-24 pb-10"
          titleClass="whitespace-nowrap"
        />
        <PointImgSection
          title="Quick Lead Engagement"
          points={[
            <>
              <strong>Timely Engagement:</strong> Connect with customers at the
              perfect moment to maximize conversions.
            </>,
            <>
              <strong>Automated Messaging:</strong> Use WhatsApp automation to
              foster trust and engagement effortlessly.
            </>,
            <>
              <strong>Seamless Navigation:</strong> Guide customers to relevant
              resources or services with ease.
            </>,
            <>
              <strong>Accelerated Sales:</strong> Drive growth with a smooth,
              customer-centric sales process.
            </>,
          ]}
          imgSrc="/images/contact-feature/contact-feature05.svg"
          imgAlt="AIRewriteImg"
          imgHeight={708}
          imgWidth={642}
          ordering1="lg:order-1 order-2"
          ordering2="lg:order-2 order-1 !w-fit mx-auto"
          className="lg:pb-24 pb-10"
          titleClass="whitespace-nowrap"
        />
        <PointImgSection
          title="Customized Interactions"
          points={[
            <>
              <strong>Strategic Engagement:</strong>Connect with customers at
              every stage to meet their needs and build strong relationships.
            </>,
            <>
              <strong>Comprehensive Insights:</strong> Gain a complete view of
              interactions to personalize your approach effectively.
            </>,
            <>
              <strong>Tailored Experiences:</strong>Deliver customized
              interactions that enhance satisfaction and foster loyalty.
            </>,
          ]}
          imgSrc="/images/contact-feature/contact-feature06.svg"
          imgAlt="FilteredImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="order-2"
          ordering2="order-1"
          className="lg:pb-24 pb-10"
          titleClass="whitespace-nowrap"
        />
        <DiscoverAboutAiInbox currentPage="contact" />
      </div>
    </>
  );
};

export default ContactFeature;
