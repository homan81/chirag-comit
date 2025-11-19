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
            <div className="mb-25 flex justify-center gap-14 items-center">
              <div>
                <h2 className="text-4xl text-white">
                  <strong>Case</strong> Study
                </h2>
              </div>
              <div>
                <p className="text-white text-lg font-medium">
                  Implementing a Distributor Management System (DMS) for Sales Process Automation
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <div className="container mx-auto px-5 pb-10">
            <div className=" border border-[#AEAEAE] bg-white rounded-lg lg:py-8 lg:px-20 p-5 -mt-[100px] shadow-[0_0_13px_#00000052]">
              <div className="max-w-[1100px] mx-auto">
                <div className="flex justify-between w-full text-center px-5 *:max-w-[300px] [&_p]:text-[var(--dgreen)] [&_h3]:text-[var(--dgreen)] [&_h3]:font-semibold [&_img]:max-w-[90px] [&_img]:mb-3 [&_img]:h-auto [&_img]:mx-auto">
                  <div>
                    <Image
                      src="/assests/casestudies/company.png"
                      className=""
                      width={1000}
                      height={1000}
                      alt=""
                    />
                    <h3>Company</h3>
                    <p>A Large Indian MNC</p>
                  </div>
                  <div>
                     <Image
                      src="/assests/casestudies/sector.png"
                      className=""
                      width={1000}
                      height={1000}
                      alt=""
                    />
                    <h3>Sector</h3>
                    <p>FMCG</p>
                  </div>
                  <div>
                     <Image
                      src="/assests/casestudies/project.png"
                      className=""
                      width={1000}
                      height={1000}
                      alt=""
                    />
                    <h3>Project</h3>
                    <p>
                       Digitizing the distributor backbone
                    </p>
                  </div>
                </div>

                <p className="px-9 py-3 bg-[var(--dgreen2)] text-white text-center text-[15px] font-medium mt-7 rounded-md">The company wanted to gain access to its secondary sales and inventory which was manual and also to streamline the distributor claim process.</p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
