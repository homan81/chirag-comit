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
                <p>For two leading FMCG companies with diverse portfolios, rural expansion was identified as a strategic growth bet. Despite strong brand equity, rural distribution relied on conventional population-based clustering models that created coverage overlaps, high costs, and limited visibility of true market potential. Rural expansion is inherently capital- and manpower-intensive, posing challenges around network optimization, cost-to-serve, and effective measurement of coverage productivity. The mandate was to rapidly expand rural footprint while improving ROI, quality of coverage, and sales velocity.</p>
              </div>
              
            </div>
          </div>
        </div>

        
      </section>
    </>
  );
}
