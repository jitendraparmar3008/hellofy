// components/InputField.tsx

import React from "react";

interface InputFieldProps {
  label: string;
  required?: boolean;
  placeholder?: string;
  backgroundColor?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  required = false,
  placeholder = "",
  backgroundColor = "#F8FAFC",
}) => {
  return (
    <div className="w-full mb-6">
      <label
        htmlFor={label}
        className="text-black_700 font-semibold text-[16px]"
      >
        {label} {required && <sup className="text-fluorescent_red">*</sup>}
      </label>
      <input
        type="text"
        id={label}
        placeholder={placeholder}
        className="w-full !rounded-xl !py-3 px-4 mt-2 border border-grey_600 focus:outline-none focus:border-purple_900 transition-colors"
        style={{ backgroundColor }}
      />
    </div>
  );
};

export default InputField;
