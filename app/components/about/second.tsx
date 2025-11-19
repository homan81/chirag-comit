"use client";

import React from "react";
import Image from "next/image";
import useInView from "@/app/hooks/useInView";

export default function Second() {
  const heading = useInView({ threshold: 0.2 });
  return (
    <>
      <section>
        <div className="bg-[url('/assests/about/second-bg.svg')]  bg-cover bg-no-repeat bg-center">
          <div className="container mx-auto px-5 lg:py-22 py-12">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-16">
              <div
                ref={heading.ref}
                className={`fade-up ${heading.isVisible ? "show" : ""} flex justify-center items-center`}
              >
                <Image
                  src="/assests/about/leap-bridge-consulting.svg"
                  className="w-full max-w-[500px] mx-auto h-auto"
                  width={1000}
                  height={1000}
                  alt=""
                />
              </div>
              <div className="h-full flex flex-col justify-center">
                <h2
                  ref={heading.ref}
                  className={`fade-up ${
                    heading.isVisible ? "show" : ""
                  } text-[60px] font-semibold text-[var(--dgreen)]`}
                >
                  Who we are?
                </h2>

                <div
                  ref={heading.ref}
                  className={`fade-up ${
                    heading.isVisible ? "show" : ""
                  } `}
                >
                  <p className="text-2xl text-black text-medium mb-3">Driving Growth Through Transformation.</p>
                </div>

                <p
                  ref={heading.ref}
                  className={`fade-up ${
                    heading.isVisible ? "show" : ""
                  } text-xl capitalize`}
                >
                  <span className="text-[var(--dgreen)] font-semibold">LeapBridge</span> Consulting is a boutique growth and transformation advisory firm helping consumer-facing businesses unlock scale and performance. We specialize in Route-to-Market redesign, sales excellence, and execution-led transformation across FMCG, healthcare, and consumer retail. <br />
                  <br />
                  With <span className="text-[var(--dgreen)] font-semibold">over 55 years of combined leadership experience</span>, we bring strategic depth and executional rigor, powered by sales technology and AI-driven insights that enable smarter, faster decisions. <br />
                  <br />
                  From digital sales enablement to channel transformation, we help brands bridge strategy and execution to drive measurable, lasting growth.
                </p>
                <p className="px-9 py-3 bg-[var(--dgreen2)] text-white capitalize text-2xl font-semibold mt-7 rounded-md">We don’t just advise, we co-create, build capability, and stay accountable for outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
