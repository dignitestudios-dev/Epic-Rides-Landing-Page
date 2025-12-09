import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#F1F9EB] rounded-4xl p-4 hidden lg:flex items-center gap-5 justify-between">
        <Image src="/images/logo.png" alt="Logo" width={90} height={90} />

        <ul className="flex items-center gap-5 font-medium">
          <li>
            <Link href={"https://tally.so/r/311RQ1"} target="_blank">
              Invest
            </Link>
          </li>
          <li>
            <Link href={"https://gofund.me/b402c6ba"} target="_blank">
              Donate
            </Link>
          </li>
          <li>
            <Link href={"https://tally.so/r/woq84x"} target="_blank">
              Founding Drivers
            </Link>
          </li>
          <li>
            <Link href={"https://tally.so/r/3yW1A8"} target="_blank">
              Early Drivers
            </Link>
          </li>
          <li>
            <Link href={"https://tally.so/r/wa8zqX"} target="_blank">
              Early Riders
            </Link>
          </li>
        </ul>

        <Link href="https://tally.so/r/311RQ1" target="_blank">
          <Button>Invest Now</Button>
        </Link>
      </nav>

      <nav className="flex lg:hidden">
        <Image src="/images/logo.png" alt="Logo" width={90} height={90} />
      </nav>
    </>
  );
};

export default Navbar;
