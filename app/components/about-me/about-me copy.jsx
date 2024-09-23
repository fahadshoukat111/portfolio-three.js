import React from "react";
import Image from "next/image";
import cardOneImg from "./../../assets/grid1.png";
import cardTwoImg from "./../../assets/grid2.png";
import cardThreeImg from "./../../assets/3card.png";
import cardFourImg from "./../../assets/card4.png";
import cardFiveImg from "./../../assets/card5.png";

function AboutMe() {
  return (
    // <div className="w-11/12 m-auto h-auto">
    //   <h1 className="text-4xl mb-8 mx-12">About Me</h1>
    //   <div className="flex gap-4 flex-wrap justify-center mx-4 my-6">
    //     <div
    //       className="border-solid border border-gray-900 rounded-lg w-[30%]
    //     p-6"
    //     >
    //       <Image src={cardOneImg} alt="" />
    //       <h1 className="text-lg font-bold my-4">Hi, I'm Fahad Shoukat</h1>
    //       <p>
    //         With 12 years of experience, I have honed my skills in both frontend
    //         and backend dev, creating dynamic and responsive websites.{" "}
    //       </p>
    //     </div>
    //     <div
    //       className="border-solid border border-gray-900 rounded-lg w-[30%]
    //     p-6"
    //     >
    //       <Image src={cardTwoImg} alt="" className="h-[336px]" />
    //       <h1 className="text-lg font-bold my-4">Tech Stack</h1>
    //       <p>
    //         I specialize in a variety of languages, frameworks, and tools that
    //         allow me to build robust and scalable applications
    //       </p>
    //     </div>
    //     <div
    //       className="border-solid border border-gray-900 rounded-lg w-[30%]
    //     p-6"
    //     >
    //       <Image src={cardThreeImg} alt="" className="h-[336px]" />
    //       <h1 className="text-lg font-bold my-4">Tech Stack</h1>
    //       <p>
    //         I specialize in a variety of languages, frameworks, and tools that
    //         allow me to build robust and scalable applications
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <>
      {/* <h1 className="text-4xl mb-8 mx-12">About Me</h1> */}
      <div className="w-11/12 m-auto mt-12 h-auto">
        <h1 className="text-2xl md:text-4xl mb-8 mx-12 text-center md:text-start">About Me</h1>
        <div className="min-h-screen w-11/12 m-auto my-4 md:flex flex-wrap gap-4 items-start justify-center">
          <div className="border-solid border md:mb-auto mb-6 border-gray-500 rounded-lg p-6 flex-1 min-w-[30%]">
            <Image src={cardOneImg} alt="" />
            <h1 className="text-lg font-bold my-4">Hi, I'm Fahad Shoukat</h1>
            <p>
              With 12 years of experience, I have honed my skills in both
              frontend and backend dev, creating dynamic and responsive
              websites.
            </p>
          </div>

          <div className="border-solid border md:mb-auto mb-6 border-gray-500 rounded-lg p-6 flex-1 min-w-[30%]">
            <Image src={cardTwoImg} alt="" className="h-[330px]" />
            <h1 className="text-lg font-bold my-4">Tech Stack</h1>
            <p>
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>

          <div
            className="border-solid border md:mb-auto mb-10 border-gray-500 rounded-lg p-6 flex-1 md:min-w-[30%] h-auto
md:h-[750px]"
          >
            <Image src={cardThreeImg} alt="" />
            <h1 className="text-lg font-bold my-4">
              I’m very flexible with time zone communications & locations
            </h1>
            <p>
              I'm based in Rjieka, Croatia and open to remote work worldwide.
            </p>
            <button
              className=" my-8 items-center gap-2 rounded border border-[#1C1C21]
w-full flex justify-center
bg-[#1C1C21] px-8 py-3 text-white hover:bg-transparent hover:text-[#00FF80] 
focus:outline-none focus:ring active:text-indigo-500"
              href="#"
            >
              <div className="w-4 h-4 rounded-full  bg-[#00FF80]"></div>
              <span className="text-sm font-medium"> Contact Me </span>
            </button>
          </div>

          <div className="border-solid border md:mb-auto mb-6 border-gray-500 rounded-lg p-6 flex-[2] md:mt-[-200px] h-auto">
            <Image src={cardFourImg} className="" />
            <h1 className="text-lg font-bold my-4">My Passion for Coding</h1>
            <p>
              I love solving problems and building things through code.
              Programming isn't just my profession—it's my passion. I enjoy
              exploring new technologies, and enhancing my skills.
            </p>
          </div>

          <div className="border-solid border md:mb-auto mb-6 border-gray-500 rounded-lg p-2.5 flex-1 min-w-[20%]">
            <Image src={cardFiveImg} className="h-44 w-11/12" />
            <h1 className="text-lg text-center font-bold my-4">Contact Me</h1>
            <p className="text-center">fahad.shoukat111@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
