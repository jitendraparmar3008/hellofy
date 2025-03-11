import DiscoverAboutAiInbox from "@/components/DiscoverAboutAiInbox";
import PointImgSection from "@/components/Common/PointImgSection";
import { Metadata } from "next";
import HeroBroadcastManagement from "@/components/HeroBroadcastManagement";
export const metadata: Metadata = {
  title: "Broadcast Management Page",
  description: "This is Broadcast Management Page",
  // other metadata
};

const BroadcastManagement = () => {
  return (
    <>
      <HeroBroadcastManagement />
      <div className="max-w-[1420px] mx-auto pb-32">
        <PointImgSection
          title="Comprehensive Broadcast Management"
          points={[
            <>
              <strong>Clear Broadcast Overview:</strong> View and manage all
              broadcasts effortlessly.
            </>,
            <>
              <strong>Detailed Status Tracking:</strong> Monitor broadcasts with
              real-time status updates.
            </>,
            <>
              <strong>Smart Filters:</strong> Quickly find broadcasts by status,
              template, name, or date.
            </>,
            <>
              <strong>Daily Limit Tracking:</strong> Stay informed with a
              "Today's Limit" tag showing sent and remaining broadcasts.
            </>,
          ]}
          imgSrc="/images/broadcast-feature/broadcast-feature01.svg"
          imgAlt="InteractionImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="lg:order-1 order-2"
          ordering2="lg:order-2 order-1"
          className="lg:py-24 py-10 "
          titleClass="lg:whitespace-nowrap whitespace-normal "
        />
        <PointImgSection
          title="Advanced Audience Selection"
          points={[
            <>
              <strong>Personalized Outreach:</strong> Deliver tailored messages
              to the right audience for higher engagement.
            </>,
            <>
              <strong>Custom Contact Groups:</strong> Select specific groups
              based on your broadcast needs.
            </>,
            <>
              <strong>Easy Audience Selection:</strong> Use intuitive tools to
              streamline targeting and improve efficiency.
            </>,
            <>
              <strong>Relevant Communication:</strong> Ensure messages reach the
              right recipients for maximum impact.
            </>,
          ]}
          imgSrc="/images/broadcast-feature/broadcast-feature02.svg"
          imgAlt="TemplateManagementImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="lg:order-2 order-2"
          ordering2="lg:order-1 order-1"
          className="lg:pb-24 pb-10"
          titleClass="lg:whitespace-nowrap whitespace-normal "
        />
        <PointImgSection
          title="Thorough Review & Message Preview"
          points={[
            <>
              <strong>Verify Accuracy:</strong> Ensure effectiveness before
              sending your broadcast.
            </>,
            <>
              <strong>Detailed Confirmation Page:</strong> Check all broadcast
              details before submission.
            </>,
            <>
              <strong>Preview Pane:</strong> See exactly how your message will
              appear to recipients.
            </>,
            <>
              <strong>Final Tweaks:</strong> Easily make last-minute adjustments
              for a flawless broadcast.
            </>,
          ]}
          imgSrc="/images/broadcast-feature/broadcast-feature03.svg"
          imgAlt="BoostMarketingImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="lg:order-1 order-2"
          ordering2="lg:order-2 order-1"
          className="lg:pb-24 pb-10"
          titleClass="lg:whitespace-nowrap whitespace-normal "
        />
        <PointImgSection
          title="Analytics-Powered Insights for Smarter Campaigns"
          points={[
            <>
              <strong>Data-Driven Decisions:</strong> Enhance your campaigns
              with valuable insights.
            </>,
            <>
              <strong>Analytics Overview:</strong> Click the Analytics button
              for detailed performance metrics.
            </>,
            <>
              <strong>Track Key Metrics:</strong> Monitor delivery rates,
              engagement, and overall success.
            </>,
            <>
              <strong>Refine Strategies:</strong> Use insights to improve future
              campaign results.
            </>,
          ]}
          imgSrc="/images/broadcast-feature/broadcast-feature04.svg"
          imgAlt="AccountablityImg"
          imgHeight={565}
          imgWidth={750}
          ordering1="lg:order-2 order-2"
          ordering2="lg:order-1 order-1"
          className="lg:pb-24 pb-10"
        />

        <DiscoverAboutAiInbox currentPage="broadcast" />
      </div>
    </>
  );
};

export default BroadcastManagement;
