import React from "react";

import { Facebook, Twitter, LinkedinIcon } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
<footer className="bg-black text-white py-16 px-4">
  <div className="max-w-7xl mx-auto">

    {/* Download App Section */}
    <div className="bg-gradient-to-b from-[#61CB08]/32 via-[#61CB08]/20 to-[#61CB08]/22 rounded-3xl p-6 lg:p-12 mb-16">
      <div className="text-center">
        <h2 className="text-gray-300 text-base md:text-lg font-light mb-3">
          Ready to Get Started
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-green-400 mb-6">
          DOWNLOAD THE APP
        </h3>
        <p className="text-gray-300 text-sm md:text-base mb-8 max-w-2xl mx-auto">
          Download the Epic Rides app and be part of a ride-sharing experience
          built for fairness, safety, and the future.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <img src="/images/AppStore.png" className="w-[140px] " />
          <img src="/images/PlayStore.png" className="w-[140px] " />
        </div>
      </div>
    </div>

    {/* Main Footer Content */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mb-10">

      {/* Logo */}
      <div className="flex justify-center md:justify-start">
        <Image src="/images/logo.png" alt="Logo" width={90} height={90} />
      </div>

      {/* Social Media */}
      <div className="text-center">
        <h3 className="text-white text-lg font-semibold mb-6">
          Find us on Social Media
        </h3>
        <div className="flex justify-center gap-4">
          <a className="w-12 h-12 md:w-14 md:h-14 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-green-400">
            <Facebook size={22} />
          </a>
          <a className="w-12 h-12 md:w-14 md:h-14 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-green-400">
            <Twitter size={22} />
          </a>
          <a className="w-12 h-12 md:w-14 md:h-14 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-green-400">
            <LinkedinIcon size={22} />
          </a>
        </div>
      </div>

      {/* Contact */}
      <div className="text-center md:text-right">
        <p className="text-gray-400 text-sm mb-2">
          contact us anytime at
        </p>
        <a
          href="mailto:info@epicrides.com"
          className="text-gray-400 text-sm hover:text-green-400"
        >
          info@epicrides.com
        </a>
      </div>
    </div>

    {/* Divider */}
    <hr className="border-gray-700 my-8" />

    {/* Bottom Section */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
      <p className="text-gray-500 text-sm">
        © 2024 Epic Rides. All rights reserved.
      </p>

      <div className="flex flex-wrap justify-center gap-3 text-gray-500 text-sm">
        <a className="hover:text-white">Terms of Service</a>
        <span>|</span>
        <a className="hover:text-white">Privacy Policy</a>
        <span>|</span>
        <a className="hover:text-white">FAQs</a>
      </div>
    </div>

  </div>
</footer>

  );
}
