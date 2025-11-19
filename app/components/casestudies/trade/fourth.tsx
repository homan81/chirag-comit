"use client";

import React from "react";
import Image from "next/image";
// import Link from "next/link";
import useInView from "@/app/hooks/useInView";

export default function Fourth() {
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
        <div className="bg-[#E2F0EB]">
          <div className="container mx-auto px-5 py-10">
            <div className="flex w-full *:w-1/2 gap-5 items-center">
              <div className="lg:pr-14">
                <Image
                  src="/assests/casestudies/challenges.webp"
                  className=""
                  width={1000}
                  height={1000}
                  alt=""
                />
              </div>
              <div className="*:text-[var(--dgreen)]">
                <h2 className="text-2xl font-bold mb-3">COMPANY CHALLENGES</h2>
                <p>The company was operating with trade spends exceeding 6.5% of revenue, constraining its ability to reinvest behind consumer demand and marketing initiatives. The spend structure had evolved without clear ROI benchmarks and varied widely across channels and geographies. With profitability under pressure, the need was to rationalize trade investments while maintaining competitive presence and growth momentum.</p>
              </div>
              
            </div>
          </div>
        </div>

        
      </section>
    </>
  );
}
