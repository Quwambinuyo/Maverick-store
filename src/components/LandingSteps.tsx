const LandingSteps = () => {
  return (
    <div className="py-8 sm:py-10  sm:px-9 sm:pt-10 md:pt-12 lg:pt-16 md:px-12 lg:px-16 xl:px-20 max-w-[1400px] mx-auto space-y-6 sm:space-y-8 lg:space-y-10 xl:space-y-12">
      <h2 className="text-primary-color chillaxFont text-[20.5px] sm:text-[26px] md:text-[36px] lg:text-[43px] xl:text-[56px] leading-snug md:leading-[1.5] font-black">
        3 steps to look Classic.
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-4 items-center">
        {/* Steps */}
        <div className="grid gap-2 w-full">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex gap-3.5 sm:gap-4 md:gap-5">
              {/* Left: Number + Line */}
              <div className="flex flex-col items-center gap-1 mt-0.5">
                <div className="rounded-full border h-[22px] md:h-[24px] w-[22px] md:w-[24px] p-1 flex items-center justify-center border-[#3F1A6A]">
                  <p className="text-[#3F1A6A] zabalBoldFont text-xs">{step}</p>
                </div>
                {step !== 3 && (
                  <div className="w-[1px] h-full bg-[#3F1A6A]"></div>
                )}
              </div>

              {/* Right: Content */}
              <div
                className={`flex flex-col gap-1.5 ${
                  step === 3 ? "pb-5" : "pb-12 lg:pb-12 xl:pb-14"
                }`}
              >
                {step === 1 && (
                  <>
                    <h4 className="text-primary-color font-bold text-default-black sm:text-lg md:text-xl max-w-full">
                      Create an account with us
                    </h4>
                    <p className="text-[15px] sm:text-base md:text-[16.5px] lg:text-lg text-justify">
                      Create a free account if you’re a new user or login if
                      you’re a registered user.
                    </p>
                  </>
                )}
                {step === 2 && (
                  <>
                    <h4 className="text-primary-color font-bold sm:text-lg md:text-xl max-w-full">
                      Look a fits that suits your style and budget plan, pay and
                      shop
                    </h4>
                    <p className="text-[15px] sm:text-base md:text-[16.5px] lg:text-lg text-justify">
                      Look for fits that suit your style and budget. Create a
                      custom budget plan, pay seamlessly, and shop confidently
                      with Maverick Store!
                    </p>
                  </>
                )}
                {step === 3 && (
                  <>
                    <h4 className=" text-primary-color font-bold sm:text-lg md:text-xl max-w-full">
                      Get your products delivered to your door step
                    </h4>
                    <p className="text-[15px] sm:text-base md:text-[16.5px] lg:text-lg text-justify">
                      Get your products delivered right to your doorstep — fast,
                      safe, and hassle-free. Shop now and enjoy seamless
                      delivery wherever you are.
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingSteps;
