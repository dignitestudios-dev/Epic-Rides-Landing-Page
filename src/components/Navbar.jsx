import Image from "next/image";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#F1F9EB] rounded-4xl p-4 hidden lg:flex items-center gap-5 justify-between">
        <Image src="/images/logo.png" alt="Logo" width={90} height={90} />

        <ul className="flex items-center gap-5 font-medium">
          <li>Invest</li>
          <li>Donate</li>
          <li>Founding Drivers</li>
          <li>Drivers</li>
          <li>Early Riders</li>
        </ul>

        <Button>Invest Now</Button>
      </nav>

      <nav className="flex lg:hidden">
        <Image src="/images/logo.png" alt="Logo" width={90} height={90} />
      </nav>
    </>
  );
};

export default Navbar;
