// src/custom.d.ts

// For Swiper CSS and other global CSS
declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";
declare module "swiper/css/scrollbar";
declare module "swiper/css/effect-fade"; // if you're using fade effect

// For your own CSS modules
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// Other common imports
declare module "*.css";
declare module "*.scss";
declare module "*.svg";
