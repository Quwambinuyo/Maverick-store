import { LuPhoneCall } from "react-icons/lu";
import { SiMinutemailer } from "react-icons/si";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiLogoWhatsapp } from "react-icons/bi";
import { LuTwitter } from "react-icons/lu";
import { FaGlobeEurope } from "react-icons/fa";

const Contact = () => {
  const contacts = [
    {
      icon: <SiMinutemailer />,
      title: "Email us",
      email: "maverickstore@maverick.com",
      description:
        "Interactively grow empowered for process-centric total linkage.",
    },
    {
      icon: <LuPhoneCall />,
      title: "Call us",
      email: "+234 800 000 0000",
      description: "Seamlessly communicate for dynamic customer engagement.",
    },
    {
      icon: <MdOutlineLocationOn />,
      title: "Visit us",
      email: "123 Maverick Street, Lagos",
      description: "Come by for personalized support and service.",
    },
    {
      icon: <BiLogoWhatsapp />,
      title: "WhatsApp",
      email: "+234 789 347 000",
      description: "Come by for personalized support and service.",
    },
    {
      icon: <LuTwitter />,
      title: "Twitter",
      email: "@maverick",
      description: "Come by for personalized support and service.",
    },
    {
      icon: <FaGlobeEurope />,
      title: "Web",
      email: "www.maverick.com",
      description: "Come by for personalized support and service.",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {contacts.map((contact, index) => (
        <div key={index} className="bg-stone-300 p-4 rounded">
          <div className="flex flex-col justify-center items-center">
            <p className="text-lg sm:text-[40px] text-primary-color">
              {contact.icon}
            </p>
            <p className="font-semibold text-gray-800 text-lg sm:text-[17px]">
              {contact.title}
            </p>
          </div>
          <div className="flex flex-col gap-1 mt-2 text-center">
            <span className=" text-lg sn:text-[20px] text-primary-color font-bold">
              {contact.email}
            </span>
            <span className="text-lg sm:text-[17px] text-gray-700 font-semibold">
              {contact.description}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Contact;
