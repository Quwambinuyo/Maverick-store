import { NavLink } from "react-router-dom";
import TermsandCond from "../assets/images/termsandcond.jpg";
import { Footer } from "../components";

const TermsAndConditon = () => {
  return (
    <section>
      <div
        className="flex items-center justify-center "
        style={{
          backgroundImage: `url(${TermsandCond})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "160px",
          width: "100%",
        }}
      >
        <h1 className="text-white text-lg sm:text-xl md:text-[40px] font-bold">
          Terms & Condition
        </h1>
      </div>
      <div className="md:px-9 px-3 mb-4">
        <div>
          <h2 className="text-gray-800 font-bold text-sm sm:text-lg md:text-xl mt-5">
            Welcome to Maverick Store!
          </h2>
          <p className=" font-semibold text-xm leading-8 sm:text-sm md:text-[16px] mt-1">
            These terms and conditions outline the rules and regulations for the
            use of Cypher Store's Website, located at
            https://Maverick-store.vercel.app By accessing this website we
            assume you accept these terms and conditions. Do not continue to use
            Maverick Store if you do not agree to take all of the terms and
            conditions stated on this page. The following terminology applies to
            these Terms and Conditions, Privacy Statement and Disclaimer Notice
            and all Agreements: "Client", "You" and "Your" refers to you, the
            person log on this website and compliant to the Company's terms and
            conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers
            to our Company. "Party", "Parties", or "Us", refers to both the
            Client and ourselves.
          </p>
        </div>
        <div>
          <h2 className="text-gray-800 font-bold text-sm sm:text-lg md:text-xl mt-5">
            Cookies
          </h2>
          <p className=" font-semibold text-xm leading-8 sm:text-sm md:text-[16px] mt-1 ">
            We employ the use of cookies. By accessing Maverick store, you
            agreed to use cookies in agreement with the Maverick's Privacy
            Policy.
          </p>
        </div>
        <div>
          <h2 className="text-gray-800 font-bold text-sm sm:text-lg md:text-xl mt-5">
            License
          </h2>
          <p className=" font-semibold text-xm leading-8 sm:text-sm md:text-[16px] mt-1 ">
            Unless otherwise stated, Maverick store and/or its licensors own the
            intellectual property rights for all material on Maverick store. All
            intellectual property rights are reserved. You may access this from
            Maverick store for your own personal use subjected to restrictions
            set in these terms and conditions.This Agreement shall begin on the
            date hereof.
          </p>
        </div>
        <div>
          <h2 className="text-gray-800 font-bold text-sm sm:text-lg md:text-xl mt-5">
            You must not:
          </h2>
          <ul className=" font-semibold text-xm leading-8 sm:text-sm md:text-[16px] mt-1 list-disc pl-10">
            <li>
              Identifiers (e.g. name, mailing address, email address, phone
              number, credit/debit card number)
            </li>
            <li>
              Characteristics of protected classifications (e.g. gender, age)
            </li>
            <li>
              Internet or other electronic network activity (e.g. browse or
              search history)
            </li>
          </ul>
          <p className=" font-semibold text-xm leading-8 sm:text-sm md:text-[16px] mt-2">
            Parts of this website offer an opportunity for users to post and
            exchange opinions and information in certain areas of the website.
            Maverick store does not filter, edit, publish or review Comments
            prior to their presence on the website. Comments do not reflect the
            views and opinions of Maverick store, its agents and/or affiliates.
          </p>
        </div>
        <div>
          <h2 className="text-gray-800 font-bold text-sm sm:text-lg md:text-xl mt-5">
            Content Liability
          </h2>
          <p className=" font-semibold text-xm leading-8 sm:text-sm md:text-[16px] mt-2">
            We shall not be held responsible for any content that appears on
            your Website. You agree to protect and defend us against all claims
            that is rising on your Website. No link(s) should appear on any
            Website that may be interpreted as libelous, obscene or criminal, or
            which infringes, otherwise violates, or advocates the infringement
            or other violation of, any third party rights.
          </p>
        </div>
        <div>
          <h2 className="text-gray-800 font-bold text-sm sm:text-lg md:text-xl mt-5">
            Your Privacy
          </h2>
          <p>
            Please read
            <NavLink to="/privacy" className="text-green-500 font-bold ml-1">
              Privacy Policy
            </NavLink>
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default TermsAndConditon;
