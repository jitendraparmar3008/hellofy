import React from "react";

interface TextAreaProps {
  label: string;
  required?: boolean;
  placeholder?: string;
  backgroundColor?: string;
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  required = false,
  placeholder = "",
  backgroundColor = "#F8FAFC",
  rows = 4,
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={label}
        className="text-black_700 font-semibold text-[16px]"
      >
        {label} {required && <sup className="text-fluorescent_red">*</sup>}
      </label>
      <textarea
        id={label}
        placeholder={placeholder}
        rows={rows}
        className="w-full !rounded-xl !py-3 px-4 mt-2 border border-grey_600 focus:outline-none focus:border-purple_900 transition-colors"
        style={{ backgroundColor }}
      />
    </div>
  );
};

export default TextArea;
