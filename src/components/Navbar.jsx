"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    // {
    //   href: "https://tally.so/r/woq84x",
    //   label: "Founding Drivers",
    //   external: true,
    // },
    {
      href: "https://tally.so/r/3yW1A8",
      label: "Early Drivers",
      external: true,
    },
    {
      href: "https://tally.so/r/wa8zqX",
      label: "Early Riders",
      external: true,
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className=" rounded-4xl p-4 hidden lg:flex items-center gap-5 justify-between">
        <Image src="/images/logo.png" alt="Logo" width={90} height={90} />

        <ul className="flex items-center gap-10 font-medium text-white">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                target={link.external ? "_blank" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="https://tally.so/r/311RQ1" target="_blank">
          <Button>Get the App</Button>
        </Link>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex lg:hidden items-center justify-between p-4">
        <Image src="/images/logo.png" alt="Logo" width={90} height={90} />

        {/* Hamburger Menu Icon */}
        <button
          onClick={toggleSidebar}
          className="flex flex-col gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </nav>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-50 lg:hidden transition-opacity duration-300 z-40"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-gray-900 shadow-lg lg:hidden transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Content */}
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <div className="mb-8">
            <Image src="/images/logo.png" alt="Logo" width={70} height={70} />
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-6 font-medium text-white flex-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  onClick={!link.external ? closeSidebar : undefined}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Get the App Button */}
          <Link
            href="https://tally.so/r/311RQ1"
            target="_blank"
            onClick={closeSidebar}
          >
            <Button>Get the App</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
