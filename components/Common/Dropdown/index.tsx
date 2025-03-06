import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";

interface DropdownOption {
  label: string;
  value: string | number;
}

interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  selected?: DropdownOption | null;
  onSelect: (option: DropdownOption) => void;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select an option",
  selected = null,
  onSelect,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option: DropdownOption) => {
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={classNames("relative", className)}>
      <button
        onClick={handleToggle}
        className="w-full px-6 py-3 h-[50px] text-left bg-whitesmoke border rounded-lg flex items-center justify-between focus:outline-none focus:ring-1 focus:ring-primary"
      >
        <span className="text-battleship_gray w-[150px] text-ellipsis line-clamp-1 md:w-full">
          {selected ? selected.label : placeholder}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classNames("w-5 h-5 transform transition-transform", {
            "rotate-180": isOpen,
          })}
          fill="none"
          viewBox="0 0 24 24"
          stroke="#4B4B4B4D"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute left-0 z-10 w-full mt-2 shadow-md bg-whitesmoke border rounded-lg max-h-60 overflow-y-auto">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-white text-battleship_gray"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
