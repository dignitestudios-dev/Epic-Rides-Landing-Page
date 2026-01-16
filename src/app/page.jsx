import About from "@/sections/About";
import BePartoftheFuture from "@/sections/BePartoftheFuture";
import BuildingStrongerCommunities from "@/sections/BuildingStrongerCommunities";
import EmailSubscription from "@/sections/EmailSubscription";
import EpicRidesFeatures from "@/sections/Features";
import Footer from "@/sections/Footer";


import Hero from "@/sections/Hero";
import OurCompetitiveEdge from "@/sections/OurCompetitiveEdge";
import RevolutionizingRideshare from "@/sections/RevolutionizingRideshare";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="bg-[#000B00]">

      {/* <BePartoftheFuture /> */}
      {/* <OurCompetitiveEdge /> */}
      <BuildingStrongerCommunities />
      <EpicRidesFeatures />
      <RevolutionizingRideshare />
      <EmailSubscription />
      <div id="about">
        <About />
      </div>
      <Footer />
      </div>
    </>
  );
};

export default Home;
