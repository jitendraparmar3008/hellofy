import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  className?: string;
}

const sizeClasses = {
  small: "text-sm py-2 px-4",
  medium: "text-md py-3 px-6",
  large: "text-lg py-4 px-8",
};

const Button: React.FC<ButtonProps> = ({
  backgroundColor = "bg-primary",
  name,
  size = "medium",
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`text-white ${sizeClasses[size]} rounded-xl transition duration-300 ${backgroundColor} ${className}`}
    >
      {name}
    </button>
  );
};

export default Button;
