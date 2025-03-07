import { Feature } from "@/types/feature";
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
    title: "Broadcast Center",
    subTitle: "Expand your reach with personalized broadcasts.",
    description: (
      <>
        {/* <p>
          <span className="text-dark">✔</span> Reach multiple customers
          simultaneously with tailored messages.{" "}
        </p>
        <p>
          <span className="text-dark">✔</span> Schedule and automate broadcasts
          to save time and improve efficiency.
        </p>
        <p>
          <span className="text-dark">✔</span> Leverage templates and
          segmentation to deliver relevant content to the right audience.
        </p> */}
        <p>
          <span className="text-dark">✔</span> Personalize your messages and
          engage millions of customers in a single click.
        </p>
        <p>
          <span className="text-dark">✔</span> Schedule and automate one-time
          or recurring broadcasts effortlessly.
        </p>
        <p>
          <span className="text-dark">✔</span> Leverage the template gallery
          and customer groups to deliver the right content to the right
          audience.
        </p>
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
  // {
  //   title: "Order Communication",
  //   subTitle: "Streamline Customer Interactions and Boost Efficiency",
  //   description: (
  //     <>
  //       Gain insights into contact engagement and effectiveness of communication
  //       strategies. <br />
  //       <br />
  //       Group customers based on their behaviour, preferences, and purchase
  //       history. <br />
  //       <br />
  //       Assign follow-ups and tasks to team members for efficient management.
  //     </>
  //   ),
  //   image: "/images/features/order_communication.png",
  //   icon: <OrderCommuIcon />,
  //   buttonName: "Discover more",
  //   link: "#",
  //   bgColor: "bg-alice_blue",
  //   width: 528,
  //   height: 323,
  // },
  {
    title: "ChatFlow",
    subTitle: "Streamline interactions, engage round-the-clock.",
    description: (
      <>
        <p>
          <span className="text-dark">✔</span> Automate replies to manage
          inquiries and engage customers around the clock.
        </p>
        <p>
          <span className="text-dark">✔</span> Build and tailor bots
          effortlessly with an intuitive drag-and-drop editor.
        </p>
        <p>
          <span className="text-dark">✔</span> Seamlessly incorporate bots into
          workflows for quicker solutions.
        </p>
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
    title: "Conversation Center",
    subTitle: "Work together effortlessly, reply instantly.",
    description: (
      <>
        <p>
          <span className="text-dark">✔</span> All-in-one platform to
          efficiently handle and respond to customer messages without hassle.
        </p>
        <p>
          <span className="text-dark">✔</span> Access real-time insights with a
          comprehensive overview of every customer interaction.
        </p>
        <p>
          <span className="text-dark">✔</span> Simplify communication with an
          intuitive, WhatsApp-like interface for a seamless experience.
        </p>
      </>
    ),
    image: "/images/features/inbox.png",
    icon: <InboxIcon />,
    buttonName: "Discover more",
    link: "/features/inbox",
    bgColor: "bg-mint_cream",
    width: 600,
    height: 425,
  },
  {
    title: "SmartForm Builder",
    subTitle: "Create forms that deliver valuable feedback and drive results.",
    description: (
      <>
        <p>
          <span className="text-dark">✔</span> Build personalized forms to
          gather vital customer insights effortlessly.
        </p>
        <p>
          <span className="text-dark">✔</span> Utilize forms for surveys,
          feedback, and lead capture to enhance engagement.
        </p>
        <p>
          <span className="text-dark">✔</span> Seamlessly integrate responses
          into your CRM for efficient data management.
        </p>
      </>
    ),
    image: "/images/features/form_builder.png",
    icon: <FormBuilderIcon />,
    buttonName: "Discover more",
    link: "/features/form-builder",
    bgColor: "bg-floral_white",
    width: 429,
    height: 430,
  },

  {
    title: "Template Builder",
    subTitle:
      "Optimize communication with ready-to-use templates for faster and more consistent messaging.",
    description: (
      <>
        <p>
          <span className="text-dark">✔</span> Enhance communication with
          pre-approved messaging templates.
        </p>
        <p>
          <span className="text-dark">✔</span> Tailor templates for different
          purposes, from reminders to announcements.
        </p>
        <p>
          <span className="text-dark">✔</span> Ensure swift approvals while
          adhering to WhatsApp regulations.
        </p>
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
export default featuresData;
