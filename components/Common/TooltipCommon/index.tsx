import React, { ReactNode } from "react";
import { classNames } from "./ClassNames";

type TooltipCommonProps = {
  position: "top" | "bottom" | "left" | "right";
  content: ReactNode;
  children: ReactNode;
  bgColor?: string;
  wrapClass?: string;
  isHide?: boolean;
  mainClass?: string;
  contentClass?: string;
};

const getArrowSvg = (
  position: "top" | "bottom" | "left" | "right",
  bgColor: any,
) => {
  switch (position) {
    case "top":
      return (
        <svg
          viewBox="0 0 14 9"
          fill="none"
          height={9}
          width={14}
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-2 rotate-180 left-1/2 -translate-x-1/2 text-bg_common_tooltip"
        >
          <path
            d="M9.33753 0.116924C7.08296 4.61939 6.12407 5.45545 0.754578 8.13155L13.8163 8.13059C13.5664 4.18206 12.516 3.01196 9.33753 0.116924Z"
            // fill={"#6B6A6A"}
            style={{ fill: bgColor ? bgColor : "#6B6A6A" }}
            // className={`${bgColor ? `fill-${[bgColor]}` : "fill-[#6B6A6A]"}`}
          />
        </svg>
      );
    case "bottom":
      return (
        <svg
          height={9}
          width={14}
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-2 rotate-[0deg] left-1/2 -translate-x-1/2 text-bg_common_tooltip"
        >
          <path
            d="M9.33753 0.116924C7.08296 4.61939 6.12407 5.45545 0.754578 8.13155L13.8163 8.13059C13.5664 4.18206 12.516 3.01196 9.33753 0.116924Z"
            // fill="#6B6A6A"
            style={{ fill: bgColor ? bgColor : "#6B6A6A" }}
            // className="fill-[#6B6A6A]"
          />
        </svg>
      );
    case "left":
      return (
        <svg
          height={9}
          width={14}
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 -translate-y-1/2 -right-2.5 rotate-[96deg] text-bg_common_tooltip"
        >
          <path
            d="M9.33753 0.116924C7.08296 4.61939 6.12407 5.45545 0.754578 8.13155L13.8163 8.13059C13.5664 4.18206 12.516 3.01196 9.33753 0.116924Z"
            // fill="#6B6A6A"
            style={{ fill: bgColor ? bgColor : "#6B6A6A" }}
            // className="fill-[#6B6A6A]"
          />
        </svg>
      );
    case "right":
      return (
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          className="absolute top-1/2 -translate-y-1/2 -left-2 text-bg_common_tooltip"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.436295 8.67285C4.95239 6.36717 5.93262 5.39881 8.57134 -0.000805246L8.57005 13.0601C4.58444 12.8552 3.39233 11.8182 0.436295 8.67285Z"
            // fill="#6B6A6A"
            style={{ fill: bgColor ? bgColor : "#6B6A6A" }}
            // className="fill-[#6B6A6A]"
          />
        </svg>
      );
    default:
      return null;
  }
};

export const TooltipCommon: React.FC<TooltipCommonProps> = ({
  position,
  content,
  children,
  wrapClass,
  bgColor,
  isHide,
  mainClass,
  contentClass,
}) => (
  <div
    id="tooltip"
    className={`relative cursor-pointer group w-fit ${mainClass}`}
  >
    <div className="mx-0 my-0 flex items-center">{children}</div>
    {content && (
      <span
        style={{ background: bgColor ? bgColor : "#6B6A6A" }}
        className={classNames(
          "absolute z-50 hidden group-hover:inline-block text-white text-xs p-2 max-w-[500px] w-max rounded whitespace-pre-wrap overflow break-words",
          wrapClass ? wrapClass : "",
          isHide && "!hidden group-hover:!hidden",
          position === "top"
            ? "left-1/2 -translate-x-1/2 bottom-[calc(100%+11px)]"
            : "",
          position === "bottom"
            ? "left-1/2 -translate-x-1/2 top-[calc(100%+11px)]"
            : "",
          position === "left"
            ? "top-1/2 -translate-y-1/2 right-[calc(100%+11px)]"
            : "",
          position === "right"
            ? "top-1/2 -translate-y-1/2 left-[calc(100%+11px)]"
            : "",
        )}
      >
        {getArrowSvg(position, bgColor)}
        {content && (
          <div className={`p-0 m-0 flex flex-col ${contentClass}`}>
            {" "}
            {content}
          </div>
        )}
      </span>
    )}
  </div>
);
