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

// import PropTypes from "prop-types";
// import MiniLoader from "../layout/miniLoader";

// const CustomButton = ({
//   text,
//   color,
//   width,
//   height,
//   fontSize,
//   isDisabled,
//   onReqClick,
//   isLoading,
//   type,
//   capitalize = true,
// }) => {
//   return (
//     <button
//       className={`flex-center border-2 border-primary-color tracking-wide rounded-lg font-medium h-[45px] md:h-[46px] lg:h-[48px] zabalMedFont ${
//         capitalize ? "capitalize" : ""
//       } ${
//         isDisabled || isLoading
//           ? "bg-primary-color opacity-40 text-white"
//           : color === "purple"
//           ? "bg-primary-color text-white"
//           : "bg-white text-primary-color"
//       }`}
//       style={{
//         width: width ? width : "100%",
//         height: height && height,
//         fontSize: fontSize ? fontSize : "14px",
//       }}
//       disabled={isDisabled || isLoading}
//       onClick={onReqClick}
//       type={type || "button"}
//     >
//       {isLoading ? <MiniLoader /> : text}
//     </button>
//   );
// };

// CustomButton.propTypes = {
//   text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
//   width: PropTypes.string,
//   height: PropTypes.string,
//   type: PropTypes.string,
//   fontSize: PropTypes.string,
//   onReqClick: PropTypes.func,
// };

// export default CustomButton;
