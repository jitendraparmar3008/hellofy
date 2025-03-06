import Breadcrumb from "@/components/Common/Breadcrumb";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Hellofy",
  description: "This is Privacy Policy for Hellofy",
  // other metadata
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb pageName="Privacy Policy" description="" />
      <PrivacyPolicy />
    </>
  );
};

export default PrivacyPolicyPage;
