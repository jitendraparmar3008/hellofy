import { Feature } from "@/types/feature";
import Image from "next/image";
import Link from "next/link";

const FeatureCard: React.FC<Feature> = ({
  title,
  subTitle,
  description,
  image,
  icon,
  buttonName,
  link,
  reverseorder,
  bgColor,
  width,
  height,
}) => {
  return (
    <div
      className={`block lg:flex items-center lg:h-[488px] lg:max-h-[488px] gap-[114px] w-full py-5 px-4 md:py-0 md:px-[58px] rounded-[20px]`}
    >
      <div
        className={`flex items-center justify-center h-full w-full rounded-[20px] p-7 ${
          reverseorder ? "order-2" : "order-1"
        } ${bgColor}`}
      >
        <Image
          src={image}
          alt="feature_image"
          width={width}
          height={height}
          unoptimized
        />
      </div>
      <div
        className={`w-full mt-2.5 lg:mt-0 ${
          reverseorder ? "order-1" : "order-2"
        }`}
      >
        <h3 className="flex items-center gap-2.5 md:gap-5 mb-2 md:mb-4 pb-2 md:pb-5 text-lg font-bold text-dark sm:text-xl md:text-2xl xl:text-4xl border-b border-dark">
          {icon}
          <span>{title}</span>
        </h3>
        <div className="text-dark font-medium text-lg lg:text-3xl mb-3">
          {`${subTitle}`}
        </div>
        <div className="text-xs md:text-base leading-[18px] text-dark_grey">
          {description}
        </div>
        <Link
          href={link}
          className="ease-in-up hover:shadow-btn-hover rounded-lg w-fit bg-primary px-4 py-2.5 text-sm md:text-base font-medium text-white transition duration-300 hover:bg-opacity-90 block max-h-11 mt-5"
        >
          {buttonName}
        </Link>
      </div>
    </div>
  );
};
export default FeatureCard;
