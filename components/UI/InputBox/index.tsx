// src/components/InputBox.tsx
import React from "react";

interface InputBoxProps {
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  className?: string;
  pleceholder?: string;
}

const sizeClasses = {
  small: "text-sm py-1 px-2",
  medium: "text-md py-2 px-3",
  large: "text-lg py-3 px-4",
};

const InputBox: React.FC<InputBoxProps> = ({
  backgroundColor = "#ffffff",
  size = "medium",
  className,
  pleceholder,
  ...rest
}) => {
  return (
    <input
      {...rest}
      placeholder={pleceholder}
      className={`border rounded-xl focus:outline-none focus:border-purple_900 transition-colors  ${sizeClasses[size]} ${className}`}
      style={{ backgroundColor }}
    />
  );
};

export default InputBox;
