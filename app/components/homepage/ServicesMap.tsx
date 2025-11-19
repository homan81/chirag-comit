"use client";

import React from "react";
import useInView from "@/app/hooks/useInView";

const ServicesMap = () => {
  const { ref, isVisible } = useInView({ threshold: 0.2 });
  return (
    <>
      <div
        ref={ref}
        className={`fade-up ${
          isVisible ? "show" : ""
        } relative z-10 max-w-4xl pb-[100px] pt-[150px] md:px-[100px] px-[36px] text-center`}
      >
        <h2 className="text-4xl font-semibold mb-1 text-[var(--dgreen)]">
          What do we do ?
        </h2>
        <p className="text-xl font-medium mb-2 text-black">
          Driving Growth Through Transformation.
        </p>
        <p className="text-lg font-normal leading-[130%] text-[#1B3233] mx-auto">
          LeapBridge Consulting helps consumer-facing businesses scale through
          Route-to-Market redesign, sales excellence, and execution-led
          transformation. With 55+ years of combined leadership experience and
          AI-driven sales insights, they bridge strategy and execution to
          deliver measurable, lasting growth.
        </p>
      </div>
    </>
  );
};

export default ServicesMap;
