"use client";
import Button from "@/components/Button";
import React from "react";

const EmailSubscriptionFormFooter = () => {
  const handleEmailSubscribe = (e) => {
    e.preventDefault();
    // Handle email subscription logic here
  };

  return (
    <form onSubmit={handleEmailSubscribe} className="w-full space-y-2 mt-6">
      <p className="text-[#525252]">Enter Your Email Address</p>
      <input
        type="text"
        placeholder="Enter Your Email Address"
        className="bg-white text-black placeholder:text-[#727272] rounded-xl w-full p-3 border-2 border-gray-300 mb-6"
      />

      <Button className={"w-full! max-w-full! text-black"}>
        Get Launch Updates
      </Button>
    </form>
  );
};

export default EmailSubscriptionFormFooter;
