"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import useInView from "@/app/hooks/useInView";

export default function Last() {
  const heading = useInView({ threshold: 0.2 });
  // const subheading = useInView({ threshold: 0.2 });
  const link1 = useInView({ threshold: 0.2 });
  const link2 = useInView({ threshold: 0.4 });
  const link3 = useInView({ threshold: 0.6 });
  const link4 = useInView({ threshold: 0.8 });
  const link5 = useInView({ threshold: 0.2 });
  return (
    <>
      <section>
        <div className="">
          <div className="container mx-auto px-5 py-10">
            <div className="mb-10">
              <h1
                ref={heading.ref}
                className={`fade-up ${
                  heading.isVisible ? "show" : ""
                } text-2xl font-bold text-[var(--dgreen)] text-center mb-5`}
              >
                DELIVERABLES / OUTCOMES
              </h1>
            </div>

            <div className="flex justify-center items-stretch flex-wrap mb-5 2xl:gap-12 lg:gap-8 gap-3 *:md:w-[48%]  *:w-full *:md:max-w-full *:max-w-[400px] [&>div>div]:py-3 [&>div>div]:lg:px-10 [&>div>div]:px-5 [&>div>div]:text-center [&>div>div]:text-white [&>div>div]:text-xl [&>div>div]:rounded-md [&>div>div]:flex [&>div>div]:items-center [&>div>div]:justify-center [&>div>div]:h-full  [&>div>div]:transition [&>div>div]:ease-in-out [&>div>div]:hover:opacity-90">
              <div
                ref={link1.ref}
                className={`fade-up ${link1.isVisible ? "show delay-1" : ""}`}
              >
                <div className="bg-[var(--dgreen)] ">
                  Trade spends reduced from 6.5% to 4.5% within 12 months, releasing nearly 2% of topline for reinvestment into consumer activation.
                </div>
              </div>
              <div
                ref={link2.ref}
                className={`fade-up ${link2.isVisible ? "show delay-2" : ""}`}
              >
                <div className="bg-[var(--dgreen2)] ">
                  Competitive and data-backed benchmarks established a clear ROI-driven spend architecture.
                </div>
              </div>
              <div
                ref={link3.ref}
                className={`fade-up ${link3.isVisible ? "show delay-3" : ""}`}
              >
                <div className=" bg-[var(--dgreen2)]">
                  Improved portfolio and channel mix efficiency, enabling sharper focus on high-return packs and geographies.
                </div>
              </div>
              <div
                ref={link4.ref}
                className={`fade-up ${link4.isVisible ? "show delay-4" : ""}`}
              >
                <div className="bg-[var(--dgreen)] ">
                  The released funds powered in-store visibility, sampling, and trial generation, leading to measurable lift in offtakes.
                </div>
              </div>

              <div
                ref={link5.ref}
                className={`fade-up ${
                  link5.isVisible ? "show delay-5" : ""
                } lg:ml-5`}
              >
                <div className="bg-[var(--dgreen)] ">
                   Profitability improved without any loss of distribution or market share, embedding a sustainable PRGM culture across the sales organization.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
