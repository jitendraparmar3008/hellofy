import { SearchIcon } from "@/constant/icons";
//import REGEX from "@utils/Regex/Regex";
import { ChangeEvent, FC, useState } from "react";

interface SearchBarProps {
  // PRAYAG SONAGRA 21 aug
  // MADE onSearchChange and Value optional as searchbar won't be implemented in few places and it is throwing errors
  onSearchChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  value?: string;
}

const SearchBar: FC<SearchBarProps> = ({
  onSearchChange,
  className,
  placeholder,
  value,
}) => {
  const [isFocus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //const disallowedCharacters = REGEX.DISALLOWED_SEARCHBAR_CHARACTERS;
    const currentValue = e.target.value;
    //const sanitizedValue = currentValue.replace(disallowedCharacters, "");
    // e.target.value = sanitizedValue;
    if (onSearchChange) onSearchChange(e);
  };

  return (
    <div
      className={`items-center rounded-[9px] outline outline-0 overflow-hidden w-[290px] flex justify-start  border pr-[3.9rem] h-[44px] common_transition ${className} ${
        isFocus ? "div_focus !pl-1" : "pl-4 gap-2"
      }`}
    >
      <SearchIcon
        className={`w-4 h-4 common_transition ${
          isFocus ? "-translate-x-[40px]" : "translate-x-0"
        }`}
      />
      <input
        placeholder={placeholder || "Search"}
        className="outline-none placeholder:text-opacity-40 text-template-Text text-xs xl:text-sm w-full"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
      />
    </div>
  );
};

export default SearchBar;
