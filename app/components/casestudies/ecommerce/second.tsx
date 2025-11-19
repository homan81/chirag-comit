"use client";

import React from "react";
// import Image from "next/image";
import Link from "next/link";
import useInView from "@/app/hooks/useInView";

export default function Second() {
  const heading = useInView({ threshold: 0.2 });
  const subheading = useInView({ threshold: 0.2 });
  const link1 = useInView({ threshold: 0.2 });
  const link2 = useInView({ threshold: 0.4 });
  const link3 = useInView({ threshold: 0.6 });
  const link4 = useInView({ threshold: 0.8 });
  const link5 = useInView({ threshold: 0.2 });
  const link6 = useInView({ threshold: 0.4 });
  const link7 = useInView({ threshold: 0.6 });
  const link8 = useInView({ threshold: 0.2 });
  const link9 = useInView({ threshold: 0.4 });
  const link10 = useInView({ threshold: 0.6 });
  const link11 = useInView({ threshold: 0.8 });
  return (
    <>
      <section>
        <div className="">
          <div className="container mx-auto px-5 py-10">
            <div className="mb-10">
              <h1
                ref={heading.ref}
                className={`fade-up ${heading.isVisible ? "show" : ""
                  } text-3xl font-bold text-[var(--dgreen)] text-center mb-5`}
              >
                Notable Work Done
              </h1>
              <p
                ref={subheading.ref}
                className={`fade-up ${subheading.isVisible ? "show" : ""
                  } text-xl text-center`}
              >
                Driven impactful transformations across diverse business
                environments—from pharma-to-FMCG transitions and e-commerce
                scale-ups to trade spend optimisation and field force
                efficiency. Our interventions have enabled business turnarounds,
                rural expansion, and urban retail optimisation through data-led
                insights. By introducing gamification for product launches,
                cold-chain distribution audits, and DMS automation, LBC helps
                organisations modernise operations, boost profitability, and
                build agile, performance-driven sales ecosystems
              </p>
            </div>

            <div className="flex justify-center items-stretch flex-wrap mb-5 2xl:gap-7 lg:gap-5 gap-3 *:lg:w-[23%] *:md:w-[31%] *:w-full *:md:max-w-full *:max-w-[400px] [&_a]:p-3 [&_a]:text-center [&_a]:text-white [&_a]:text-[14px] [&_a]:rounded-md [&_a]:flex [&_a]:items-center [&_a]:justify-center [&_a]:h-full [&>div:nth-child(odd)_a]:bg-[var(--dgreen)] [&>div:nth-child(even)_a]:bg-[var(--dgreen2)] [&_a]:transition [&_a]:ease-in-out [&_a]:hover:opacity-90">
              <div
                ref={link1.ref}
                className={`fade-up ${link1.isVisible ? "show delay-1" : ""}`}
              >
                <Link
                  href="/casestudies/pharma"
                  className=" "
                >
                  Pharma-to-FMCG Transformation
                </Link>
              </div>
              <div
                ref={link2.ref}
                className={`fade-up ${link2.isVisible ? "show delay-2" : ""}`}
              >
                <Link href="/casestudies/business" className=" ">
                  Business Turnaround from a Legacy Low-Margin Portfolio to a
                  Premium, Profitable Model
                </Link>
              </div>
              <div
                ref={link3.ref}
                className={`fade-up ${link3.isVisible ? "show delay-3" : ""}`}
              >
                <Link href="/casestudies/disrupting" className=" ">
                  Disrupting Rural Distribution Through Potential-Based
                  Expansion
                </Link>
              </div>
              <div
                ref={link4.ref}
                className={`fade-up ${link4.isVisible ? "show delay-4" : ""}`}
              >
                <Link href="/casestudies/urban" className=" ">
                  Urban Retail Footprint Efficiency Through Data-Led Selling
                </Link>
              </div>

              <div
                ref={link5.ref}
                className={`fade-up ${link5.isVisible ? "show delay-5" : ""
                  } lg:ml-5`}
              >
                <Link href="/casestudies/trade" className=" ">
                  Trade Spends Optimization & PRGM Efficiency
                </Link>
              </div>
              <div
                ref={link6.ref}
                className={`fade-up ${link6.isVisible ? "show delay-6" : ""}`}
              >
                <Link href="/casestudies/ecommerce" className=" ">
                  E-Commerce Scale-Up for a Legacy FMCG Business
                </Link>
              </div>
              <div
                ref={link7.ref}
                className={`fade-up ${link7.isVisible ? "show delay-7" : ""
                  } lg:mr-5`}
              >
                <Link href="/casestudies/dms" className=" ">
                  Implementing a Distributor Management System (DMS) for Sales
                  Process Automation
                </Link>
              </div>

              <div
                ref={link8.ref}
                className={`fade-up ${link8.isVisible ? "show delay-8" : ""}`}
              >
                <Link href="/casestudies/fieldforce" className=" ">
                  Field Force Migration to Third-Party Payroll & Efficiency
                  Enhancement
                </Link>
              </div>
              <div
                ref={link9.ref}
                className={`fade-up ${link9.isVisible ? "show delay-9" : ""}`}
              >
                <Link href="/casestudies/auditing" className=" ">
                  Auditing the Distribution Footprint to Identify the Right
                  Store for a Cold-Chain Category
                </Link>
              </div>
              <div
                ref={link10.ref}
                className={`fade-up ${link10.isVisible ? "show delay-10" : ""}`}
              >
                <Link href="/casestudies/damages" className=" ">
                  Damages & Market Returns Optimization
                </Link>
              </div>
              <div
                ref={link11.ref}
                className={`fade-up ${link11.isVisible ? "show delay-11" : ""}`}
              >
                <Link href="/casestudies/gamification" className=" ">
                  Gamification to drive product launch placement
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
