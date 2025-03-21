"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowVector,
  Linkdin,
  Twitter,
  Facebook,
  Instagram,
  Aarrow,
} from "@/constant/icons";
import NavigationData from "./navigationData";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp dark:bg-gray-dark relative z-10 bg-primary xl:rounded-t-[72px] pt-16 md:pt-20 lg:pt-[92px]"
        data-wow-delay=".1s"
      >
        <div className="max-w-[1556px] mx-auto">
          <div className="flex flex-col md:flex-row items-center xl:items-end justify-center md:gap-9 text-white">
            <h1 className="text-3xl md:text-2xl lg:text-5xl 2xl:text-6xl font-normal 2xl:leading-[70px]">
              Let's bring your <br />
              &emsp;&emsp;&emsp; Chats to life!
            </h1>
            <ArrowVector className="hidden lg:block pt-4" />
            <div>
              <Link href="/" className="inline-block mb-3">
                <span className="text-white font-semibold text-3xl">
                  Hellofy
                </span>
              </Link>
              {/* <Link href="/" className="inline-block mb-3">
                <Image
                  src="/images/logo/logo.svg"
                  alt="logo"
                  width={140}
                  height={30}
                />
              </Link> */}
              {/* <p className="text-sm font-medium leading-5 mb-2">
                Just send us your contact email and we will contact you.
              </p> */}
              {/* <div className="flex items-center border border-white rounded-full py-[8px] px-2.5 lg:w-[472px]">
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className=" text-white placeholder:text-white/50 outline-none bg-transparent pr-1"
                />
                <button className="bg-white text-primary min-w-[38px] min-h-[38px] w-[38px] h-[38px] rounded-full ml-auto">
                  <Aarrow className="mx-auto" />
                </button>
              </div> */}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-16 lg:justify-items-center content-center pb-14 px-4 lg:px-0">
            <>
              {NavigationData.map((item, index) => (
                <div key={index}>
                  <h5 className="text-base text-white font-bold leading-4">
                    {item.heading}
                  </h5>
                  <ul className="mt-4">
                    {item.links.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.path}
                          target={link.newTab ? "_blank" : ""}
                          className="text-white/80 text-sm md:text-base md:leading-[30px] font-normal hover:text-white transition-all md:whitespace-nowrap whitespace-normal"
                          // style={{ textWrap: "nowrap" }}
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div>
                <h5 className="text-base text-white font-bold leading-4">
                  Talk To Us
                </h5>
                <ul className="my-4">
                  {/* <li>
                    <Link
                      href="mailto:support@ercom.com"
                      target=""
                      className="text-white/80 text-base leading-[30px] font-normal hover:text-white transition-all"
                    >
                      hello@hellofy.io
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link
                      href="tel:+66 2399 1145"
                      target=""
                      className="text-white/80 text-base leading-[30px] font-normal hover:text-white transition-all"
                    >
                      +66 2399 1145
                    </Link>
                  </li> */}
                </ul>

                <p className="text-white/80 text-base leading-[30px] font-normal hover:text-white transition-all mb-2">
                  Shams business centre,
                  <br /> Sharjah Media City Free Zone,
                  <br /> AI Messaned, Sharjah, UAE
                </p>

                <div className="w-full flex items-center gap-3.5">
                  {/* <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/hellofy/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BpMbuSiNvQhyy%2B2aOLYHaUg%3D%3D"
                    className="flex justify-center items-center w-10 h-10 rounded-full bg-white/25 hover:shadow-xl transition-all"
                  >
                    <Linkdin />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/hellofy.io/?igsh=MW44cHNvbG1lMTZpYQ%3D%3D"
                    className="flex justify-center items-center w-10 h-10 rounded-full bg-white/25 hover:shadow-xl transition-all"
                  >
                    <Instagram />
                  </Link> */}
                  {/* <Link
                    href=""
                    className="flex justify-center items-center w-10 h-10 rounded-full bg-white/25 hover:shadow-xl transition-all"
                  >
                    <Facebook />
                  </Link> */}
                  {/* <Link
                    href=""
                    className="flex justify-center items-center w-10 h-10 rounded-full bg-white/25 hover:shadow-xl transition-all"
                  >
                    <Twitter />
                  </Link> */}
                </div>
              </div>
            </>
          </div>
          <hr className="pb-7 lg:pb-14 max-w-5xl mx-auto border-white/20" />
          <div className="text-white font-normal text-base leading-[14px] text-center pb-3 md:pb-9">
            © 2025 Hellofy. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
