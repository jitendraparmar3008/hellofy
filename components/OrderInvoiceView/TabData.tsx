import { TickMark } from "@/constant/icons";

const TabsList = [
  {
    id: 1,
    title: "Registration",
    tab: "registration",
    image: "/images/order/register_form.svg",
    mobileView: "/images/order/registration_gif.gif",
    description: (
      <>
        <ul className="flex flex-col gap-5">
          <li className="flex items-start gap-3">
            <TickMark className="scale-75 md:scale-100 min-w-[26px]" />
            <span className="text-dark font-normal text-sm md:text-xl md:leading-6">
              The chatbot greets the user and prompts them to select their
              preferred language, ensuring a personalized experience.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <TickMark className="scale-75 md:scale-100 min-w-[26px]" />
            <span className="text-dark font-normal text-sm md:text-xl md:leading-6">
              The chatbot then requests the user's PAN card details, securely
              collecting the necessary information for registration.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <TickMark className="scale-75 md:scale-100 min-w-[26px]" />
            <span className="text-dark font-normal text-sm md:text-xl md:leading-6">
              After the user submits their PAN card, the chatbot promptly
              confirms the registration with a "Thank you" message, completing
              the process.
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    title: "Feedback Form",
    tab: "feedback",
    image: "/images/order/feedback_form_info.svg",
    mobileView: "/images/order/feedback_mobile.svg",
    description: (
      <>
        <ul className="flex flex-col gap-5">
          <li className="flex items-start gap-3">
            <TickMark className="scale-75 md:scale-100 min-w-[26px]" />
            <span className="text-dark font-normal text-sm md:text-xl md:leading-6">
              Create tailored feedback forms to gather insights on customer
              satisfaction, such as coffee quality, ambiance, and overall
              experience.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <TickMark className="scale-75 md:scale-100 min-w-[26px]" />
            <span className="text-dark font-normal text-sm md:text-xl md:leading-6">
              Use feedback data to make improvements and deliver a better café
              or service experience.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <TickMark className="scale-75 md:scale-100 min-w-[26px]" />
            <span className="text-dark font-normal text-sm md:text-xl md:leading-6">
              Automatically organize customer feedback, including ratings and
              contact details, for easy follow-up and actionable insights.
            </span>
          </li>
        </ul>
      </>
    ),
  },
  // {
  //   id: 3,
  //   title: "Lead Generate",
  //   tab: "leadgenerate",
  //   image: "/images/order/feedback_form_info.svg",
  //   mobileView: "/images/order/feedback_mobile.svg",
  //   description: (
  //     <>
  //       <ul className="flex flex-col gap-5">
  //         <li className="flex items-start gap-3">
  //           <TickMark className="scale-75 md:scale-100 min-w-[26px]" />
  //           <span className="text-dark font-normal text-sm md:text-xl md:leading-6">
  //             Utilize the built-in order form builder and integrate with your
  //             ERP or billing system.
  //           </span>
  //         </li>
  //         <li className="flex items-start gap-3">
  //           <TickMark className="scale-75 md:scale-100 min-w-[26px]" />
  //           <span className="text-dark font-normal text-sm md:text-xl md:leading-6">
  //             Share forms with customers, dealers, distributors, retailers, and
  //             sales representatives to enable order placement and automatic
  //             invoice generation.
  //           </span>
  //         </li>
  //         <li className="flex items-start gap-3">
  //           <TickMark className="scale-75 md:scale-100 min-w-[26px]" />
  //           <span className="text-dark font-normal text-sm md:text-xl md:leading-6">
  //             Automatically send E-invoices, challans, E-way bills, and payment
  //             reminders based on due dates, among other features
  //           </span>
  //         </li>
  //       </ul>
  //     </>
  //   ),
  // },
  {
    id: 4,
    title: "Survey",
    tab: "survey",
    image: "/images/order/survey_info_vector.svg",
    mobileView: "/images/order/survey_mobile.svg",
    description: (
      <>
        <ul className="flex flex-col gap-5">
          <li className="flex items-start gap-3">
            <TickMark className="scale-75 md:scale-100 min-w-[26px]" />
            <span className="text-dark font-normal text-sm md:text-xl md:leading-6">
              Easily create tailored survey forms to gather insights on customer
              preferences, feedback, and experiences directly through WhatsApp.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <TickMark className="scale-75 md:scale-100 min-w-[26px]" />
            <span className="text-dark font-normal text-sm md:text-xl md:leading-6">
              Use surveys to interact with customers, understand their needs,
              and improve your offerings based on real-time data
            </span>
          </li>
          <li className="flex items-start gap-3">
            <TickMark className="scale-75 md:scale-100 min-w-[26px]" />
            <span className="text-dark font-normal text-sm md:text-xl md:leading-6">
              Automatically organize and analyze survey responses to make
              data-driven decisions effortlessly.
            </span>
          </li>
        </ul>
      </>
    ),
  },
  // {
  //   id: 5,
  //   title: "Survey1",
  //   tab: "survey1",
  //   description: (
  //     <>
  //       <span>Survey1</span>
  //     </>
  //   ),
  // },
];

export default TabsList;
