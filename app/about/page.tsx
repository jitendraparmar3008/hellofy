//import AboutSectionOne from "@/components/About/AboutSectionOne";
//import AboutSectionTwo from "@/components/About/AboutSectionTwo";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Hellofy",
  description: "This is About Us for Hellofy",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="About Us"
        description=""
      /> */}

      <div className="w-full my-[100px] ">
        <div className="container 2xl:py-16">
          <div className="w-full">
            <div className="lg:px-10 px-4 max-w-fit lg:h-[44px] h-[24px] text-center rounded-[64px] bg-lightcyan text-primary border border-white lg:text-sm text-xs flex items-center justify-center mx-auto">
              Our Goal
            </div>
            <h2 className="text-dark text-center font-bold text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-64 3xl:leading-[60px]">
              Revolutionizing business communication with the latest
              innovations.
            </h2>
          </div>
          {/* <Image
            src="/images/about/about_title.png"
            height={228}
            width={1411}
            alt="about_title"
            className="mx-auto mt-8"
          /> */}
          <div className="mx-auto text-center 2xl:w-[1160px] w-full mt-8 xl:mt-16">
            <p className="text-dark xl:text-3xl text-base mb-5">
              Hellofy is an AI-driven Omnichannel Conversation Suite designed to
              elevate customer engagement. This all-in-one platform enables
              businesses to craft personalized customer journeys with ease.
              Committed to redefining communication, Hellofy helps organizations
              optimize workflows around impactful conversations.
            </p>
            <p className="text-dark xl:text-3xl text-base">
              From marketing and sales to customer support, Hellofy enhances
              business efficiency with powerful conversational AI. By automating
              routine processes, improving customer interactions, and
              providingHellofy is an AI-driven Omnichannel Conversation Suite
              designed to elevate customer engagement. This all-in-one platform
              enables businesses to craft personalized customer journeys with
              ease. Committed to redefining communication, Hellofy helps
              organizations optimize workflows around impactful conversations.
            </p>
            <p className="text-dark xl:text-3xl text-base">
              From marketing and sales to customer support, Hellofy enhances
              business efficiency with powerful conversational AI. By automating
              routine processes, improving customer interactions, and providing
              exceptional support, this customer-focused solution fuels
              scalability and accelerates business success.
            </p>
          </div>
          {/* <h1 className=" text-2xl font-bold text-black dark:text-white sm:text-3xl mt-[100px] mb-[100px] text-center">Our Team</h1>
        <div className="justify-center flex items-center">
          <img src="/images/hellofy/our_team.png" alt="" className="w-2/3" />
        </div> */}
        </div>
        <div className=" w-full relative xl:h-96 h-40 xl:top-0 hidden lg:block">
          <Image
            src="images/about/vector_about_title.svg"
            layout="fill"
            alt="vector_about_title"
            objectFit="cover"
          />
        </div>
        <div className="w-full relative -top-16 hidden">
          <div className="container">
            <h2 className="text-dark text-center font-bold text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-52 3xl:leading-[60px]">
              The Team That Drives Us
            </h2>
            <p className="text-dark xl:text-3xl text-center text-base 2xl:w-[1160px] w-full mx-auto">
              Meet the people driving our vision, each adding their expertise
              and enthusiasm to achieve our goals together.
            </p>
            <Image
              src="/images/about/our_team.png"
              height={908}
              width={1210}
              alt="our_team"
              className="mx-auto mt-16"
            />
          </div>
          <div className="w-full mt-16 hidden">
            <div className="container">
              <div className="w-full linear_bg_about relative z-10 rounded-t-3xl">
                <div className="lg:w-[556px] w-full mx-auto text-center">
                  <h2 className="text-dark text-center font-bold text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-52 3xl:leading-[60px]">
                    We’re Here
                  </h2>
                  <p className="text-dark xl:text-3xl text-center text-base">
                    Join us for coffee and great conversation.
                  </p>
                  <div className="w-full text-center">
                    <Image
                      src="/images/about/map_icon.svg"
                      height={50}
                      width={48}
                      alt="map_icon"
                      className="mx-auto my-4"
                    />
                    <p className="text-dark text-xl">
                      A -1107, PNTC, Radio mirchi road,
                      <br /> Vejalpur, Ahmedabad
                    </p>
                  </div>
                </div>
                <div className="w-full mt-16">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3852667813208!2d72.51798848584784!3d23.009622263150987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85395123973b%3A0x73399d601f1d43de!2sPNTC!5e0!3m2!1sen!2sin!4v1732877545430!5m2!1sen!2sin"
                    width="100%"
                    height="600"
                    style={{ border: "0" }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/images/about/map_section_vector.png"
            layout="fill"
            alt="map_section_vector"
            objectFit="cover"
          />
        </div>
      </div>
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
