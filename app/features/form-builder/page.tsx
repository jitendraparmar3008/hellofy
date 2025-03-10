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
          title="Create Forms Easily, Anytime, Anywhere"
          points={[
            "Design and control forms effortlessly from any device, with smooth online and offline access.",
            "Work with your team in real-time, streamlining data collection.",
            "Enjoy the full capabilities of the form builder, whether at your desk or on the move.",
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
          title="Adaptive Form Builder"
          points={[
            "Effortlessly tailor enterprise forms with a versatile builder.",
            "Stay ahead of changing needs, ensuring forms adapt seamlessly to evolving business processes.",
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
          title="Record Responses and Track Events"
          points={[
            "Integrate forms into your website to capture events and responses seamlessly.",
            "Track real-time answer updates by submitting responses directly within the form.",
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
          title="Seamless Form Management with an AI-Powered No-Code Builder"
          points={[
            "The no-code form builder enables effortless updates without coding or technical complexity.",
            "Maintain full control over your content and make changes independently, with built-in safeguards to ensure stability.",
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
          title="Automation and Workflow Management Tools"
          points={[
            "Organize and manage multiple forms with tags, filters, and a centralized content library.",
            "Effortlessly reuse content across forms for streamlined efficiency.",
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
