import React from "react";
import Image from "next/image";

const MainBanner = () => {
  return (
    <div className="bg-lgreen flex flex-col items-center justify-center text-center">
      <div className="container mx-auto px-4">
        <div className="flex space-x-3 mb-6 justify-center md:mt-24 mt-16">
          <span className="w-8 h-8 rounded-full bg-[#CEEAD54D]"></span>
          <span className="w-[52px] h-8 rounded-[40px] bg-[#CEEAD5]"></span>
          <span className="w-8 h-8 rounded-full bg-[#CEEAD54D]"></span>
        </div>
      </div>
      <div className="heading-home mb-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl max-w-3xl font-serif font-semibold text-[#DFFFE0] leading-tight heading-h">
          Opening gates to digital world
        </h1>
        <p className="subtitle-h mt-4 max-w-2xl mx-auto text-base sm:text-lg text-[#CEEAD5]">
          The most professional consulting out, there changing the realm
          business and digital.
        </p>
      </div>
      <div className="mainbanner max-w-[1100px] w-full">
        <Image
          src="/assests/header/images/mainimg.webp"
          alt="Logo"
          width={1000}
          height={1000}
          className="banner-pic border-[20px] md:border-[50px] border-white border-b-0"
        />
      </div>
    </div>
  );
};

export default MainBanner;
