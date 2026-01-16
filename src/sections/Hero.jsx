import Button from "@/components/Button";
import Badge from "@/components/icons/Badge";
import RightArrow from "@/components/icons/RightArrow";
import Shield from "@/components/icons/Shield";
import Users from "@/components/icons/Users";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className={`relative min-h-screen mycontainer flex flex-col`}>
      <Image
        src="/images/hero-bg.png"
        alt="EpicRides hero background"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <Navbar />

      <div className="w-full flex-1 flex justify-center items-center">
        <div className="py-10 flex flex-col justify-center items-center sm:gap-10 gap-4">
          <Button>Limited Time Offer</Button>

          <div className="sm:space-y-5 space-y-2">
            <h1 className="section-heading text-white text-center">
              Founding Driver Exclusive
            </h1>
            <p className="text-white lg:w-[830px] max-w-full text-center sm:text-[22px] text-base">
              For a limited time, the{" "}
              <span className="text-(--primary) font-semibold">
                first 10,000 Early Drivers
              </span>
               to sign up will lock in a lifetime rate of just 
              <span className="text-(--primary) font-semibold">
                $15 per week
              </span>
               and be officially recognized on our website as 
              <span className="text-(--primary) font-semibold">
                Founding Drivers
              </span>
              .
            </p>
            <div  className="flex flex-col gap-2 text-center">
              <p className="text-white text-[22px]">First <span className="text-[#61CB08] font-semibold">10,000 Early Drivers</span></p>
              <p className="text-white text-[22px]">Lifetime Rate: <span className="text-[#61CB08] font-semibold">$15 per week</span></p>
            </div>
          </div>

          <div className="sm:space-y-10 space-y-5">

            <div className="flex justify-center">
              <Link href={"https://tally.so/r/woq84x"} target="_blank">
                <Button className={"w-full"}>Become a founding driver</Button>
              </Link>
            </div>
          </div>

          <div className="text-white flex items-center sm:gap-10 min-[425px]:gap-4 gap-1 flex-wrap lg:justify-start justify-center">
            <div className="font-bold flex items-center sm:gap-3 gap-1">
              <div className="sm:scale-100 scale-[60%]">
                <Shield />
              </div>
              <p className="sm:font-semibold font-medium sm:text-xl text-lg">
                Lifetime Rate Lock
              </p>
            </div>

            <div className="font-bold flex items-center sm:gap-3 gap-1">
              <div className="sm:scale-100 scale-[60%]">
                <Badge />
              </div>
              <p className="sm:font-semibold font-medium sm:text-xl text-lg">
                Official Recognition
              </p>
            </div>

            <div className="font-bold flex items-center sm:gap-3 gap-1">
              <div className="sm:scale-100 scale-[60%]">
                <Users />
              </div>
              <p className="sm:font-semibold font-medium sm:text-xl text-lg">
                Exclusive Benefits
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
