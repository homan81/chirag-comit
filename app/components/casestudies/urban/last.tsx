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
                  ECO% increased by 3% over an already high company benchmark.

                </div>
              </div>
              <div
                ref={link2.ref}
                className={`fade-up ${link2.isVisible ? "show delay-2" : ""}`}
              >
                <div className="bg-[var(--dgreen2)] ">
                  Lines per Call (LPC) improved by 4%, indicating stronger portfolio depth per order.

                </div>
              </div>
              <div
                ref={link3.ref}
                className={`fade-up ${link3.isVisible ? "show delay-3" : ""}`}
              >
                <div className=" bg-[var(--dgreen2)]">
                  Retail secondary sales grew by 2% over control markets within one year.
                </div>
              </div>
              <div
                ref={link4.ref}
                className={`fade-up ${link4.isVisible ? "show delay-4" : ""}`}
              >
                <div className="bg-[var(--dgreen)] ">
                  Established a data-driven sales execution model, optimizing value per outlet and driving measurable ROI from the existing urban footprint.
                </div>
              </div>

              <div
                ref={link5.ref}
                className={`fade-up ${
                  link5.isVisible ? "show delay-5" : ""
                } lg:ml-5`}
              >
                <div className="bg-[var(--dgreen)] ">
                   Created a scalable framework for smart distribution growth — focused on productivity, not just reach.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
