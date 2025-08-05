import React from "react";
import { type InputProps } from "../types/types";

const CustomInput: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  className = "",
  children,
  ...rest
}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        placeholder={placeholder}
        className={`border px-4 pr-10 py-2 rounded-md focus:outline-none w-full sm:w-96 md:w-[500px] ${className}`}
        {...rest}
      />
      {children && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
          {children}
        </div>
      )}
    </div>
  );
};

export default CustomInput;
