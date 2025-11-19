"use client";

import React from "react";
import Link from "next/link";
import useInView from "@/app/hooks/useInView";

const ProblemSolv = () => {
  const { ref, isVisible } = useInView({ threshold: 0.2 });
  return (
    <section className=" min-h-screen flex flex-col md:flex-row py-5">
      <div className="container mx-auto px-4 flex flex-wrap=">
        <div className="process md:w-1/2 w-full md:p-8 py-8 md:sticky md:top-[50px] md:h-screen">
          <div className=" max-w-xl  mb-3">
            <h2
              ref={ref}
              className={`fade-up ${
                isVisible ? "show" : ""
              } text-[34px] text-[var(--dgreen)] mb-3 max-w-[300px]`}
            >
              Our Approach to <span className="font-bold">Create Value</span>
            </h2>

            <p
              ref={ref}
              className={`fade-up ${
                isVisible ? "show" : ""
              } text-xl  font-medium text-[var(--dgreen)]  mb-3`}
            >
              We operate on a fractional leadership and project-based model,
              enabling clients to access senior industry expertise without
              long-term overheads.
            </p>
            <p
              ref={ref}
              className={`fade-up ${
                isVisible ? "show" : ""
              } text-xl font-medium text-[var(--dgreen)]  mb-3`}
            >
              At LeapBridge, we believe in bridging the gap between Organisation
              Strategy & On-ground Execution. Our approach blends data-backed
              analytics with field-tested pragmatism, ensuring every
              recommendation can be executed and sustained on ground.
            </p>
            {/* <button
              ref={ref}
              className={`fade-up ${
                isVisible ? "show" : ""
              } bg-[#1B3233] text-[#ECF6F2] text-[20px] px-5 py-2 rounded-[40px] w-fit`}
            >
              Let’s talk
            </button> */}
            {/* <div
              ref={ref}
              className={`fade-up ${isVisible ? "show" : ""} mt-7`}
            >
              <Link
                href="/"
                className="bg-[#1B3233] text-[#ECF6F2] text-[20px] px-5 py-2 rounded-[40px] transition-all ease-in-out hover:opacity-90"
              >
                Let’s talk
              </Link>
            </div> */}
          </div>
        </div>
        <div className="md:w-1/2 w-full md:p-8 py-8 space-y-6 right-sticky-process text-white [&>*:nth-child(odd)]:bg-[var(--dgreen)] [&>*:nth-child(even)]:bg-[var(--dgreen2)] *:rounded-lg *:p-8 *:md:p-16  *:lg:px-22 ">
          <div ref={ref} className={`fade-up ${isVisible ? "show" : ""}   `}>
            <h3 className="text-[60px] md:text-[80px] lg:text-[100px] font-light     ">
              1
            </h3>
            <h4 className="font-medium leading-[120%] text-3xl mb-4 md:mb-6 lg:mb-8">
              GTM TRANSFORMATION
            </h4>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] mt-2">
              We redefine go-to-market strategy to deliver profitable, scalable growth through sharper market design and execution excellence.
            </p>
          </div>

          <div className="  ">
            <h3 className="text-[60px] md:text-[80px] lg:text-[100px] font-light         ">
              2
            </h3>
            <h4 className="font-medium leading-[120%] text-3xl mb-4 md:mb-6 lg:mb-8">
              NETWORK EFFICIENCY
            </h4>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] mt-2">
              We partner with organizations to drive efficiencies across sales & distribution verticals.
            </p>
          </div>

          <div className="  ">
            <h3 className="text-[60px] md:text-[80px] lg:text-[100px] font-light         ">
              3
            </h3>
            <h4 className="font-medium leading-[120%] text-3xl mb-4 md:mb-6 lg:mb-8">
              CAPABILITY
            </h4>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] mt-2">
              Building the right people and process capabilities to sustain transformation and accelerate performance.
            </p>
          </div>

          <div className="  ">
            <h3 className="text-[60px] md:text-[80px] lg:text-[100px] font-light         ">
              4
            </h3>
            <h4 className="font-medium leading-[120%] text-3xl mb-4 md:mb-6 lg:mb-8">
              TECHNOLOGY & DATA ANALYTICS
            </h4>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] mt-2">
              Embedding technology and analytics to make decisions faster, smarter, and more predictive.
            </p>
          </div>
        </div>
        {/* <div className="md:w-1/2 w-full md:p-8 py-8 space-y-6 right-sticky-process text-white [&>*:nth-child(odd)]:bg-[var(--dgreen)] [&>*:nth-child(even)]:bg-[var(--dgreen2)] *:rounded-lg *:p-8 *:md:p-16  *:lg:px-22 ">
          <div ref={ref} className={`fade-up ${isVisible ? "show" : ""}   `}>
            <h3 className="text-[60px] md:text-[80px] lg:text-[100px] font-light     ">
              1
            </h3>
            <h4 className="font-normal leading-[120%] text-[20px] md:text-[22px] lg:text-[26px] mb-4 md:mb-6 lg:mb-8">
              Sales Processes & Network Efficiency
            </h4>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] mt-2">
              Phasellus nec sem in justo pellentesque facilisis. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Nam pretium
              turpis et arcu.
            </p>
          </div>

          <div className="  ">
            <h3 className="text-[60px] md:text-[80px] lg:text-[100px] font-light         ">
              2
            </h3>
            <h4 className="font-normal leading-[120%] text-[20px] md:text-[22px] lg:text-[26px] mb-4 md:mb-6 lg:mb-8">
              Channel specific GTM strategy
            </h4>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] mt-2">
              Phasellus nec sem in justo pellentesque facilisis. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Nam pretium
              turpis et arcu.
            </p>
          </div>

          <div className="  ">
            <h3 className="text-[60px] md:text-[80px] lg:text-[100px] font-light         ">
              3
            </h3>
            <h4 className="font-normal leading-[120%] text-[20px] md:text-[22px] lg:text-[26px] mb-4 md:mb-6 lg:mb-8">
              People and Infra Capability
            </h4>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] mt-2">
              Phasellus nec sem in justo pellentesque facilisis. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Nam pretium
              turpis et arcu.
            </p>
          </div>

          <div className="  ">
            <h3 className="text-[60px] md:text-[80px] lg:text-[100px] font-light         ">
              4
            </h3>
            <h4 className="font-normal leading-[120%] text-[20px] md:text-[22px] lg:text-[26px] mb-4 md:mb-6 lg:mb-8">
              Technology and Analytics
            </h4>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] mt-2">
              Phasellus nec sem in justo pellentesque facilisis. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Nam pretium
              turpis et arcu.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProblemSolv;
