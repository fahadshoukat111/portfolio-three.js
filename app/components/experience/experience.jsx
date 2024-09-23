import React from "react";
import Image from "next/image";
import experienceImg from "../../assets/experience.png";
import company1Img from "../../assets/company1.png";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
const Experience = () => {
  return (
    <div className="w-11/12 m-auto my-8 h-auto">
      <h1 className="text-2xl md:text-4xl mb-8 text-center md:text-start">My Work Experience</h1>
      <div className="md:flex justify-center gap-12 md:mx-16">
        <div className="md:w-[35%] h-auto">
          <Image src={experienceImg} className="w-[570px] h-[525px]" />
        </div>
        <div className="md:w-[55%] h-auto  mt-12">
          {[1, 2, 3].map((card, index) => {
            return (
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <Image src={company1Img} className="w-[200px]" />
                  {(index === 0 || index === 1) && (
                    <div className="border-l-2 border-gray-500 w-[2px] h-full"></div>
                  )}
                </div>
                <div className="my-2">
                  <h1 className="font-bold my-1">Framer</h1>
                  <p className="block text-sm text-gray-500 dark:text-gray-400 my-2">
                    Lead Web Developer — 2022- Present{" "}
                  </p>
                  <p className="block text-sm text-gray-500 dark:text-gray-400 my-2">
                    Developed and maintained advanced prototyping features,
                    ensuring smooth user interaction and responsive design.
                    Collaborated with designers to translate creative concepts
                    into functional, high-performance web components.{" "}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
