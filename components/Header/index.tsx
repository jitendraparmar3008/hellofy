"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
// import CommonModal from "../UI/CommonModal";
// import Button from "../UI/Button";
// import PriceContactModal from "../Common/PriceContactModal";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  // const [showPricingModal, setShowPricingModal] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };
  // const handleOpenPricingModal = () => {
  //   // if (usePathName !== "/contact") {
  //   //   setShowPricingModal(true);
  //   // }
  //   setShowPricingModal(true);
  // };
  // const handleClosePricingModal = () => {
  //   setShowPricingModal(false);
  // };
  const usePathName = usePathname();
  // const router = useRouter();
  // const handleContactClick = () => {
  //   router.push("/contact");
  //   setShowPricingModal(false);
  // };
  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center transition-all duration-300 ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm"
            : "absolute bg-white"
        }`}
      >
        <div className="container">
          <div
            className={`relative flex items-center justify-between gap-11 transition-all duration-300 ${
              sticky ? "py-3 lg:py-2" : "py-[22px]"
            }`}
          >
            <div className="w-[200px] md:w-[140px] max-w-full">
              <Link href="/" className={`header-logo block w-full`}>
                <span className="text-primary font-semibold text-3xl">
                  Hellofy
                </span>
                {/* <Image
                  src="/images/logo/logo.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full dark:hidden"
                />
                <Image
                  src="/images/logo/logo.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                /> */}
              </Link>
            </div>
            <div className="flex w-full justify-center md:justify-between items-center px-4 md:px-8 lg:px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-1 lg:right-4 top-1/2 block translate-y-[-50%] rounded-lg lg:px-3 lg:py-[6px] lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 min-w-5 w-5 lg:w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 min-w-5 w-5 lg:w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 min-w-5 w-5 lg:w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                {/* Right-side drawer for mobile */}
                <nav
                  id="navbarCollapse"
                  className={`navbar fixed  top-0 z-30 h-screen lg:h-full w-full bg-white dark:bg-dark px-6 py-4 transition-transform duration-300 transform ${
                    navbarOpen
                      ? "translate-x-0 left-0" // Open
                      : "translate-x-full right-0" // Closed
                  } lg:static lg:w-auto lg:transform-none lg:opacity-100 lg:bg-transparent lg:p-0`}
                >
                  <Image
                    src="/images/logo/logo.svg"
                    alt="logo"
                    width={100}
                    height={30}
                    className="dark:hidden lg:hidden"
                  />
                  {/* Close Button */}
                  <button
                    onClick={navbarToggleHandler}
                    className="absolute top-4 right-4 text-2xl font-bold text-dark dark:text-white lg:hidden"
                  >
                    &times; {/* This is the "X" close icon */}
                  </button>

                  <ul className="block lg:flex lg:gap-11 mt-8 lg:mt-0 mb-0">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative my-5 md:my-3">
                        {menuItem.path ? (
                          // menuItem.title === "Pricing" ? (
                          //   <button
                          //     onClick={handleOpenPricingModal}
                          //     className={`flex text-base font-semibold lg:mr-0 lg:inline-flex lg:px-0  ${
                          //       usePathName === menuItem.path
                          //         ? "text-primary dark:text-white"
                          //         : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          //     }`}
                          //   >
                          //     {menuItem.title}
                          //   </button>
                          // ) : (
                          <Link
                            href={menuItem.path}
                            className={`flex text-base font-semibold lg:mr-0 lg:inline-flex lg:px-0  ${
                              usePathName === menuItem.path
                                ? "text-primary dark:text-white"
                                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            }`}
                            onClick={() => {
                              setNavbarOpen(false);
                            }}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          // )
                          <>
                            <p
                              onClick={() => {
                                handleSubmenu(index);
                              }}
                              className="flex cursor-pointer items-center justify-between text-base font-semibold text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[280px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="block rounded py-2.5 text-sm text-dark group: hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                                  onClick={() => {
                                    setNavbarOpen(false), setOpenIndex(null);
                                  }}
                                >
                                  <span className="font-medium">
                                    {submenuItem.title}
                                  </span>
                                  <p className="hidden md:block text-xs text-battleship_gray hover:text-primary">
                                    {submenuItem.description}
                                  </p>
                                  {/* <p>Lorem ipsum dolor sit amet</p> */}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3 items-center md:hidden mt-4">
                    <Link
                      href="https://app.hellofy.io/"
                      className="ease-in-up hover:shadow-btn-hover bg-transparent px-4 py-2.5 text-base font-medium text-dark transition duration-300 hover:bg-opacity-90 md:block rounded-lg border border-french_gray max-h-11 w-full text-center"
                    >
                      Log in
                    </Link>
                    <Link
                      href="/book-a-demo"
                      className="ease-in-up hover:shadow-btn-hover bg-primary  px-4 py-2.5 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block rounded-lg max-h-11 w-full text-center"
                    >
                      Book Demo
                    </Link>
                  </div>
                </nav>
              </div>
              <div className=" items-center justify-end gap-4 hidden md:flex">
                <Link
                  href="https://app.hellofy.io/"
                  className="ease-in-up hover:shadow-btn-hover bg-transparent p-2 lg:px-4 lg:py-2.5 text-sm md:text-base font-medium text-dark transition duration-300 hover:bg-opacity-90  rounded-lg border border-french_gray max-h-11 "
                >
                  Log in
                </Link>
                <Link
                  href="/book-a-demo"
                  className="ease-in-up hover:shadow-btn-hover rounded-lg bg-primary p-2 lg:px-4 lg:py-2.5 text-sm md:text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block max-h-11"
                >
                  Book Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <CommonModal
        isOpen={showPricingModal}
        onClose={handleClosePricingModal}
        className="p-10 w-[614px]"
      >
        <div className="flex items-center justify-center">
          <Image
            src="/images/ContactSupportIcon.svg"
            alt="ContactSupportIcon"
            height={94}
            width={106}
            className="animate-bounce"
          />
        </div>
        <p className="text-dark mt-5 text-center">
          Feel free to contact us with any questions or for more details about
          the plan. We’re here to assist and provide the information you need to
          make an informed decision.
        </p>
        <Button
          name="Contact Us"
          className="mt-5 w-full"
          onClick={handleContactClick}
        />
      </CommonModal> */}
    </>
  );
};

export default Header;
