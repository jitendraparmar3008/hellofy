import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FeatureCardProps {
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  titleBg: string;
  content: string[];
  dataAos?: string;
  dataAosDelay?: string;
}

const Card: React.FC<FeatureCardProps> = ({
  href,
  imgSrc,
  imgAlt,
  title,
  titleBg,
  content,
  dataAos,
  dataAosDelay,
}) => {
  return (
    <div
      className="w-full flex items-center"
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <Link href={href} className="custom-pointer cursor-none">
        <Image src={imgSrc} width={750} height={788} alt={imgAlt} />
        <div className="w-full border border-grey_100 border-t-0 max-h-[300px] rounded-b-[33px] relative">
          <h3
            className={`text-white text-xl xl:text-[32px] font-semibold px-4 py-1 ${titleBg} `}
          >
            {title}
          </h3>
          <div className="w-full py-4">
            {content.map((paragraph, index) => (
              <p key={index} className="text-sm mb-2 px-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
