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
                <p>In the foods category business, market returns and damages had escalated to 4 4.5%, significantly higher than industry norms. This high level of wastage impacted both topline realization and bottom-line profitability. The underlying issues spanned forecasting inaccuracies, weak replenishment processes, SKU complexity, and limited visibility across the supply chain. The mandate was to identify the root causes and reduce returns to sustainable FMCG benchmarks without disrupting sales momentum.</p>
              </div>
              
            </div>
          </div>
        </div>

        
      </section>
    </>
  );
}
