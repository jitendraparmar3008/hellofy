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
          title="Simplified Template Organization"
          points={[
            <>
              <strong>Comprehensive Template Listing:</strong> Easily view all
              templates in your preferred format—list view or grid view—for
              quick navigation and better clarity.
            </>,
            <>
              <strong>Smart Filters:</strong> Narrow down templates by status
              (e.g., draft, approved), category (e.g., marketing, utility), or
              time (e.g., recently updated).
            </>,
            <>
              <strong>Favorite Templates:</strong> Bookmark frequently used
              templates for faster access, minimizing repetitive searches.
            </>,
            <>
              <strong>Search Bar & Sync:</strong> Locate templates instantly
              using the search bar, and use the sync button to ensure templates
              are always up-to-date
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
              <strong>Customizable Design Options:</strong> Add headers with
              options like none, image, video, text, or document to suit various
              communication needs.
            </>,
            <>
              <strong>Dynamic Message Body:</strong> Include variables (e.g.,
              names, order details) and forms to personalize messages, with
              support for emoji, bold, italic, and strikethrough text styles.
            </>,
            <>
              <strong>Footer and Buttons:</strong> Enhance messages with footers
              and interactive buttons like Call to Action (links, phone numbers)
              or Quick Reply (predefined responses).chatbot can be also
              initiated with quick reply button
            </>,
            <>
              <strong>Category and Language Flexibility:</strong> Choose the
              appropriate category (e.g., marketing, utility, authentication)
              and language, with the option to allow or restrict category
              changes.
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
              <strong>One-Click Submission:</strong> Submit templates directly
              for Meta approval, ensuring compliance with WhatsApp’s policies
              and guidelines.
            </>,
            <>
              <strong>Approval Status Tracking:</strong> Easily monitor the
              status of submitted templates, so you know when they’re ready to
              use.
            </>,
            <>
              <strong>Save as Draft Option:</strong> Store incomplete or
              work-in-progress templates in the Draft Section for later editing
              or finalization.
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
