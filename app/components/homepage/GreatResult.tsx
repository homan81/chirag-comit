"use client";

import Image from "next/image";
import useInView from "@/app/hooks/useInView";

export default function GreatResult() {
  const { ref, isVisible } = useInView({ threshold: 0.2 });
  return (
    <section className="w-full bg-[var(--dgreen)] text-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div ref={ref} className={`fade-up ${isVisible ? "show" : ""} p-10`}>
          <Image
            src="\assests\header\logoimage\results_ComboTwo.svg"
            alt="Consulting Illustration"
            width={100}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="md:ps-16 md:text-start text-center">
          <h2
            ref={ref}
            className={`fade-up ${
              isVisible ? "show" : ""
            } text-[35px] font-normal leading-snug mb-4`}
          >
            We don’t just advise, we co-create, build capability, and stay
            accountable for outcomes.
          </h2>
          {/* <div
            ref={ref}
            className={`fade-up ${
              isVisible ? "show" : ""
            } flex flex-col sm:flex-row gap-6 md:justify-start justify-center`}
          >
            <div className="bg-[#ecf6f2] text-[#0b2c2e] min-w-[150px] px-8 py-6 rounded-md text-center shadow-md animate-fadeUp">
              <h3 className="text-2xl font-bold">2019</h3>
              <p className="text-sm">Founding year</p>
            </div>

            <div className="bg-[#ecf6f2] text-[#0b2c2e] min-w-[150px] px-8 py-6 rounded-md text-center shadow-md">
              <h3 className="text-2xl font-bold">100+</h3>
              <p className="text-sm">specialists</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
