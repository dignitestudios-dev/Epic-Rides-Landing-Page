import Button from "@/components/Button";
import Calender from "@/components/icons/Calender";
import CheckBadge from "@/components/icons/CheckBadge";
import Clock from "@/components/icons/Clock";
import Graduate from "@/components/icons/Graduate";
import HeartHealth from "@/components/icons/HeartHealth";
import Users2 from "@/components/icons/Users2";
import React from "react";
import Donations from "./Donations";
import Link from "next/link";

const About = () => {
  return (
    <div className="bg-linear-to-bl from-[#028C08] to-[#000B00] mycontainer md:py-16! py-10! md:px-20! flex flex-col justify-center items-center gap-10">
      <div className="space-y-5">
        <h2 className="section-heading text-(--primary) text-center">
          About Us
        </h2>
      </div>

      <div className="md:grid flex flex-col-reverse md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-3">
          <p className="text-white text-lg">
            Epic Rides is a modern ride-sharing platform offering safe,
            reliable, and flexible transportation for everyday travel. Built
            with efficiency and transparency in mind, it connects riders with
            nearby drivers through an intuitive digital experience. The platform
            provides multiple ride options, including economic, luxury, and
            carpool services. Real-time tracking, smart matching, and secure
            payments ensure a smooth journey from start to finish. With verified
            drivers and built-in safety features, Epic Rides is designed for
            trust, quality, and long-term scalability.
          </p>
        </div>

        <div className="md:col-span-2 rounded-3xl h-[400px] md:w-auto w-full bg-[url(/images/section5.png)] bg-cover bg-right relative">
          <div className="absolute top-0 right-0 bg-[#028C08] text-white rounded-3xl p-3 space-y-1 w-[150px] h-[85px] flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold text-center">100%</p>
            <p className="font-semibold text-center">Fare Retention</p>
          </div>

          <div className="absolute bottom-0 left-0 bg-(--primary) text-white rounded-3xl p-3 space-y-1 w-[150px] h-[85px] flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold text-center">24/7</p>
            <p className="font-semibold text-center">Driver Support</p>
          </div>
        </div>
      </div>

      {/* <div className="bg-[#EFFAE6] w-[975px] max-w-full flex flex-col justify-center items-center sm:py-8 py-6 sm:px-12 px-6 rounded-2xl shadow-[2px_2px_12px_2px_#B6E78D80]">
        <h3 className="sm:text-3xl text-2xl font-semibold text-center">
          Support Our Mission{" "}
        </h3>
        <p className="text-base mt-2 mb-8 text-center">
          Every donation helps us build stronger, more connected communities
          through accessible transportation{" "}
        </p>

        <div className="mb-8 w-full md:space-y-6 space-y-3">
          <div className="flex justify-between sm:gap-10">
            <p className="md:text-2xl sm:text-lg min-[425px]:text-base text-xs font-semibold text-nowrap">
              Choose an amount{" "}
            </p>

            <p className="text-[#979797] md:text-xl sm:text-lg min-[425px]:text-base text-xs font-semibold text-right text-nowrap">
              One-Time Monthly
            </p>
          </div>

          <Donations />
        </div>

        <Link
          href={"https://gofund.me/b402c6ba"}
          target="_blank"
          className="w-full"
        >
          <Button className="w-full">Donate Now</Button>
        </Link>
      </div> */}
    </div>
  );
};

export default About;
