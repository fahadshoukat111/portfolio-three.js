"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import BannerOneImage from "@/app/assets/banner-one.png";
import BannerTwoImage from "@/app/assets/banner-two.png";
import BannerThreeImage from "@/app/assets/banner-three.png";
import ComputerImage from "@/app/assets/computer.png";

import dynamic from "next/dynamic"; // Import dynamic for client-side components
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "@/app/utils";
import CanvasLoader from "../loading/loading";

// Dynamically import the Canvas, PerspectiveCamera, and 3D components (SSR disabled)
const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
);
const PerspectiveCamera = dynamic(
  () => import("@react-three/drei").then((mod) => mod.PerspectiveCamera),
  { ssr: false }
);
const HackerRoom = dynamic(
  () => import("@/app/utils/hacker-room").then((mod) => mod.HackerRoom),
  { ssr: false }
);
const Target = dynamic(
  () => import("@/app/utils/target").then((mod) => mod.default),
  { ssr: false }
);

const HeroBanner = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Fahad <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-center text-3xl from-gray-200">
          Building Products & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Suspense fallback={<CanvasLoader />} />
        <Canvas className="w-full h-full">
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <HackerRoom
            scale={sizes.deskScale}
            position={sizes.deskPosition}
            rotation={[0.1, -Math.PI, 0]}
          />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} />
        </Canvas>
      </div>
    </section>
  );
};

export default HeroBanner;
