import Link from "next/link";
import React from "react";

const Donations = () => {
  const donationAmounts = [25, 50, 100];

  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 lg:gap-8 gap-4">
      {donationAmounts.map((amount, index) => (
        <Link key={index} href={"https://gofund.me/b402c6ba"} target="_blank">
          <div className="hover:bg-(--primary) hover:border-(--primary) border-[#979797] cursor-pointer lg:min-w-[180px] lg:p-5 p-3 flex justify-center items-center md:text-3xl text-xl border-2 rounded-md">
            ${amount}
          </div>
        </Link>
      ))}

      <Link href={"https://gofund.me/b402c6ba"} target="_blank">
        <div
          className={`hover:bg-(--primary) hover:border-(--primary) border-[#979797] cursor-pointer lg:min-w-[180px] lg:p-5 p-3 flex justify-center items-center md:text-3xl text-xl border-2 rounded-md`}
        >
          Custom
        </div>
      </Link>
    </div>
  );
};

export default Donations;
