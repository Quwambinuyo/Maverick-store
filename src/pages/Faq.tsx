import { useState } from "react";
import FaqImg from "../assets/images/faq.jpg";
import questionsImg from "../assets/images/questions.svg";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { Footer } from "../components";

const Faq = () => {
  const [openAnswer, setOpenAnswer] = useState<null>(null);
  const toggleAnswer = (id: any) => {
    setOpenAnswer(openAnswer === id ? null : id);
  };

  const questions = [
    {
      id: 1,
      questions: "How does maverick store work?",
      answer:
        "Maverick store is an online marketplace that connects buyers and sellers. Users can browse through various products, add them to their cart, and make purchases securely through the platform.",
    },
    {
      id: 2,
      questions: "Can i cancel or change my order?",
      answer:
        "Yes, you can cancel your order as long as it has not yet been processed or shipped. Once the order is in the shipping process, you may request a return or exchange according to our returns policy.",
    },
    {
      id: 3,
      questions: "Which Payment method do you accept?",
      answer:
        "We accept a variety of secure payment methods, including major credit and debit cards, Paystack, and other popular local payment options depending on your region and we are looking to add more.",
    },
    {
      id: 4,
      questions: "What are the benefit of shopping with maverick store?",
      answer:
        "Shopping with Maverick Store offers secure payments, a wide selection of products, fast delivery, and excellent customer support to ensure a smooth and enjoyable shopping experience.",
    },
    {
      id: 5,
      questions: "When was  Maverick store founded?",
      answer:
        "Maverick Store was founded in 2022 by Quwam Binuyo, who serves as the CEO, with the mission of connecting buyers and sellers through a secure and reliable online marketplace.",
    },
  ];

  return (
    <section>
      <div
        className="flex items-center justify-center "
        style={{
          backgroundImage: `url(${FaqImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
          width: "100%",
        }}
      >
        <h1 className="text-white text-lg sm:text-xl md:text-[40px] font-bold">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="flex gap-3 md:px-20 px-3 my-10 flex-col md:flex-row">
        <div className="md:w-1/2 w-full ">
          <img src={questionsImg} alt="faq img" className="" />
        </div>
        <div className="md:w-1/2 w-full">
          {questions.map((question) => {
            return (
              <div key={question.id}>
                <div
                  onClick={() => toggleAnswer(question.id)}
                  className="border-b border-gray-300 md:px-5 px-3 py-4 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-primary-color font-bold text-sm sm:text-lg md:text-xl">
                      {question.questions}
                    </h2>
                    {openAnswer === question.id ? (
                      <MdOutlineKeyboardArrowUp
                        size={25}
                        className="text-primary-color"
                      />
                    ) : (
                      <MdOutlineKeyboardArrowDown
                        size={25}
                        className="text-primary-color"
                      />
                    )}
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAnswer === question.id
                        ? "max-h-40 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className=" font-semibold text-xm leading-8 sm:text-sm md:text-[16px] mt-1">
                      {openAnswer === question.id && question.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Faq;
