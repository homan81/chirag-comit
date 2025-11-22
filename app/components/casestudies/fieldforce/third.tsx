"use client";

import React from "react";
import Image from "next/image";
// import Link from "next/link";
import useInView from "@/app/hooks/useInView";

export default function Third() {
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
        <div className="bg-[var(--dgreen)]">
          <div className="container mx-auto px-5 py-10">
           <div className="mb-25 flex md:flex-row flex-col md:text-start text-center justify-center md:gap-14 gap-5 items-center">
              <div>
                <h2 className="text-4xl text-white">
                  <strong>Case Study</strong> 
                </h2>
              </div>
              <div>
                <p className="text-white md:text-3xl text-2xl font-medium">
                  Field Force Migration to Third-Party Payroll & Efficiency Enhancement
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <div className="container mx-auto px-5 pb-10">
            <div className=" border border-[#AEAEAE] bg-white rounded-lg lg:py-8 lg:px-20 p-5 -mt-[100px] shadow-[0_0_13px_#00000052]">
              <div className="max-w-[1100px] mx-auto">
                <div className="flex md:flex-row flex-col md:gap-0 gap-5 justify-between w-full text-center px-5 *:max-w-[300px] *:mx-auto [&_p]:text-[var(--dgreen)] [&_h3]:text-[var(--dgreen)] [&_h3]:font-semibold [&_img]:max-w-[90px] [&_img]:mb-3 [&_img]:h-auto [&_img]:mx-auto">
                  <div>
                    <Image
                      src="/assests/casestudies/company.png"
                      className=""
                      width={1000}
                      height={1000}
                      alt=""
                    />
                    <h3 className="text-xl">Company</h3>
                    <p className="text-xl">A Large FMCG Co</p>
                  </div>
                  <div>
                     <Image
                      src="/assests/casestudies/sector.png"
                      className=""
                      width={1000}
                      height={1000}
                      alt=""
                    />
                    <h3 className="text-xl">Sector</h3>
                    <p className="text-xl">FMCG</p>
                  </div>
                  <div>
                     <Image
                      src="/assests/casestudies/project.png"
                      className=""
                      width={1000}
                      height={1000}
                      alt=""
                    />
                    <h3 className="text-xl">Project</h3>
                    <p className="text-xl">
                      Empowering people, powering performance.
                    </p>
                  </div>
                </div>

                <p className="md:px-9 p-3  bg-[var(--dgreen2)] text-white text-center text-[16px] font-medium mt-7 rounded-md">The company wanted to transition the entire field force to a centralised payroll system and use technology to drive performance measurements and compliance.</p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
