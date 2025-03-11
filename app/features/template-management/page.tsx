import DiscoverAboutAiInbox from "@/components/DiscoverAboutAiInbox";
import PointImgSection from "@/components/Common/PointImgSection";
import { Metadata } from "next";
import HeroTemplateManagement from "@/components/HeroTemplateManagement";
export const metadata: Metadata = {
  title: "Template Management Page",
  description: "This is Template Management Page",
  // other metadata
};

const TemplateManagement = () => {
  return (
    <>
      <HeroTemplateManagement />
      <div className="max-w-[1420px] mx-auto pb-32">
        <PointImgSection
          title="Effortless Template Management "
          points={[
            <>
              <strong>Comprehensive Template Overview:</strong> Browse all your
              templates in a clear, customizable list or grid view for easy
              navigation.
            </>,
            <>
              <strong>Smart Filtering:</strong> Quickly find what you need by
              filtering templates by status (draft, approved), category
              (marketing, utility), or update time (recently modified).
            </>,
            <>
              <strong>Quick Access Favorites:</strong> Save your most-used
              templates for instant access, eliminating repetitive searches.
            </>,
            <>
              <strong>Instant Search & Real-Time Sync:</strong> Locate templates
              effortlessly with a powerful search bar, and keep everything
              updated with a single sync button.
            </>,
          ]}
          imgSrc="/images/template-feature/template-feature01.svg"
          imgAlt="InteractionImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="lg:order-1 order-2"
          ordering2="lg:order-2 order-1"
          className="lg:py-24 py-10 "
          titleClass="lg:whitespace-nowrap whitespace-normal "
        />
        <PointImgSection
          title="Effortless Template Creation"
          points={[
            <>
              <strong>Versatile Design Options:</strong> Personalize headers
              with images, videos, text, or documents, or keep it minimal with
              no header at all.
            </>,
            <>
              <strong>Dynamic Message Personalization:</strong> Use variables
              (e.g., names, order details) and forms to create tailored
              messages, with support for emoji, bold, italic, and strikethrough
              text styles.
            </>,
            <>
              <strong>Engaging Footers & Interactive Buttons:</strong> Add
              footers and action-driven buttons like Call to Action (links,
              phone numbers) or Quick Reply (predefined responses) to boost
              engagement. You can also trigger chatbots using the Quick Reply
              button.
            </>,
            <>
              <strong>Flexible Categories & Languages:</strong> Assign the right
              category (marketing, utility, authentication) and language, with
              the option to restrict or allow category changes as needed.
            </>,
          ]}
          imgSrc="/images/template-feature/template-feature02.svg"
          imgAlt="TemplateManagementImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="lg:order-2 order-2"
          ordering2="lg:order-1 order-1"
          className="lg:pb-24 pb-10"
          titleClass="lg:whitespace-nowrap whitespace-normal "
        />
        <PointImgSection
          title="Simplified Template Approval Workflow"
          points={[
            <>
              <strong>One-Click Submission:</strong> Send templates for Meta
              approval instantly while ensuring compliance with WhatsApp’s
              policies.
            </>,
            <>
              <strong>Real-Time Status Tracking:</strong> Monitor approval
              progress and know exactly when your templates are ready to use.
            </>,
            <>
              <strong>Save as Draft:</strong> Store unfinished templates in the
              Draft Section for easy editing and finalization later.
            </>,
          ]}
          imgSrc="/images/template-feature/template-feature03.svg"
          imgAlt="BoostMarketingImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="lg:order-1 order-2"
          ordering2="lg:order-2 order-1 flex justify-end"
          className="lg:pb-24 pb-10"
          titleClass="lg:whitespace-nowrap whitespace-normal "
        />
        <DiscoverAboutAiInbox currentPage="template" />
      </div>
    </>
  );
};

export default TemplateManagement;
