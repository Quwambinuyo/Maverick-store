import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineWhatsapp } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-primary-color pt-10">
      <section
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8
        px-6 sm:px-10 lg:px-20 pb-10"
      >
        {/* About */}
        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold mb-3">Maverick Store</h2>
          <p className="text-sm md:text-[15px] leading-6 text-gray-900 font-semibold">
            Maverick Store is a revolutionary fashion-forward platform designed
            to empower individuals with a unique sense of style. At its core,
            Maverick believes that everyone deserves to look and feel their best
            without breaking the bank. We merge technology with fashion to
            predict trends, personalize wardrobes, and make styling effortless.
          </p>
          <div className="flex gap-9 mt-5">
            <a href="">
              <FaFacebookF className="text-sm md:text-[20px]" />
            </a>
            <a href="">
              <FaXTwitter className="text-sm md:text-[20px]" />
            </a>
            <a href="">
              <MdOutlineWhatsapp className="text-sm md:text-[20px]" />
            </a>
            <a href="">
              <IoLogoInstagram className="text-sm md:text-[20px]" />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Company</h2>
          <ul className="space-y-2 text-sm text-gray-900 font-semibold">
            <li>About us</li>
            <li>Blog</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Products</h2>
          <ul className="space-y-2 text-sm text-gray-900 font-semibold">
            <li>Pants</li>
            <li>Polos</li>
            <li>Caps</li>
            <li>Shoes</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <ul className="space-y-2 text-sm text-gray-900 font-semibold">
            <li>support@maverick.com</li>
            <li>WhatsApp</li>
            <li>Twitter</li>
            <li>Telegram</li>
          </ul>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 text-center py-4 text-sm text-gray-900 font-semibold">
        &copy; {new Date().getFullYear()} Maverick Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
