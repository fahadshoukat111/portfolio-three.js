import React from "react";
import Image from "next/image";
import BannerOneImage from "@/app/assets/banner-one.png";
import BannerTwoImage from "@/app/assets/banner-two.png";
import BannerThreeImage from "@/app/assets/banner-three.png";
import ComputerImage from "@/app/assets/computer.png";

const HeroBanner = () => {
  return (
    <div className="flex flex-col my-12">
      {/* <div className="py-6"> */}
      <h1 className="text-center text-3xl mb-2">Hi, I’m Fahad 👋 </h1>
      <p className="text-center text-5xl text-[#BEC1CFA3] font-bold">
        Building products & brands
      </p>
      <div className="w-10/12 mx-auto my-[-48px] flex justify-between">
        <div className="flex flex-col gap-28">
          <Image src={BannerOneImage} alt="" className="w-[157px] h-[149px]" />
          <Image
            src={BannerThreeImage}
            alt=""
            className="w-[157px] h-[149px]"
          />
        </div>
        <div>
          <Image src={BannerTwoImage} alt="" className="w-[157px] h-[149px]" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
