import Button from "@/components/Button";
import CalenderSun from "@/components/icons/CalenderSun";
import DollarHand from "@/components/icons/DollarHand";
import Driver from "@/components/icons/Driver";
import Email from "@/components/icons/Email";
import React from "react";
import EmailSubscriptionForm from "./EmailSubscriptionForm";
import Link from "next/link";

const EmailSubscription = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col items-start justify-between gap-10 mycontainer md:py-16! py-10! md:px-20!">
      <div>
        <h2 className="md:text-6xl sm:text-4xl text-3xl font-bold text-[#FFFFFF] leading-[1.2]">
          <span className="text-[#61CB08] min-[1140px]:block">Coming Soon</span>
          Epic Rides App is{" "}
        </h2>

        <p className="font-medium sm:text-lg text-white md:mt-6 ">
          The rideshare revolution that puts drivers first and profits second.
        </p>

        <div className="flex items-center gap-4 md:justify-start justify-center flex-wrap mt-4">
          <Link href={"https://tally.so/r/woq84x"} target="_blank">
            <Button>Join Early Drivers</Button>
          </Link>
          {/* <Link href={"https://tally.so/r/311RQ1"} target="_blank">
            <Button>Invest Now</Button>
          </Link> */}
          <Link href={"https://tally.so/r/wa8zqX"} target="_blank">
            <Button>Join Early Riders</Button>
          </Link>
          <Link href="https://tally.so/r/311RQ1" target="_blank">
            <Button variant="secondary" className="w-[200px]">
              Get the App
            </Button>
          </Link>
        </div>

        <div className="  bg-[#028C08] rounded-2xl text-white sm:px-5 px-3   py-4 mt-10">
          <div className="flex-1 flex flex-col  items-center gap-1">
            <Driver />
            <h3 className="font-semibold text-xl text-center">Driver First</h3>
            <p className="text-center text-[14px]">
              Better pay. More control. Real support.
            </p>
            <p className="text-center text-[14px]">
              Epic Rides empowers drivers with transparent earnings, <br />{" "}
              flexible schedules, and tools designed to support long-term
              success.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:w-auto w-full">
        <div className="bg-[#028C08] lg:min-w-[400px] sm:px-8 px-6 sm:py-16 py-10 rounded-2xl text-white flex flex-col items-center gap-3">
          <Email />
          <h3 className="text-3xl font-semibold">Stay Updated</h3>

          <p className="font-semibold">
            Enter your email for exclusive launch updates
          </p>

          <EmailSubscriptionForm />
        </div>
      </div>
    </div>
  );
};

export default EmailSubscription;
