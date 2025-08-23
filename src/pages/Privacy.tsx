import TermsandCond from "../assets/images/termsandcond.jpg";
import { Footer } from "../components";

const Privacy = () => {
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
          Privacy Policy
        </h1>
      </div>

      <div className="md:px-5 px-3 mb-4">
        <div>
          <h1 className="text-gray-800 font-bold text-sm sm:text-lg md:text-xl mt-5">
            Last updated: August 25, 2025
          </h1>
          <p className=" font-semibold text-xm leading-8 sm:text-sm md:text-[16px] mt-1">
            At Maverick Store, accessible from maverick-store.vercel.app, one of
            our main priorities is the privacy of our visitors. This Privacy
            Policy document contains types of information that is collected and
            recorded by Maverick store ltd and how we use it. If you have
            additional questions or require more information about our Privacy
            Policy, do not hesitate to contact us. We may ask for your contact
            information, including items such as name, company name, address,
            email address, and telephone number. This policy is not applicable
            to any information collected offline or via channels other than this
            website. Our Privacy Policy was created with the help of the Free
            Privacy Policy Generator.
          </p>
        </div>
        <div>
          <h1 className="text-gray-800 font-bold text-sm sm:text-lg md:text-xl mt-5">
            Consent
          </h1>
          <p className=" font-semibold text-xm leading-8 sm:text-sm md:text-[16px] mt-1">
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>
        </div>
        <div>
          <h1 className="text-gray-800 font-bold text-sm sm:text-lg md:text-xl mt-5">
            Information we collect
          </h1>
          <p className=" font-semibold text-xm leading-8 sm:text-sm md:text-[16px] mt-1">
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information. Please
            note that the Company will not ask you to share any sensitive data
            or information via email or telephone. If you receive any such
            request by email or telephone, please do not respond/divulge any
            sensitive data or information.
          </p>
        </div>
        <div className="text-gray-800 font-bold text-sm sm:text-lg md:text-xl mt-5">
          <h1>How we use your information</h1>
          <p className=" font-semibold text-xm leading-8 sm:text-sm md:text-[16px] mt-1">
            We use the information we collect in various ways, including to:
          </p>
          <ul className=" font-semibold text-xm leading-8 text-black sm:text-sm md:text-[16px] mt-1 list-disc pl-10">
            <li>
              Provide, operate, and maintain our website, to provide you with
              updates and other information.
            </li>
            <li>
              Improve, personalize, and expand our website,and other information
              relating to the website.
            </li>
            <li>
              Understand and analyze how you use our website, to provide you
              with updates and other information relating to the website.
            </li>
            <li>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates.
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-gray-800 font-bold text-sm sm:text-lg md:text-xl mt-5">
            CCPA Privacy Rights
          </h1>
          <p className=" font-semibold text-xm leading-8 sm:text-sm md:text-[16px] mt-1">
            Under the CCPA, among other rights, California consumers have the
            right to: Request that a business that collects a consumer's
            personal data disclose the categories and specific pieces of
            personal data that a business has collected about consumers. Request
            that a business delete any personal data about the consumer that a
            business has collected.
          </p>
        </div>
        <div>
          <h1 className="text-gray-800 font-bold text-sm sm:text-lg md:text-xl mt-5">
            Children's Information
          </h1>
          <p className=" font-semibold text-xm leading-8 sm:text-sm md:text-[16px] mt-1">
            Another part of our priority is adding protection for children while
            using the internet. Maverick Store does not knowingly collect any
            Personal Identifiable Information from children under the age of 13.
            We encourage parents and guardians to observe, participate in,
            and/or monitor and guide their online activity.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Privacy;
