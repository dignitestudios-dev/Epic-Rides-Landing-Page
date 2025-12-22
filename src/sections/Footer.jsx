import Image from "next/image";
import React from "react";
import EmailSubscriptionFormFooter from "./EmailSubscriptionFormFooter";
import Facebook from "@/components/icons/Facebook";
import Instagram from "@/components/icons/Instagram";
import TwitterX from "@/components/icons/TwitterX";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="mycontainer lg:p-16! sm:p-10! p-5!">
        <Image src="/images/logo.png" alt="Logo" width={90} height={90} />

        <div className="grid lg:grid-cols-5 lg:gap-20 sm:gap-12 gap-4">
          <div className="space-y-5 lg:col-span-2 mt-5">
            <p className="font-medium text-gray-400">
              Epic Rides App is the new rideshare platform built to put drivers
              and riders first. Unlike other companies that take large
              commissions, Epic Rides App allows drivers to keep 100% of their
              earnings while offering lower fares to passengers. Our mission is
              simple: create a fair, transparent, and community-driven rideshare
              experience where everyone wins. With Epic Rides App, drivers earn
              more, passengers save more, and together we're redefining what
              rideshare should be.
            </p>

            <div>
              <p className="sm:text-3xl text-xl font-bold text-[#525252]">
                Follow Our Journey
              </p>

              <div className="sm:mt-4 mt-2 flex items-center gap-2">
                <Link
                  href="https://www.facebook.com/share/173gSSC4H5/?mibextid=wwXIfr"
                  target="_blank"
                >
                  <div className="h-9 w-9 flex justify-center items-center rounded-full bg-[#028C08]">
                    <Facebook />
                  </div>
                </Link>

                <Link
                  href="https://www.instagram.com/epiccabby?igsh=cmlleTc1ZnNnbXFo"
                  target="_blank"
                >
                  <div className="h-9 w-9 flex justify-center items-center rounded-full bg-[#028C08]">
                    <Instagram />
                  </div>
                </Link>

                <Link href="https://x.com/@epiccabby" target="_blank">
                  <div className="h-9 w-9 flex justify-center items-center rounded-full bg-[#028C08]">
                    <TwitterX />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-start min-[425px]:flex-row flex-col sm:gap-28 min-[425px]:gap-10 gap-4">
              <ul className="text-gray-400 mt-4 font-medium sm:space-y-4 space-y-2">
                <li>
                  <p className="sm:text-3xl text-xl font-bold text-[#525252]">
                    Get Involved
                  </p>
                </li>
                {/* <li>Invest</li> */}
                <li>Founding Drivers</li>
                {/* <li>Donate</li> */}
              </ul>

              <ul className="text-gray-400 mt-4 font-medium sm:space-y-4 space-y-2">
                <li>
                  <p className="sm:text-3xl text-xl font-bold text-[#525252]">
                    Company{" "}
                  </p>
                </li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>

            <div className="text-white flex flex-col gap-3 sm:mt-20 mt-12 md:w-[525px] max-w-full">
              <h3 className="text-3xl font-semibold text-[#525252]">
                Stay Informed
              </h3>

              <p className="font-semibold text-gray-400">
                Get the latest news about our launch and community programs{" "}
              </p>

              <EmailSubscriptionFormFooter />
            </div>
          </div>
        </div>

        <div className="border-t-2 border-gray-300 text-[#525252] mt-10 py-10 w-full flex lg:flex-row flex-col lg:justify-between lg:gap-32 gap-5">
          <p className="sm:text-nowrap">
            © 2025 Epic Rides App. All rights reserved.
          </p>

          <p className="lg:text-right">
            <span className="font-semibold">Investment Notice:</span> For
            general interest only—this is not an offer to sell securities. Any
            investment opportunity will be subject to regulatory compliance and
            due diligence. Potential returns are speculative and not guaranteed.
          </p>
        </div>
      </div>

      <div className="pb-12">
        <p className="text-center text-[#525252] text-xl font-medium">
          Powered by Dignite Studios
        </p>
      </div>
    </>
  );
};

export default Footer;
