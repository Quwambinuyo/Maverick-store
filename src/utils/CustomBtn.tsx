import React from "react";

export interface CustomButtonProps {
  label?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
}

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
      className={`px-4 py-2 rounded-md bg-primary-color text-white disabled:bg-gray-400 ${className}`}
      disabled={disabled}
    >
      {label}
      {children}
    </button>
  );
};

export default CustomBtn;
