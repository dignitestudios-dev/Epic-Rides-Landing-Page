import Image from "next/image";
import React from "react";

const BePartoftheFuture = () => {
  return (
    <div className="relative bg-[#00000003] mycontainer md:py-16! py-10! md:px-20! flex flex-col justify-center items-center gap-10">
      {/* Bg Shapes */}
      <Image
        src="/images/shape.png"
        alt="Logo"
        width={90}
        height={90}
        className="absolute right-0 h-full w-auto min-[925px]:block hidden"
      />
      <Image
        src="/images/shape.png"
        alt="Logo"
        width={90}
        height={90}
        className="rotate-180 absolute left-0 h-full w-auto"
      />

      <div className="space-y-5">
        <h2 className="section-heading text-black text-center">
          Be Part of the Future
        </h2>

        <p className="text-black min-[840px]:w-[830px] max-w-full text-center md:text-xl sm:text-lg text-base">
          Join visionary investors who believe in creating sustainable,
          community-driven transportation solutions
        </p>
      </div>

      <div className="flex lg:flex-row flex-col min-[425px]:gap-10 gap-14 items-center">
        <div className="rounded-full sm:h-[500px] min-[425px]:h-[350px] h-[280px] sm:w-[500px] min-[425px]:w-[350px] w-[280px] bg-[url(/images/section3.png)] bg-cover bg-right relative">
          <div className="absolute min-[425px]:bottom-0 -bottom-8 w-full flex justify-center">
            <div className="bg-[#028C08] text-white rounded-xl sm:p-5 p-2.5 space-y-1 sm:w-[390px] min-[425px]:w-[300px] w-[260px] flex flex-col justify-center items-center">
              <p className="sm:text-2xl text-lg font-semibold uppercase text-center">
                Company Facts
              </p>
              <div className="sm:mt-4 mt-1.5 space-y-2">
                <div className="sm:text-sm text-xs flex items-center sm:gap-5 gap-2 justify-between">
                  <p>Authorized shares: 10,000,000</p>
                  <p className="text-right">Par value: $0.0001</p>
                </div>

                <div className="sm:text-sm text-xs flex items-center sm:gap-5 gap-2 justify-between">
                  <p>State: Delaware</p>
                  <p className="text-right">Filing date: Aug 26, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="md:text-3xl text-xl font-bold sm:mb-8 mb-4">
            Subscription Revenue Scenarios
          </h3>
          <ul className="text-black md:space-y-5 space-y-2 h-full flex flex-col">
            <li>
              <div className="space-y-1 bg-linear-to-l from-[#028C08]/90 to-[#61CB08]/90 rounded-xl p-5">
                <h3 className="md:text-xl text-base font-semibold">
                  1% adoption (78,000 drivers) × $25/week
                </h3>
                <p className="md:text-base text-sm text-[#636363]">
                  $1.95M weekly (~$7.8M monthly)
                </p>
              </div>
            </li>

            <li>
              <div className="space-y-1 p-5">
                <h3 className="md:text-xl text-base font-semibold">
                  5% adoption (390,000 drivers) × $25/week{" "}
                </h3>
                <p className="md:text-base text-sm text-[#636363]">
                  $9.75M weekly (~$39M monthly){" "}
                </p>
              </div>
            </li>

            <li>
              <div className="space-y-1 p-5">
                <h3 className="md:text-xl text-base font-semibold">
                  10% adoption (780,000 drivers) × $25/week{" "}
                </h3>
                <p className="md:text-base text-sm text-[#636363]">
                  $19.5M weekly (~$78M monthly){" "}
                </p>
              </div>
            </li>

            <li>
              <p className="md:text-lg text-base">
                Illustrative scenarios based on public driver counts; for
                interest only.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BePartoftheFuture;
