import React from "react";
import { type CustomButtonProps } from "../types/types";

const CustomBtn: React.FC<CustomButtonProps> = ({
  label,
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-2  bg-primary-color text-white disabled:bg-gray-400 ${className}`}
      disabled={disabled}
    >
      {label}
      {children}
    </button>
  );
};

export default CustomBtn;
