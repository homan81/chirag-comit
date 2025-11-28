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
            <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-16 gap-6">
              <div
                ref={heading.ref}
                className={`fade-up ${
                  heading.isVisible ? "show" : ""
                } flex justify-center items-center`}
              >
                <Image
                  src="/assests/about/leap-bridge-consulting.svg"
                  className="w-full md:max-w-[500px] max-w-[250px] md:mx-auto mr-auto h-auto"
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
                  } md:text-[60px] mb-4 text-3xl font-semibold text-[var(--dgreen)]`}
                >
                  Who are we?
                </h2>

                {/* <div
                  ref={heading.ref}
                  className={`fade-up ${heading.isVisible ? "show" : ""} `}
                >
                  <p className="md:text-2xl text-xl text-black text-medium mb-3">
                    Driving Growth Through Transformation.
                  </p>
                </div> */}

                <p
                  ref={heading.ref}
                  className={`fade-up ${
                    heading.isVisible ? "show" : ""
                  } md:text-xl text-lg`}
                >
                  <span className="text-[var(--dgreen)] font-semibold">
                    LeapBridge
                  </span>{" "}
                  Consulting is a boutique growth and transformation advisory
                  firm helping consumer-facing businesses unlock scale and
                  performance. We specialize in route-to-market redesign, sales
                  excellence, and execution-led transformation across FMCG,
                  healthcare, and consumer retail. <br />
                  <br />
                  With{" "}
                  <span className="text-[var(--dgreen)] font-semibold">
                    over 55 years of combined leadership experience
                  </span>
                  , we bring strategic depth and executional rigor, powered by
                  sales analytics and AI-driven insights that enable smarter,
                  faster decisions. <br />
                  <br />
                  From digital sales enablement to channel transformation, we
                  help brands bridge strategy and execution to drive measurable,
                  lasting growth.
                </p>
                <p className="md:px-9 px-3 py-3 bg-[var(--dgreen2)] text-white capitalize md:text-2xl text-xl md:font-semibold font-medium mt-7 rounded-md">
                  We don’t just advise; we co-create, build capability, and help
                  deliver sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
