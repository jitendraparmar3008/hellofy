import { Phone, Email, CornerVector } from "@/constant/icons";
import Link from "next/link";
const GetInTouchWithUs = () => {
  return (
    <section
      id="contact"
      style={{
        backgroundImage: "url(/images/hero/hero_bg.png)",
        backgroundSize: "100% 100%",
      }}
      className="overflow-hidden px-5 md:px-[58px] lg:px-0 bg-no-repeat pt-[150px] pb-[110px]"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1568px] mx-auto gap-10 3xl:gap-[164px] lg:px-10 3xl:px-0">
        <div>
          <div className="text-primary text-lg md:text-xl md:leading-6 font-normal mb-1 md:mb-2.5">
            Contact Us
          </div>
          <h2 className="text-dark text-2xl md:text-4xl md:leading-6 font-semibold mb-3 md:mb-6 border-b-4 border-primary w-fit">
            Get in touch with us
          </h2>
          <p className="text-dark text-base md:text-xl md:leading-6 font-normal">
            Get in touch to learn how our WhatsApp CRM can help you manage
            customer conversations effortlessly.
          </p>

          <ul className="mt-11">
            <li className="flex items-center gap-5 mb-11">
              <div className="flex items-center rounded justify-center w-[60px] h-[60px] bg-primary">
                <Phone />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-battleship_gray leading-4">
                  Phone Number
                </span>
                <Link
                  href="tel:+91-9724323103"
                  className="text-base font-normal leading-5 text-dark hover:text-primary"
                >
                  +91-9724323103
                </Link>
              </div>
            </li>
            <li className="flex items-center gap-5">
              <div className="flex items-center rounded justify-center w-[60px] h-[60px] bg-primary">
                <Email />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-battleship_gray leading-4">
                  Email address
                </span>
                <Link
                  href="mailto:hello@hellofy.io"
                  className="text-base font-normal leading-5 text-dark hover:text-primary"
                >
                  hello@hellofy.io
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className=" flex flex-wrap relative">
          <div className="w-full">
            <div className="bg-white rounded-3xl w-full h-full max-w-[722px] shadow-three">
              <div className="hidden md:block absolute top-6 left-6 w-full bg-transparent border-2 border-dark rounded-3xl h-full max-w-[722px] " />
              <CornerVector className="absolute -top-11 -left-8  md:-top-12 md:-left-10 scale-[0.7] md:scale-100" />
              <div
                className="relative rounded-3xl px-8 py-11 sm:p-[55px] lg:px-8 xl:p-[88px] bg-white z-10"
                data-wow-delay=".15s
              "
              >
                <form>
                  <div className=" flex flex-wrap">
                    <div className="w-full">
                      <div className="mb-6">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium leading-4 text-dark dark:text-white"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="border-french_gray  w-full rounded-md border p-3 h-[44px] text-sm leading-4 text-battleship_gray outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="mb-6">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium leading-4 text-dark dark:text-white"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="border-french_gray  w-full rounded-md border p-3 h-[44px] text-sm leading-4 text-battleship_gray outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="mb-6">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium leading-4 text-dark dark:text-white"
                        >
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          placeholder="Enter your Message"
                          className="border-french_gray  w-full rounded-md border p-3 text-sm leading-4 text-battleship_gray outline-none focus:border-primary"
                        ></textarea>
                      </div>
                    </div>

                    <button className="shadow-submit dark:shadow-submit-dark rounded-lg bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90 w-full">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchWithUs;
