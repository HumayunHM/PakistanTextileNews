import React from "react";
import Copyright from "./Copyright";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import logowhite from '@/assets/images/logowhite.png'

const Footer = () => {
  return (
    <div className="bg-lightblue pt-10">
      <div class="container mx-auto px-4 py-5 text-white font-inter">
        {/* Top Section with Links in 4 Columns */}
        <div class="grid grid-cols-4 gap-4">
          <div class="flex flex-col">
            <h3 class="text-2xl pb-1">Categories</h3>
            <a href="/category1" class="hover:text-gray-500">
              • Latest
            </a>
            <a href="/category2" class="hover:text-gray-500">
              • Local News
            </a>
            <a href="/category2" class="hover:text-gray-500">
              • Regulations
            </a>
            <a href="/category2" class=" hover:text-gray-500">
              • Technology
            </a>
            <a href="/category2" class=" hover:text-gray-500">
              • Sustainability
            </a>
          </div>
          <div class="flex flex-col space-y-2">
            <h3 class="text-2xl">Related Links</h3>
            <a href="#" class="hover:text-gray-500">
            Trade Development Authority of Pakistan
            </a>
            <a href="#" class="hover:text-gray-500">
            State Bank of Pakistan
            </a>
            <a href="#" class="hover:text-gray-500">
            Ministry of Commerce
            </a>
          </div>
          <div class="flex flex-col space-y-2">
            <h3 class="text-lg font-bold">Contact Us</h3>
            <p class="text-sm">Email: info@pakistantextilenews.com</p>
            <p class="text-sm">Phone: +123 456 7890</p>
          </div>
          <div class="flex-col justify-center items-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-3xl hover:text-lightblue" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              class="mx-4"
            >
              <FaTwitter className="text-3xl hover:text-lightblue" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl hover:text-lightblue" />
            </a>
          </div>
        </div>
      </div>
      <div className="py-6">
      <Image
          src={logowhite}
          alt="Pakistan Textile News"
          width={400}
          height={400}
          className="ml-10 block"
        />
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
