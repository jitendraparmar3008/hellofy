import Image from "next/image";
import React, { ReactNode } from "react";

interface PointImgSectionProps {
  title: string;
  points: ReactNode[];
  imgSrc: string;
  imgAlt: string;
  imgHeight: number;
  imgWidth: number;
  ordering1: string;
  ordering2: string;
  className?: string;
  titleClass?: string;
  imgClass?: string;
}

const PointImgSection: React.FC<PointImgSectionProps> = ({
  title,
  points,
  imgSrc,
  imgAlt,
  imgHeight,
  imgWidth,
  ordering1,
  ordering2,
  className,
  titleClass,
  imgClass,
}) => {
  return (
    <div
      className={`w-full px-2.5 md:px-10 lg:px-0 flex pb-10 lg:pb-24 ${className}`}
    >
      <div className="container mx-auto">
        <div className="w-full flex lg:flex-row flex-col items-center gap-24">
          <div className={`max-w-[590px] ${ordering1}`}>
            <h3
              className={`md:text-4xl text-2xl font-semibold text-dark break-words ${titleClass}`}
            >
              {title}
            </h3>
            <ul className="list-disc pl-5 mt-4">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="text-dark md:text-xl leading-6 text-sm mb-4"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className={`w-full ${ordering2}`}>
            <Image
              src={imgSrc}
              alt={imgAlt}
              height={imgHeight}
              width={imgWidth}
              style={{ maxHeight: `${imgHeight}px`, maxWidth: `${imgWidth}px` }}
              className={`w-full ${imgClass}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointImgSection;
