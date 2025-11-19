"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import useInView from "@/app/hooks/useInView";

export default function Grid() {
  const heading = useInView({ threshold: 0.2 });
  // const subheading = useInView({ threshold: 0.2 });
  const link1 = useInView({ threshold: 0.2 });
  const link2 = useInView({ threshold: 0.2 });
  const link3 = useInView({ threshold: 0.2 });
  const link4 = useInView({ threshold: 0.2 });
  const link5 = useInView({ threshold: 0.2 });
  const link6 = useInView({ threshold: 0.2 });
  return (
    <>
      <section>
        <div className="">
          <div className="container mx-auto px-5 py-15">
            {/* <div className="mb-10">
              <h1
                ref={heading.ref}
                className={`fade-up ${
                  heading.isVisible ? "show" : ""
                } text-4xl font-bold text-[var(--dgreen)] text-center mb-5`}
              >
                DELIVERABLES / OUTCOMES
              </h1>
            </div> */}

            <div
              className="flex justify-center items-stretch flex-wrap mb-5 2xl:gap-7 lg:gap-5 gap-3  *:lg:w-[31%]  *:md:w-[48%] *:w-full *:md:max-w-full *:max-w-[400px] [&>div>div]:py-8 [&>div>div]:lg:pb-8 [&>div>div]:lg:px-10 [&>div>div]:px-5 [&>div>div]:text-center [&>div>div]:text-white [&>div>div]:text-xl [&>div>div]:rounded-xl  [&>div>div]:h-full  [&>div>div]:transition [&>div>div]:ease-in-out [&>div>div]:hover:opacity-90 [&>div:nth-child(odd)>div]:bg-[var(--dgreen)] [&>div:nth-child(even)>div]:bg-[var(--dgreen2)] [&_p]:text-white [&_p]:text-xl [&_h3]:text-white [&_h3]:mb-3 [&_h3]:text-2xl [&_h3]:font-semibold [&_img]:max-w-[100px] [&_img]:overflow-visible [&_img]:p-[20px] [&_img]:mb-5 [&_img]:bg-white [&_img]:rounded-full [&_img]:h-auto [&_img]:mx-auto"
            >
              <div
                ref={link1.ref}
                className={`fade-up ${link1.isVisible ? "show delay-1" : ""}`}
              >
                <div>
                  <Image
                    src="/assests/home/large-mnc.svg"
                    className=""
                    width={1000}
                    height={1000}
                    alt=""
                  />
                  <h3>Large MNCs</h3>
                  <p>Global scale, structured systems, and complex decision networks.</p>
                </div>
              </div>
              <div
                ref={link2.ref}
                className={`fade-up ${link2.isVisible ? "show delay-2" : ""}`}
              >
                <div>
                  <Image
                    src="/assests/home/small-mnc.svg"
                    className=""
                    width={1000}
                    height={1000}
                    alt=""
                  />
                  <h3>Small & Mid MNCs</h3>
                  <p> Agile setups balancing global best practices with local agility.</p>
                </div>
              </div>
              <div
                ref={link3.ref}
                className={`fade-up ${link3.isVisible ? "show delay-3" : ""}`}
              >
                <div>
                  <Image
                    src="/assests/home/indian-mnc.svg"
                    className=""
                    width={1000}
                    height={1000}
                    alt=""
                  />
                  <h3>Indian MNCs</h3>
                  <p> Indian agility fused with international scale and ambition.</p>
                </div>
              </div>
              <div
                ref={link4.ref}
                className={`fade-up ${link4.isVisible ? "show delay-4" : ""}`}
              >
                <div>
                  <Image
                    src="/assests/home/family-business.svg"
                    className=""
                    width={1000}
                    height={1000}
                    alt=""
                  />
                  <h3>Family run bussiness</h3>
                  <p>Legacy enterprises evolving toward process & governance maturity.</p>
                </div>
              </div>

              <div
                ref={link5.ref}
                className={`fade-up ${link5.isVisible ? "show delay-5" : ""} `}
              >
                <div>
                  <Image
                    src="/assests/home/backend-firm.svg"
                    className=""
                    width={1000}
                    height={1000}
                    alt=""
                  />
                  <h3>PE-Backed Firms</h3>
                  <p> Outcome-driven, milestone-led transformation mandates.</p>
                </div>
              </div>

              <div
                ref={link6.ref}
                className={`fade-up ${link6.isVisible ? "show delay-6" : ""} `}
              >
                <div>
                  <Image
                    src="/assests/home/pharma-otc.svg"
                    className=""
                    width={1000}
                    height={1000}
                    alt=""
                  />
                  <h3>Pharma OTC</h3>
                  <p> Transitioning from prescription-led to consumer-centric business models.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
