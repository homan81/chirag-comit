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
                <p>A leading FMCG foods company was launching a premium-priced brand extension in the mass biscuits category, leveraging strong equity from its high share niche mother brand. While the parent brand was dominant in modern trade and e-commerce, it lacked visibility in mass retail and general trade. The challenge was to rapidly drive placement and distribution across the company’s extensive network, overcome field skepticism about premium pricing, and ensure strong early acceptance in a competitive category.</p>
              </div>
              
            </div>
          </div>
        </div>

        
      </section>
    </>
  );
}
