"use client";

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "@/assets/images/logo.png";

const TopPortion = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date().toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(date);
  }, []);
  return (
    <>
      <div className="flex justify-between items-center py-2 px-8 bg-white">
        {/* Logo Section */}
        <div className="relative text-center w-full">
          <Image
            src={logo}
            alt="Pakistan Textile News"
            width={400}
            height={400}
            className="mx-auto block"
          />
          <span className="font-inter text-darkblue text-xs absolute bottom-0 right-0 left-0">
            {currentDate}
          </span>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex absolute right-20 space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-2xl text-darkblue" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl text-darkblue" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl text-darkblue" />
          </a>
        </div>
      </div>
      <hr className="border-t-4 mt-4 border-darkblue w-[92%] mx-auto" />
    </>
  );
};

export default TopPortion;
