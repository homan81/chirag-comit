"use client";

import React from "react";
// import Image from "next/image";
// import useInView from "@/app/hooks/useInView";

export default function Aboutus() {
  return (
    <>
      <section>
        <div className="px-5 lg:py-40 md:py-20 py-10 bg-[var(--lgreen2)]">
          <div className="container mx-auto">
            <div className="max-w-[800px] mx-auto">
              <h2 className="text-4xl font-bold text-center mb-2 text-[var(--dgreen)]">
                What do we do ?
              </h2>
              <p className="text-2xl font-medium mb-2 text-center text-[var(--dgreen)]">
                Driving Growth Through Transformation.
              </p>

              <p className="text-center text-[var(--dgreen)] text-xl ">
                LeapBridge Consulting helps consumer-facing businesses scale
                through Route-to-Market redesign, sales excellence, and
                execution-led transformation. With 55+ years of combined
                leadership experience and AI-driven sales insights, they bridge
                strategy and execution to deliver measurable, lasting growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
