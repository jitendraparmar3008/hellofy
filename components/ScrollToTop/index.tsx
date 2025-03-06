import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const clientHeight = window.innerHeight;

      // Show button when user scrolls more than 300px
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Check if user is near the bottom of the page
      if (scrollTop + clientHeight >= scrollHeight - 600) {
        setIsAtFooter(true);
      } else {
        setIsAtFooter(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-md ${
            isAtFooter ? "bg-white text-primary" : "bg-primary text-white"
          }  shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp`}
        >
          <span
            className={`mt-[6px] h-3 w-3 rotate-45 border-l border-t  ${
              isAtFooter ? "border-primary" : "border-white"
            }`}
          ></span>
        </div>
      )}
    </div>
  );
}
