"use client";
import React, { useState } from "react";

const Donations = () => {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const donationAmounts = [25, 50, 100];

  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 lg:gap-8 gap-4">
      {donationAmounts.map((amount, index) => (
        <div
          key={index}
          onClick={() => setSelectedAmount(amount)}
          className={`${
            selectedAmount === amount
              ? "bg-(--primary) border-(--primary)"
              : "border-[#979797]"
          } cursor-pointer lg:min-w-[180px] lg:p-5 p-3 flex justify-center items-center md:text-3xl text-xl border-2 rounded-md`}
        >
          ${amount}
        </div>
      ))}

      <div
        className={`cursor-pointer lg:min-w-[180px] lg:p-5 p-3 flex justify-center items-center md:text-3xl text-xl border-2 border-[#979797] rounded-md`}
      >
        Custom
      </div>
    </div>
  );
};

export default Donations;
