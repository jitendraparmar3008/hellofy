import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | Hellofy",
  description: "This is About Page for Hellofy",
  // other metadata
};

const FeaturesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Features" description="" />
      <AboutSectionOne />
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
    </>
  );
};

export default FeaturesPage;
