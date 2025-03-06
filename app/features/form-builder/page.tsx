import DiscoverAboutAiInbox from "@/components/DiscoverAboutAiInbox";
import HeroFeatureFormbuilder from "@/components/HeroFeatureFormbuilder";
import PointImgSection from "@/components/Common/PointImgSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Form Builder Page",
  description: "This is FormBuilder Page",
  // other metadata
};

const FormBuilder = () => {
  return (
    <>
      <HeroFeatureFormbuilder />
      <div className="max-w-[1420px] mx-auto pb-32">
        <PointImgSection
          title="Build Forms Anywhere, Anytime"
          points={[
            "Create and manage forms from any device, with seamless online and offline functionality.",
            "Collaborate with your team in real-time, consolidating data efficiently.",
            "Access all the powerful features of form builder, whether you're in the office or on the go.",
          ]}
          imgSrc="/images/formbuilder-feature/sectionImg01.svg"
          imgAlt="InteractionImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="order-2"
          ordering2="order-1"
          className="lg:py-24 py-10 "
          titleClass="whitespace-nowrap"
        />
        <PointImgSection
          title="Flexible Form Builder"
          points={[
            "Customize enterprise forms effortlessly with a flexible builder.",
            "Adapt to ever-changing needs, ensuring forms evolve seamlessly with business processes.",
          ]}
          imgSrc="/images/formbuilder-feature/sectionImg02.svg"
          imgAlt="TemplateManagementImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="lg:order-1 order-2"
          ordering2="lg:order-2 order-1"
          className="lg:pb-24 pb-10"
          titleClass="whitespace-nowrap"
        />
        <PointImgSection
          title="Capture Events and Answers"
          points={[
            "Embed forms within your website to capture events and answers.",
            "See answer payload updates in real-time by adding your answer to the form.",
          ]}
          imgSrc="/images/formbuilder-feature/sectionImg03.svg"
          imgAlt="BoostMarketingImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="order-2"
          ordering2="order-1"
          className="lg:pb-24 pb-10"
          titleClass="whitespace-nowrap"
        />
        <PointImgSection
          title="Effortless Form Management with AI No-Code Builder"
          points={[
            "No-code form builder allows updates without coding or technical jargon.",
            "Take control of your content and update it without developer help, with guardrails in place to prevent disruptions.",
          ]}
          imgSrc="/images/formbuilder-feature/sectionImg04.svg"
          imgAlt="AccountablityImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="lg:order-1 order-2"
          ordering2="lg:order-2 order-1"
          className="lg:pb-24 pb-10"
        />
        <PointImgSection
          title="Automations and Organization Tools"
          points={[
            "Manage multiple forms with tags, filters, and a content library.",
            "Seamlessly reuse content across forms for efficient management.",
          ]}
          imgSrc="/images/formbuilder-feature/sectionImg05.svg"
          imgAlt="AIRewriteImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="order-2"
          ordering2="order-1"
          className="lg:pb-24 pb-10"
          titleClass="md:whitespace-nowrap"
        />
        <DiscoverAboutAiInbox currentPage="formBuilder" />
      </div>
    </>
  );
};

export default FormBuilder;
