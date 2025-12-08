import BePartoftheFuture from "@/sections/BePartoftheFuture";
import BuildingStrongerCommunities from "@/sections/BuildingStrongerCommunities";
import EmailSubscription from "@/sections/EmailSubscription";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import OurCompetitiveEdge from "@/sections/OurCompetitiveEdge";
import RevolutionizingRideshare from "@/sections/RevolutionizingRideshare";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <RevolutionizingRideshare />
      <BePartoftheFuture />
      <OurCompetitiveEdge />
      <BuildingStrongerCommunities />
      <EmailSubscription />
      <Footer />
    </>
  );
};

export default Home;
