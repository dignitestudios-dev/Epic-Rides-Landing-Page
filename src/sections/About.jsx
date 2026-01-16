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
import Image from "next/image";


const About = () => {
  return (
    <div className=" mycontainer md:py-16! py-10! md:px-20! flex flex-col justify-center items-center gap-10">
     

      <div className="flex gap-20">
  <img src="/images/iPhone15MGO.png" alt="Phone 1" className="object-contain w-[80vh]"  />

 




        <div className="md:col-span-2 space-y-10">
           <div className="space-y-5">
        <h2 className="section-heading text-[#FFFFFF] ">
          About Us
        </h2>
      </div>
          <p className="text-white text-lg">
            Epic Rides is a next-generation ride share platform built to empower drivers and deliver a fair, transparent experience for riders. Founded by someone with firsthand experience in the ride share industry, the platform was created in response to high commissions, unfair earnings, and rising costs impacting both drivers and riders.
          </p>
          <p className="text-white text-lg">
            Unlike traditional ride share apps, Epic Rides allows drivers to keep 100% of their earnings through a simple subscription model, while riders enjoy competitive fares without hidden surge pricing. The app features real-time GPS tracking, seamless in-app payments, and dependable support to ensure safety and reliability. After four years of research, planning, and preparation, Epic Rides was developed to create a more balanced, community-driven ride share ecosystem built for long-term sustainability
          </p>
          <p className="text-white text-lg">
           With multiple ride options, real-time tracking, and built-in safety features, Epic Rides is committed to trust, quality, and community impact.
          </p>
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
