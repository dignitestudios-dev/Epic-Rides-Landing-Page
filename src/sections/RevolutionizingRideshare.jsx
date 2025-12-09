import Button from "@/components/Button";
import Dollar from "@/components/icons/Dollar";
import Location from "@/components/icons/Location";
import Phone from "@/components/icons/Phone";
import Verified from "@/components/icons/Verified";
import Link from "next/link";
import React from "react";

const RevolutionizingRideshare = () => {
  return (
    <div className="bg-linear-to-bl from-[#028C08] to-[#000B00] mycontainer md:py-16! py-10! md:px-20! flex flex-col justify-center items-center gap-10">
      <div className="space-y-5">
        <h2 className="section-heading text-(--primary) text-center">
          Revolutionizing Rideshare
        </h2>

        <p className="text-white lg:w-[830px] max-w-full text-center md:text-xl sm:text-lg text-base">
          Epic Rides App isn't just another rideshare platform. We're building a
          community-driven ecosystem that prioritizes driver welfare and local
          impact.
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
                  <Dollar />
                </div>
                <div className="space-y-1">
                  <h3 className="sm:text-[22px] text-base font-semibold">
                    Fair Driver Compensation
                  </h3>
                  <p className="text-xs">
                    Drivers keep 100% of fares with a simple $25/week
                    subscription. Launch promo: $1/day for the first 2 weeks.
                    Optional daily withdrawal available with 1% withdrawal fee.{" "}
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
                    Community-Centered Approach{" "}
                  </h3>
                  <p className="text-xs">
                    We invest back into local communities through job creation,
                    local partnerships, and community development programs.
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
                    Safety & Security First{" "}
                  </h3>
                  <p className="text-xs">
                    Advanced safety protocols, comprehensive insurance coverage,
                    and 24/7 emergency support for both drivers and riders.
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
                    Cutting-Edge Technology{" "}
                  </h3>
                  <p className="text-xs">
                    Drivers keep 100% of fares with a simple $25/week
                    subscription. Launch promo: $1/day for the first 2 weeks.
                    Optional daily withdrawal available with 1% withdrawal fee.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

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
      </div>
    </div>
  );
};

export default RevolutionizingRideshare;
