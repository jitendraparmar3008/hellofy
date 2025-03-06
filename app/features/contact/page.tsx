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
          title="All-in-One Contact Screen"
          points={[
            <>
              <strong>Comprehensive View:</strong> Instantly access contact
              details, notes, tasks, and appointments on a single, intuitive
              interface.
            </>,
            <>
              <strong>Boost Efficiency:</strong> Eliminate the hassle of
              switching between multiple screens—everything you need is
              organized in one centralized hub.
            </>,
            <>
              <strong>Stay Organized:</strong> Manage your to-do lists, track
              client interactions, and review past communications effortlessly.
            </>,
            <>
              <strong>Enhanced Productivity:</strong> Streamline your workflow
              by having all crucial information at your fingertips, improving
              response times and client satisfaction.
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
          title="Easy Contact Filtering"
          points={[
            <>
              <strong>Quick Sorting:</strong> Instantly filter contacts by
              custom categories like location, industry, or relationship status.
            </>,
            <>
              <strong>Customizable Fields:</strong> Add personalized fields to
              tailor your contact list to your unique business needs.
            </>,
            <>
              <strong>Enhanced Search:</strong> Find the right contacts in
              seconds by applying multiple filters at once—no more endless
              scrolling.
            </>,
            <>
              <strong>Smart Organization:</strong> Group contacts based on
              interactions, tags, or specific data points to streamline
              follow-ups and improve productivity.
            </>,
            <>
              <strong>Save Filter Settings:</strong> Save frequently used
              filters for quick access to important contacts, boosting
              efficiency for future searches.
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
          title="Group Actions"
          points={[
            "Save time by applying bulk operations like tagging, updating, or deleting multiple contacts at once, all within your filtered lists.",
            "Quickly reach out to customers with personalized messages and update their details to keep your database accurate and up to date.",
            "Simplify task delegation by assigning responsibilities to team members effortlessly, ensuring efficient collaboration and productivity.",
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
          title="Data Importing and Exporting"
          points={[
            "Easily detect duplicate entries in your database and merge or update them to maintain accurate and organized records.",
            "Seamlessly upload data from spreadsheets to centralize customer and lead information, ensuring easy access and efficient management.",
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
          title="Fast Contact with Leads"
          points={[
            "Engage customers at the right moment to boost conversions.",
            "Use automated WhatsApp messages to build trust and engagement.",
            "Simplify navigation to relevant resources or services.",
            "Accelerate sales with a streamlined, customer-focused approach.",
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
          title="Personalized Touchpoints"
          points={[
            "Strategically engage at every stage to meet needs and strengthen relationships.",
            "Access a full view of interactions to tailor your approach effectively.",
            "Deliver tailored interactions to boost satisfaction and loyalty.",
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
