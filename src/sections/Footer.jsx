import React from "react";

import { Facebook, Twitter,  LinkedinIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Download App Section */}
        <div className="bg-gradient-to-b from-[#61CB08]/32 via-[#61CB08]/20 to-[#61CB08]/22 rounded-3xl p-12 mb-16">
          <div className="text-center">
            <h2 className="text-gray-300 text-lg font-light mb-3">
              Ready to Get Started
            </h2>
            <h3 className="text-5xl font-bold text-green-400 mb-6">
              DOWNLOAD THE APP
            </h3>
            <p className="text-gray-300 text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Download the Epic Rides app and be part of a ride-sharing
              experience built for fairness, safety, and the future.
            </p>
            <div className="flex justify-center gap-6">
              <img src="/images/AppStore.png" alt="" className="w-[150px]" />
              <img src="/images/PlayStore.png" alt=" " className="w-[150px]" />
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex justify-between items-start mb-8 gap-8">
          {/* Epic Rides Logo */}
          <div className="flex-shrink-0">
         <img src="/images/Logo.png" alt="" className="w-[90px]"/>
          </div>

          {/* Social Media - Center */}
          <div className="flex-1 text-center">
            <h3 className="text-white text-lg font-semibold mb-6">
              Find us on Social Media
            </h3>
            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="w-14 h-14 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-green-400 transition-colors"
              >
                <Facebook size={24} strokeWidth={1} />
              </a>
              <a
                href="#"
                className="w-14 h-14 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-green-400 transition-colors"
              >
                <Twitter size={24} strokeWidth={1} />
              </a>
              <a
                href="#"
                className="w-14 h-14 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-green-400 transition-colors"
              >
                <LinkedinIcon size={24} strokeWidth={1} color="white" />
              </a>
            </div>
          </div>

          {/* Contact - Right */}
          <div className="text-right flex-shrink-0">
            <p className="text-gray-400 text-sm mb-2">contact us anytime at</p>
            <a
              href="mailto:info@epicrides.com"
              className="text-gray-400 text-sm hover:text-green-400 transition-colors"
            >
              info@epicrides.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Bottom Section */}
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; 2024 Epic Rides. All rights reserved.
          </p>
          <div className="flex gap-4 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              FAQs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
