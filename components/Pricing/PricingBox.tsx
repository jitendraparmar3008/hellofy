// import { useRouter } from "next/router";
import Link from "next/link";
// import { useNavigate } from "react-router-dom";
import PriceContactModal from "../Common/PriceContactModal";
import { useState } from "react";

const PricingBox = (props: {
  price?: string;
  duration?: string;
  packageName: string;
  subtitle: string;
  subtitle1: string;
  children?: React.ReactNode;
  planType?: string;
}) => {
  const {
    price,
    duration,
    packageName,
    subtitle,
    subtitle1,
    children,
    planType,
  } = props;

  // const router = useRouter();
  const [showPricingModal, setShowPricingModal] = useState(false);

  const handleOpenPricingModal = () => {
    setShowPricingModal(true);
  };
  const handleClosePricingModal = () => {
    setShowPricingModal(false);
  };
  // const handleContactClick = () => {
  //   router.push("/contact");
  //   setShowPricingModal(false);
  // };
  return (
    <>
      <div className="w-full">
        <div
          className="wow fadeInUp shadow-three dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark relative z-10 rounded-sm bg-white border border-french_gray px-8 py-10 hover:shadow-one min-h-[731px] h-full"
          data-wow-delay=".1s"
        >
          <div className="flex flex-col h-[104px] max-h-[104px]">
            <h4 className="mb-2 text-2xl font-bold text-dark dark:text-white">
              {packageName}
            </h4>
            <p className="mb-2 text-sm text-body-color">{subtitle}</p>
            <h3 className="price mb-2 text-xl font-bold text-black dark:text-white">
              <span className="amount">{price}</span>
              <span className="time text-body-color">{duration}</span>
            </h3>
          </div>
          <div className="mb-8  pb-8 dark:border-white dark:border-opacity-10">
            {planType === "custom" ? (
              <button
                onClick={handleOpenPricingModal}
                className="flex w-full items-center justify-center  rounded-xl bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
              >
                Contact Us
              </button>
            ) : (
              <Link
                href="/book-a-demo"
                className="flex w-full items-center justify-center  rounded-xl bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
              >
                Select Plan
              </Link>
            )}
          </div>
          <div>{children}</div>
          <div className="absolute bottom-0 right-0 z-[-1]">
            <svg
              width="179"
              height="158"
              viewBox="0 0 179 158"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
                fill="url(#paint0_linear_70:153)"
              />
              <path
                opacity="0.3"
                d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
                fill="url(#paint1_linear_70:153)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_70:153"
                  x1="69.6694"
                  y1="29.9033"
                  x2="196.108"
                  y2="83.2919"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#009a73" stopOpacity="0.62" />
                  <stop offset="1" stopColor="#009a73" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_70:153"
                  x1="165.348"
                  y1="-75.4466"
                  x2="-3.75136"
                  y2="103.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#009a73" stopOpacity="0.62" />
                  <stop offset="1" stopColor="#009a73" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <PriceContactModal
        showPricingModal={showPricingModal}
        handleClosePricingModal={handleClosePricingModal}
      />
    </>
  );
};

export default PricingBox;

// import Link from "next/link";

// interface PlanCardProps {
//   title?: string;
//   description?: string;
//   currency?: string;
//   pirce?: string;
//   validity?: string;
//   status?: string;
//   wrapclassName?: string;
//   buttonName?: string;
//   onClick?: () => void;
//   features?: any;
//   selectedPlan?: boolean;
//   planType?: string;
// }

// const PricingBox: React.FC<PlanCardProps> = ({
//   title,
//   description,
//   wrapclassName,
//   currency,
//   pirce,
//   validity,
//   buttonName = "",
//   features,
//   selectedPlan,
//   planType,
// }) => {
//   return (
//     <>
//       {planType === "custom" ? (
//         <div
//           className={`wow fadeInUp shadow-three dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark relative z-10 rounded-sm bg-white border border-french_gray px-8 py-10 hover:shadow-one min-h-[731px]  ${wrapclassName}`}
//         >
//           {title && (
//             <h2 className="text-[22px] text-dark font-bold leading-6 mb-2.5">
//               {title}
//             </h2>
//           )}
//           {description && (
//             <p
//               title={description}
//               className="text-base font-normal leading-[18px] text-battleship_gray min-h-[164px]"
//             >
//               {description}
//             </p>
//           )}
//           {pirce && (
//             <div className="flex items-center mt-5 mb-6 gap-2">
//               <div className="font-semibold text-[56px] leading-[65px] text-dark">
//                 {currency}
//                 {pirce}
//               </div>
//               <span className="text-base font-light leading-[18px] text-battleship_gray">
//                 / {validity}
//               </span>
//             </div>
//           )}
//           <Link
//             href="/book-a-demo"
//             className="flex w-full items-center justify-center rounded bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
//           >
//             {buttonName}
//           </Link>
//           {features && (
//             <ul className="mt-6">
//               {features.map((item: any, index: number) => (
//                 <li
//                   key={index}
//                   className="flex items-center gap-2 text-base font-medium leading-[18px] mb-3 last:mb-0"
//                 >
//                   <span className="text-battleship_gray">{item.feature} -</span>
//                   <span className="text-dark">{item.value}</span>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       ) : (
//         <div
//           className={`wow fadeInUp shadow-three dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark relative border z-10 rounded-sm bg-white px-8 py-10 hover:shadow-one min-h-[731px]  ${wrapclassName} ${
//             selectedPlan ? "border-primary" : " border-french_gray"
//           }`}
//         >
//           {title && (
//             <h2 className="text-[22px] text-dark font-bold leading-6 mb-2.5">
//               {title}
//             </h2>
//           )}
//           {description && (
//             <p
//               title={description}
//               className="text-base font-normal leading-[18px] text-battleship_gray h-14 max-h-14 overflow-hidden line-clamp-3"
//             >
//               {description}
//             </p>
//           )}
//           {pirce && (
//             <div className="flex items-center mt-5 mb-6 gap-2 h-16 max-h-16">
//               <div className="font-semibold text-[56px] leading-[65px] text-dark">
//                 {currency}
//                 {pirce}
//               </div>
//               <span className="text-base font-light leading-[18px] text-battleship_gray">
//                 / {validity}
//               </span>
//             </div>
//           )}
//           <Link
//             href="/book-a-demo"
//             className={`flex w-full border-[1.5px] items-center justify-center rounded  p-3 text-base font-semibold  transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp ${
//               selectedPlan
//                 ? "bg-primary text-white"
//                 : "text-primary border-primary hover:bg-primary hover:text-white"
//             }`}
//           >
//             {buttonName}
//           </Link>
//           {features && (
//             <ul className="mt-6">
//               {features.map((item: any, index: number) => (
//                 <li
//                   key={index}
//                   className="flex items-center gap-2 text-base font-medium leading-[18px] mb-3 last:mb-0"
//                 >
//                   <span className="text-battleship_gray">{item.feature} -</span>
//                   <span className="text-dark">{item.value}</span>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default PricingBox;
