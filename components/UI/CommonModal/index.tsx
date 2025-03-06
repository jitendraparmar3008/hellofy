import React, { useEffect, ReactNode, useRef } from "react";
import "../CommonModal/Modal.css";
import { CloseButton } from "@/constant/icons";
interface CommonModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  showCloseButton?: boolean;
}

const CommonModal: React.FC<CommonModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  disabled,
  showCloseButton = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null); // To reference modal element
  const firstFocusableElementRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("active-modal");

      // Trap focus in modal
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );

      const firstFocusableElement = focusableElements?.[0] as HTMLElement;
      const lastFocusableElement = focusableElements?.[
        focusableElements.length - 1
      ] as HTMLElement;

      const trapFocus = (e: KeyboardEvent) => {
        if (!isOpen) return;

        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              e.preventDefault();
              lastFocusableElement?.focus();
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              e.preventDefault();
              firstFocusableElement?.focus();
            }
          }
        }

        if (e.key === "Enter") {
          // Optionally handle Enter key behavior here
          e.preventDefault(); // Prevent action on the background
        }
      };

      document.addEventListener("keydown", trapFocus);

      // Focus the first focusable element in the modal when it opens
      firstFocusableElementRef.current?.focus();
    } else {
      document.body.classList.remove("active-modal");
      // document.removeEventListener("keydown", trapFocus);
    }

    return () => {
      document.body.classList.remove("active-modal");
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="w-screen h-screen inset-0 fixed z-[99999] bg-light_black_opacity"
          // onClick={onClose}
        ></div>
      )}
      <div
        className={`mozclass fixed inset-x-0 inset-y-0 max-h-fit mx-auto z-[999999] my-auto shadow-common_shadow bg-white rounded-xl animation-zoomIn ${className} ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {children}

        {showCloseButton && (
          <button
            className="close-modal flex justify-center items-center h-10 w-10 rounded-full hover:bg-bg_primary_light  hover:shadow-common_shadow common_transition"
            onClick={onClose}
            disabled={disabled}
          >
            <CloseButton className="w-[13px] h-[13px]" />
          </button>
        )}
      </div>
    </>
  );
};

export default CommonModal;
