import { Feature } from "@/types/feature";
import FeatureCard from "../Common/FeatureCard";
import {
  OrderCommuIcon,
  FormBuilderIcon,
  BroadcastIcon,
  InboxIcon,
  ChatbotIcon,
  TemplateIcon,
} from "@/constant/icons";

const featuresData: Feature[] = [
  {
    title: "Broadcast Management",
    subTitle: "Reach customers 10x quicker with a targeted broadcast campaign.",
    description: (
      <>
        Reach selected contacts in bulk on their favorite messaging channels.
        Use tailored WhatsApp broadcasts to increase your open rate to as high
        as 98%. Ensure you’re never blocked by WhatsApp users by avoiding
        irrelevant content and too many group chats.
      </>
    ),
    image: "/images/features/broadcast.png",
    icon: <BroadcastIcon />,
    buttonName: "Discover more",
    link: "#",
    bgColor: "bg-anti_flash_white",
    width: 535,
    height: 316,
  },
  {
    title: "Order Communication",
    subTitle: "Streamline Customer Interactions and Boost Efficiency",
    description: (
      <>
        Gain insights into contact engagement and effectiveness of communication
        strategies. <br />
        <br />
        Group customers based on their behaviour, preferences, and purchase
        history. <br />
        <br />
        Assign follow-ups and tasks to team members for efficient management.
      </>
    ),
    image: "/images/features/order_communication.png",
    icon: <OrderCommuIcon />,
    buttonName: "Discover more",
    link: "#",
    bgColor: "bg-alice_blue",
    width: 528,
    height: 323,
  },
  {
    title: "Chatbot",
    subTitle: "Effortless Data Collection for Better Customer Insights.",
    description: (
      <>
        Simplify your communication with Hellofy. Automate conversations on
        WhatsApp effortlessly in a matter of clicks.
      </>
    ),
    image: "/images/features/chatbot.png",
    icon: <ChatbotIcon />,
    buttonName: "Discover more",
    link: "#",
    bgColor: "bg-snow",
    width: 504,
    height: 387,
  },
  {
    title: "Team Inbox",
    subTitle:
      "Boost Efficiency and Never Miss a Message with Powerful WhatsApp Inbox Management",
    description: (
      <>
        Stay on top of every important conversation by bringing all customer and
        prospect interactions into one convenient, easy-to-manage inbox.
      </>
    ),
    image: "/images/features/inbox.png",
    icon: <InboxIcon />,
    buttonName: "Discover more",
    link: "#",
    bgColor: "bg-mint_cream",
    width: 600,
    height: 425,
  },
  {
    title: "Form Builder",
    subTitle: "Effortless Data Collection for Better Customer Insights.",
    description: (
      <>
        Select built-in templates and further customise to your business needs
        with our form
        <br />
        <br />
        Create any type of survey, poll, quiz for feedback, and engagement.
        <br />
        <br />
        Build unique forms from scratch with the drag-and-drop builder.
      </>
    ),
    image: "/images/features/form_builder.png",
    icon: <FormBuilderIcon />,
    buttonName: "Discover more",
    link: "#",
    bgColor: "bg-floral_white",
    width: 429,
    height: 430,
  },

  {
    title: "Template Management",
    subTitle:
      "Empower Your Sales, Marketing, Service Teams with AI-Driven Personalized Interactions",
    description: (
      <>
        Push out your campaigns and engage with high response WhatsApp messages.
        <br />
        <br />
        Tag contacts, categorize and target them in groups using personalized
        communications
        <br />
        <br />
        Build and nurture the relationships that generate future sales by
        engaging with your audiences regularly on WhatsApp.
      </>
    ),
    image: "/images/features/template.png",
    icon: <TemplateIcon />,
    buttonName: "Discover more",
    link: "#",
    bgColor: "bg-mint_cream_medium",
    width: 514,
    height: 428,
  },
];
const AboutSectionOne = () => {
  return (
    <section id="about" className="max-w-[1421px] mx-auto">
      <h2 className="text-4xl 2xl:text-[46px] 2xl:leading-[65px] text-dark font-medium text-center mb-11">
        Features designed to{" "}
        <span className="text-primary ml-1.5">delight</span> both your customers
        and your team.
      </h2>
      <div className="flex flex-col gap-3.5">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            subTitle={feature.subTitle}
            description={feature.description}
            image={feature.image}
            icon={feature.icon}
            buttonName={feature.buttonName}
            link={feature.link}
            reverseorder={index % 2 !== 0}
            bgColor={feature.bgColor}
            width={feature.width}
            height={feature.height}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSectionOne;
