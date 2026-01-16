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

const BuildingStrongerCommunities = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#61CB08]/20 via-[#061a0f] to-black px-6 py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-[50px] md:text-6xl font-[600] mb-6">
            <span className="text-[#61CB08]">EPIC RIDES,</span>{' '}
            <span className="text-white">RELIABLE RIDES, FAIR PAY,</span>
            <br />
            <span className="text-white">BUILT FOR THE COMMUNITY</span>
          </h1>
          
          <p className="text-gray-300 font-[400]  text-[18px] max-w-5xl mx-auto leading-relaxed">
           Epic Rides is a next-generation ride‑sharing platform designed to put drivers first while delivering safe, reliable transportation for riders. Built with smart technology, transparent pricing, and real-time tracking, Epic Rides creates a seamless experience for everyone.
          </p>
        </div>

        {/* Phone Mockups */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6">
          
          {/* Phone 1 - Map with Saved Locations */}
          <div className="relative">
            <Image src="/images/Variant3.png" alt="Phone 1" width={700} height={700} />
          </div>

         
         

        </div>

        
        

      </div>
    </section>
  );
}
    // <div className="bg-linear-to-bl from-[#028C08] to-[#000B00] mycontainer md:py-16! py-10! md:px-20! flex flex-col justify-center items-center gap-10">
    //   <div className="space-y-5">
    //     <h2 className="section-heading text-(--primary) text-center">
    //       Building Stronger Communities{" "}
    //     </h2>

    //     <p className="text-white lg:w-[830px] max-w-full text-center text-xl">
    //       Epic Rides App isn't just about rides - we're committed to creating
    //       lasting positive change in every community we serve
    //     </p>
    //   </div>

    //   <div className="md:grid flex flex-col-reverse md:grid-cols-5 gap-10 items-center">
    //     <div className="md:col-span-3">
    //       <ul className="text-white space-y-10 h-full flex flex-col">
    //         <li>
    //           <div className="flex gap-5 items-start">
    //             <div className="bg-[#028C08] w-10 h-10 min-w-10 min-h-10 rounded-full flex justify-center items-center">
    //               <HeartHealth />
    //             </div>
    //             <div className="space-y-1">
    //               <h3 className="sm:text-[22px] text-lg font-semibold">
    //                 Healthcare Access Program{" "}
    //               </h3>
    //               <p className="text-xs">
    //                 Providing discounted rides to medical appointments for
    //                 seniors, disabled individuals, and low-income families who
    //                 need reliable healthcare transportation.
    //               </p>

    //               <div className="mt-3 flex items-center justify-between min-[925px]:flex-nowrap flex-wrap min-[925px]:gap-10 gap-2 min-[925px]:w-[400px] sm:w-[300px]">
    //                 <div className="flex items-center gap-3">
    //                   <Users2 />
    //                   <p className="text-sm text-nowrap">500+ People Served</p>
    //                 </div>

    //                 <div className="flex items-center gap-3">
    //                   <Calender />
    //                   <p className="text-sm text-nowrap">Monthly Program</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </li>

    //         <li>
    //           <div className="flex gap-5 items-start">
    //             <div className="bg-[#028C08] w-10 h-10 min-w-10 min-h-10 rounded-full flex justify-center items-center">
    //               <Graduate />
    //             </div>
    //             <div className="space-y-1">
    //               <h3 className="sm:text-[22px] text-lg font-semibold">
    //                 Driver Education Initiative{" "}
    //               </h3>
    //               <p className="text-xs">
    //                 Free training programs for new drivers covering safety,
    //                 customer service, financial literacy, and career development
    //                 to ensure long-term success.
    //               </p>

    //               <div className="mt-3 flex items-center justify-between min-[925px]:gap-10 gap-2 md:flex-nowrap flex-wrap min-[925px]:w-[400px] sm:w-[300px]">
    //                 <div className="flex items-center gap-3">
    //                   <CheckBadge />
    //                   <p className="text-sm">200+ Certified</p>
    //                 </div>

    //                 <div className="flex items-center gap-3">
    //                   <Clock />
    //                   <p className="text-sm">20-Hour Program</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>

    //     <div className="md:col-span-2 rounded-3xl h-[400px] md:w-auto w-full bg-[url(/images/section5.png)] bg-cover bg-right relative">
    //       <div className="absolute top-0 right-0 bg-[#028C08] text-white rounded-3xl p-3 space-y-1 w-[150px] h-[85px] flex flex-col justify-center items-center">
    //         <p className="text-2xl font-semibold text-center">100%</p>
    //         <p className="font-semibold text-center">Fare Retention</p>
    //       </div>

    //       <div className="absolute bottom-0 left-0 bg-(--primary) text-white rounded-3xl p-3 space-y-1 w-[150px] h-[85px] flex flex-col justify-center items-center">
    //         <p className="text-2xl font-semibold text-center">24/7</p>
    //         <p className="font-semibold text-center">Driver Support</p>
    //       </div>
    //     </div>
    //   </div>

    //   {/* <div className="bg-[#EFFAE6] w-[975px] max-w-full flex flex-col justify-center items-center sm:py-8 py-6 sm:px-12 px-6 rounded-2xl shadow-[2px_2px_12px_2px_#B6E78D80]">
    //     <h3 className="sm:text-3xl text-2xl font-semibold text-center">
    //       Support Our Mission{" "}
    //     </h3>
    //     <p className="text-base mt-2 mb-8 text-center">
    //       Every donation helps us build stronger, more connected communities
    //       through accessible transportation{" "}
    //     </p>

    //     <div className="mb-8 w-full md:space-y-6 space-y-3">
    //       <div className="flex justify-between sm:gap-10">
    //         <p className="md:text-2xl sm:text-lg min-[425px]:text-base text-xs font-semibold text-nowrap">
    //           Choose an amount{" "}
    //         </p>

    //         <p className="text-[#979797] md:text-xl sm:text-lg min-[425px]:text-base text-xs font-semibold text-right text-nowrap">
    //           One-Time Monthly
    //         </p>
    //       </div>

    //       <Donations />
    //     </div>

    //     <Link
    //       href={"https://gofund.me/b402c6ba"}
    //       target="_blank"
    //       className="w-full"
    //     >
    //       <Button className="w-full">Donate Now</Button>
    //     </Link>
    //   </div> */}
    // </div>


export default BuildingStrongerCommunities;
