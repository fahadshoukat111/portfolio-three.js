import React from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

import colorfulMenu from "../../assets/menu-colorful.png";

const ContactMe = () => {
  return (
    <div className="md:w-11/12 m-auto my-8 h-auto">
      <div className="border rounded-lg mx-4 border-gray-500">
        <div
          className="bg-gradient-to-r rounded-lg "
          style={{
            backgroundImage:
              "linear-gradient(to right, #F2F2F21A 10%, #F2F2F280 50%, #F2F2F21A 90%)",
          }}
        >
          <div className="flex justify-between items-center mx-4">
            <Image src={colorfulMenu} />
            <Plus />
          </div>
        </div>
        <div className="flex flex-col items-center my-6">
          <div className="md:w-[33%]">
            <h1 className="text-4xl font-bold text-center md:text-left">Let’s talk</h1>
            <p className="block text-sm text-gray-500 dark:text-gray-400 my-2 text-center md:text-left">
              Whether you’re looking to build a new website, improve your
              existing platform, or bring a unique project to life, I’m here to
              help.
            </p>
          </div>

          <div className="w-11/12  md:w-[33%] my-6">
            <label
              htmlFor="fullName"
              className="block text-xs font-medium text-[#AFB0B6]"
            >
              {" "}
              Full Name{" "}
            </label>

            <input
              type="text"
              id="UserEmail"
              placeholder="ex:Jhon Doe"
              className="mt-1 px-4 w-full h-12 bg-[#1C1C1E] rounded-md border-black shadow-sm sm:text-sm"
            />
          </div>

          <div className="w-11/12 md:w-[33%] my-4">
            <label
              htmlFor="UserEmail"
              className="block text-xs font-medium text-[#AFB0B6]"
            >
              {" "}
              Email Address{" "}
            </label>

            <input
              type="email"
              id="UserEmail"
              placeholder="john@rhcp.com"
              className="mt-1 px-4 w-full h-12 bg-[#1C1C1E] rounded-md border-black shadow-sm sm:text-sm"
            />
          </div>

          <div className="w-11/12 md:w-[33%] my-4">
            <label
              htmlFor="UserMessage"
              className="block text-xs font-medium text-[#AFB0B6]"
            >
              {" "}
              Your Messages{" "}
            </label>

            <input
              type="text"
              id="UserMessage"
              placeholder="Share your thoughts or inquiries..."
              className="mt-1 px-4 w-full h-24 bg-[#1C1C1E] rounded-md border-black shadow-sm sm:text-sm"
            />
          </div>
          <div className="w-11/12 md:w-[33%] my-4">
            <button
              className="w-full justify-center flex items-center rounded border border-[#3A3A49] bg-[#3A3A49] 
            px-8 py-3 text-white hover:bg-transparent
             hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              href="#"
            >
              <span className="text-sm font-medium"> Send Message </span>

              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
