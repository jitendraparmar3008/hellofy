import React from "react";

interface DiscoverCardProps {
  title: string;
  subtitle: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  iconColor?: string;
  iconBg?: string;
  borderColor?: string;
  onClick?: () => void;
}

const DiscoverCard: React.FC<DiscoverCardProps> = ({
  title,
  subtitle,
  icon: Icon,
  iconColor,
  iconBg,
  borderColor,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`shadow-theme1_shadow border-2 bg-white_300 ${borderColor} rounded-2xl p-7 relative transform transition duration-500 hover:scale-105 cursor-pointer`}
    >
      <div
        className={`h-[80px] w-[80px] absolute flex items-center justify-center ${iconBg} rounded-full -top-10 mx-auto left-0 right-0`}
      >
        <span className={`${iconColor}`}>
          <Icon />
        </span>
      </div>
      <h3 className="md:text-[26px] md:leading-[30px] text-xl font-semibold text-dark mt-6 mb-5">
        {title}
      </h3>
      <p className="md:text-base md:leading-[18px] text-sm text-battleship_gray font-normal">
        {subtitle}
      </p>
    </div>
  );
};

export default DiscoverCard;
