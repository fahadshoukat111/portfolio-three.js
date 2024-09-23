"use client";
import React, { useState } from "react";
import Image from "next/image";
import spotOneImg from "../../assets/spot1.png";
import project1 from "../../assets/Content.png";
import reactImg from "../../assets/react.png";
import tailwindImg from "../../assets/tailwind.png";
import framerImg from "../../assets/framer.png";
import typesctiptImg from "../../assets/typescript.png";
import comImg from "../../assets/com.png";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
const Portfolio = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const Dot = ({ isActive }) => (
    <span
      className={`h-3 w-3 rounded-full mx-1 ${
        isActive ? "bg-blue-500" : "bg-gray-300"
      }`}
    />
  );

  const cards = [
    {
      title: "LiveDoc - Real-Time Google Docs Clone",
      description:
        "LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.",
      descriptionTwo:
        "LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.",
      techStack: [reactImg, typesctiptImg, tailwindImg, framerImg],
      techStack: [reactImg, typesctiptImg, tailwindImg, framerImg],

      liveLink: "https://your-live-site-link.com",
    },
    {
      title: "Podcastr - Next Gen Podcast Streaming",
      description:
        "Podcastr is designed for optimal performance and scalability, built with Next.js 14, Tailwind CSS, TypeScript, Framer Motion, and Convex.",
      descriptionTwo:
        "LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.",
      techStack: [reactImg, typesctiptImg, tailwindImg, framerImg],
      techStack: [reactImg, tailwindImg, typesctiptImg, framerImg],
      liveLink: "https://your-podcastr-live-link.com",
    },
    // Add more cards as needed
  ];

  const handleNext = () => {
    setCurrentCard((prevCard) =>
      prevCard === cards.length - 1 ? 0 : prevCard + 1
    );
  };

  const handlePrevious = () => {
    setCurrentCard((prevCard) =>
      prevCard === 0 ? cards.length - 1 : prevCard - 1
    );
  };
  return (
    <div className="w-11/12 m-auto mt-12 h-auto">
      <h1 className="text-2xl md:text-4xl mb-8 mx-12 text-center md:text-start">My Selected Work</h1>
      <div className="md:flex gap-12 mx-auto md:mx-16">
        <div className="md:w-[45%]">
          <div
            className="w-auto px-3 py-10 bg-[#0E0E10] rounded-xl"
            style={{ backgroundImage: `url(${spotOneImg.src})` }}
          >
            <Image src={project1} alt="" className="w-24 h-24" />
            <div className="ml-6">
              <h1 className="font-bold text-2xl">{cards[currentCard].title}</h1>
              <p className="my-5 text-sm">{cards[currentCard].description}</p>
              <p className="my-5 text-sm">{cards[currentCard].descriptionTwo}</p>

              
              <div className="md:flex justify-between items-center my-8">
                <div className="flex gap-6">
                  {cards[currentCard].techStack.map((tech, index) => (
                    <Image
                      key={index}
                      src={tech}
                      alt={`tech-${index}`}
                      width={50}
                      height={50}
                    />
                  ))}
                </div>
                <a
                  href={cards[currentCard].liveLink}
                  className="flex items-center mt-4 md:mt-auto"
                >
                  <h1>Check Live Site</h1>
                  <ArrowUpRight className="ml-2" />
                </a>
              </div>
              <div className="flex justify-between">
                <div
                  className="bg-[#1C1C21] w-16 h-16 flex justify-center items-center rounded-full"
                  onClick={handlePrevious}
                >
                  <ArrowLeft />
                </div>
                <div className="flex justify-center my-4">
                  {cards.map((_, index) => (
                    <Dot key={index} isActive={index === currentCard} />
                  ))}
                </div>{" "}
                <div
                  className="bg-[#1C1C21] w-16 h-16 flex justify-center items-center rounded-full"
                  onClick={handleNext}
                >
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[45%] rounded-lg">
          <div>
            <Image src={comImg} className="rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
