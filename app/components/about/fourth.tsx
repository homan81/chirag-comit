"use client";

import React from "react";
import Image from "next/image";
// import useInView from "@/app/hooks/useInView";

export default function Fourth() {
  // const heading = useInView({ threshold: 0.2 });
  return (
    <>
      <section>
        <div className="bg-[var(--lgreen3)]">
          <div className="container mx-auto px-5 py-12">
            <div>
              <h2 className="text-4xl mb-3 font-semibold text-[var(--dgreen)] text-center">
                The Minds Behind the Vision
              </h2>
            </div>
            <div>
              <p className="text-center max-w-5xl mx-auto md:text-xl text-lg">
                Jatin Panchal and Vinod Rao bring over five decades of combined
                leadership across diverse business environments. They blend
                strategic clarity with practical, on-ground execution, helping
                organizations strengthen their commercial engines, build capable
                teams, and unlock scalable growth.
              </p>
            </div>
            <div className="max-w-[1350px] mx-auto md:mt-20 mt-10">
              <div className="bg-[var(--lgreen)] relative rounded-2xl md:p-[50px] p-5 md:mb-[140px] mb-6">
                <div className="md:flex gap-10">
                  <div className="sm:max-w-[300px] w-full md:mb-0 mb-5">
                    <Image
                      src="/assests/header/images/Jatin-Panchal.png"
                      className="w-full h-auto rounded-2xl"
                      width={1000}
                      height={1000}
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <div>
                      <h3 className="text-3xl font-semibold text-[var(--dgreen)]">
                        Jatin Panchal
                      </h3>
                      <p className="font-medium text-[var(--dgreen)] md:text-xl text-lg">
                        Founder & Partner
                      </p>
                      <p className="md:text-xl text-lg text-[var(--dgreen2)] ">
                        MBA: SIBM;Exec MBA: INSEAD, France
                      </p>
                    </div>
                    <div className="h-[1px] bg-black max-w-[350px] my-2"></div>
                    <div className="md:text-xl text-lg max-w-[880px] md:mt-5 mt-3">
                      A commercial transformation leader with over 25 years of
                      experience in FMCG & consumer healthcare, driving growth,
                      reach, & sales excellence across channels. Jatin has
                      successfully led the transition of healthcare & pharma
                      portfolios into consumer-facing FMCG businesses. Expertise
                      in building new businesses, including ecom for FMCG firms,
                      he blends analytical precision with people-centric
                      leadership. He excels in designing transformative
                      go-to-market strategies, building capable teams, &
                      unlocking business momentum through insight-led execution.
                    </div>
                  </div>
                </div>
                <div className="md:absolute mt-5 md:mt-0 left-0 -bottom-[105px] text-white md:py-6 py-4 md:px-[50px] px-[20px] bg-[var(--dgreen)] w-fit md:rounded-tr-[20px] md:rounded-br-[30px] md:rounded-bl-[60px] rounded-[20px] md:text-[20px] [&_span]:font-medium md:[&_span]:font-semibold">
                  <p>
                    <span>Abbot Nutrition</span> - Director Sales
                  </p>
                  <p>
                    <span>Danone Nutrition</span> - Director sales
                  </p>
                  <p>
                    <span>Godrej Consumer Products Ltd.</span> - Head -
                    Sales Development
                  </p>
                </div>
              </div>

              <div className="bg-[var(--lgreen)] relative rounded-2xl md:p-[50px] p-5 md:mb-[140px] mb-6">
                <div className="md:flex gap-10">
                  <div className="sm:max-w-[300px] w-full md:mb-0 mb-5">
                    <Image
                      src="/assests/header/images/Vinod-Rao.jpg"
                      className="w-full h-auto rounded-2xl"
                      width={1000}
                      height={1000}
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <div>
                      <h3 className="text-2xl font-semibold text-[var(--dgreen)]">
                        Vinod Rao
                      </h3>
                      <p className="font-medium text-[var(--dgreen)] md:text-xl text-lg">
                        Founder & Partner
                      </p>
                      <p className="md:text-xl text-lg text-[var(--dgreen2)] ">
                        MBA: JBIMS
                      </p>
                    </div>
                    <div className="h-[1px] bg-black max-w-[350px] my-2"></div>
                    <div className="md:text-xl text-lg max-w-[880px] md:mt-5 mt-3">
                      A seasoned P&L leader with over 30 years of experience
                      across FMCG, healthcare, and retail banking. Vinod has led
                      business turnarounds and large scale distribution
                      expansions, earning a reputation for translating strategy
                      into seamless execution. He brings deep expertise in sales
                      transformation, category growth, channel management, and
                      trade excellence, along with hands-on experience in cold
                      chain infrastructure and operating within both family-run
                      and PE-backed promoter environments.
                    </div>
                  </div>
                </div>
                <div className="md:absolute mt-5 md:mt-0 left-0 -bottom-[105px] text-white md:py-6 py-4 md:px-[50px] px-[20px] bg-[var(--dgreen)] w-fit md:rounded-tr-[20px] md:rounded-br-[30px] md:rounded-bl-[60px] rounded-[20px] md:text-[20px] [&_span]:font-medium md:[&_span]:font-semibold">
                  <p>
                    <strong>Nobel Hygiene Pvt Ltd</strong> - Chief Commercial
                    Officer
                  </p>
                  <p>
                    <strong>Emami Ltd.</strong> - President Sales
                  </p>
                  <p>
                    <strong>Hershey India</strong> - Director Sales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
