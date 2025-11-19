"use client";

import React from "react";
import Image from "next/image";
// import Link from "next/link";
import useInView from "@/app/hooks/useInView";

export default function Fifth() {
  const heading = useInView({ threshold: 0.2 });
  // const subheading = useInView({ threshold: 0.2 });
  // const testimonial1 = useInView({ threshold: 0.2 });
  // const testimonial2 = useInView({ threshold: 0.2 });
  // const testimonial3 = useInView({ threshold: 0.2 });
  // const testimonial4 = useInView({ threshold: 0.2 });
  // const testimonial5 = useInView({ threshold: 0.2 });
  return (
    <>
      <section>
        <div className="bg-white">
          <div className=" py-10">
            <div className="flex w-full *:w-1/2 gap-5 items-center">
              <div className="pr-10">
                <div className="bg-[var(--lgreen2)] rounded-tr-full rounded-br-full">
                  <div className="md:p-7 2xl:max-w-[720px] xl:max-w-[630px] lg:max-w-[500px] md:ml-auto">
                    <Image
                      src="/assests/casestudies/approach.png"
                      className=""
                      width={1000}
                      height={1000}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="*:text-[var(--dgreen)] 2xl:max-w-[720px] xl:max-w-[630px] lg:max-w-[500px]  md:mr-auto">
                <h2 className="text-2xl font-bold mb-3">OUR APPROACH</h2>
                <p className=" mb-3">
                  As Director of Sales, I led a cross-functional transformation initiative integrating commercial, supply chain, and finance teams to establish tighter operational controls and data-led decision-making.
                </p>
                <ul
                  className="space-y-3 [&>li]:relative [&>li]:pl-12 [&>li]:mb-3 [&>li::before]:content-[''] [&>li::before]:absolute [&>li::before]:left-0 [&>li::before]:top-1 [&>li::before]:h-[30px] [&>li::before]:w-[30px] [&>li::before]:rounded-full [&>li:nth-child(odd)::before]:bg-[var(--dgreen)] [&>li:nth-child(even)::before]:bg-[var(--dgreen2)]">
                  <li>
                    Re-engineered the entire S&OP process, covering demand forecasting, target-setting, and replenishment models to improve accuracy and responsiveness.
                  </li>
                  <li>
                    Conducted deep analytics across stores, distributors, SKUs, and geographies to pinpoint high-damage zones and systemic inefficiencies.
                  </li>
                  <li>
                    Implemented SKU rationalization to simplify the portfolio and improve rotation speed.
                  </li>
                  <li>
                    Strengthened billing and dispatch processes to reduce handling errors and minimize in-transit damages.
                  </li>
                  <li>
                    Deployed tech-enabled order discipline using VMI and data-driven replenishment to align supply with true demand.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
