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
                <p>In the absence of a Distributor Management System (DMS), the company’s secondary sales processes were manual and opaque, leading to low visibility on stock levels, daily secondary sales, and claim settlements. Claim reconciliation was cumbersome, often taking over 90 days, resulting in delayed payments, high distributor dissatisfaction, and limited real-time insight for management. The lack of automation created inefficiencies, poor data quality, and strained relationships within the distribution network — impacting both agility and credibility.</p>
              </div>
              
            </div>
          </div>
        </div>

        
      </section>
    </>
  );
}
