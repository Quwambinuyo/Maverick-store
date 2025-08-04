import React from "react";
import { type CustomButtonProps } from "../types/types";

const CustomBtn: React.FC<CustomButtonProps> = ({
  label,
  children,
  className = "",
  onClick,
  type = "button",
}) => {
  return (
    <button type={type} onClick={onClick} className={` ${className}`}>
      {label}
      {children}
    </button>
  );
};

export default CustomBtn;
