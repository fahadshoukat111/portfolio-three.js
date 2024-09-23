import { Facebook, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-[#62646C] gap-8 sm:justify-start">
            <a href="">Term & Conditions</a>
            <a href="">Privacy Policy</a>
          </div>

          <div className="flex justify-center md:justify-normal gap-4">
            <div className="bg-[#1C1C21] w-12 h-12 flex justify-center items-center rounded-full">
              <Facebook />
            </div>
            <div className="bg-[#1C1C21] w-12 h-12 flex justify-center items-center  rounded-full">
              <Twitter />
            </div>
            <div className="bg-[#1C1C21] w-12 h-12 flex justify-center items-center  rounded-full">
              <Linkedin />
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            &copy; Fahad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
