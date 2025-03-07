import { Metadata } from "next";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import OorderInvoiceView from "@/components/OrderInvoiceView";
import Features from "@/components/Features";
import Services from "@/components/services";
import Contact from "@/components/Contact";
import GetInTouchWithUs from "@/components/GetInTouchWithUs";

export const metadata: Metadata = {
  title: "Hellofy",
  description: "Hellofy",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Services /> */}

      {/* <OorderInvoiceView /> */}
      <GetInTouchWithUs />
      {/* <Contact /> */}
    </>
  );
}
