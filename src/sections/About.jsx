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
  <div className="flex justify-center items-center px-4 py-12">
  <div className="max-w-7xl w-full grid  md:grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    {/* Image Section */}
    <div className="flex justify-center">
      <div className=" rounded-xl p-4">
        <img
          src="/images/iPhone15MGO.png"
          alt="Epic Rides App"
          className="w-full max-w-[420px] md:max-w-[450px] lg:max-w-[500px] object-contain"
        />
      </div>
    </div>

    {/* Text Section */}
    <div className="space-y-5  text-left">
      <h2 className="section-heading text-white">About Us</h2>

      <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
        Epic Rides is a next-generation ride share platform built to empower
        drivers and deliver a fair, transparent experience for riders. Founded
        by someone with firsthand experience in the ride share industry, the
        platform was created in response to high commissions, unfair earnings,
        and rising costs impacting both drivers and riders.
      </p>

      <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
        Unlike traditional ride share apps, Epic Rides allows drivers to keep
        100% of their earnings through a simple subscription model, while riders
        enjoy competitive fares without hidden surge pricing. The app features
        real-time GPS tracking, seamless in-app payments, and dependable support
        to ensure safety and reliability.
      </p>

      <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
        With multiple ride options, real-time tracking, and built-in safety
        features, Epic Rides is committed to trust, quality, and community
        impact.
      </p>
    </div>

  </div>
</div>

  );
};

export default About;
