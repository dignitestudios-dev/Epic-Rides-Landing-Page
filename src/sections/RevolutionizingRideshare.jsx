import Button from "@/components/Button";
import Dollar from "@/components/icons/Dollar";
import Location from "@/components/icons/Location";
import Phone from "@/components/icons/Phone";
import Users from "@/components/icons/Users";
import Users2 from "@/components/icons/Users2";
import Verified from "@/components/icons/Verified";
import Link from "next/link";
import React from "react";

const RevolutionizingRideshare = () => {
  return (
    <div className=" mycontainer md:py-16! py-10! md:px-20! flex flex-col justify-center items-center gap-10">
      <div className="space-y-5">
        <h2 className="section-heading text-[50px] text-center text-[#61CB08] font-[600]  leading-16">
          Why Choose Epic Rides <br />
          <span className="text-[#FFFFFF]">Fair Driver Compensation</span>
        </h2>

        <p className="text-white lg:w-[830px] max-w-full text-center md:text-xl sm:text-lg text-base">
         Drivers keep 100% of their fares with a simple weekly subscription model. Early drivers enjoy a special launch rate, with optional daily withdrawals available at a minimal fee.
        </p>
      </div>

      <div className="md:grid grid-cols-5 gap-10 md:space-y-0 space-y-7">
        <div className="col-span-2 sm:rounded-3xl rounded-xl h-[400px] bg-[url(/images/section2.jpg)] bg-cover bg-right relative">
          <div className="absolute top-0 right-0 bg-[#028C08] text-white sm:rounded-3xl rounded-xl p-3 sm:space-y-1 sm:w-[150px] sm:h-[85px] flex flex-col justify-center items-center">
            <p className="sm:text-2xl text-lg font-semibold text-center">
              100%
            </p>
            <p className="font-semibold text-center sm:text-base text-sm">
              Fare Retention
            </p>
          </div>

          <div className="absolute bottom-0 left-0 bg-(--primary) text-white sm:rounded-3xl rounded-xl p-3 sm:space-y-1 sm:w-[150px] sm:h-[85px] flex flex-col justify-center items-center">
            <p className="sm:text-2xl text-lg font-semibold text-center">
              24/7
            </p>
            <p className="font-semibold text-center sm:text-base text-sm">
              Driver Support
            </p>
          </div>
        </div>
        <div className="col-span-3">
          <ul className="text-white space-y-4 h-full flex flex-col justify-between">
            <li>
              <div className="flex sm:gap-5 gap-2 items-start">
                <div className="bg-[#028C08] w-10 h-10 min-w-10 min-h-10 rounded-full flex justify-center items-center">
             <Users2 />
                </div>
                <div className="space-y-1">
                  <h3 className="sm:text-[22px] text-base font-semibold">
                Community-Centered Approach
                  </h3>
                  <p className="text-xs">
                   Epic Rides reinvests into local communities by supporting job creation, local partnerships, and sustainable growth.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex sm:gap-5 gap-2 items-start">
                <div className="bg-[#028C08] w-10 h-10 min-w-10 min-h-10 rounded-full flex justify-center items-center">
                  <Verified />
                </div>
                <div className="space-y-1">
                  <h3 className="sm:text-[22px] text-base font-semibold">
                  Safety & Security First
                  </h3>
                  <p className="text-xs">
                    Verified drivers, live ride monitoring, verification codes, and emergency tools ensure peace of mind for riders and drivers alike.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex sm:gap-5 gap-2 items-start">
                <div className="bg-[#028C08] w-10 h-10 min-w-10 min-h-10 rounded-full flex justify-center items-center">
                  <Phone />
                </div>
                <div className="space-y-1">
                  <h3 className="sm:text-[22px] text-base font-semibold">
                   Cutting-Edge Technology
                  </h3>
                  <p className="text-xs">
                    Powered by real-time geolocation, smart driver matching, and performance-optimized systems for a reliable experience.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex sm:gap-5 gap-2 items-start">
                <div className="bg-[#028C08] w-10 h-10 min-w-10 min-h-10 rounded-full flex justify-center items-center">
                 <Location />
                </div>
                <div className="space-y-1">
                  <h3 className="sm:text-[22px] text-base font-semibold">
                   Revolutionizing Rideshare
                  </h3>
                  <p className="text-xs">
                   Epic Rides isn’t just another rideshare app. We’re building a community-driven ecosystem that prioritizes driver welfare, rider trust, and long-term sustainability.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
{/* 
      <div className="bg-[#EFFAE6] w-full flex flex-col justify-center items-center md:p-8 sm:p-6 p-3  sm:rounded-2xl rounded-xl shadow-[2px_2px_12px_2px_#B6E78D80]">
        <h3 className="sm:text-3xl text-xl font-semibold text-center">
          Ready to Join the Revolution?
        </h3>
        <p className="sm:text-xl text-base mt-2 mb-8 text-center">
          Be among the first drivers to experience the Epic Rides App difference
        </p>

        <Link href={"https://tally.so/r/woq84x"} target="_blank">
          <Button className="lg:w-[500px] w-full">
            Become a Early founder driver
          </Button>
        </Link>
      </div> */}
    </div>
  );
};

export default RevolutionizingRideshare;
