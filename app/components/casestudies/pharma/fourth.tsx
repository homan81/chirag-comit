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
                <h2 className="text-3xl font-bold mb-3">COMPANY CHALLENGES</h2>
                <p className="text-xl">A leading consumer health company operated on a pharma wholesale–dominated model, with 70% of sales from wholesalers and 90% of coverage restricted to pharmacy outlets. The sales team was HCP- and prescription-oriented, with limited FMCG exposure, while the distributor network was fragmented and lacked structured systems or policies. The model constrained retail expansion, execution speed, and profitability in a rapidly evolving consumer landscape.</p>
              </div>
              
            </div>
          </div>
        </div>

        
      </section>
    </>
  );
}
