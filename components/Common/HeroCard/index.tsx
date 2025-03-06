import React from "react";
import Image from "next/image";

interface HeroCardProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  iconColor?: string;
  borderColor: string;
}

const HeroCard: React.FC<HeroCardProps> = ({
  icon: Icon,
  title,
  description,
  borderColor,
  iconColor,
}) => {
  return (
    <div
      className={`border h-[245px] border-aero_blue px-6 py-7 text-center rounded-2xl bg-white flex items-center justify-center flex-col gap-3 max-w-[426px] w-full ${borderColor}`}
    >
      <span className={`${iconColor}`}>
        <Icon />
      </span>
      <h3 className="2xl:text-3xl text-2xl font-medium text-dark">{title}</h3>
      <p className="lg:text-xl leading-[22px] text-sm text-battleship_gray">
        {description}
      </p>
    </div>
  );
};

export default HeroCard;
