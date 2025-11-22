"use client";

import React from "react";
import HeroSlider from "./heroslider/HeroSlider";
import useInView from "@/app/hooks/useInView";

const MainBanner: React.FC = () => {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <div className="relative w-full  overflow-hidden">
      <iframe
        className="absolute top-1/2 left-1/2 w-[200vw] h-[200vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        src="https://www.youtube.com/embed/IP3vF2jpnJk?autoplay=1&mute=1&loop=1&playlist=IP3vF2jpnJk&controls=0&modestbranding=1&showinfo=0&rel=0&disablekb=1&fs=0"
        title="Background Video"
        allow="autoplay; encrypted-media"
      ></iframe>
      <div className="absolute inset-0 bg-[var(--dgreen)]/80 z-10"></div>


      <div className="relative z-10 text-white">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="container mx-auto px-4">

            <div
              ref={ref}
              className="flex space-x-3 items-center justify-center md:my-12 my-6 h-[30px]"
            >
              <span
                className={`bar w-[30px] rounded-full bg-[var(--lgreen2)] ${
                  isVisible ? "animate" : ""
                }`}
                style={{ transitionDelay: "0.6s" }}
              ></span>

              <span
                className={`bar w-[52px] rounded-[40px] bg-[#7BBD93] ${
                  isVisible ? "animate" : ""
                }`}
                style={{ transitionDelay: "0.8s" }}
              ></span>

              <span
                className={`bar w-[30px] rounded-full bg-[var(--lgreen2)] ${
                  isVisible ? "animate" : ""
                }`}
                style={{ transitionDelay: "1s" }}
              ></span>
            </div>
          </div>
          <div
            ref={ref}
            className={`fade-up ${isVisible ? "show" : ""} heading-home mb-4`}
          >
            <p className="subtitle-h md:mt-4 max-w-2xl mx-auto text-base sm:text-lg text-[#CEEAD5]">
              From Insight to Impact
            </p>
            <h1 className="md:text-6xl sm:text-5xl text-3xl  max-w-6xl font-bold text-[#DFFFE0] leading-tight">
              We Make it Happen
            </h1>
          </div>

        </div>
      </div>
      <div
        ref={ref}
        className={`fade-up ${
          isVisible ? "show" : ""
        } relative z-20 md:mt-[-300px] mt-[-150px] translate-y-[50%]`}
      >
        <HeroSlider />
      </div>
    </div>
  );
};

export default MainBanner;
