"use client";

import React from "react";
// import Image from "next/image";
import useInView from "@/app/hooks/useInView";
// import Link from "next/link";

export default function Sixth() {
  const heading = useInView({ threshold: 0.2 });
  return (
    <>
      <section>
        <div className="bg-[#d9e6dc]">
          <div className="container mx-auto px-5 pb-12">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 xl:gap-20 lg:gap-12 gap-5 *:border *:bg-[var(--lgreen3)] *:p-4 *:pb-10 *:rounded-2xl *:text-center *:text-[27px] *:font-semibold *:text-[var(--dgreen)] *:relative [&_i]:absolute [&_i]:-right-[65px] [&_i]:top-[40%]  [&_i]:text-5xl [&>i]:-translate-y-1/2">
              <div>
                <img src="/assests/header/images/Immerse.png" className="p-5 max-w-[130px] mx-auto" alt="" />
                <p>Immerse</p>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
              <div>
                <img src="/assests/header/images/Assess.png" className="p-5 max-w-[130px] mx-auto" alt="" />
                <p>Assess</p>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
              <div>
                <img src="/assests/header/images/Co-Create.png" className="p-5 max-w-[130px] mx-auto" alt="" />
                <p>Co-Create</p>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
              <div>
                <img src="/assests/header/images/Execution.png" className="p-5 max-w-[130px] mx-auto" alt="" />
                <p>Execution</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
