import Breadcrumb from "@/components/Common/Breadcrumb";
import TermsOfService from "@/components/TermsOfService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms Of Service | Hellofy",
  description: "This is Terms Of Service for Hellofy",
  // other metadata
};

const TermsOfServicePage = () => {
  return (
    <>
      <Breadcrumb pageName="Terms Of Service" description="" />
      <TermsOfService />
    </>
  );
};

export default TermsOfServicePage;
