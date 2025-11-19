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
                  As Sales Head, I led an initiative to leverage technology and analytics to unlock incremental growth from the existing urban footprint.
                </p>
                <ul
                  className="space-y-3 [&>li]:relative [&>li]:pl-12 [&>li]:mb-3 [&>li::before]:content-[''] [&>li::before]:absolute [&>li::before]:left-0 [&>li::before]:top-1 [&>li::before]:h-[30px] [&>li::before]:w-[30px] [&>li::before]:rounded-full [&>li:nth-child(odd)::before]:bg-[var(--dgreen)] [&>li:nth-child(even)::before]:bg-[var(--dgreen2)]">
                  <li>
                    Designed a store-level algorithm that captured SKU-level potential by store type and city, factoring in local portfolio variations and micro-market dynamics.
                  </li>
                  <li>
                    The algorithm provided prescriptive up-sell and cross-sell recommendations, integrated into the Sales Force Automation (SFA) tool for real-time actioning by the field team.
                  </li>
                  <li>
                    Benchmarked field-force productivity between top and bottom performers and drove interventions to balance coverage quality.
                  </li>
                  <li>
                    Created dashboards to monitor order completion rate (ECO%), lines per call (LPC), and value per outlet, comparing impact against control markets.
                  </li>
                  <li>
                    Digitized the retail efficiency framework, improving visibility, control, and sales discipline across markets
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
