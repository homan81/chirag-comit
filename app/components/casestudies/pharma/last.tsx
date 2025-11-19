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
            {/* <div className="mb-10">
              <h1
                ref={heading.ref}
                className={`fade-up ${
                  heading.isVisible ? "show" : ""
                } text-2xl font-bold text-[var(--dgreen)] text-center mb-5`}
              >
                DELIVERABLES / OUTCOMES
              </h1>
            </div> */}

            <div className="flex justify-center items-stretch flex-wrap mb-5 2xl:gap-12 lg:gap-8 gap-3 *:md:w-[48%]  *:w-full *:md:max-w-full *:max-w-[400px] [&>div>div]:py-3 [&>div>div]:lg:px-10 [&>div>div]:px-5 [&>div>div]:text-center [&>div>div]:text-white [&>div>div]:text-xl [&>div>div]:rounded-md [&>div>div]:flex [&>div>div]:items-center [&>div>div]:justify-center [&>div>div]:h-full  [&>div>div]:transition [&>div>div]:ease-in-out [&>div>div]:hover:opacity-90">
              <div
                ref={link1.ref}
                className={`fade-up ${link1.isVisible ? "show delay-1" : ""}`}
              >
                <div className="bg-[var(--dgreen)] ">
                  Distribution expanded 3×, reaching beyond pharmacies into
                  mainstream FMCG outlets.
                </div>
              </div>
              <div
                ref={link2.ref}
                className={`fade-up ${link2.isVisible ? "show delay-2" : ""}`}
              >
                <div className="bg-[var(--dgreen2)] ">
                  Market share grew by 700 bps across core categories.
                </div>
              </div>
              <div
                ref={link3.ref}
                className={`fade-up ${link3.isVisible ? "show delay-3" : ""}`}
              >
                <div className=" bg-[var(--dgreen2)]">
                  Revenue moved more than 2X from ₹600 Cr to ₹1,400 Cr over four
                  years.
                </div>
              </div>
              <div
                ref={link4.ref}
                className={`fade-up ${link4.isVisible ? "show delay-4" : ""}`}
              >
                <div className="bg-[var(--dgreen)] ">
                  Strong ROI discipline and digital systems improved distributor
                  performance and execution consistency.
                </div>
              </div>
              <div
                ref={link5.ref}
                className={`fade-up ${
                  link5.isVisible ? "show delay-5" : ""
                } lg:ml-5`}
              >
                <div className="bg-[var(--dgreen)] ">
                  The company transitioned from a pharma-push to FMCG-pull
                  model, embedding a sustainable, consumer-focused commercial
                  DNA
                </div>
              </div>
              <button
                className="top bg-[#1b3f2e] p-[10px] rounded-[14px] text-white text-[20px]"
                onClick={() => {
                  document.getElementById("secondtsx")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                view case studies
              </button>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
