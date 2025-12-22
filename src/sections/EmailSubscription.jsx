import Button from "@/components/Button";
import CalenderSun from "@/components/icons/CalenderSun";
import DollarHand from "@/components/icons/DollarHand";
import Driver from "@/components/icons/Driver";
import Email from "@/components/icons/Email";
import React from "react";
import EmailSubscriptionForm from "./EmailSubscriptionForm";
import Link from "next/link";

const EmailSubscription = () => {
  const content = [
    {
      icon: <Driver />,
      title: "Driver First",
      description: "Better pay & benefits",
    },
    {
      icon: <DollarHand />,
      title: "Driver First",
      description: "Better pay & benefits",
    },
    {
      icon: <CalenderSun />,
      title: "Driver First",
      description: "Better pay & benefits",
    },
  ];

  return (
    <div className="w-full flex lg:flex-row flex-col items-start justify-between gap-10 mycontainer md:py-16! py-10! md:px-20! bg-[#F3FCF0]">
      <div>
        <h2 className="md:text-6xl sm:text-4xl text-3xl font-bold">
          Epic Rides App is{" "}
          <span className="text-(--primary) min-[1140px]:block">
            Coming Soon
          </span>
        </h2>

        <p className="font-medium sm:text-lg text-base md:mt-6 mt-3">
          The rideshare revolution that puts drivers first and profits second.
        </p>

        <div className="flex items-center gap-4 md:justify-start justify-center flex-wrap mt-12">
          <Link href={"https://tally.so/r/woq84x"} target="_blank">
            <Button>Join Early Drivers</Button>
          </Link>
          {/* <Link href={"https://tally.so/r/311RQ1"} target="_blank">
            <Button>Invest Now</Button>
          </Link> */}
          <Link href={"https://tally.so/r/wa8zqX"} target="_blank">
            <Button variant="secondary">Join Early Riders</Button>
          </Link>
        </div>

        <div className="flex items-center min-[425px]:flex-nowrap flex-wrap gap-3 bg-[#028C08] rounded-2xl text-white sm:px-5 px-3 sm:py-7 py-4 mt-10">
          {content.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col min-[425px]:w-auto min-[425px]:min-w-auto w-[150px] min-w-[150px] items-center gap-1"
            >
              {item.icon}
              <h3 className="font-semibold text-xl text-center">
                {item.title}
              </h3>
              <p className="text-center text-sm">{item.description}</p>
            </div>
          ))}
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
